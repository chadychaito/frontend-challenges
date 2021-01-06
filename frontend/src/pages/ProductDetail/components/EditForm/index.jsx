import {
  InputGroup,
  Label,
  Input,
  Stock,
  Price,
  Dimensions,
  DimensionItem,
} from "./styles";

const EditForm = () => {
  return (
    <>
      <Stock>
        <InputGroup>
          <Label>Estoque</Label>
          <Input type="number" />
        </InputGroup>
        <div>+/-</div>
      </Stock>
      <Price>
        <InputGroup>
          <Label>Preço de venda</Label>
          <Input type="number" />
        </InputGroup>
        {/* <InputGroup>
          <Label>Preço promocional</Label>
          <Input type="number" />
        </InputGroup> */}
      </Price>
      <Dimensions>
        <DimensionItem>
          <Label>Peso</Label>
          <Input type="number" />
          <Label>kg</Label>
        </DimensionItem>
        <DimensionItem>
          <Label>Altura</Label>
          <Input type="number" />
          <Label>cm</Label>
        </DimensionItem>
        <DimensionItem>
          <Label>Largura</Label>
          <Input type="number" />
          <Label>cm</Label>
        </DimensionItem>
        <DimensionItem>
          <Label>Profundidade</Label>
          <Input type="number" />
          <Label>cm</Label>
        </DimensionItem>
      </Dimensions>
    </>
  );
};

export default EditForm;
