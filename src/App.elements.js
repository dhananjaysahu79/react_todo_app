import styled , {createGlobalStyle}from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
     box-sizing: border-box;
     padding: 0px;
     margin: 0px;
     font-family: 'Roboto Mono', monospace;
  }
`;

export const Container = styled.div`
   z-index: 1;
   width: 100%;
   margin-right: auto;
   margin-left: auto;
`;

export const Section = styled.div`
    background: #203bf5;
`;

export const Row = styled.div`
   display: flex;
   margin: 0 -15px -15px -15px;
   flex-wrap: wrap;
   flex-direction: row;
`;

export const Column = styled.div`
   flex: 1;
   max-width: 50%;
   flex-basis: 50%;

   @media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
   }
`;
export const Wrapper = styled.div`
  margin: 80px;
  height: 100%;
  align-items: flex-start;
  justify-content: start;
`;
export const Heading = styled.h1`
    font-size: ${({size}) => size};
    font-weight: bold;
    line-height: 1rem;
    color: #fff;
    margin-bottom: 80px;
`;

export const Input = styled.textarea`
    padding: 10px 20px;
    border-radius: 4px;
    background: #101522;
    border-style: none;
    outline: none;
    border: none;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.7);
    margin-bottom: 30px;
    margin-right: 60px;
    color: #fff;
    font-size: 20px;

    &::placeholder {
        color: #fff;
    }
`;

export const Button = styled.button`
   border-radius: 4px;
   background: linear-gradient(to right, #101522, #000);
   padding: 18px 44px;
   font-size: 16px;
   white-space: nowrap;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.7);
   outline: none;
   border: none;
   cursor: pointer;
   color: #fff;
   margin-bottom: 20px;

   &:hover{
      transform: scale(1.02);
      transition: all 0.3s ease-out;
      color: #fff;
   }
`;

export const Card = styled.div`
    min-height: 800px;
    background: #101522;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.7);
    padding: 2px;
`;

export const TodoContainer = styled.div`
   border-radius: 4px;
   background: linear-gradient(to left, #203bf5, #800080);
   padding: 18px 44px;
   font-size: 18px;
   color: #fff;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.7);
   margin-bottom: 20px;
   justify-content: space-between;
   align-items: center;
   display: flex;
   &:hover{
      transform: scale(1.02);
      transition: all 0.3s ease-out;
      color: #fff;
   }
`;

export const TodoText = styled.p`
   color: #fff;
   font-size: 18px;
   margin-right: 30px;
`;

