import { RequestError } from '../helpers';
export interface LoaderParams {
    target: HTMLElement;
}
export declare type LoaderErrorParams = LoaderParams & {
    error: RequestError;
};
export interface Loader<State> {
    start?: (params: LoaderParams) => State;
    finish?: (params: LoaderParams, state: State) => void;
    error?: (params: LoaderErrorParams, state: State) => void;
}
