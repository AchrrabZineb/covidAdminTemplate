import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'Accueil',
    icon: 'keypad-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Centres',
    icon: 'home-outline',
    children: [
      {
        title: 'Nouveau centre',
        link: '/pages/centres/addCentre',
        icon: 'plus-outline'
      },
      {
        title: 'Liste des centres',
        link: '/pages/centres/listCentre',
        icon: 'list-outline'
      }
    ],
  },
  {
    title: 'Responsables',
    icon: 'people-outline',
    children: [
      {
        title: 'Nouveau responsable',
        link: '/pages/respo/addRespo',
        icon: 'plus-outline'
      },
      {
        title: 'Liste des responsables',
        link: '/pages/respo/listRespo',
        icon: 'list-outline'
      }
    ],
  },
  {
    title: 'Vaccinés',
    icon: 'loader-outline',
    children: [
      {
        title: 'Liste des vaccinés',
        link: '/pages/vaccines/listVaccine',
        icon: 'list-outline'
      }
    ],
  },
  {
    title: 'Statistiques',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Se déconnecter',
    icon: 'log-out-outline'
  },
];
