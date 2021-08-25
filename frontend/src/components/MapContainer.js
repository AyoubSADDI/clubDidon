import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React , {Component} from 'react';
export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat:36.875098,
        lng:10.207350
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map 
        google={this.props.google}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng 

        }

        }
            >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      )
    }
  }
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBdl_GVuiy48sVXq77BtiWIthqi0wwE-Co')
  })(MapContainer)