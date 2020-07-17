import { RequestParams, UdfResponse, UdfErrorResponse } from './helpers';
export declare class Requester {
    private _headers;
    constructor(headers?: HeadersInit);
    sendRequest<T extends UdfResponse>(datafeedUrl: string, urlPath: string, params?: RequestParams): Promise<T | UdfErrorResponse>;
    sendRequest<T>(datafeedUrl: string, urlPath: string, params?: RequestParams): Promise<T>;
}
