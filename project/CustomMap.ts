export interface Mapable {
  location: {
    lng: number;
    lat: number;
  };
  markerContent: () => string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lng: 0,
        lat: 0,
      },
    });
  }

  addMarker(mapable: Mapable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
