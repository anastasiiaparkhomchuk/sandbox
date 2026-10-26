// You have an internet store page which shows products.
// Exact products shown are determined by two API responses: Products and Products Availability.
// If product is not available - it won't be shown on a page.
// In your test you need to check that the page shows correct products based on the two responses.
// Write the method that filters two responses and returns and array of objects that contain title, description and price of each available product.
// Write your code using sample objects below.
// JavaScript
// Products
const productsResponse = [
  {
    code: "P001",
    title: "Wireless Mouse",
    description: "A sleek and ergonomic wireless mouse with adjustable DPI settings."
  },
  {
    code: "P003",
    title: "Bluetooth Headphones",
    description: "High-quality over-ear headphones with noise cancellation and 20-hour battery life."
  },
  {
    code: "P004",
    title: "Mechanical Keyboard",
    description: "Compact mechanical keyboard with customizable RGB lighting and tactile switches."
  }
];
// Products Availability
const productsAvailabilityResponse = [
  {
    code: "P001",
    price: 19.99,
    available: true
  },
  {
    code: "P002",
    price: 49.99,
    available: false
  },
  {
    code: "P003",
    price: 29.99,
    available: true
  },
  {
    code: "P004",
    price: 19.99,
    available: false
  },
  {
    code: "P005",
    price: 49.99,
    available: true
  }
];
function getProductsForPage() {
let availableProducts = productsResponse.filter((product) => {
  let availability = productsAvailabilityResponse.find((item) => item.code === product.code);
  return availability !== undefined && availability.available === true;
});
return availableProducts.map((product) => {
  let availability = productsAvailabilityResponse.find ((item) => item.code === product.code);
  return {
    title: product.title,
    description: product.description,
    price: availability.price
  };
})
}
console.log('Products on UI: ' + getProductsForPage());