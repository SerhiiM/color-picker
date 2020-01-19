import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typografy from '@material-ui/core/Typography';

const CustomListItem = props => {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <Typografy>{props.label}</Typografy>
            </Grid>
            <Grid item xs>{props.children}</Grid>
        </Grid>
    )
}

export default CustomListItem;