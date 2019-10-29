export declare function request(params: {
    url: string;
}, success: (content: string) => void, error: (error: RequestError) => void): void;
export declare class RequestError extends Error {
    status: number;
    constructor(error: string, status: number);
}
