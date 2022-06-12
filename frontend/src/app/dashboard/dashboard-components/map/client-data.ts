export interface client {
  uuid: string,
  name: string,
  description: string,
  locations: Location[],
  router: boolean,
  title: string,
  color: string,
  latitude: string,
  longitude: string
  ownerUuid: string,
  public: boolean,
  addedAt: string,
  active: boolean,
  lastLocation: Location,

}
export interface Location {
  id: string,
  latitude: string,
  longitude: string
  date: string
}
// "uuid": "dc8391d3-24ac-4c2a-9280-386242ccf10a\n\n",
//         "name": "Dragino LPS8",
//         "description": "Router situado en la universidad de Almería",
//         "locations": [
//             {
//                 "id": 1,
//                 "latitud": "36,83021314913074",
//                 "longitud": "-2,405869862996042",
//                 "date": "2022-03-06T18:00:00.000+00:00"
//             }
//         ],
//         "ownerUuid": "ff808081811c03b501811c03f8940000",
//         "color": "#F3DE2",
//         "addedAt": null,
//         "public": true,
//         "active": true,
//         "router": true,
//         "lastLocation": {
//             "id": 1,
//             "latitud": "36,83021314913074",
//             "longitud": "-2,405869862996042",
//             "date": "2022-03-06T18:00:00.000+00:00"
//         }
