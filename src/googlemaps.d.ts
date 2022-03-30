interface IGoogleMaps{
  maps:{
    MapTypeId:{
      SATELLITE:string
    }
    Map:(...any)=>void
    InfoWindow:(any)=>void
    Marker:(any)=>void
    LatLng:(...any)=>void
  }
}
interface Window {
    google:IGoogleMaps
  }