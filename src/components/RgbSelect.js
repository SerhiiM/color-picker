import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { convertHexToRGB, convertRGBtoHex } from '../utils';
import CustomListItem from './CustomListItem';

const useStyles = makeStyles({
    colorWrapper: {
        cursor: 'pointer',
        width: 'fit-content',
        border: 'solid 1px lightgrey',
        '&:focus': {
            border: '1px solid #80bdff'
        },
    },
    colorPreview: {
        width: '25px',
        height: '20px',
        margin: '12px',
    },
    menu: {
        position: 'absolute',
        top: '50px',
        right: 0,
        width: '200px',
        padding: '20px'
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
})

const RgbSelect = props => {
    const [rgbValues, setRGBvales] = useState({});
    const [openedMenu, setOpenedMenu] = useState(false);

    const styles = useStyles();

    useEffect(() => {
        const rgbColor = convertHexToRGB(props.value);
        setRGBvales(rgbColor);
    }, [props.value])

    const changeColorHandler = (e, newValue, color) => {
        switch (color) {
            case 'r': 
                setRGBvales(prevRGB => ({...prevRGB, r: newValue}));
                break;
            case 'g':
                setRGBvales(prevRGB => ({...prevRGB, g: newValue}));
                break;
            case 'b':
                setRGBvales(prevRGB => ({...prevRGB, b: newValue}));
                break;
        }
    }

    const cancelHandler = () => {
        const rgbColor = convertHexToRGB(props.value);
        setOpenedMenu(false);
        setRGBvales(rgbColor);
    }

    const submitHandler = () => {
        const hexColor = convertRGBtoHex(rgbValues);
        setOpenedMenu(false);
        props.onChange(hexColor);
    }

    const onClickAwayHandler = () => {
        setOpenedMenu(false)
    }

    return (
        <div className={styles.wrapper}>
                <Paper 
                    className={styles.colorWrapper}
                    variant="outlined"
                    square
                    role="button"
                    aria-haspopup="listbox"
                    tabIndex="0"
                    aria-labelledby="input-select"
                    onKeyPress={e => e.key === 'Enter'? setOpenedMenu(prev => !prev): null}
                    onClick={() => setOpenedMenu(prev => !prev)}>
                    <Paper
                        elevation={0}
                        square
                        className={styles.colorPreview}
                        style={{backgroundColor: `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`}}/>
                </Paper>
                {openedMenu ? (
                    <ClickAwayListener onClickAway={onClickAwayHandler}>
                    <Paper elevation={5} className={styles.menu}>
                        <CustomListItem label="R">
                            <Slider
                                defaultValue={rgbValues.r}
                                step={1} min={0} max={255}
                                onClick={e => e.preventDefault()}
                                onChange={(e, newValue) => changeColorHandler(e, newValue, 'r')}/>
                        </CustomListItem>
                        <CustomListItem label="G">
                            <Slider
                                defaultValue={rgbValues.g}
                                step={1}
                                min={0}
                                max={255}
                                onChange={(e, newValue) => changeColorHandler(e, newValue, 'g')}/>
                        </CustomListItem>
                        <CustomListItem label="B">
                            <Slider
                                defaultValue={rgbValues.g}
                                step={1}
                                min={0}
                                max={255}
                                onChange={(e, newValue) => changeColorHandler(e, newValue, 'b')}/>
                        </CustomListItem>
                        <div className={styles.buttonsContainer}>
                            <Button onClick={cancelHandler}>Cancel</Button>
                            <Button onClick={submitHandler}>OK</Button>
                        </div>
                    </Paper>
                    </ClickAwayListener>
                ): null}
        </div>
    )
}

export default RgbSelect;