import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer className="container-fluid border-bottom">
      <div className="row p-3">
        <div className="col col-md-10">
          <h1>Consultório Médico</h1>
        </div>
        <div className="col col-md-2 d-flex justify-content-center">
          <img
            className="rounded-circle"
            src="https://i.pravatar.cc/50?img=18"
            alt="imagem de perfil"
          />
        </div>
      </div>
    </HeaderContainer>
  );
};
export const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 8px 0px 40px -8px rgba(57, 59, 62, 1);
  z-index: 1;
`;
export default Header;
