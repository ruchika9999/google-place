export type MapLocation = {
  location: string;
};

export interface LocationType {
  position: {
    lat: number;
    lng: number;
  };
  label: {
    color: string;
    text: string;
  };
  draggable: boolean;
}
