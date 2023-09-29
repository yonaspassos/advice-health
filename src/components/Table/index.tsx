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
            <th>Coluna 1</th>
            <th className="th-lg">Coluna 2</th>
            <th>Coluna 3</th>
            <th>Coluna 4</th>
            <th>Coluna 5</th>
            <th>Coluna 6</th>
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
