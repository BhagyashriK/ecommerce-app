import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FormControl, Select } from "../../../styles/form";
import { Container, Row, Col4 } from "../../../styles/layout";
import { FilterWrapper } from "../../../styles/filters";
import Header from "../../components/header/header.index";
import Message from "../../components/message/message.index";
import Loader from "../../components/loader/loader.index";

import { getProducts, getTypes, getBrands } from "./product-list.action";
import Product from "../../components/product/product";
import { List } from "./product-list.style";

const ProductList = ({
  getProducts,
  getTypes,
  getBrands,
  list,
  productTypes,
  brands,
  isLoading,
  errorMessage
}) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const filterProducts = query => e => {
    const term = e.target.value;

    // Handle name, type and brand change based upon the query type received
    switch (query) {
      case "type":
        setType(term);
        break;
      case "brand":
        setBrand(term);
        break;
      case "name":
        setName(term);
        break;
      default:
        break;
    }
  };

  // Fetch products on name/type/brand change
  useEffect(() => {
    getProducts({ name, type, brand });
  }, [getProducts, name, type, brand]);

  // Fetch types/brands list on component mount.
  // For now API returns static list of types/brands hence made call only once.
  // We can change this implementation if we get brands/types dynamically wrt. the applied filters.
  useEffect(() => {
    getTypes();
    getBrands();
  }, [getTypes, getBrands]);

  return (
    <>
      <Header>
        <h3>Products</h3>
      </Header>
      <Container data-testid="product-list-wrapper">
        {/* Show error message if error occurs */}
        {errorMessage ? (
          <Message message={errorMessage} type="error"></Message>
        ) : (
          <Row>
            {/* Filter section */}
            <FilterWrapper>
              <FormControl
                type="text"
                value={name}
                placeholder="Search by prouduct name"
                onChange={filterProducts("name")}
              />
              {/* Dropdowns for types/brands */}
              <div>
                <Select value={type} onChange={filterProducts("type")}>
                  <option value="">{type === "" ? "By type" : "All"}</option>
                  {productTypes.length > 0 &&
                    productTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                </Select>
                <Select value={brand} onChange={filterProducts("brand")}>
                  <option value="">{brand === "" ? "By brand" : "All"}</option>
                  {brands.length > 0 &&
                    brands.map(brand => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                </Select>
              </div>
            </FilterWrapper>
            {/* Show loader if request is in progress */}
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <List data-testid="product-list">
                  {list.map(product => (
                    <Col4 key={product.id}>
                      <Product {...product} />
                    </Col4>
                  ))}
                </List>
                {/* Show empty message if list is empty */}
                {list.length === 0 && <Message message="No Content"></Message>}
              </>
            )}
          </Row>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    list: products.list,
    productTypes: products.productTypes,
    brands: products.brands,
    isLoading: products.isLoading,
    errorMessage: products.errorMessage
  };
};

ProductList.propTypes = {
  list: PropTypes.array,
  productTypes: PropTypes.array,
  brands: PropTypes.array,
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  getProducts: PropTypes.func,
  getBrands: PropTypes.func,
  getTypes: PropTypes.func
};

export default connect(mapStateToProps, { getProducts, getTypes, getBrands })(
  ProductList
);
