import React from "react";
import "../DataTable/DataTable.scss";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import View from '../../Assets/Images/icons8-view-48.png'
import Delete from '../../Assets/Images/icons8-delete-60.png'
import { Link } from "react-router-dom";


const DataTable = (props) => {

    const handleDelete = (id)=>{
        console.log(id,'has been deleted')
    }

    const actionColumn = {
        field: 'actions', headerName: 'Actions', width: 90,
        renderCell : (params)=>{
            return <div className="actions">
                <div className="view">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src={View} alt="edit" />
                    </Link>
                </div>
  
                <div className="delete" onClick={  ()=> handleDelete(params.row.id)}>
                     <img src={Delete} alt="view" />
                </div>
            </div>
        }
    }

  return (
    <div className="dataTable">
        <DataGrid className="dataGrid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{toolbar: GridToolbar}}
          slotProps={{
            toolbar:{
                showQuickFilter: true,
                quickFilterProps: {debounceMs: 500},
            }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
        />
    </div>
  );
};

export default DataTable;
