export declare type DOMTarget = string | Element | Element[] | NodeListOf<Element> | undefined | null;
export declare function find(target: DOMTarget): Element | undefined;
export declare function findAll(target: DOMTarget): Element[];
export declare function matches(target: DOMTarget, selector: string): boolean;
export declare function parents(target: DOMTarget, selector?: string): Element[];
export declare function liveBind<K extends keyof HTMLElementEventMap>(target: DOMTarget, eventName: K, callback: (event: HTMLElementEventMap[K], element: HTMLElement) => void | boolean): void;
export declare function create(html: string): Node | undefined;
export declare function findOrCreate(selector: DOMTarget, html: string): Node | undefined;
