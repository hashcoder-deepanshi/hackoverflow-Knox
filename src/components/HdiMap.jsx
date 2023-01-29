import React from "react";
import {MapContainer , GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import mapData from "./../data/countries.json"
import "./map.css"

const HdiMap = ({}) => {
    const mapstyle ={
        color:"green",
        weight:1,
        fillOpacity:0.5
    };
    const onEachCountry = (country,layer) => {
        layer.options.fillColor = country.properties.color;
        const name = country.properties.ADMIN;
        const HDI_Rank = country.properties.rank;
        const HDI_Index = country.properties.index
        layer.bindPopup(`${name} ${HDI_Rank} ${HDI_Index}`);
    }
    console.log(mapData);
    return <div>
        <MapContainer style={{ height:"90vh"}} zoom={2} center={[20,100]}>
            <GeoJSON
            style={mapstyle}
            data={mapData.features}
            onEachFeature={onEachCountry}/>
        </MapContainer>
    </div>
};

export default HdiMap;