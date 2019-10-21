export interface LoaderParams {
    target: HTMLElement
}

export abstract class Loader<State> {
    abstract start(params: LoaderParams): State
    abstract finish(params: LoaderParams, state: State): void
    abstract error(params: LoaderParams, state: State): void
}

export class EmptyLoader extends Loader<{}> {
    start(params: LoaderParams) {
        return {}
    }

    finish(params: LoaderParams, state: {}): void {}

    error(params: LoaderParams, state: {}): void {}
}
