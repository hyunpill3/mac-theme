import React, { useRef } from "react";
import { PropTypes } from "prop-types";
import {
	MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import { AppBar, Toolbar, Typography, IconButton, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import chromeIcon from '../images/chrome.png';
import finderIcon from '../images/finder.png';

const styles = {
	root: {
		marginBottom: 10,
		width: 'auto !important',
		background: 'none !important',
		boxShadow: 'none !important',
		left: '0 !important',
		right: '0 !important',

	},
	toolbar: {
		padding: '0px !important',
	},
	icon: {
		width: 50,
	},
	button: {
		top: 'calc((6rem * var(--scale) - 6rem) / 2 * -1)',
		'&:hover': {
			transform: 'scale(1.5)',
		}
	}
};

function Dock(props) {
	const { classes } = props;

	return (
    	<AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }} className={classes.root}>
      		<Toolbar className={classes.toolbar}>
				<Grid container justifyContent='center' className='buttonWrapper'>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='finder' src={finderIcon} className={classes.icon} />
					</IconButton>
					<IconButton className={classes.button}>
						<img alt='chrome' src={chromeIcon} className={classes.icon} />
					</IconButton>
				</Grid>
      		</Toolbar>
    	</AppBar>
  	);
}

Dock.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dock);
