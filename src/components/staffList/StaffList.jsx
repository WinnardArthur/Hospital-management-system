import "./staffList.scss";
import { staffRows } from "../../dummyData";
import { useState } from 'react';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";


const StaffList = () => {
    const [data, setData] = useState(staffRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100},
        { field: 'staff', headerName: 'Staff', width: 200, renderCell: (params) => {
            return (
                <div className="staffListUser">
                    <img src={params.row.avatar} alt={params.row.username} className="staffListImg" />
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <button className="staffListEdit">Edit</button>
                    <DeleteOutline onClick={() => handleDelete(params.row.id)} className="staffListDelete" />
                </>
            )
        }}
    ]
    return (
        <div className="staffList">
            <DataGrid 
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default StaffList
