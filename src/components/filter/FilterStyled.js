import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 100%;
  /*background-color: #1e90ff;*/
  background-color: #009ad5;
  margin-top: 0px;
`;

export const FilterBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1vw;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 15px;
  margin: 0 10px;
`;

export const FilterInput = styled.input`
  padding: 7px 0;
  width: 98%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #eee;
  border-left: 0;
  transition: all 0.2s ease;
  border-radius: 10px;
  background-color: transparent;
  outline: none;
  margin-left: 10px;
  background: white;
  color: gray;
  padding-left: 5px;

  &:focus {
    border-bottom-color: #eee;
    outline: 0;
  }
`;

export const FilterSelect = styled.select`
  border-radius: 10px;
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const FilterButton = styled.button`
  display: block;
  width: 100%;
  height: 35px;
  border: 0;
  color: #fff;
  background-color: #9f9f9f;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  padding-left: 5px;
  margin: 0px 10px;
`;

export const FilterMensaje = styled.p`
  padding-bottom: 15px;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #ffff;
`;
