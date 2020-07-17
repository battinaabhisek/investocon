import { DatafeedConfiguration, ErrorCallback, GetMarksCallback, HistoryCallback, HistoryDepth, IDatafeedChartApi, IDatafeedQuotesApi, IExternalDatafeed, LibrarySymbolInfo, Mark, OnReadyCallback, QuotesCallback, ResolutionBackValues, ResolutionString, ResolveCallback, SearchSymbolResultItem, SearchSymbolsCallback, ServerTimeCallback, SubscribeBarsCallback, TimescaleMark, SymbolResolveExtension } from '../../../charting_library/datafeed-api';
import { IQuotesProvider } from './iquotes-provider';
import { Requester } from './requester';
export interface UdfCompatibleConfiguration extends DatafeedConfiguration {
    supports_search?: boolean;
    supports_group_request?: boolean;
}
export interface ResolveSymbolResponse extends LibrarySymbolInfo {
    s: undefined;
}
export interface UdfSearchSymbolsResponse extends Array<SearchSymbolResultItem> {
    s?: undefined;
}
export declare const enum Constants {
    SearchItemsLimit = 30
}
/**
 * This class implements interaction with UDF-compatible datafeed.
 * See UDF protocol reference at https://github.com/tradingview/charting_library/wiki/UDF
 */
export declare class UDFCompatibleDatafeedBase implements IExternalDatafeed, IDatafeedQuotesApi, IDatafeedChartApi {
    protected _configuration: UdfCompatibleConfiguration;
    private readonly _datafeedURL;
    private readonly _configurationReadyPromise;
    private _symbolsStorage;
    private readonly _historyProvider;
    private readonly _dataPulseProvider;
    private readonly _quotesProvider;
    private readonly _quotesPulseProvider;
    private readonly _requester;
    protected constructor(datafeedURL: string, quotesProvider: IQuotesProvider, requester: Requester, updateFrequency?: number);
    onReady(callback: OnReadyCallback): void;
    getQuotes(symbols: string[], onDataCallback: QuotesCallback, onErrorCallback: (msg: string) => void): void;
    subscribeQuotes(symbols: string[], fastSymbols: string[], onRealtimeCallback: QuotesCallback, listenerGuid: string): void;
    unsubscribeQuotes(listenerGuid: string): void;
    calculateHistoryDepth(resolution: ResolutionString, resolutionBack: ResolutionBackValues, intervalBack: number): HistoryDepth | undefined;
    getMarks(symbolInfo: LibrarySymbolInfo, from: number, to: number, onDataCallback: GetMarksCallback<Mark>, resolution: ResolutionString): void;
    getTimescaleMarks(symbolInfo: LibrarySymbolInfo, from: number, to: number, onDataCallback: GetMarksCallback<TimescaleMark>, resolution: ResolutionString): void;
    getServerTime(callback: ServerTimeCallback): void;
    searchSymbols(userInput: string, exchange: string, symbolType: string, onResult: SearchSymbolsCallback): void;
    resolveSymbol(symbolName: string, onResolve: ResolveCallback, onError: ErrorCallback, extension?: SymbolResolveExtension): void;
    getBars(symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, rangeStartDate: number, rangeEndDate: number, onResult: HistoryCallback, onError: ErrorCallback): void;
    subscribeBars(symbolInfo: LibrarySymbolInfo, resolution: ResolutionString, onTick: SubscribeBarsCallback, listenerGuid: string, onResetCacheNeededCallback: () => void): void;
    unsubscribeBars(listenerGuid: string): void;
    protected _requestConfiguration(): Promise<UdfCompatibleConfiguration | null>;
    private _send;
    private _setupWithConfiguration;
}
