import { ContainerSection } from "../../components/ContainerSection/styles";
import { ImageWrapper, Image } from "./styles";

import TitleSection from "../../components/TitleSection";
import ImageMock from "../../assets/imageMockDetail.png";
import EditForm from "./components/EditForm";

const ProductDetail = () => {
  return (
    <ContainerSection>
      <TitleSection title="Nome do produto com até duas linhas inteiras..." />
      <ImageWrapper>
        <Image src={ImageMock} />
      </ImageWrapper>
      <EditForm />
    </ContainerSection>
  );
};

export default ProductDetail;
