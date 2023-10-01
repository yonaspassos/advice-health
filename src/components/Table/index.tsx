import React from "react";
import { BsCashCoin } from "react-icons/bs";
import styled from "styled-components";

const Table = () => {
  const data = [
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
    {
      col2: "coluna 2",
      col3: "coluna 2",
      col4: "coluna 2",
      col5: "coluna 2",
      col6: "coluna 2",
      col7: "coluna 2",
    },
  ];
  return (
    <div className="col h-100 d-flex flex-column">
      <h3 className="mt-3">Avisos/Lembretes</h3>
      <div className="overflow-y-auto d-flex flex-1">
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th className="th-lg">Paciente</th>
              <th>Status</th>
              <th>Procedimento</th>
              <th>Convênio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((schedule, index) => (
              <tr key={index}>
                <td>
                  <input className="form-check-input" type="checkbox" />
                </td>
                <td>{schedule["col2"]}</td>
                <td>{schedule["col3"]}</td>
                <td>{schedule["col4"]}</td>
                <td>{schedule["col5"]}</td>
                <td>
                  <div className="d-flex flex-row gap-1">
                    <Button>
                      <BsCashCoin />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Button = styled.button`
  &:hover {
    color: #3984b8;
  }
  border: none;
  cursor: pointer;
  background: transparent;
`;

export default Table;
