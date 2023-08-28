import React, { useState, useEffect } from 'react';
import { PropTypes } from "prop-types";
import './App.css';
import TopBar from './Components/TopBar';
import Dock from './Components/Dock';
import Desktop from './Components/Desktop';
import { withStyles } from '@mui/styles';

const styles = {
	root: {
		width: '100%',
    	background: 'black',
    	backgroundImage: 'url("./resources/wallpaper.jpg")',
  	},
};


function App(props) {
	const { classes } = props;

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch("/api")
		.then((res) => res.json())
		.then((data) => setData(data.message));
	}, []);

	return (
    	<div className={classes.root}>
      		<TopBar />
			<Desktop />
			<p>{!data ? "Loading..." : data}</p>
      		<Dock />
    	</div>
  	);
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
