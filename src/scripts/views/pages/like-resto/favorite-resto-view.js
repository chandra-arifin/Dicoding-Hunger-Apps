import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoView {
  getTemplate() {
    return `
    <section>
        <h1 class="explore">Your Liked Restaurant</h1>
        
        <div class="posts" id="posts">
        </div>
    </section> 
        `;
  }

  showFavoriteRestos(restos) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('posts').innerHTML = html;
  }

  _getEmptyRestoTemplate() {
    return `
          Tidak ada Resto Favorite yang dipilih       
    `;
  }
}

export default FavoriteRestoView;
