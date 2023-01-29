import React from "react";
import {MapContainer , GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import mapData from "./../data/countries.json"
import "./map.css"

const HdiMap = ({}) => {
    const mapstyle ={
        color:"black",
        weight:1,
        fillOpacity:0.5,
        fillColor:"white"
    };
    const onEachCountry = (country,layer) => {
        layer.options.fillColor = country.properties.color;
        const name = country.properties.ADMIN;
        const HDI_Rank = country.properties.rank;
        const HDI_Index = country.properties.index
        layer.bindPopup(`${name},
         HDI Rank : ${HDI_Rank},
         HDI Index: ${HDI_Index}`);
    }
    console.log(mapData);
    return <div>
        <MapContainer style={{ height:"90vh"}} zoom={2} center={[100,100]}>
            <GeoJSON
            style={mapstyle}
            data={mapData.features}
            onEachFeature={onEachCountry}/>
        </MapContainer>
    </div>
};

export default HdiMap;