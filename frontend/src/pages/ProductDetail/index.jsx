import { ContainerSection } from "../../components/ContainerSection/styles";
import { ImageWrapper, Image } from "./styles";

import TitleSection from "../../components/TitleSection";
import ImageMock from "../../assets/imageMockDetail.png";
import EditForm from "./components/EditForm";
import BackButton from "../../components/BackButton";

const ProductDetail = () => {
  return (
    <ContainerSection>
      <BackButton label="Produtos" destination="/produtos" />
      <TitleSection title="Nome do produto com até duas linhas inteiras..." />
      <ImageWrapper>
        <Image src={ImageMock} />
      </ImageWrapper>
      <EditForm />
    </ContainerSection>
  );
};

export default ProductDetail;
