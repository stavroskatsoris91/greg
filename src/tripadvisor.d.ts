interface taValidate {
  (): void;
}
interface IGoogleMaps {
  maps: {
    MapTypeId: {
      SATELLITE: string;
    };
    Map: (...any) => void;
    InfoWindow: (any) => void;
    Marker: (any) => void;
    LatLng: (...any) => void;
  };
}
interface Window {
  taValidate: taValidate;
  taValList: (() => void)[];
  taValIndex: number;
  taOnLoad(event): void;
  google: IGoogleMaps;
}
