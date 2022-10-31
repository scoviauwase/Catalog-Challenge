const productList = [
    {
      title: 'Ruby sweater',
      price: 500,
      description:
        'A sweater (North American English) or pullover, also called a jumper is a piece of clothing, typically with long sleeves, made of knitted or crocheted',
      imageSrc:
        'https://lp2.hm.com/hmgoepprod?set=source[/13/6d/136d52307d7a42ce854831114cfd1bd0a355da3a.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      inStock: false,
    },
    {
      title: 'Ruby sweater',
      price: 500,
      description:
        'A sweater (North American English) or pullover, also called a jumper is a piece of clothing, typically with long sleeves, made of knitted or crocheted',
      imageSrc:
        'https://lp2.hm.com/hmgoepprod?set=source[/13/6d/136d52307d7a42ce854831114cfd1bd0a355da3a.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      inStock: true,
    },
    {
      title: 'Ruby sweater',
      price: 500,
      description:
        'A sweater (North American English) or pullover, also called a jumper is a piece of clothing, typically with long sleeves, made of knitted or crocheted',
      imageSrc:
        'https://lp2.hm.com/hmgoepprod?set=source[/13/6d/136d52307d7a42ce854831114cfd1bd0a355da3a.jpg],origin[dam],category[ladies_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]',
      inStock: true,
    },
  ];
  
  //elements declaration
  const registerModal = document.querySelector('.register-modal');
  const registerNavButton = document.querySelector('.header__nav-button');
  const registerHeroButton = document.querySelector('.hero__button');
  const registerModalCloseBtn = document.querySelector('.register-modal__button');
  const registerProductForm = document.getElementById('register_form');
  const detailsModal = document.querySelector('.details__modal');
  const detailModalButton = document.querySelector('.details__button');
  const detailsModalCloseButton = document.querySelector(
    '.details-modal__close-button'
  );
  
  function openRegisterModal() {
    registerModal.classList.add('register-modal--visible');
  }
  
  function closeRegisterModal() {
    registerModal.classList.remove('register-modal--visible');
  }
  
  function openDetailsModal() {
    detailsModal.classList.add('details__modal--visible');
  }
  
  function closeDetailsModal() {
    detailsModal.classList.remove('details__modal--visible');
  }
  
  [registerNavButton, registerHeroButton].forEach((button) =>
    button.addEventListener('click', openRegisterModal)
  );
  
  registerModalCloseBtn.addEventListener('click', closeRegisterModal);
  
  function handleRegisterFormSubmit(e) {
    e.preventDefault();
    let enteredData = {};
    const formData = new FormData(registerProductForm);
    formData.forEach((value, field) => (enteredData[field] = value));
    console.log(enteredData);
    enteredData.imageSrc = URL.createObjectURL(enteredData.imageSrc);
    console.log(enteredData);
    productList.push(enteredData);
    registerProductForm.reset();
    closeRegisterModal();
    displayProducts(productList);
  }
  
  registerProductForm.addEventListener('submit', (e) => {
    handleRegisterFormSubmit(e);
  });
  
  function renderProduct(product) {
    let productCardContainer = document.createElement('div');
    productCardContainer.classList.add('product-card');
    productCardContainer.innerHTML = `
      <h6 class="${
        product.inStock ? 'product-card__in-stock' : 'product-card__out-of-stock'
      }">${product.inStock ? 'In Stock' : 'Out of stock'}</h6>
      <img
        src='${product.imageSrc}'
        alt='${product.title}'
        class="product-card__image"
      />
      <div class="product-card__details">
        <h4 class="product-card__title">${product.title}</h4>
        <h5 class="product__price">${'$' + product.price}</h5>
        <button class="product-card__button">View more</button>
      </div>
    `;
    return productCardContainer;
  }
  
  function displayProducts(products) {
    const productsContainer = document.querySelector('.products__card-container');
    productsContainer.innerHTML = '';
    for (let product of products) {
      let productElement = renderProduct(product);
      productsContainer.appendChild(productElement);
    }
  }
  
  displayProducts(productList);
  
  const productCardButtons = document.querySelectorAll('.product-card__button');
  
  Array.from(productCardButtons).forEach((button) => {
    button.addEventListener('click', openDetailsModal);
  });
  
  [detailsModalCloseButton, detailModalButton].forEach((button) => {
    button.addEventListener('click', closeDetailsModal);
  });
  