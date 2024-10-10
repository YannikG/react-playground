import 'maplibre-gl/dist/maplibre-gl.css';

import { useEffect, useRef } from 'react';
import Map, { AttributionControl, GeolocateControl, Marker, NavigationControl } from 'react-map-gl/maplibre';
import type {MapRef} from 'react-map-gl/maplibre';

import { toast } from 'sonner';

export interface MapWrapperPropsPoint {
    centerOn: boolean,  // only the first centerOn will be used!
    lat: number, 
    lon: number, 
    title: string,
    zoom?: number,
}

export interface MapWrapperProps {
    points: MapWrapperPropsPoint[]
};

function findCenter(points: MapWrapperPropsPoint[]) {   
    const pointsToCenterOn = points.filter(q => q.centerOn);

    if (points.length > 0 && pointsToCenterOn.length > 0) {
        return {
            lon: pointsToCenterOn[0].lon,
            lat: pointsToCenterOn[0].lat,
            zoom: pointsToCenterOn[0].zoom ? pointsToCenterOn[0].zoom : 15,
        };
    }

    return {
        lon: 7.436378096839235,
        lat: 46.94839725787131,
        zoom: 15,
    };
}

function MapWrapper({points = []}: MapWrapperProps) {
    const mapRef = useRef<MapRef>();

    useEffect(() => {
        if (points) {
            const center = findCenter(points);
            mapRef.current?.flyTo({
                center: {
                    lat: center.lat,
                    lon: center.lon,
                },
                zoom: center.zoom,
            });
        }
    }, [points])

    const defaultCenter = findCenter(points);

    return (
        <>
            <Map
                ref={mapRef as React.LegacyRef<MapRef> | undefined}
                // reuseMaps
                mapStyle="https://vectortiles.geo.admin.ch/styles/ch.swisstopo.lightbasemap.vt/style.json"
                initialViewState={{
                    // set initial view
                    longitude: defaultCenter.lon,
                    latitude: defaultCenter.lat,
                    zoom: 16,
                }}
                maxBounds={[
                    // do not allow too far out of Switzerland
                    [5.5, 45.5],
                    [11.0, 48.0],
                ]}
                maxPitch={0} // disable pitch / "3d-style"
                bearing={0} // disable "rotation" by setting it to zero
                dragRotate={false}
                touchZoomRotate={false}
                boxZoom={false} //disable selecting a rectangle with shift+mouseclick to zoom there
                attributionControl={false} // we set our own attribution control
                onError={e => {
                    console.error(`MapError: ${e.error.message}`);
                    toast.error('Map loading error');
                }}
            >
                <NavigationControl showCompass={false} />
                <GeolocateControl showAccuracyCircle={false} positionOptions={{enableHighAccuracy: true}} />
                <AttributionControl customAttribution={'Yannik Gartmann'} compact={true} />
                {points.map(p => 
                    <Marker key={p.lat + p.lon} latitude={p.lat} longitude={p.lon} anchor="bottom">
                        <img src="/marker_30x50.png" />
                    </Marker>
                )}
            </Map>
        </>
    );
}

export default MapWrapper