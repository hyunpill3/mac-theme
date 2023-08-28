import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Wifi, Search, Apple } from '@mui/icons-material';
import background from "../images/wallpaper.jpg";


const styles = {
	root: {
		backgroundImage: `url(${background})`,
		width: '100%',
		height: '100%',
	},
};

function TopBar(props) {
	const { classes } = props;


	return (
		<Grid position='fixed' className={classes.root}>
			<Apple />
				<Grid container justifyContent='flex-end'>
					<Search className={classes.bannerItem}/>
					<Wifi className={classes.bannerItem} />
				</Grid>
		</Grid>
	);
}

TopBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
