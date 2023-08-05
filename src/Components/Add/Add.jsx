import React from "react";
import "../Add/Add.scss";
import CloseBtn from "../../Assets/Images/icons8-close-60.png";

const Add = ({ slug, columns, setOpen }) => {

  const handleSubmit =(e)=>{
    e.preventDefault()

  }


  return (
    <div className="add">
      <div className="modal">
          <span className="close" onClick={() => setOpen(false)}>
            <img src={CloseBtn} alt="close" className="closeBtn" />
          </span>

          <h1>Add New {slug}</h1>
          <form onSubmit={handleSubmit}>
            {columns
              .filter((item) => item.field !== "id" && item.field !== "avatar" && item.field !== "img" )
              .map((column) => (
                <div className="item">
                  <label>{column.headerName}</label>
                  <input type={column.type} placeholder={column.headerName} />
                </div>
              ))}
              <button>Add</button>
          </form>
        </div>
      </div>
  );
};

export default Add;
