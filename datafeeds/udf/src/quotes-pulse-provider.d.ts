import { QuotesCallback } from '../../../charting_library/datafeed-api';
import { IQuotesProvider } from './iquotes-provider';
export declare class QuotesPulseProvider {
    private readonly _quotesProvider;
    private readonly _subscribers;
    private _requestsPending;
    constructor(quotesProvider: IQuotesProvider);
    subscribeQuotes(symbols: string[], fastSymbols: string[], onRealtimeCallback: QuotesCallback, listenerGuid: string): void;
    unsubscribeQuotes(listenerGuid: string): void;
    private _updateQuotes;
}
