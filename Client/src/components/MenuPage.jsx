import React from "react";
import { NavLink } from 'react-router-dom'


const MenuPage = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4></h4>
          <NavLink
            to="/"
            className="list-group-item list-group-item-action"
          >
            EMPLOYEE LIST
          </NavLink>
          <NavLink
            to="/addemployee"
            className="list-group-item list-group-item-action"
          >
            ADD EMPLOYEE
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
