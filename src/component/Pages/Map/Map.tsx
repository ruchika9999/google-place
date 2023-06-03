import { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

import MainLayout from "../../Layout/Main";
import Search from "./Search";
import { useAppSelector } from "../../../store/hooks";
import { mapLocationsStore } from "../../../store/map/mapSlice";
import { GOOGLE_API_KEY } from "../../../utils/constant";

const center = {
  lat: 28.626137,
  lng: 79.821603,
};

const MapComponent = () => {
  const [activeInfoWindow, setActiveInfoWindow] = useState(0);
  const locations = useAppSelector(mapLocationsStore);

  return (
    <MainLayout
      leftSide={<Search />}
      mainContainer={
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={["places"]}>
          <GoogleMap
            mapContainerStyle={{ height: "100vh", width: "100%" }}
            center={center}
            zoom={3}
          >
            {locations.data.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                onClick={() => setActiveInfoWindow(index)}
              >
                {activeInfoWindow === index && (
                  <InfoWindow position={marker.position}>
                    <b>{marker.label.text}</b>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </LoadScript>
      }
    />
  );
};

export default MapComponent;
