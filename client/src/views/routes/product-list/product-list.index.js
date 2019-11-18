import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { FormControl } from "../../../styles/form";
import { Container, Row, Col4 } from "../../../styles/layout";
import { FilterWrapper } from "../../../styles/filters";
import Header from "../../components/header/header.index";
import Message from "../../components/message/message.index";
import Loader from "../../components/loader/loader.index";

import { getProducts } from "./product-list.action";
import Product from "../../components/product/product";

const ProductList = ({ getProducts, list, isLoading, errorMessage }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchByPatientName = (e: any) => {
    setSearchTerm(e.target.value);
    getProducts({ q: e.target.value });
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
                value={searchTerm}
                placeholder="Search by prouduct"
                onChange={searchByPatientName}
              />
            </FilterWrapper>
            {/* Show loader if request is in progress */}
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {list.map(product => (
                  <Col4 key={product.id}>
                    <Product {...product} />
                  </Col4>
                ))}
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
    isLoading: products.isLoading,
    errorMessage: products.errorMessage
  };
};

export default connect(mapStateToProps, { getProducts })(ProductList);
