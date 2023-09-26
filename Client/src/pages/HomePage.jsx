import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../Constant/Constant";
import TopBar from "./TopBar";
import MenuPage from "../components/MenuPage";
import toast, { Toaster } from "react-hot-toast";
import { Modal, Form, Input } from "antd";

const HomePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [empID, setEmpId] = useState("");
  const [position, setPosition] = useState("");
  const [DOJ, setDoj] = useState("");

  const { Item } = Form;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingEmployee, setEditingEmployee] = useState(null);

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
  //delete employee
  const handleDelete = async (eid) => {
    try {
      const { data } = await axios.delete(`${API}/employee/delete-emp/${eid}`);
      if (data.success) {
        toast.success("employee data is deleted");
        getEmployees();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("something went wrong in delete ");
    }
  };
  //EDIT
  const showModal = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
    form.setFieldsValue(employee);
  };

  // Function to handle modal submission
  const handleOk = async (e) => {
    e.preventDefault();
    try {
      const { name, empID, email, phone, DOJ, position } = form.getFieldsValue();
      const { data } = await axios.put(`${API}/employee/update/${editingEmployee._id}`, {
        name,
        empID,
        DOJ,
        email,
        phone,
        position
      });
      if (data.success) {
        toast.success(data.message);
        getEmployees(); // Assuming getEmployees is a function to fetch updated data
        setIsModalOpen(false); // Assuming you have a state to control the modal visibility
      } else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error("something wrong");
    }
  };

  // Function to handle modal cancellation
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      <TopBar />
      <div className="row">
        <div className="col-md-3">
          <MenuPage />
        </div>
        <div className="col-md-9">
          <Toaster />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">NAME</th>
                <th scope="col">EMPID</th>
                <th scope="col">DOJ</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col"></th>
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
                    <td>
                      <div className="d-flex">
                        <button
                          className="btn btn-success"
                          onClick={() => showModal(d)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleDelete(d._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Modal
          title="Edit Employee"
          visible={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form form={form} layout="vertical">
            <Item label="Name" name="name">
              <Input />
            </Item>
            <Item label="Employee ID" name="empID">
              <Input />
            </Item>
            <Item label="Date Of Joining" name="DOJ">
              <Input />
            </Item>
            <Item label="EMAIL" name="email">
              <Input />
            </Item>
            <Item label="PHONE" name="phone">
              <Input />
            </Item>
            <Item label="POSITION" name="position">
              <Input />
            </Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default HomePage;
