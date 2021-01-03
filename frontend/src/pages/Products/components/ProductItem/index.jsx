import {
  Product,
  ProductInfo,
  ProductImage,
  ProductName,
  PriceTag,
  Cents,
  SalePrice,
} from "./styles";
import ImageMock from "../../../../assets/imageMock.png";

const ProductItem = () => {
  return (
    <Product>
      <ProductImage src={ImageMock} />
      <ProductInfo>
        <ProductName>
          Nome do produto com até duas linhas inteiras duas linhas inteirasduas
          linhas inteirasduas linhas inteiras
        </ProductName>
        <PriceTag>
          1 x{" "}
          <SalePrice>
            R$ 39,<Cents>90</Cents>
          </SalePrice>{" "}
          por R$ 34,<Cents>90</Cents>
        </PriceTag>
      </ProductInfo>
    </Product>
  );
};

export default ProductItem;
