export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string,
    path: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-router',
        title: '2',
        subtitle: 'Routers',
        path: '/gateways'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-diagram-2',
        title: '2',
        subtitle: 'Nodos',
        path: '/nodes'
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-sunglasses',
        title: '15',
        subtitle: 'Monitoreos',
        path: '/monitoreos'
    }


]
