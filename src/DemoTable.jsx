
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DataGridPro, GridColumnMenu } from "@mui/x-data-grid-pro";
import { Button, FormControl, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuFilter from "./Filter/Menu";




const ITEM_HEIGHT = 48;


const dataTest = [
    { "id": 1, "name": "John", "lastName": "Doe", age: 15 },
    { "id": 2, "name": "Jane", "lastName": "Smith", age: 15 },
    { "id": 3, "name": "Bob", "lastName": "Johnson", age: 15 },
    { "id": 4, "name": "Alice", "lastName": "Williams", age: 15 },
    { "id": 5, "name": "Charlie", "lastName": "Brown", age: 15 },
    { "id": 6, "name": "Eva", "lastName": "Miller", age: 15 },
    { "id": 7, "name": "Frank", "lastName": "Jones", age: 15 },
    { "id": 8, "name": "Grace", "lastName": "Davis", age: 15 },
    { "id": 9, "name": "Henry", "lastName": "Wilson", age: 15 },
    { "id": 10, "name": "Ivy", "lastName": "Taylor", age: 15 },
    { "id": 11, "name": "John", "lastName": "Does", age: 15 },
]




export default function DemoTable() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };
    const [filter, setFilter] = useState({})

    const [filteredData, setFilteredData] = useState(dataTest)



    const colums = [
        {
            field: 'id',
            headerName: "ID",
            type: "number",
            width: 150,
        },
        {
            field: 'name',
            headerName: "Name",
            type: "string",

        },
        {
            field: 'lastName',
            headerName: "Last Name",
            type: "string",

        },

        {
            field: 'actions',
            headerName: "",
            disableColumnMenu: true,
            sortable: false,
            // renderHeader: () => {
            //     return <Button onClick={() => { setFilteredData(data) }}><CloseIcon /> </Button>
            // },

            type: "string",
        }


    ]

    const [data, setData] = useState(dataTest)




    const filterData = (inputValue) => {

        console.log(data)
        const filter = data.filter(data => {
            return Object.values(data).filter(value => {
                return `${value}`.toLowerCase().includes(inputValue.toLowerCase())
            }).length > 0


        })
        console.log(data)

        setFilteredData(filter)
        handleColumnMenuClose();

    }


    function CustomMenu(props) {
        const [formData, setFormData] = useState({
            filterValue: "",
            filterOption: "startsWidth",
        });
        const handleChange = (e) => {
            const { name, value } = e.target;

            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };

        console.log(props.colDef.type, "filterType")

        if (props.colDef.type == "string") {
            return (
                <FormControl fullWidth sx={{ padding: 2 }}>
                    <Select
                        name="filterOption"
                        value={formData.filterOption}
                        onChange={handleChange}
                        size="small"
                    >
                        <MenuItem value="startsWidth">Starts With</MenuItem>
                        <MenuItem value="isEqualTo">Is Equal To</MenuItem>
                        <MenuItem value="contains">Contains</MenuItem>
                    </Select>
                    <TextField
                        value={formData.filterValue}
                        name="filterValue"
                        onChange={handleChange}
                        placeholder="Value"
                        variant="outlined"
                        size="small"
                        sx={{ pt: 2 }}
                    />
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="space-between"
                        sx={{ pt: 2 }}
                    >
                        <Button
                            // id={id}
                            variant="outlined"
                            color="secondary"
                            size="small"
                            sx={{ px: 4 }}
                        // onClick={() => cleanFilter(props.colDef.field)}
                        >
                            Clear
                        </Button>
                        <Button
                            // id={id}
                            variant="contained"
                            size="small"
                            sx={{ px: 4 }}
                        // onClick={() => applyFilter(formData, props.colDef.field)}
                        >
                            Filter
                        </Button>
                    </Stack>
                </FormControl>
            );
        }

        return <h1>Otro menu</h1>;
    }


    const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false);

    const handleColumnMenuOpen = () => {
        setIsColumnMenuOpen(true);
    };

    const handleColumnMenuClose = () => {
        setIsColumnMenuOpen(false);
    };


    return (

        <div style={{ width: "100%" }}>
            <DataGridPro columns={colums} rows={filteredData}
                slots={{
                    columnMenu: MenuFilter
                }}


            />
        </div>


    );
}
