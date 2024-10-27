import FavoriteRestoShowPresenter from '../src/scripts/views/pages/like-resto/favorite-resto-show-presenter';
import FavoriteRestoView from '../src/scripts/views/pages/like-resto/favorite-resto-view';

describe('Showing all favorite resto', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no resto have been liked', () => {
    it('should render the information that no resto have been liked', () => {
      const favoriteRestos = {
        getAllRestos: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestoShowPresenter({
        view,
        favoriteRestos: favoriteRestos,
      });

      const restos = [];
      presenter._displayRestos(restos);

      expect(document.querySelectorAll('.posts').length).toEqual(1);
    });

    it('should ask for the favorite resto', () => {
      const favoriteRestos = {
        getAllRestos: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos: favoriteRestos,
      });

      expect(favoriteRestos.getAllRestos).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite resto exist', () => {
    it('should show the resto', (done) => {
      done();
      const favoriteRestos = {
        getAllRestos: jest.fn().mockImplementation(() => [
          {
            id: 1,
            name: 'Resto Tegal',
            rating: 4,
            description: 'lorem ipsum 1',
            city: 'tegal',
          },
          {
            id: 2,
            name: 'Resto Bojonegoro',
            rating: 5,
            description: 'lorem ipsum 2',
            city: 'bojonegoro',
          },
        ]),
      };

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
    });
  });
});
