import { GeoPoint } from "./GeoPoint";

export default interface SearchResultModel {
    stop: SearchResultModelStop;
    connections: SearchResultModelConnection[];
};

export interface SearchResultModelStop extends GeoPoint {
    id: string;
    name: string;
};

export interface SearchResultModelConnection {
    line: string;
    operator: string;
    "*Z": string;
    time: string;
    track: string;
    terminal: SearchResultModelConnectionTerminal;
};

export interface SearchResultModelConnectionTerminal extends GeoPoint {
    name: string;
}