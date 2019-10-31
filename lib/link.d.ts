import { DOMTarget } from './dom';
import { Loader } from './loaders';
import { RequestError } from './helpers';
export interface LoadLinkOptions {
    /**
     * DOM selector where should be inserted downloaded page HTML (default is `body`).
     */
    target?: DOMTarget;
    /**
     * DOM selected which indicates which part from downloaded page should be extracted (default is `body`).
     */
    source?: string;
    /**
     * Overwrites both `target` and `source`.
     */
    selector?: string;
    /**
     * Indicates if the url should be updated using `url` parameter using `pushState` (default is `true`).
     */
    shouldUpdateUrl?: boolean;
    /**
     * Custom loader instance (default is empty loader - `{}`).
     */
    loader?: Loader<any>;
    /**
     * Callback which is called if the function finished the work without an error.
     */
    successCallback?: (params: {
        target: HTMLElement;
    }) => void;
    /**
     * Callback which is called if the function had an error and failed to finish.
     */
    errorCallback?: (params: {
        target: HTMLElement;
        error: RequestError;
    }) => void;
}
export declare function loadLink(url: string, options?: LoadLinkOptions): void;
export interface BindLinksOptions extends LoadLinkOptions {
    /**
     * Target page URL, default is `undefined` and `urlAttribute` parameter is used.
     */
    url?: string;
    /**
     * `url` parameter value, which is taken from clicked element (default is `href`).
     */
    urlAttribute?: string;
    /**
     * `target` parameter value, which is taken from clicked element (default is `data-target`).
     */
    targetAttribute?: string;
    /**
     * `source` parameter value, which is taken from clicked element (default is `data-source`).
     */
    sourceAttribute?: string;
    /**
     * `selector` parameter value, which is taken from clicked element (default is `data-selector`).
     */
    selectorAttribute?: string;
}
export declare function bindLinks(selector: DOMTarget, options?: BindLinksOptions): void;
