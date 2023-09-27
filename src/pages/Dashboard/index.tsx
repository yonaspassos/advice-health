import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md-8">
          <div className="row" style={{ backgroundColor: "grey" }}>
            INPUT
          </div>
          <div className="row">
            <div className="col" style={{ backgroundColor: "red" }}>
              QUADRADO GRANDE
            </div>
            <div className="col ms-1">
              <div className="row" style={{ backgroundColor: "green" }}>
                <div className="col">RETANGULO 1</div>
              </div>
              <div className="row" style={{ backgroundColor: "blue" }}>
                <div className="col">RETANGULO 2</div>
              </div>
            </div>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
