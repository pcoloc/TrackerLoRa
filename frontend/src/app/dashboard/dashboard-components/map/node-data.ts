export interface node {
  uuid: string,
  router: boolean,
  title: string,
  color: string,
  latitude: string,
  longitude: string
}

export const nodes: node[] = [
  {
    uuid: "uuid-1",
    router: false,
    title: "Nodo 1",
    color: "green",
    latitude: "36.832224508547145",
    longitude: "-2.4522578294686978"
  },
  {
    uuid: "uuid-2",
    router: false,
    title: "Nodo 2",
    color: "red",
    latitude: "36.834424508547145",
    longitude: "-2.4292578294686978"
  },
  {
    uuid: "uuid-3",
    router: false,
    title: "Nodo 3",
    color: "blue",
    latitude: "36.844224508547145",
    longitude: "-2.4542578294686978"
  },
]
