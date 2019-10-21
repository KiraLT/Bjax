import { DOMTarget, find } from './dom'
import { Loader, EmptyLoader } from './loaders'
import { request } from './helpers'

export function loadLink({
    url,
    target,
    source,
    successCallback,
    errorCallback,
    updateUrl = true,
    loader = new EmptyLoader()
}: {
    url: string
    target?: DOMTarget
    source?: string
    successCallback?: () => void
    errorCallback?: () => void
    updateUrl?: boolean
    loader?: Loader<unknown>
}): void {
    const targetElement = find(target || 'body')
    if (targetElement instanceof HTMLElement) {
        const loaderState = loader.start({
            target: targetElement
        })
        request({ url }, content => {
            const html = document.createElement('html')
            html.innerHTML = content
            const sourceElement = html.querySelector(source || 'body')
            const titleElement = html.querySelector('title')
            const title = titleElement ? titleElement.innerHTML : document.title
            if (sourceElement instanceof HTMLElement) {
                targetElement.innerHTML = sourceElement.innerHTML
            }
            if (updateUrl !== false) {
                try {
                    history.pushState(null, title, url)
                    document.title = title
                } catch (error) {
                    console.warn(`Failed to update URL: ${error}`)
                }
            }
            loader.finish({
                target: targetElement
            }, loaderState)
            if (successCallback) {
                successCallback()
            }
        }, () => {
            loader.error({
                target: targetElement
            }, loaderState)
            if (errorCallback) {
                errorCallback()
            }
        })
    }
}