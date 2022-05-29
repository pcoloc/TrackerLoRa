export interface Ip {
  class: string,
  icon: string,
  route: string,
  time: string
}

export const Ips: Ip[] = [

  {
      class: 'bg-info',
      icon: 'bi bi-bell',
      route: '192.168.1.1',
      time: 'Just Now'
  },
  {
      class: 'bg-success',
      icon: 'bi bi-hdd',
      route: 'lopezcarrillo.com',
      time: '2 Hours ago'
  },
  {
      class: 'bg-warning',
      icon: 'bi bi-bag-check',
      route: 'pccomponentes.com',
      time: '31 May'
  },
  {
      class: 'bg-danger',
      icon: 'bi bi-person',
      route: 'twitter.com',
      time: '30 May'
  },
  {
      class: 'bg-primary',
      icon: 'bi bi-person',
      route: '10.0.1.1',
      time: '21 May'
  },

]
