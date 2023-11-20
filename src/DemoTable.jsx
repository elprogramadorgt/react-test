
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
import { DataGridPro } from "@mui/x-data-grid-pro";
import { Button, FormControl, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';




const ITEM_HEIGHT = 48;


const dataTest = [
    { "id": 1, "name": "John", "lastName": "Doe" },
    { "id": 2, "name": "Jane", "lastName": "Smith" },
    { "id": 3, "name": "Bob", "lastName": "Johnson" },
    { "id": 4, "name": "Alice", "lastName": "Williams" },
    { "id": 5, "name": "Charlie", "lastName": "Brown" },
    { "id": 6, "name": "Eva", "lastName": "Miller" },
    { "id": 7, "name": "Frank", "lastName": "Jones" },
    { "id": 8, "name": "Grace", "lastName": "Davis" },
    { "id": 9, "name": "Henry", "lastName": "Wilson" },
    { "id": 10, "name": "Ivy", "lastName": "Taylor" }
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
            width: 150
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
            renderHeader: () => {
                return <Button onClick={() => { setFilteredData(data) }}><CloseIcon /> </Button>
            }
            // type: "string",
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

        const [inputValue, setInputValue] = useState('');

        const handleInputChange = (event) => {
            console.log(event.target.value, "value")
            setInputValue(event.target.value);
        };

        const [selectedValue, setSelectedValue] = useState('');

        const handleChange = (event) => {
            setSelectedValue(event.target.value);
        };

        // if(props.colRef.fie)
        // console.log(props.colDef.field, props.colDef.type)

        if (props.colDef.field == "name") {
            return (<FormControl fullWidth>
                <Select
                    // value={option}
                    // onChange={handleChangeFilterOperator}
                    size="small"
                >
                    <MenuItem value="startWidth">Starts With</MenuItem>
                    <MenuItem value="isEqualTo">Is Equal To</MenuItem>
                    <MenuItem value="contains">Contains</MenuItem>
                </Select>
                <TextField
                    value={inputValue}
                    onChange={handleInputChange}
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
                    // onClick={onClickClean}
                    >
                        Clear
                    </Button>
                    <Button
                        // id={id}
                        variant="contained"
                        size="small"
                        sx={{ px: 4 }}
                        onClick={() => filterData(inputValue)}
                    >
                        Filter
                    </Button>
                </Stack>
            </FormControl>)
        }

        return <h1>Otro menu</h1>
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
                    columnMenu: CustomMenu
                }}
                onColumnMenuOpen={handleColumnMenuOpen}
                onColumnMenuClose={handleColumnMenuClose}

            />
        </div>


    );
}
