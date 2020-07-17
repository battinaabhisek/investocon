import { LibrarySymbolInfo, SubscribeBarsCallback } from '../../../charting_library/datafeed-api';
import { HistoryProvider } from './history-provider';
export declare class DataPulseProvider {
    private readonly _subscribers;
    private _requestsPending;
    private readonly _historyProvider;
    constructor(historyProvider: HistoryProvider, updateFrequency: number);
    subscribeBars(symbolInfo: LibrarySymbolInfo, resolution: string, newDataCallback: SubscribeBarsCallback, listenerGuid: string): void;
    unsubscribeBars(listenerGuid: string): void;
    private _updateData;
    private _updateDataForSubscriber;
    private _onSubscriberDataReceived;
}
