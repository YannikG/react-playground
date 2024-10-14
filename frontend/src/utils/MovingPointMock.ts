import { computeDestinationPoint, getDistance, getRhumbLineBearing } from "geolib";
import { GeoPoint } from "../models/GeoPoint";

function calculatePoints(start: GeoPoint, end: GeoPoint) {
    const interval = 500; // Interval in meters.

    const totalDistance = getDistance(start, end);
    const bearing = getRhumbLineBearing(start, end);
    const steps = Math.floor(totalDistance / interval);

    const points: GeoPoint [] = [];

    for(let i = 0; i <= steps; i++) {
        const distance = i * interval;
        const point = computeDestinationPoint(
            start,
            distance,
            bearing
        );

        points.push({lat: point.latitude, lon: point.longitude});
    }

    return points;
}

export default function movingPointMock(start: GeoPoint, end: GeoPoint, callback: (point: GeoPoint) => void) {
    const points = calculatePoints(start, end);
    let i = 0;

    const interval = setInterval(() => {
        if (i < points.length) {
            callback(points[i]);
            i++;
        }
        else {
            callback(end);
            // When there are no points, we clear the interval.
            clearInterval(interval);
        }
    }, 10000);

    return () => clearInterval(interval);
}