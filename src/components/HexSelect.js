import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const CustomInput = withStyles({
    input: {
        border: '1px solid lightgrey',
        '&:focus': {
            border: '1px solid #80bdff',
            backgroundColor: 'white'
        },
    },
  })(InputBase);

const useStyles = makeStyles({
    colorPreview: {
        width: '20px',
        height: '20px',
        marginRight: '24px'
    },
    icon: {
        width: '30px',
        height: '30px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '-15px 0 0 -15px'
    },
    select: {
        padding: '0 0 0 0 !important',
        width: '49px',
        height: '44px'
    },
    paper: {
        position: 'absolute',
        top: '50px !important',
        left: '0 !important',
        margin: '0 0 0 120px',
    }
})

const HexSelect = props => {
    const styles = useStyles();
    const renderValue = React.useCallback(()=><div></div>,[])
    const handleSelectChange = React.useCallback(e => props.onChange(e.target.value),[props])
    return (
        <FormControl className={styles.wrapper}>
            <Select
                value={props.value}
                classes={{
                    select: styles.select,
                    icon: styles.icon, 
                }}
                onChange={handleSelectChange}
                input={<CustomInput/>}
                renderValue={renderValue}
                MenuProps={{
                    classes: {
                        paper: styles.paper
                    }
                }}>
                {props.colors.map(color => 
                    <MenuItem
                        key={color}
                        value={color}>
                            <div className={styles.colorPreview} style={{backgroundColor: color}}></div>
                            <span>{color}</span>
                    </MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default HexSelect;