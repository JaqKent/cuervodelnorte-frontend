import { SortingType } from "context/Product/constants";
import yerbero from "assets/productYerbero.png";
import bolso from "assets/bolso.jpg";
import cartera from "assets/cartera.png";
import kitmate from "assets/kitMate.jpg";
import riñonera from "assets/Riñonera.jpg";

export const SORT_TYPE = [
  {
    id: SortingType.Wallets,
    img: yerbero,
    name: "Yerbero",
  },
  {
    id: SortingType.Purses,
    img: cartera,
    name: "Billetera",
  },
  {
    id: SortingType.Backpacks,
    img: bolso,
    name: "Bolso",
  },
  {
    id: SortingType.Bags,
    img: kitmate,
    name: "KitMatero",
  },
  {
    id: SortingType.Accesories,
    img: riñonera,
    name: "Accesorios",
  },
];
