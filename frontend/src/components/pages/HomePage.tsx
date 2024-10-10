import { useCallback, useEffect, useState } from "react";
import SearchResultModel from "../../models/SearchResultModel";
import Search from "../sub/Search";
import Stop from "../sub/Stop";
import Departure from "../sub/Departure";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { InputChangeEvent } from "../lib/Input";
import MapWrapper, { MapWrapperPropsPoint } from "../sub/MapWrapper";

function HomePage() {
    const [result, setResultValue] = useState<SearchResultModel | undefined>();
    const [stopSearch, setStopSearchValue] = useState<string>('');
    const [mapWrapperPoints, setMapWrapperPointsValue] = useState<MapWrapperPropsPoint[]>([]);

    const {stop: stopFromUrl} = useParams<{stop: string | undefined}>();

    const apiBaseUrl = 'https://search.ch/timetable/api/stationboard.json';

    const handleOnSearch = useCallback(() => {
        if (stopSearch !== undefined && stopSearch.length > 0) {
            
            const params = new URLSearchParams(
                {
                    stop: stopSearch,
                    limit: '30',
                    show_tracks: '1'
                }
            );

            const url = `${apiBaseUrl}?${params.toString()}`;

            window.history.pushState({}, '', `/${encodeURIComponent(stopSearch)}`);

            fetch(url).then(async (response) => {
                const responseText = await response.text();

                if (response.ok && !responseText.includes('messages')) {
                    const model = JSON.parse(responseText) as SearchResultModel;
                    setResultValue(model);

                    setMapWrapperPointsValue([{
                        centerOn: true,
                        lat: model.stop.lat,
                        lon: model.stop.lon,
                        title: model.stop.name
                    }]);

                } else if (response.ok && responseText.includes('messages') && responseText.includes('not found.')) {
                    toast.error('Station nicht gefunden!');
                } else {
                    toast.error('Unbekannter Fehler');
                    console.error('Station loading failed', response);
                }
            })
        }
    }, [stopSearch, apiBaseUrl]);

    const handleOnChange = (e: InputChangeEvent) => {
        setStopSearchValue(e.target.value);
    };

    useEffect(() => {
        if (stopFromUrl) {
            setStopSearchValue(stopFromUrl);
        }
    }, [stopFromUrl]);

    return (
        <>
            <div className="my-4">
                <Search searchStop={stopSearch} handleOnChange={handleOnChange} handleOnSearchButton={handleOnSearch} />
            </div>
            <div className='my-4'>
                <Stop model={result} />
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <Departure model={result} />
                    </div>
                    <div className="col-span-2 h-[600px]">
                        <MapWrapper points={mapWrapperPoints} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;