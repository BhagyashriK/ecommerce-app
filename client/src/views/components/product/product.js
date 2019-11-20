import React from "react";
import PropTypes from "prop-types";

import {
  Thumbnail,
  ThumbnailHeader,
  ThumbnailImg,
  ThumbnailTitle,
  ThumbnailContent,
  ThumbnailFooter
} from "../../../styles/thumbnail";
import { TagWrapper, ImgWrapper, InfoList, InfoLabel } from "./product.style";
import { Bullet } from "../../../styles/bullet";
import { LinkButton } from "../../../styles/button";

const Product = ({ name, image, price, size, rating, brand, slug, type }) => {
  const goToDetails = () => {
    window.location = `https://www.flaconi.de/${slug}`;
  };

  // Calculate rating out of 5 and fix it to 2 decimals
  const ratingOutOf5 = ((rating * 5) / 100).toFixed(2);

  return (
    <Thumbnail data-testid="product-wrapper">
      <ThumbnailHeader>
        {/* Product rating */}
        <TagWrapper>
          <Bullet className="bullet">{ratingOutOf5} &#9733;</Bullet>
        </TagWrapper>
        {/* Product image */}
        <ImgWrapper>
          <ThumbnailImg className="thumbnail-img" src={image} alt={name} />
        </ImgWrapper>
        {/* Product name */}
        <ThumbnailTitle>{name}</ThumbnailTitle>
      </ThumbnailHeader>
      {/* Remaining product information such as price, size, brand and type */}
      <ThumbnailContent>
        <InfoList>
          <li>
            <InfoLabel>Price</InfoLabel>
            <span>&euro; {price}</span>
          </li>
          <li>
            <InfoLabel>Size</InfoLabel>
            <span>{size}</span>
          </li>
          <li>
            <InfoLabel>Brand</InfoLabel>
            <span> {brand}</span>
          </li>
          <li>
            <InfoLabel>Type</InfoLabel>
            <span> {type}</span>
          </li>
        </InfoList>
      </ThumbnailContent>
      {/* Link to redirect user to external flaconi product details page. */}
      <ThumbnailFooter>
        <LinkButton onClick={goToDetails}>View Details</LinkButton>
      </ThumbnailFooter>
    </Thumbnail>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  size: PropTypes.string,
  rating: PropTypes.number,
  brand: PropTypes.string,
  slug: PropTypes.string,
  type: PropTypes.string
};

export default Product;
