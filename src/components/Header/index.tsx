import React from "react";

const Header = () => {
  return (
    <header className="container-fluid border-bottom">
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
    </header>
  );
};
export default Header;
