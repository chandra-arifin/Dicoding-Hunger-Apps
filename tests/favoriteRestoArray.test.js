import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {
  
  getAllRestos() {
    return favoriteRestos;
  },

  getResto(id) {
    if (!id) return;

    // eslint-disable-next-line consistent-return
    return favoriteRestos.find((resto) => resto.id == id);
  },

  deleteResto(id) {
    // eslint-disable-next-line
    favoriteRestos = favoriteRestos.filter((resto) => resto.id != id);
  },

  putResto(resto) {
    // eslint-disable-next-line no-prototype-builtins
    if (!resto.hasOwnProperty('id')) return;

    if (this.getResto(resto.id)) return;

    favoriteRestos.push(resto);
  },

};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestos = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});