import { Product, ProductInfo, ProductImage, ProductName } from "./styles";
import ImageMock from "../../../../assets/imageMock.png";

const ProductItem = () => {
  return (
    <Product>
      <ProductInfo>
        <ProductImage src={ImageMock} />
        <ProductName>
          Nome do produto com até duas linhas inteiras duas linhas inteirasduas
          linhas inteirasduas linhas inteiras
        </ProductName>
      </ProductInfo>
    </Product>
  );
};

export default ProductItem;
