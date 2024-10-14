import { useContext, useEffect } from "react";
import { GeoPoint } from "../../../models/GeoPoint";
import { MapContext } from "react-map-gl/dist/esm/components/map";
import maplibregl from "maplibre-gl";
import { createRoot } from "react-dom/client";

export interface CustomPopupProps {
    children: React.ReactNode,
    point: GeoPoint
}

function CustomPopup({children, point}: CustomPopupProps) {
    const {map} = useContext(MapContext);

    useEffect(() => {
        if (point) {

            const popupNode = document.createElement('div');
            const root = createRoot(popupNode);
            root.render(children);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const popUp = new maplibregl.Popup({closeOnClick: false})
                .setLngLat([point.lon, point.lat])
                .setDOMContent(popupNode)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                .addTo(map.getMap());
        }
    }, [point, map, children])

    return null;
}

export default CustomPopup;