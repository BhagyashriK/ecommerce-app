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
  return (
    <Thumbnail data-testid="product-wrapper">
      <ThumbnailHeader>
        {/* Product tag */}
        <TagWrapper>
          <Bullet className="bullet">{(rating * 5) / 100} &#9733;</Bullet>
        </TagWrapper>
        {/* Product image */}
        <ImgWrapper>
          <ThumbnailImg className="thumbnail-img" src={image} alt={name} />
        </ImgWrapper>
        {/* Product name */}
        <ThumbnailTitle>{name}</ThumbnailTitle>
      </ThumbnailHeader>
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
      <ThumbnailFooter>
        <LinkButton onClick={goToDetails}>View Details</LinkButton>
      </ThumbnailFooter>
    </Thumbnail>
  );
};

Product.propTypes = {
  info: PropTypes.object
};

export default Product;
