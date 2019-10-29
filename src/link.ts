import { DOMTarget, find, liveBind } from './dom'
import { Loader } from './loaders'
import { request, RequestError } from './helpers'

export interface LoadLinkOptions {
    /**
     * DOM selector where should be inserted downloaded page HTML (default is `body`).
     */
    target?: DOMTarget
    /**
     * DOM selected which indicates which part from downloaded page should be extracted (default is `body`).
     */
    source?: string
    /**
     * Overwrites both `target` and `source`.
     */
    selector?: string
    /**
     * Indicates if the url should be updated using `url` parameter using `pushState` (default is `true`).
     */
    shouldUpdateUrl?: boolean
    /**
     * Custom loader instance (default is empty loader - `{}`).
     */
    loader?: Loader<any>
    /**
     * Callback which is called if the function finished the work without an error.
     */
    successCallback?: (params: { target: HTMLElement }) => void
    /**
     * Callback which is called if the function had an error and failed to finish.
     */
    errorCallback?: (params: { target: HTMLElement, error: RequestError }) => void
}

const defaultLoadLinkOptions: Required<LoadLinkOptions> = {
    target: 'body',
    source: 'body',
    successCallback: () => {},
    errorCallback: () => {},
    shouldUpdateUrl: true,
    loader: {},
    selector: ''
}

let stateBinded = false

export function loadLink(url: string, options?: LoadLinkOptions): void {
    const {
        target,
        source,
        selector,
        successCallback,
        errorCallback,
        shouldUpdateUrl,
        loader
    } = {...defaultLoadLinkOptions, ...options}
    const targetElement = find(selector ? selector : target)
    if (targetElement instanceof HTMLElement) {
        if (!stateBinded) {
            bindPopState()
            stateBinded = true
        }

        const loaderState = loader.start ? loader.start({
            target: targetElement
        }) : undefined
        request({ url }, content => {
            const html = document.createElement('html')
            html.innerHTML = content
            const sourceElement = html.querySelector(selector ? selector : source)

            if (sourceElement instanceof HTMLElement) {
                targetElement.innerHTML = sourceElement.innerHTML
            }

            const titleElement = html.querySelector('title')
            document.title = titleElement ? titleElement.innerHTML : document.title

            if (shouldUpdateUrl) {
                try {
                    history.pushState({
                        bjaxLink: {
                            url,
                            loader
                        },
                    }, document.title, url)
                } catch (error) {
                    console.warn(`Failed to update URL: ${error}`)
                }
            }
            if (loader.finish) {
                loader.finish({
                    target: targetElement
                }, loaderState)
            }
            successCallback({
                target: targetElement
            })
        }, (error) => {
            if (loader.error) {
                loader.error({
                    error,
                    target: targetElement,
                }, loaderState)
            }
            errorCallback({
                error,
                target: targetElement
            })
        })
    } else {
        console.error('loadLink target not found')
    }
}

function bindPopState(): void {
    window.addEventListener('popstate', event => {
        const data = event.state
        console.log(data)
        if (data.bjaxLink) {
            loadLink(data.bjaxLink.url, {
                shouldUpdateUrl: false,
                loader: data.bjaxLink.loader
            })
        }
    }, false)
    history.replaceState({
        bjaxLink: {
            url: location.href,
            loader: defaultLoadLinkOptions.loader
        }
    }, '')
}

export interface BindLinksOptions extends LoadLinkOptions {
    /**
     * Target page URL, default is `undefined` and `urlAttribute` parameter is used.
     */
    url?: string
    /**
     * `url` parameter value, which is taken from clicked element (default is `href`).
     */
    urlAttribute?: string
    /**
     * `target` parameter value, which is taken from clicked element (default is `data-target`).
     */
    targetAttribute?: string
    /**
     * `source` parameter value, which is taken from clicked element (default is `data-source`).
     */
    sourceAttribute?: string
    /**
     * `selector` parameter value, which is taken from clicked element (default is `data-selector`).
     */
    selectorAttribute?: string
}

const defaultBindLinksOptions: Required<BindLinksOptions> = {
    ...defaultLoadLinkOptions,
    url: '',
    urlAttribute: 'href',
    target: '',
    targetAttribute: 'data-target',
    source: '',
    sourceAttribute: 'data-source',
    selector: '',
    selectorAttribute: 'data-selector'
}

export function bindLinks(selector: DOMTarget, options?: BindLinksOptions): void {
    const {
        url,
        urlAttribute,
        source,
        sourceAttribute,
        target,
        targetAttribute,
        selector: selector2,
        selectorAttribute,
        ...kwargs
    } = {...defaultBindLinksOptions, ...options}
    liveBind(selector, 'click', (event, element) => {
        const finalUrl = url || (urlAttribute === 'href' && element instanceof HTMLAnchorElement ? element.href : element.getAttribute(urlAttribute))
        const finalSource = source || element.getAttribute(sourceAttribute)
        const finalTarget = target || element.getAttribute(targetAttribute)
        const finalSelector = selector2 || element.getAttribute(selectorAttribute)
        if (finalUrl) {
            loadLink(finalUrl, {
                ...(finalSource ? {source: finalSource} : undefined),
                ...(finalTarget ? {target: finalTarget} : undefined),
                ...(finalSelector ? {selector: finalSelector} : undefined),
                ...kwargs
            })
            event.preventDefault()
        } else {
            console.error('Clicked element does not have valid URL')
        }
    })
}
