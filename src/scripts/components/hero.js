class Hero extends HTMLElement {
    _shadowRoot = null
    _style = null

    constructor() {
        super()

        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._style = document.createElement('style')
    }

    _updateStyle() {
        this._style.textContent = `


.hero__img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
    justify-content: center;
    display: none;
}
    
.hero {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    height: 100%;
    text-align: center;
}
          
.hero__inner {
  margin: 0 auto;
  max-width: 800px;
}


.hero__tagline {
  margin-top: 16px;
  font-size: 18px;
  font-weight: 300;
  display: none;
}

.hero__title {
    font-weight: 500;
    font-size: 26px;
    height: 100%;
    display: none;
}


.skeleton {
    background-color: #e0e0e0;
    border-radius: 4px;
    margin: 10px 0;
  }
  
  .skeleton-img {
    width: 100%;
    height: 500px;
    display: block;
  }
  
  .skeleton-title {
    width: 60%;
    height: 24px;
    display: block;
   }
  
  .skeleton-text {
    width: 80%;
    height: 16px;
    display: block;
  }

    `
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = ''
    }

    connectedCallback() {
        this.render();
        const img = this._shadowRoot.querySelector('.hero__img');
        const skeletonImg = this._shadowRoot.querySelector('.skeleton-img');
        const title = this.shadowRoot.querySelector('.hero__title');
        const tagline = this.shadowRoot.querySelector('.hero__tagline');
        const skeletonTitle = this.shadowRoot.querySelector('.skeleton-title');
        const skeletonText = this.shadowRoot.querySelector('.skeleton-text');

        img.onload = () => {
            skeletonImg.style.display = 'none';
            img.style.display = 'block';
            skeletonTitle.style.display = 'none';
            title.style.display = 'block';
            skeletonText.style.display = 'none';
            tagline.style.display = 'block';
        };
    }

    render() {
        this._emptyContent()
        this._updateStyle()

        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `      
    <div class="hero" >
        <picture>
            <div class="skeleton skeleton-img"></div>
            
            <img class="hero__img" 
                data-src="/images/hero-image.jpg" 
                src="/images/hero-image.jpg" 
                alt="gambar resto"/>
        </picture>
        <div class="hero__inner">
            <div class="skeleton skeleton-title"></div>
            <h1 class="hero__title">Restaurant Apps</h1>
            <div class="skeleton skeleton-text"></div>
            <p class="hero__tagline">
                This Restaurant Apps contains alot of recommendation to more places that provides more foods and beverages.
            </p>
        </div>
    </div>
    `
    }
}

customElements.define('hero-component', Hero)
