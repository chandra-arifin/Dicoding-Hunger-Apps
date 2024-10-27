import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestoView from './like-resto/favorite-resto-view';
import FavoriteRestoShowPresenter from './like-resto/favorite-resto-show-presenter';
import Swal from 'sweetalert2/src/sweetalert2.js';

const loadingComponent = document.querySelector('loading-component');

const showErrorMessage = (message) => {
  Swal.fire('Error!', message, 'error');
}

const showLoading = () => {
  loadingComponent.showLoading();
}

const hideLoading = () => {
  setTimeout(() => {
      loadingComponent.hideLoading();
  }, 1000)
}

const view = new FavoriteRestoView();

const Favorites = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {

    showLoading();

    try
    {
      // eslint-disable-next-line no-new
      new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });

      hideLoading();      
    }
    catch(error)
    {
      hideLoading();
      showErrorMessage(error);
    }
  },
};

export default Favorites;
