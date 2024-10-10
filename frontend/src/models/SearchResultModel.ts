export default interface SearchResultModel {
    stop: SearchResultModelStop;
    connections: SearchResultModelConnection[];
};

export interface SearchResultModelStop {
    id: string;
    name: string;
    lon: number;
    lat: number;
};

export interface SearchResultModelConnection {
    line: string;
    operator: string;
    "*Z": string;
    time: string;
    track: string;
    terminal: SearchResultModelConnectionTerminal;
};

export interface SearchResultModelConnectionTerminal {
    name: string;
    lat: number;
    lon: number;
}