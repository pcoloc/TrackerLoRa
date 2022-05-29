import { Timestamp } from "rxjs"

export interface relations {
  uuid: string,
  color: string,
  emisor_uuid: string,
  latitude_emisor: string,
  longitude_emisor: string,
  receptor_uuid: string,
  latitude_receptor: string,
  longitude_receptor: string,
  date: number
  RRSI: number
  SNR: number
}

export const relations: relations[] = [
  {
    uuid: "uuid-1",
    color: "green",
    emisor_uuid: "uuid-1",
    latitude_emisor: "36.839224508547145",
    longitude_emisor: "-2.4592478294686978",
    receptor_uuid: "uuid-5",
    latitude_receptor: "36.834424508547145",
    longitude_receptor: "-2.4292578294686978",
    date: 1579098983,
    RRSI: 0.5,
    SNR: 0.5
  },
  {
    uuid: "uuid-2",
    color: "red",
    emisor_uuid: "uuid-2",
    latitude_emisor: "36.814224508547145",
    longitude_emisor: "-2.4292578294686978",
    receptor_uuid: "uuid-3",
    latitude_receptor: "36.834224508547145",
    longitude_receptor: "-2.4532578294686978",
    date: 1579098983,
    RRSI: 0.5,
    SNR: 0.5
  },
  {
    uuid: "uuid-3",
    color: "blue",
    emisor_uuid: "uuid-3",
    latitude_emisor: "36.834224508547145",
    longitude_emisor: "-2.4532578294686978",
    receptor_uuid: "uuid-4",
    latitude_receptor: "36.832224508547145",
    longitude_receptor: "-2.4522578294686978",
    date: 1579098983,
    RRSI: 0.5,
    SNR: 0.5
  },
]
