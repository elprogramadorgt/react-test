import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Co2Sharp } from "@mui/icons-material";
import { useCallback } from "react";
import { useGridApiContext } from "@mui/x-data-grid-pro";


const FILTER_OPTIONS = {
    startsWidth: () => {
        console.log(" llama filtro startsWidth")
        // value = value.toLowerCase();
        // return data.filter((data) => {
        //     return data[filter]?.toLowerCase().startsWith(value);
        // });
    },
    isEqualTo: () => {

    }

}


const MenuFilter = (props) => {
    const apiRef = useGridApiContext();

    const { colDef } = props;

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

    const [filterOption, setFilterOption] = useState('');

    const handleChangeOption = (event) => {
        setFilterOption(event.target.value);
    };


    switch (colDef.type) {
        case "string":
            return <><FormControl fullWidth sx={{ padding: 2 }}>
                <Select
                    name="sta"
                    value={filterOption}
                    onChange={handleChangeOption}
                    size="small"
                >
                    <MenuItem value="startsWidth">Starts With</MenuItem>
                    <MenuItem value="isEqual">Is Equal To</MenuItem>
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
                    // onClick={() => applyFilter(formData, colDef.field)}
                    >
                        Filter
                    </Button>
                </Stack>
            </FormControl>
            </>


    }




    return <h1>Nuevo Menu</h1>


}

export default MenuFilter