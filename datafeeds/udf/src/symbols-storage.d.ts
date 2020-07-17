import { LibrarySymbolInfo, SearchSymbolResultItem, ResolutionString } from '../../../charting_library/datafeed-api';
import { Requester } from './requester';
export declare class SymbolsStorage {
    private readonly _exchangesList;
    private readonly _symbolsInfo;
    private readonly _symbolsList;
    private readonly _datafeedUrl;
    private readonly _readyPromise;
    private readonly _datafeedSupportedResolutions;
    private readonly _requester;
    constructor(datafeedUrl: string, datafeedSupportedResolutions: ResolutionString[], requester: Requester);
    resolveSymbol(symbolName: string, currencyCode?: string): Promise<LibrarySymbolInfo>;
    searchSymbols(searchString: string, exchange: string, symbolType: string, maxSearchResults: number): Promise<SearchSymbolResultItem[]>;
    private _init;
    private _requestExchangeData;
    private _onExchangeDataReceived;
}
