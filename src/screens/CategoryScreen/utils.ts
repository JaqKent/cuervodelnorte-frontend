export const categoryId = (id: string | undefined) => {
  switch (id) {
    case '2':
      return 'Carteras';

    case '3':
      return 'Mochilas';

    case '4':
      return 'Bolsos';

    case '5':
      return 'Accesorios';

    default:
      return '';
  }
};
