import styled from "styled-components";

const headerStyles = {
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #3a529e;
  `,
  HeaderLogo: styled.a`
    display: block;
    text-decoration: none;
    color: #fff;
    font-size: 30px;
  `,
  HeaderNav: styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  
};

export default headerStyles;
