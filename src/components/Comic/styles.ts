import styled from "styled-components";
import { spacing } from '../../style';

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

interface buttonProp {
  active?: boolean;
  paging?: boolean;
}

export const Button = styled.button<buttonProp>`
  background-color: ${props=>props.active ? "#035b59": "#EEEDEF"};
  color: ${props=>props.active ? "white": ""};
  outline:none;
  border: ${props=>props.active ?"2px solid #CE9031":"1px solid"};
  border-radius:${spacing.xs}px;
  padding:${spacing.xs}px;
  cursor: pointer;
  width: ${props=>props.paging ? "30px":""};
  height: ${props=>props.paging ? "30px":""};
`;

