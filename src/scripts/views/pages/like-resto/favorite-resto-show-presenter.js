class FavoriteRestoShowPresenter {
  constructor({ view, favoriteRestos }) {
    this._view = view;
    this._favoriteRestos = favoriteRestos;

    this._showFavoriteResto();
  }

  async _showFavoriteResto() {
    const restos = await this._favoriteRestos.getAllRestos();
    this._displayRestos(restos);
  }

  _displayRestos(restos) {
    this._view.showFavoriteRestos(restos);
  }
}

export default FavoriteRestoShowPresenter;
