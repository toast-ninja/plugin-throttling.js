export declare class HttpError extends Error {
    constructor(message: string, statusCode: number, headers: Record<string, string>);
    readonly status: number;
    readonly headers: Record<string, string>;
}
