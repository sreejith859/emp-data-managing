
import React, { useState } from "react";
import axios from "axios";
import { API } from "../Constant/Constant";
import Papa from "papaparse";


const TopBar = () => {
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(`${API}/employee/get-emp`);
      return response.data.employee;
    } catch (error) {
      console.error("Error fetching employee data:", error);
      return [];
    }
  };

  const convertToCSV = (data) => {
    const csv = Papa.unparse(data, {
      header: true,
    });
    return csv;
  };

  const handleDownloadCSV = async () => {
    const employeeData = await fetchEmployeeData();
    const csvData = convertToCSV(employeeData);
  
    const blob = new Blob([csvData], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "employee_data.csv";
    link.click();
  };



  return (
    <div className='d-flex'>

      <h1 className='text-center '>EMPLOYEE DATA</h1>
      <button className='btn btn-dark ms-auto p-2' onClick={handleDownloadCSV}>Download List</button>
    </div>
  )
}

export default TopBar