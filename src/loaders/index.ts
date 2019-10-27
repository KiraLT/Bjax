export interface LoaderParams {
    target: HTMLElement
}

export interface Loader<State> {
    start?: (params: LoaderParams) => State
    finish?: (params: LoaderParams, state: State) => void
    error?: (params: LoaderParams, state: State) => void
}
