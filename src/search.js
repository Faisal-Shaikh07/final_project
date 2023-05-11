import React, { Component } from "react";

class ProductSearch extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with an empty search term and products array
    this.state = {
      searchTerm: "",
      products: [],
    };
  }

  componentDidMount() {
    // Fetch the products data from an API or a mock data source
    fetch("https://example.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched products
        this.setState({ products: data });
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }

  handleChange = (event) => {
    // Update the state with the input value
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    // Filter the products based on the search term
    const filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    return (
      <div className="product-search">
        <h1>Product Search</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductSearch;
