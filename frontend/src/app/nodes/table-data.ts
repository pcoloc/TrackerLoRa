export interface Product {
  id: string,
  image: string,
  uname: string,
  gmail: string,
  lastTime: string,
  status: string,
  receive: number,
  budget: string
}


export const TopSelling: Product[] = [

  {
      id: "uuid-1",
      image: 'https://www.meme-arsenal.com/memes/8ffedeb2150f66928a2e4931dca8463d.jpg',
      uname: 'Mikrotik LoRa8',
      gmail: 'owner@gmail.com',
      lastTime: '2 min ago',
      status: 'danger',
      receive: 35,
      budget: '95K'
  },
  {
      id: "uuid-2",
      image: 'assets/images/users/user2.jpg',
      uname: 'Draigno LPS8',
      gmail: 'owner@gmail.com',
      lastTime: 'Now',
      status: 'info',
      receive: 35,
      budget: '95K'
  },
  {
      id: "uuid-3",
      image: 'assets/images/users/user3.jpg',
      uname: 'Kerlink 23',
      gmail: 'owner@gmail.com',
      lastTime: 'Now	',
      status: 'warning',
      receive: 35,
      budget: '95K'
  },
  {
      id: "uuid-4",
      image: 'assets/images/users/user4.jpg',
      uname: 'Raspberry Pi',
      gmail: 'owner@gmail.com',
      lastTime: 'Now',
      status: 'success',
      receive: 35,
      budget: '95K'
  },

]
