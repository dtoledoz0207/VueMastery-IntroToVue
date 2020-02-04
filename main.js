var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastety',
    product: 'Socks',
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0,
    description: 'A pair of warm, fuzzy socks',
    link: 'http://google.com.mx',
    onSale: true,
    sizes: ["XL", "L", "M", "S", "XS"]
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    removeToCart() {
      this.cart -= 1
    },
    updateProduct: function (index) {
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})