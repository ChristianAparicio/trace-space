







import getData from "../../json.js";

let list = [];

const url = window.location.search;
const searchParas = new URLSearchParams(url);
let productId = searchParas.get("id").replace('"',"");
console.log(productId);

class cardwrapper extends HTMLElement {
    static get observedAttributes(){
        return['class']
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.printData();
    }
    attributeChangeCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.printData();
}

    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="./components/card-wrapper/style-wrapper.css">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">
      </script>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
    
        ` 
         this.shadowRoot.innerHTML +=` 

         <header id="mobile-menu">
         <nav id="mobile-navlist">
           <a href="#"><i class="icon bi-list"></i></a>
           <a href="#"><img class="logo" src="imgs/logo.png" alt="" /></a>
           <a href="#"><i class="icon bi-search"></i></a>
         </nav>
       </header>

         <header id="mobile-menu">
         <nav id="mobile-navlist">
           <a href="#"><i class="icon bi-list"></i></a>
           <a href="#"><img class="logo" src="imgs/logo.png" alt="" /></a>
           <a href="#"><i class="icon bi-search"></i></a>
         </nav>
       </header>
     
       <header id="main-header">
         <nav>
           <ul class="navlist">
             <li><a href="#" class="navitem">Collections</a></li>
             <li><a href="#" class="navitem">New Products</a></li>
           </ul>
     
           <a href="../index.html"><img class="logo" src="imgs/logo.png" alt="" /></a>
     
           <ul class="navlist">
             <li>
               <a href="#"><i class="icon bi-search"></i></a>
             </li>
             <li>
               <a href="#"><i class="icon bi-cart"></i></a>
             </li>
             <li>
               <a href="#"><i class="icon bi-person"></i></a>
             </li>
           </ul>
         </nav>
       </header>


        <section class="detail">

<figure class="banner">
    <img class="banner-img" src=${list[productId].img1} alt="">
</figure>
<div class="gradient"></div>
<section class="product-section">

<div class="card-wrapper">
    <div class="product-imgs">
        <div class="img-display">
            <div class="img-showcase">
                <img src=${list[productId].img1} alt="">
               
                <img src=${list[productId].img2} alt="">
                <img src=${list[productId].img3} alt="">
            </div>
        </div>

        <div class="img-select">
            <div class="img-list[0]">
                <a href="#"  data-id="1">
                    <img class="selction-img" src=${list[productId].img1} alt="">
                </a>
            </div>

            <div class="img-list[0]">
                <a href="#" data-id="2">
                    <img class="selction-img" src=${list[productId].img2} alt="">
                </a>
            </div>

            <div class="img-list[0]">
                <a href="#" data-id="3">
                    <img class="selction-img" src=${list[productId].img3} alt="">
                </a>
            </div>


        </div>
    </div>
</div>

<section class="product-content">
<h2 class="text-product-title"> ${list[productId].Name}</h2>
<div class="product-price">
<p class="text-price-title">Price: <span class="price">$${list[productId].Price}</span></p>
</div>
<ul>
<li class="text">Release Year: <span class="text-li-info">${list[productId].year}</span> </li>
<li class="text">Author: <span class="text-li-info">${list[productId].Author}</span></li>
<li class="text">Description: <span class="text-li-info">${list[productId].Description}</span></li>

</ul>
<button class="shop-now-button">
<i class="bi-cart"></i>SHOP NOW
</button>

</section>

</section>

</section>

<section class="its">

<h2 class="section-title">Similar Products</h2>

<div class="similars">

<a class="similarcard" href="./detail.html?id=2">

        
<figure class="section-product">
  <img class="product" src="imgs/stickers/mingyu.png" alt="" />

  <div class="product-info">
    <h2 class="container-title">Mingyu Sticker</h2>
    <h6 class="product-price">$6000</h6>
    <button class="shop-now-button">
      <i class="bi-cart"></i>SHOP NOW
    </button>
  </div>

  <div class="gradient-hover"></div>
</figure>
</a>
<a class="similarcard"  href="./detail.html?id=0">
<figure class="section-product">
  <img class="product" src="imgs/stickers/joshua.png" alt="" />

  <div class="product-info">
    <h2 class="container-title">Joshua Sticker</h2>
    <h6 class="product-price">$6000</h6>
    <button class="shop-now-button">
      <i class="bi-cart"></i>SHOP NOW
    </button>
  </div>

  <div class="gradient-hover"></div>
</figure>
</a>
<a class="similarcard" href="./detail.html?id=1">
<figure class="section-product">
  <img class="product" src="imgs/stickers/scoups.png" alt="" />

  <div class="product-info">
    <h2 class="container-title">Scoups Sticker</h2>
    <h6 class="product-price">$6000</h6>
    <button class="shop-now-button">
      <i class="bi-cart"></i>SHOP NOW
    </button>
  </div>

  <div class="gradient-hover"></div>
</figure>
</a>

<a class="similarcard" href="./detail.html?id=3">
        <figure class="section-product">
          <img class="product" src="imgs/stickers/vernon.png" alt="" />

          <div class="product-info">
            <h2 class="container-title">Vernon Sticker</h2>
            <h6 class="product-price">$6000</h6>
            <button class="shop-now-button">
              <i class="bi-cart"></i>SHOP NOW
            </button>
          </div>

          <div class="gradient-hover"></div>
        </figure>
      </a>
</div>
</section>

<div class="fondo">

Jessica
</div>


<footer id="tracer-footer">
<div class="footer-container">
  <div class="row">
    <div class="col-lg-3 col-sm-6">
      <div class="box">
        <img src="imgs/logo.png" class="logo" />
        <p>©2023 Trace. All rights reserved</p>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <div class="single-box">
        <h2>Product</h2>
        <ul>
          <li><a href="#">Original Paintings</a></li>
          <li><a href="#">Stickers</a></li>
          <li><a href="#">Art prints</a></li>
          <li><a href="#">Collections</a></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <div class="single-box">
        <h2>Resources</h2>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and condition</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <div class="single-box">
        <h2>Company</h2>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Why choose us</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <div class="single-box">
        <h2>Suscribe</h2>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Enter your email..."
            aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <i class="bi bi-arrow-right-short"></i></span>
          </div>
        </div>
        <h2>Follow Us On</h2>
        <p class="socialmedia">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-dribbble"></i>
        </p>
      </div>
    </div>
  </div>
</div>
</footer>

        `
        const imgs = this.shadowRoot.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];
        console.log(imgs)
        let imgId = 1;
        
        imgBtns.forEach((imgitem) => {
            imgitem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = imgitem.dataset.id;
                this.slideImage(imgId);
            });
        });
        
        
        window.addEventListener('resize', this.slideImage(imgId));
        
        
    }
    
    slideImage(imgId){
        const displayWidth = this.shadowRoot.querySelector('.img-showcase img:first-child').clientWidth;
    
        this.shadowRoot.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    printData () {
        getData().then((a)=>{list = a
            this.render()})
        
    }
    
    
}
customElements.define("app-card", cardwrapper);
export default cardwrapper;