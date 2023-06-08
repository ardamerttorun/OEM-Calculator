// Storage Controller
const StorageController = (function () {})();

// Product Controller
const ProductController = (function () {
  // Private
  const Product = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  };

  const data = {
    products: [
      { id: 0, name: "Monitör", price: 100 },
      { id: 1, name: "Ram", price: 30 },
      { id: 2, name: "KeyBoard", price: 10 },
    ],
    selectedProduct: null,
    totalPrice: 0,
  };

  //Public
  return {
    getProducts: function () {
      return data.products;
    },
    getData: function () {
      return data;
    },
  };
})();

// UI Controller

const UIController = (function () {

    const Selectors={
        productsList:"#item-list"
    }

  return {
    createProductList: function (products) {
      let html = ``;

      products.forEach((prd) => {
        html += `<tr>
                <td>${prd.id+1}</td>
                <td>${prd.name}</td>
                <td>${prd.price}$</td>
                <td class="text-right">
                  <button type="submit" class="btn btn-warning btn-sm">
                    <i class="far fa-edit"></i>
                  </button>
                </td>
              </tr>
                        `;
      });

      document.querySelector(Selectors.productsList).innerHTML = html;
    },
    getSelectors:function(){
        return Selectors;
    }
  };
})();

// App Controller
const App = (function (ProductCtrl, UICtrl) {
  return {
    init: function () {
      console.log("Starting App...");
      const products = ProductCtrl.getProducts();

      UICtrl.createProductList(products);
    },
  };
})(ProductController, UIController);

App.init();
