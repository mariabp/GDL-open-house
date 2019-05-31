import React, { Component } from 'react';
import ShowDate from './ShowDate';
import './Header.css';
import {NavLink} from 'react-router-dom';


class Header extends Component {

	render () {

		return (

			<div className="header">
				<div className="row">

					<nav className="navbar">
						<div className="col-sm-5">
							<div className="navbar-brand" >
								<img className="logo img-fluid" alt="logo" src={require("../images/logo.png" )}/>
							</div>
						</div>

						<div className="col-sm-5">
							<ShowDate />
						</div>

						<div className="col-sm-2">
						<ul className="nav-menu ">
									<NavLink className="assitance  navitem" to="/scanner">Asistencia</NavLink>
								 	<NavLink className="home navitem" exact to="/">Inicio</NavLink>
								</ul>
						</div>



					</nav>
				</div>

			</div>


		);

	}

}

export default Header;