export default interface SearchResultModel {
    stop: SearchResultModelStop
}

export interface SearchResultModelStop {
    id: string;
    name: string;
    lon: number;
    lat: number
}