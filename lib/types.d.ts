export interface PromiseLike<T, E> {
    then: (callback: (value: T) => void) => void;
    catch: (callback: (error: E) => void) => void;
}
