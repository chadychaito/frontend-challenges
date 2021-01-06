import { Label, Button } from "./styles";

import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";

const BackButton = ({ label, destination }) => {
  return (
    <Link to={destination}>
      <Button>
        <ArrowLeft />
        <Label>{label}</Label>
      </Button>
    </Link>
  );
};

export default BackButton;
