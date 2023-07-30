import React from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const mapStyles = {
    margin: '1% 0 0 0',
};

const containerStyles = {
    width: '70%',
    height: '80%',
};

function AlgorithmMap({truePositives, falsePositives, falseNegatives, google}) {

    const bumpsMarker = (color, data) => data.map((element, index) => {
            return (
                <Marker
                    key={index}
                    name={'bump'}
                    position={element}
                    icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/" + color + "-dot.png",
                    }}/>
            )
        }
    );

    const initialCenterMarker = () => {
      if(truePositives.length > 0)
          return truePositives[0];
      if(falsePositives.length > 0)
          return falsePositives[0];
      if(falseNegatives.length > 0)
          return falseNegatives[0];
      return {lat: 51.2729410640895, lng: 22.544318055734}
    };

    return (
        <Map
            google={google}
            zoom={15}
            style={mapStyles}
            containerStyle={containerStyles}
            initialCenter={initialCenterMarker()}
        >
            {bumpsMarker("green", truePositives)}
            {bumpsMarker("red", falsePositives) }
            {bumpsMarker("blue", falseNegatives)  }
        </Map>
    )
}

export default GoogleApiWrapper({
    // apiKey: process.env.REACT_APP_API_KEY,
})(AlgorithmMap)