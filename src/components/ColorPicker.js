import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import HexSelect from './HexSelect';
import RgbSelect from './RgbSelect';

const CustomInput = withStyles({
    input: {
        width: '150px',
        height: '44px',
        padding: '0 0 0 12px',
        border: '1px solid lightgrey',
        '&:focus': {
            border: '1px solid #80bdff',
            backgroundColor: 'white'
        },
    },
  })(InputBase);

const useStyles = makeStyles({
    root: {
        position: 'relative',
        display: 'flex',
        width: 'max-content'
    }
})

const ColorPicker = props => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <CustomInput value={props.value} readOnly/>
            <RgbSelect 
                value={props.value}
                onChange={props.onChange}/>
            <HexSelect 
                value={props.value}
                colors={props.colors}
                onChange={props.onChange}/>
        </div>
    )
}

export default ColorPicker;