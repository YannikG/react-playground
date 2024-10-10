import { useLocation } from "react-router-dom";
import { SearchResultModelConnection, SearchResultModelStop } from "../../models/SearchResultModel";
import { useEffect, useState } from "react";
import MapWrapper, { MapWrapperPropsPoint } from "../sub/MapWrapper";

export interface ConnectionPageModel {
    connection: SearchResultModelConnection,
    stop: SearchResultModelStop
}

function ConnectionPage() {
    const location = useLocation();
    const [pageModel, setPageModelValue] = useState<ConnectionPageModel>();
    const [mapWrapperPoints, setMapWrapperPointsValue] = useState<MapWrapperPropsPoint[]>([]);

    useEffect(() => {
        const model = location.state as ConnectionPageModel;
        setPageModelValue(model);

        const points: MapWrapperPropsPoint[] = [
            {
                centerOn: true,
                lat: model.stop.lat,
                lon: model.stop.lon,
                title: model.stop.name,
                zoom: 7,
            },
            {
                centerOn: false,
                lat: model.connection.terminal.lat,
                lon: model.connection.terminal.lon,
                title: model.connection.terminal.name,
            }
        ]

        setMapWrapperPointsValue(points);

    },[location])

    if (pageModel === undefined) {
        return null;
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{pageModel.connection.line} {pageModel.connection["*Z"]} ab Gl./Kante {pageModel.connection.track} in {pageModel.stop.name} nach {pageModel.connection.terminal.name} um {new Date(pageModel.connection.time).toLocaleTimeString()}</h1>
            <div className="w-full h-[900px]">
                <MapWrapper points={mapWrapperPoints} />
            </div>
        </>
    )
}

export default ConnectionPage