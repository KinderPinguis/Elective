import React, { useEffect, useState } from 'react';
import googleMapsApiKey from  '../config'
import './Map.css'

declare global {
    interface Window {
        google: any;
    }
}

interface MapProps {
    origin: string;
    destination: string;
}

const Map: React.FC<MapProps> = ({ origin, destination }) => {
    const [map, setMap] = useState<any>(null);

    const initMap = () => {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();

        const mapInstance = new window.google.maps.Map(document.getElementById('map')!, {
            center: { lat: 0, lng: 0 },
            zoom: 10,
        });

        directionsRenderer.setMap(mapInstance);

        directionsService.route(
            {
                origin,
                destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (response: any, status: any) => {
                if (status === 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    console.error(status);
                }
            }
        );

        setMap(mapInstance);
    };

    useEffect(() => {
        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
            script.async = true;
            script.onload = initMap;
            document.body.appendChild(script);
        } else {
            initMap();
        }
    }, []);

    return <div id="map"></div>;
};

export default Map;