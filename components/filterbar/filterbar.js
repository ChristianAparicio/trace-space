import getData from "../../json.js";

class CardFilter extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    this.data = [];
    this.filters = {
      name: '',
      collection: '',
      author: '',
      price: ''
      
    };
  }

  async connectedCallback() {
    this.data = await getData();
    this.render();
    
    
    this.addEventListener('click', (event) => {
      if (event.target.id === 'clearFiltersButton') {
        this.filters = {
          name: '',
          collection: '',
          author: '',
          price: '',
    
        };
        this.render();
        
      }
    });
    
  }
  
  handleFilterChange(event) {
    const { name, value } = event.target;
    const newValue = name === 'price' ? parseInt(value) : value;
    this.filters = { ...this.filters, [name]: newValue };

    //clearTimeout nos permite programar la ejecucion en un cierto periodo de tiempo
    clearTimeout(this.timer);

    this.timer = setTimeout(()=>{
      this.render();
      
   


    },500)
  

    
  }

  

  render() {
    const filteredData = this.data.filter((product) => {
      const nameFilter = this.filters.name.toLowerCase();
      const collectionFilter = this.filters.collection.toLowerCase();
      const authorFilter = this.filters.author.toLowerCase();
   
      const nameMatch = product.Name.toLowerCase().includes(nameFilter);
      const collectionMatch = product.Collection.toLowerCase().includes(collectionFilter);
      const authorMatch = product.Author.toLowerCase().includes(authorFilter);



      const priceFilter = parseInt(this.filters.price);
      const priceMatch = isNaN(priceFilter) ||product.Price <= priceFilter;

      console.log(priceMatch)
      return nameMatch && collectionMatch && authorMatch && priceMatch;
    });

    const options = (data, key) => {
      const values = new Set(data.map((product) => product[key]));
      return [...values].map((value) => {
        return `<option value="${value}">${value}</option>`;
      });
    };

    const filterApplied = this.filters.name || this.filters.collection || this.filters.author || this.filters.price

    this.innerHTML = `
    <link rel="stylesheet" href="filterbar.css">
    <div class="container my-4 space-top ">

    <div class="form-group">
        <div class="input-group">
          <input type="text" name="name" id="nameInput" class="form-control seach-bar bg-dark text-white border-0" placeholder="Search by name" value="${this.filters.name}">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              <i class="bi-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label for="collectionSelect">Collection</label>
          <select name="collection" id="collectionSelect" class="form-control btn btn-dark">
            <option value="">Collection</option>
            ${options(this.data, 'Collection').join('')}
          </select>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label for="authorInput">Author</label>
          <select name="author" id="authorSelect" class="form-control btn btn-dark">
            <option value="">Autor</option>
            ${options(this.data, 'Author').join('')}
          </select>
        </div>
      </div>
      <div class="row">
      <div class="col-md-3">
        <div class="form-group">
        <label for="priceInput">Price</label>
        <input type="number" name="price" id="priceInput" class="form-control" placeholder="Price" value="${this.filters.price}">
        </div>
      </div>

      
        
        
      
      <div class="col-md-4">
        <button class="btn btn-secondary" id="clearFiltersButton">Clear Filters</button>
      </div>
    </div>

 
    
    <div class="container">
    <div class="row">
      ${filteredData.map((product) => {
        return `
          <div class="col-md-4">
            <div class="card">
              <img src="${product.img1}" alt="${product.Name}" class="card-img-top">
              <div class="card-body card-hover">
                <h3 class="card-title">${product.Name}</h3>
                <p class="card-text">${product.Description}</p>
                <h5 class="card-price">$${product.Price.toString()}</h5>
                <a href="/detail.html?id=${product.id}" class="btn btn-primary shop_now"><i class="bi-cart"></i>Buy Now</a>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  </div>
  
    `;

    this.querySelector('input[name="name"]').addEventListener('input', this.handleFilterChange.bind(this));
    this.querySelector('select[name="collection"]').addEventListener('change', this.handleFilterChange.bind(this));
    this.querySelector('select[name="author"]').addEventListener('input', this.handleFilterChange.bind(this));
    this.querySelector('input[name="price"]').addEventListener('input', this.handleFilterChange.bind(this));
    

    

  }
}

customElements.define('card-filter', CardFilter);
