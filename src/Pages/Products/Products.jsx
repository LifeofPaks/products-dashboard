import React, { useState } from "react";
import "../Products/Products.scss";
import { Triangle } from "react-loader-spinner";
import ProductIcon from "../../Assets/Images/icons8-products-50.png";
import DataTable from "../../Components/DataTable/DataTable";
import Add from "../../Components/Add/Add";
import noImage from "../../Assets/Images/noImage.png";
import { productRows } from "../../Data/Data";
import Available from '../../Assets/Images/icons8-ok-52.png'
import unAvailable from '../../Assets/Images/icons8-unavailable-50.png'

const columns = [

      { field: "id", headerName: "ID", width: 70 },
      {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
          return (
            <img src={params.row.img || noImage} alt="avatar" className="avatar" />
          );
        },
      },

      {
        field: "title",
        headerName: "Title",
        width: 200,
        type: "string",
      },

      {
        field: "color",
        headerName: "Color",
        width: 100,
        type: "string",
      },

      {
        field: "price",
        headerName: "Price",
        width: 100,
        type: "string",
      },

      {
        field: "producer",
        headerName: "Producer",
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
        field: "inStock",
        headerName: "In Stock",
        width: 100,
        type: "boolean",
        renderCell: (params) => {
          return (
            <img src={params.row.inStock ? Available : unAvailable} alt="verified" className="verified" />
          );
        },
      },
];

const rows = []

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="products">
        <div className="users">
          <div className="info">
            <div className="title">
              <h1>Products</h1>
              <button onClick={() => setOpen(true)}>
                Add
                <img src={ProductIcon} alt="add product" />
              </button>
            </div>

            <DataTable slug="products" columns={columns} rows={productRows} />
          </div>
          {open && <Add slug="Product" columns={columns} setOpen={setOpen} />}
        </div>
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

export default Products;
