import React from "react";

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
  ];
  return (
    <div>
      <h3>Avisos/Lembretes</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Visto</th>
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
              <td>{schedule["col6"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
