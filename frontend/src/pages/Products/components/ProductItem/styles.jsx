import styled from "styled-components";

export const Product = styled.div`
  width: 1fr;
  padding: 16px 0px;
  border-bottom: 1px solid #dfe3e8;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 48px;
  height: 45px;
  border: 1px solid #dfe4e8;
`;

export const ProductName = styled.p`
  margin-left: 16px;
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
