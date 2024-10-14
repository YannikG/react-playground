import { useContext, useEffect, useState } from "react";
import { GeoPoint } from "../../../models/GeoPoint";
import { MapContext } from "react-map-gl/dist/esm/components/map";

export interface LineProps {
    start: GeoPoint,
    end: GeoPoint,
}

function Line({start, end} : LineProps) {
    const {map} = useContext(MapContext);
    const [mapStyleLoaded, setMapStyleLoadedValue] = useState<boolean>(false);

    useEffect(() => {
        if (map.getMap().isStyleLoaded()) {
            setMapStyleLoadedValue(true);
        } else {
            map.getMap().on('styledata', () => {
                setMapStyleLoadedValue(true);
            });
        }
    }, [map]);

    useEffect(() => {
        const origin = [start.lon, start.lat];
        const destination = [end.lon, end.lat];

        if (mapStyleLoaded) {
            const lineRouteFeature: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        id: 'lineFeaure',
                        properties: { },
                        geometry: {
                            type: 'LineString',
                            coordinates: [origin, destination]
                        }
                    }
                ]
            }
            if (map.getSource('routeSource') === undefined) {
                map.getMap().addSource('routeSource', {
                    'type': 'geojson',
                    'data': lineRouteFeature
                });
            }
        
            if (map.getMap().getLayer('routeLayer') === undefined) {
                // Theoretically there is a TypeScript type available but I struggled with it... so now im doing this instead:
                map.getMap().addLayer({
                    'id': 'routeLayer',
                    'source': 'routeSource',
                    'type': 'line',
                    'paint': {
                        'line-width': 3,
                        'line-color': '#007cbf'
                    }
                });
            }
        }

    }, [map,start, end, mapStyleLoaded]);

    return null;
}

export default Line;