import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1vw;
  margin-top: 50px;
`;

export const CardBoddy = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding-bottom: 1px;
`;

export const CardTittle = styled.h1`
  font-family: Quicksand, arial, sans-serif;
  margin-left: 20px;
`;

export const CardImage = styled.img`
  width: 100%;
  display: block;
`;

export const CardText = styled.p`
  width: 80%;
  margin-left: 20px;
  text-align: justify;
  margin-bottom: 0px;
`;

export const CardButton = styled.button`
  display: block;
  width: 90%;
  border: 0;
  color: #fff;
  background-color: #00c3af;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  margin: auto auto;
  margin-bottom: 10px;
`;

export const CardMensaje = styled.p`
  margin-bottom: 0;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export const CardStyleFlex = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
`;

export const IconStyle = {
  color: "white",
  backgroundColor: "#1E90FF",
  padding: "8px",
  size: "1x"
};

export const CardIconPrice = styled.div`
  color: white;
  background-color: #1e90ff;
  padding: 7px;
  margin-top: 0px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  width: 2rem;
`;

export const CardSubtitle = styled.p`
  background-color: #f7f0f0;
  font-family: Arial;
  padding: 7px;
  margin-top: 0px;
  margin-bottom: 20px;
`;

export const CardFlexDiv = styled.div`
  display: flex;
  margin-left: 20px;
`;
