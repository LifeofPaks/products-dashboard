import React, { useState } from "react";
import "../Users/Users.scss";
import DataTable from "../../Components/DataTable/DataTable";
import addUser from "../../Assets/Images/icons8-add-user-64.png";
import noImage from "../../Assets/Images/noImage.png";
import { UserRows } from "../../Data/Data";
import Add from "../../Components/Add/Add";
import {  Triangle } from "react-loader-spinner";
import Verified from '../../Assets/Images/icons8-verified-64.png'
import notVerified from '../../Assets/Images/icons8-cancel-48.png'

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img src={params.row.img || noImage} alt="avatar" className="avatar" />
      );
    },
  },

  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    type: "string",
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    type: "string",
  },

  {
    field: "email",
    headerName: "Email",
    width: 200,
    type: "string",
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    type: "string",
  },

  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },

  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
    renderCell: (params) => {
      return (
        <img src={params.row.verified ? Verified : notVerified} alt="verified" className="verified" />
      );
    },
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="users">
        <div className="info">
          <div className="title">
            <h1>Users</h1>
            <button onClick={() => setOpen(true)}>
              Add
              <img src={addUser} alt="add user" />
            </button>
          </div>

          <DataTable slug="users" columns={columns} rows={UserRows} />
        </div>
        {open && <Add slug="User" columns={columns} setOpen={setOpen} />}
      </div>

      <div className="loader">
        <Triangle
          height="80"
          width="80"
          color="#fff"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Users;
