	import React, { Component } from 'react';
	import ShowAttendance from './ShowAttendance';
	import ShowStats from './ShowStats';

	class Home extends Component {

		render () {

			return (

				<div className="container" >
					<div className="row">
						<div className="col-6">
							<ShowAttendance />
						</div>
						<div className="col-6">
							<ShowStats />
						</div>
						<br/>
						<br/>
						<br/>
						<div>
						<img className="logo img-fluid" alt="list" src={require("../images/lista.png" )}/>
						</div>

					</div>
				</div>

			);

		}

	}

	export default Home;