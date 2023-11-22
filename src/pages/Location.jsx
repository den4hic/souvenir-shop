import React, { useEffect } from 'react';
import L from 'leaflet';
import {List} from "semantic-ui-react";

import '../styles/Location.css';

const Location = () => {
    useEffect(() => {
        const mapContainer = document.getElementById('map');

        if (mapContainer) {
            if (mapContainer._leaflet_id) {
                mapContainer._leaflet_id = null;
            }

            const map = L.map('map').setView([50.52611558894129, 30.615018022184366], 15);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);
            L.marker([50.52611558894129, 30.615018022184366]).addTo(map);
        }
    }, []);

    return (
        <div className="location-container">
            <h1>Зв'язатися з нами:</h1>
            <List size='big'>
                <List.Item icon='building' content='Souvenir' />
                <List.Item icon='marker' content='Київ, Україна' />
                <List.Item icon='mail' content='d.davydov@ukma.edu.ua'/>
                <List.Item icon='road' content='Вул Олександри Екстер 14Б'/>
            </List>
            <div style={{height:'500px', width:'700px'}} id='map'></div>
        </div>

    );
};

export default Location;
