import React from 'react';

const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		<a className="navbar-brand" href="/">
			React Hooks Examples
		</a>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<a className="nav-link" href="/state">
						useState
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/effect">
						useEffect
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/custom">
						Custom Hooks
					</a>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;