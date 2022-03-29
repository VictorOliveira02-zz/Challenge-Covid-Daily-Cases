import React, { useState, memo, useEffect } from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
import { getData } from "../../database/getData";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const MapChart = ({ setTooltipContent }) => {
    const [countries, setCountries] = useState([]);
    const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

    useEffect(() => {
        getData().then(data => setCountries(data));
    }, []);
    console.log(countries)
    return (
        <>
            <ComposableMap data-tip="" projectionConfig={{ rotate: [-10, 0, 0], scale: 200 }} style={{ height: '100%', width: '100%' }}>
                <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={() => setPosition(position)}>
                    <Sphere stroke="#000" strokeWidth={0.3} />
                    <Graticule stroke="#000" strokeWidth={0.3} />
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            const { NAME, POP_EST } = geo.properties;
                                            setTooltipContent(`${NAME} - ${POP_EST}`);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                    />
                                )
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

export default memo(MapChart);
