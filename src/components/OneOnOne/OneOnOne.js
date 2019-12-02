import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import EverestRepo from '../../repos/EverestRepo';
import ItemOneOnOne from './ItemOneOnOne';
import * as _ from 'lodash';

import NamesRide from '../../repos/ConstantsNames';

const styles = theme => ({
    card: {
        padding: theme.spacing.unit,
        height: `calc(100vh - 48px - ${theme.spacing.unit * 2}px)`
    }
});

class OneOnOne extends React.Component {
    state = {
        criarItem: false,
        crafters: []
    };

    componentWillMount() {
        EverestRepo.listarEverest().then(crafters => {
            let squadsRide = [];
            if (crafters) {
                crafters.forEach(crafter => {
                    NamesRide.forEach(name => {
                        if (crafter.name === name.name) {
                            squadsRide.push(crafter);
                        }
                    });
                });
            }

            this.setState({
                crafters: squadsRide
            });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.card}>
                <Grid container spacing={8} direction='row'>
                    {_.chain(this.state.crafters)
                        .orderBy(crafter => (crafter.meeting ? crafter.meeting.lastMeeting : ''))
                        .map(crafter => <ItemOneOnOne key={crafter.name} crafter={crafter} />)
                        .value()}
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(OneOnOne);
