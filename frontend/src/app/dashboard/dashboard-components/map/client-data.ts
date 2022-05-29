export interface client {
  uuid: string,
  router: boolean,
  title: string,
  color: string,
  latitude: string,
  longitude: string
  ownerUuid: string,
  public: boolean,
}


export const clients: client[] = [
  {
    uuid: "uuid-1",
    router: true,
    title: "Router 1",
    color: "green",
    latitude: "36.839224508547145",
    longitude: "-2.4592478294686978",
    ownerUuid: "uuid-1",
    public: true
  },
  {
    uuid: "uuid-2",
    router: true,
    title: "Router 2",
    color: "red",
    latitude: "36.814224508547145",
    longitude: "-2.4292578294686978",
    ownerUuid: "uuid-2",
    public: true
  },
  {
    uuid: "uuid-3",
    router: true,
    title: "Router 3",
    color: "blue",
    latitude: "36.834224508547145",
    longitude: "-2.4532578294686978",
    ownerUuid: "uuid-3",
    public: true
  },
  {
    uuid: "uuid-4",
    router: false,
    title: "Nodo 1",
    color: "green",
    latitude: "36.832224508547145",
    longitude: "-2.4522578294686978",
    ownerUuid: "uuid-4",
    public: true
  },
  {
    uuid: "uuid-5",
    router: false,
    title: "Nodo 2",
    color: "red",
    latitude: "36.834424508547145",
    longitude: "-2.4292578294686978",
    ownerUuid: "uuid-5",
    public: true
  },
  {
    uuid: "uuid-6",
    router: false,
    title: "Nodo 3",
    color: "blue",
    latitude: "36.844224508547145",
    longitude: "-2.4542578294686978",
    ownerUuid: "uuid-6",
    public: true
  },
]
