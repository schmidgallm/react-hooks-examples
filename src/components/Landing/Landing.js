import React from 'react';
import './Landing.css';

const Landing = () => (
	<div className="wrapper">
		<div className="container jumbotron my-5 bg-success text-white">
			<h1>Fun with React Hooks</h1>
			<p>Working examples of useState, useEffect, and custom hooks</p>
		</div>
		<div className="container mt-5">
			<div className="row">
				<div className="col-lg-4 col-sm-12">State</div>
				<div className="col-lg-4 col-sm-12">Effect</div>
				<div className="col-lg-4 col-sm-12">Custom</div>
			</div>
		</div>
	</div>
);
export default Landing;
