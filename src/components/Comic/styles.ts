import styled from "styled-components";
import { spacing } from '../../style';

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Row = styled.div`
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


export const Image = styled.img`
    width: 550px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (max-aspect-ratio: 1/1){
      width: 90%;
    }
`

export const Relative = styled.div`
  position: relative;
`

export const InvisbleButton = styled.button<{pos?:string}>`
    position: absolute;
    left: ${props=>props.pos==="left"?"0px":""};
    right: ${props=>props.pos==="right"?"0px":""};
    width: 50%;
    height: 100%;
    background: none;
    color: transparent;
    border: 0px;
    outline: 0px;
`