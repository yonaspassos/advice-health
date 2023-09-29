import React from "react";
import { BsFillPencilFill, BsSearch } from "react-icons/bs";

const SchedulerTable = () => {
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
    <>
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
              <td>
                <button className="btn">
                  <BsFillPencilFill />
                </button>
                <button className="btn">
                  <BsSearch />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default SchedulerTable;
