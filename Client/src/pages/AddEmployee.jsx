import React, { useState } from "react";
import TopBar from "./TopBar";
import toast from "react-hot-toast";
import MenuPage from "../components/MenuPage";
import { API } from "../Constant/Constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate =useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [empID, setEmpId] = useState("");
  const [position, setPosition] = useState("");
  const [DOJ, setDoj] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const employee = {
        name,
        empID,
        email,
        phone,
        DOJ,
        position,
      };
      await axios.post(`${API}/employee/add-emp`, employee)
      if (employee && employee.data.success) {
        navigate("/");
        toast.success(employee && employee.data.message);
      } else {
        toast.error(employee.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <TopBar />
      <div className="row">
        <div className="col-md-3">
          <MenuPage />
        </div>
        <div className="col-md-9">
          <section className="vh-100 gradient-custom">
            <div className="container pt-2  h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div
                    className="card shadow-2-strong card-registration"
                    style={{ borderRadius: 15 }}
                  >
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                        ADD EMPLOYEE
                      </h3>
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="firstName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="firstName">
                                Name Of Employee
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="number"
                                id="EMPId"
                                value={empID}
                                onChange={(e) => setEmpId(e.target.value)}
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="lastName">
                                EMP-ID
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 d-flex align-items-center">
                            <div className="form-outline datepicker w-100">
                              <input
                                type="date"
                                className="form-control form-control-lg"
                                value={DOJ}
                                onChange={(e) => setDoj(e.target.value)}
                                id="joindayDate"
                              />
                              <label htmlFor="DOJDate" className="form-label">
                                Date Of Joining
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="position">
                                position
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="email"
                                id="emailAddress"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="emailAddress"
                              >
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                type="tel"
                                id="phoneNumber"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="phoneNumber"
                              >
                                Phone Number
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-2">
                          <input
                            className="btn btn-primary btn-lg"
                            type="submit"
                            defaultValue="Submit"
                            onClick={handleSubmit}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
