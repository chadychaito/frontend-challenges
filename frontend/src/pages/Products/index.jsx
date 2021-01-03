import Container from "../../components/ContainerSection";
import TitleSection from "../../components/TitleSection";
import ProductItem from "./components/ProductItem";

const Products = () => {
  return (
    <Container>
      <TitleSection title="Produtos" />
      <ProductItem />
    </Container>
  );
};

export default Products;
