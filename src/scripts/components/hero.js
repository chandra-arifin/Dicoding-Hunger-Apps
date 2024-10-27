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
    height: 250px;
    object-fit: cover;
    object-position: center;
    justify-content: center;
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
}

.hero__title {
    font-weight: 500;
    font-size: 26px;
    height: 100%;
}

    `
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = ''
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this._emptyContent()
        this._updateStyle()

        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `      
    <div class="hero" >
        <picture>
            <source media="(max-width: 600px)" 
                srcset="https://restaurant-api.dicoding.dev/images/small/45" 600w
                >
            <source media="(max-width: 900px)" 
                srcset="https://restaurant-api.dicoding.dev/images/medium/45" 900w
                >
            <img class="hero__img" 
                data-src="https://restaurant-api.dicoding.dev/images/large/45" 
                src="https://restaurant-api.dicoding.dev/images/large/45" 
                alt="gambar resto"/>
        </picture>
        <div class="hero__inner">
            <h1 class="hero__title">Restaurant Apps</h1>
            <p class="hero__tagline">
                This Restaurant Apps contains alot of recommendation to more places that provides more foods and beverages.
            </p>
        </div>
    </div>
    `
    }
}

customElements.define('hero-component', Hero)
