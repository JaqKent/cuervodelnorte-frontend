import { SortingType } from 'context/Product/constants';
import bolso from 'assets/bolso.jpg';
import cartera from 'assets/cartera.png';
import kitmate from 'assets/kitMate.jpg';
import riñonera from 'assets/Riñonera.jpg';

export const SORT_TYPE = [
  {
    id: SortingType.Wallets,
    img: riñonera,
    name: 'Ofertas',
  },
  {
    id: SortingType.Accesories,
    img: riñonera,
    name: 'Accesorios',
  },
  {
    id: SortingType.Backpacks,
    img: bolso,
    name: 'Mochilas',
  },
  {
    id: SortingType.Bags,
    img: kitmate,
    name: 'Bolsos',
  },
  {
    id: SortingType.Purses,
    img: cartera,
    name: 'Carteras',
  },
];
