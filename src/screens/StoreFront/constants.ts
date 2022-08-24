import { SortingType } from 'context/Product/constants';
import ofertas from 'assets/ofertas.jpeg';
import cartera from 'assets/carteras.jpeg';
import bolso from 'assets/bolsos.jpeg';
import accesorios from 'assets/accesorios.jpeg';
import mochilas from 'assets/mochilas.jpeg';

export const SORT_TYPE = [
  {
    id: SortingType.Backpacks,
    img: mochilas,
    name: 'Mochilas',
  },
  {
    id: SortingType.Bags,
    img: bolso,
    name: 'Bolsos',
  },
  {
    id: SortingType.Accesories,
    img: accesorios,
    name: 'Accesorios',
  },
  {
    id: SortingType.Purses,
    img: cartera,
    name: 'Carteras',
  },
  {
    id: SortingType.Wallets,
    img: ofertas,
    name: 'Ofertas',
  },
];
