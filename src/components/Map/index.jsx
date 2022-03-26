import React, { useRef } from "react";
import { VectorMap } from "react-jvectormap";

const Map = () => {
    const inputRef = useRef(null);
    return (
        <>
            <VectorMap
                map={"world_mill"}
                backgroundColor="#FFFF"
                markerStyle={{
                    initial: {
                        fill: "#FFFF",
                        stroke: "#383f47"
                    }
                }}
                series={{
                    markers: [
                        {
                            attribute: "r",
                            scale: [5, 20],
                            values: [60, 6, 54],
                            normalizeFunction: "polynomial"
                        }
                    ]
                }}
                regionStyle={{
                    initial: {
                        fill: "#128da7"
                    },
                    hover: {
                        fill: "#A0D1DC"
                    }
                }}
                markers={
                    [
                        // {
                        //     latLng: [41.9, 12.45],
                        //     name: "Vatican City",
                        //     value: 20
                        // },
                        // {
                        //     latLng: [11, 12.45],
                        //     name: "WOW",
                        //     value: 30
                        // },
                        // {
                        //     latLng: [-33, 12.45],
                        //     name: "WAZZZA",
                        //     value: 16
                        // }
                    ]
                }
                ref={inputRef}
                containerStyle={{
                    width: "100%",
                    height: "100%"
                }}
                containerClassName="map"
            />
        </>
    );
}

export default Map;