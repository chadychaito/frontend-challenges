import styled from "styled-components";

export const Product = styled.div`
  padding: 16px 0px;
  border-bottom: 1px solid #dfe3e8;
  display: flex;
  align-items: flex-start;
`;

export const ProductInfo = styled.div`
  margin-left: 16px;
`;

export const ProductImage = styled.img`
  width: 48px;
  height: 45px;
  border: 1px solid #dfe4e8;
`;

export const ProductName = styled.p`
  margin: 0;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriceTag = styled.p`
  margin: 8px 0px 0px 0px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #212b36;
`;

export const Cents = styled.span`
  font-size: 9px;
`;

export const SalePrice = styled.span`
  color: #637381;
  text-decoration: line-through;
`;
