export type DOMTarget = string | Element | Element[] | NodeListOf<Element> | undefined | null

export function find(target: DOMTarget): Element | undefined {
    if (target instanceof Element) {
        return target
    }
    if (target instanceof Array) {
        return target[0] || undefined
    }
    if (target instanceof NodeList) {
        return target[0] || undefined
    }
    if (typeof target === 'string') {
        try {
            return document.querySelector(target) || undefined
        } catch (error) {
            console.error(error)
        }
    }
    return undefined
}

export function findAll(target: DOMTarget): Element[] {
    if (target instanceof Element) {
        return [target]
    }
    if (target instanceof Array) {
        return target
    }
    if (target instanceof NodeList) {
        return Array.prototype.slice.call(target)
    }
    if (typeof target === 'string') {
        try {
            return Array.prototype.slice.call(document.querySelectorAll(target))
        } catch (error) {
            console.error(error)
        }
    }
    return []
}

export function matches(target: DOMTarget, selector: string): boolean {
    const matchesFunc =
        Element.prototype.matches ||
        (Element.prototype as any).msMatchesSelector ||
        Element.prototype.webkitMatchesSelector
    return findAll(target).some((element) => matchesFunc.call(element, selector))
}

export function parents(target: DOMTarget, selector?: string): Element[] {
    let parentList: Element[] = []
    findAll(target).forEach((element) => {
        const parent = element.parentNode
        if (parent !== document && parent instanceof Element) {
            parentList.push(parent)
            parentList = parentList.concat(parents(parent))
        }
    })
    return parentList.filter((element) => selector === undefined || matches(element, selector))
}

export function liveBind<K extends keyof HTMLElementEventMap>(
    target: DOMTarget,
    eventName: K,
    callback: (event: HTMLElementEventMap[K], element: HTMLElement) => void | boolean
): void {
    window.addEventListener(eventName, event => {
        const eventTarget = event.target
        if (eventTarget instanceof HTMLElement) {
            const el = [eventTarget, ...parents(eventTarget)].filter((v) =>
                typeof target === 'string' ? matches(v, target) : target === v
            )[0]
            if (el instanceof HTMLElement) {
                callback(event as HTMLElementEventMap[K], el)
            }
        }
    })
}

export function create(html: string): Node | undefined {
    const div = document.createElement('div')
    div.innerHTML = html.trim()
    const firstChild = div.firstChild
    if (firstChild) {
        div.removeChild(firstChild)
        return firstChild
    }
    return undefined
}

export function findOrCreate(selector: DOMTarget, html: string): Node | undefined {
    const element = find(selector)
    return element ? element : create(html)
}
