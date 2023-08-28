import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Wifi, Search, Apple } from '@mui/icons-material';

const styles = {
	root: {
		backgroundColor: 'black !important',
		boxShadow: 'none',
	},
	toolbar: {
		minHeight: '0px !important',
		height: 40,
	},
	bannerItem: {
		marginLeft: '8px !important',
	}
};

const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };


function TopBar(props) {
	const { classes } = props;
	const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', options).replace(/,/g, ''));

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date().toLocaleTimeString('en-US', options).replace(/,/g, '')), 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<AppBar position='fixed' className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Apple />
				<Grid container justifyContent='flex-end'>
					<Search className={classes.bannerItem}/>
					<Wifi className={classes.bannerItem} />
					<Typography className={classes.bannerItem} variant='body2'>
						{time}
					</Typography>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

TopBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
