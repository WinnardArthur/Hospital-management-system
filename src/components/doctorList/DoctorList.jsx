import "./doctorList.scss";
import { doctorRows } from "../../dummyData";
import { useState } from "react";
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from "@material-ui/icons";

const DoctorList = () => {
    const [data, setData] = useState(doctorRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: 'Doctor', width: 200, renderCell: (params) => {
            return (
                <div className="doctorListDoctor">
                    <img src={params.row.avatar} alt={params.row.username} className="doctorListImg" />
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <button className="doctorListEdit">Edit</button>
                    <DeleteOutline onClick={() => handleDelete(params.row.id)} className="doctorListDelete" />
                </>
            )
        } }
    ];

    return (
        <div className="doctorList">
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

export default DoctorList
