export interface client {
  uuid: string,
  router: boolean,
  name: string,
  email: string,
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
    name: "Router 1",
    email: "email@email.com",
    color: "danger",
    latitude: "36.839224508547145",
    longitude: "-2.4592478294686978",
    ownerUuid: "uuid-1",
    public: true
  },
  {
    uuid: "uuid-2",
    router: true,
    name: "Router 2",
    email: "email2@email.com",
    color: "info",
    latitude: "36.814224508547145",
    longitude: "-2.4292578294686978",
    ownerUuid: "uuid-2",
    public: true
  },
  {
    uuid: "uuid-3",
    router: true,
    name: "Router 3",
    email: "email3@email.com",
    color: "success",
    latitude: "36.834224508547145",
    longitude: "-2.4532578294686978",
    ownerUuid: "uuid-3",
    public: true
  },
  {
    uuid: "uuid-4",
    router: false,
    name: "Nodo 1",
    email: "email@email.com",
    color: "success",
    latitude: "36.832224508547145",
    longitude: "-2.4522578294686978",
    ownerUuid: "uuid-4",
    public: true
  },
  {
    uuid: "uuid-5",
    router: false,
    name: "Nodo 2",
    email: "email@email.com",
    color: "danger",
    latitude: "36.834424508547145",
    longitude: "-2.4292578294686978",
    ownerUuid: "uuid-5",
    public: true
  },
  {
    uuid: "uuid-6",
    router: false,
    name: "Nodo 3",
    email: "email@email.com",
    color: "warning",
    latitude: "36.844224508547145",
    longitude: "-2.4542578294686978",
    ownerUuid: "uuid-6",
    public: true
  },
]
