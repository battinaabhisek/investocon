import { Bar, HistoryMetadata, LibrarySymbolInfo } from '../../../charting_library/datafeed-api';
import { Requester } from './requester';
export interface GetBarsResult {
    bars: Bar[];
    meta: HistoryMetadata;
}
export declare class HistoryProvider {
    private _datafeedUrl;
    private readonly _requester;
    constructor(datafeedUrl: string, requester: Requester);
    getBars(symbolInfo: LibrarySymbolInfo, resolution: string, rangeStartDate: number, rangeEndDate: number): Promise<GetBarsResult>;
}
