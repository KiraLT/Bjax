/// <reference types="node" />
import { Loader, LoaderParams, LoaderErrorParams } from '../';
interface State {
    mainEl: HTMLElement;
    barEl: HTMLElement;
    errorEl: HTMLElement;
    interval: NodeJS.Timeout;
}
export declare class PercentLoader implements Loader<State> {
    start({ target }: LoaderParams): State;
    finish({ target }: LoaderParams, { interval }: State): void;
    error({ target, error }: LoaderErrorParams, { interval, barEl, errorEl }: State): void;
}
export {};
