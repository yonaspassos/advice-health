import React from "react";
import styled from "styled-components";

const ListItem = () => {
  return (
    <div className="d-flex my-3 align-items-center">
      <ImagePlaceholder className="bg-secondary rounded-circle" />
      <div className="d-flex flex-column flex-grow-1 ms-1">
        <span className="placeholder placeholder-lg w-75 mb-1"></span>
        <span className="placeholder placeholder-sm col-6"></span>
      </div>
    </div>
  );
};

const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
`;

export default ListItem;
