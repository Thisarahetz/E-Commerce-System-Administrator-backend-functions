import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from "react";
import axios from "../../api/post";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};






export default function AddressForm() {
    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [subcategory, setSubCategory] = useState([]);
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await axios.get("/category");
                //console.log(res.data);
                setCategory(await res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCategory();
    }, []);

    const handleCategory = (event) => {
        const getCategoryid = event.target.value;
        setCategoryId(getCategoryid);
        event.preventDefault();
    }

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };



    useEffect(() => {
        const getSubCategory = async () => {
            try {
                const res = await axios.get(`/category/${categoryId}`);
                //console.log(res.data.cate_Sname);
                setSubCategory(await res.data.cate_Sname);
                console.log(categoryId)
            } catch (err) {
                console.log(err);
            }
        };
        getSubCategory();
    }, [categoryId]);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Select category
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <select name="country" className="form-control" onChange={(e) => handleCategory(e)}>
                        <option>--Select Main Categories--</option>
                        {
                            category.map((getcon) => (
                                <option key={getcon._id} value={getcon._id}> {getcon.cate_Pname}</option>
                            ))
                        }

                    </select>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-chip-label">Sub categories</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {subcategory?.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}

                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                </Grid>

            </Grid>
        </React.Fragment>
    );
}