import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../Constant/Constant";
import TopBar from "./TopBar";
import MenuPage from "../components/MenuPage"
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [employee, setEmployee] = useState([]);
  const getEmployees = async () => {
    try {
      const { data } = await axios.get(`${API}/employee/get-emp`);
      setEmployee(data.employee);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <TopBar />
      <div className="row">
        <div className="col-md-3">
            <MenuPage/>
        </div>
        <div className="col-md-9">
          <Toaster/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">EMPID</th>
              <th scope="col">DOJ</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
            </tr>
          </thead>
          <tbody>
            {employee?.map((d, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{d?.name}</td>
                  <td>{d?.empID}</td>
                  <td>{d?.DOJ}</td>
                  <td>{d?.email}</td>
                  <td>{d?.phone}</td>
                  <td>{d?.positon}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default HomePage;
