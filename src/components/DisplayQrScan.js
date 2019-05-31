	import React, { Component } from 'react';
	import Instructions from './Instructions';
	import Scanner from './Scanner';
	import AttendanceMsg from './AttendanceMsg';



	class DisplayQrScan extends Component {

		render () {

			return (
				<div class="container">
						<div class="row">
							<div class="col-sm">
							
							</div>
							<div class="col-sm">
							<div className=" display-qr-scan container" >
				
								<div className="row">

									<div className="col text-center">
									<br/>
										<Instructions />
									</div>

								</div>

								<div className="row">

									<div className="col">
										<Scanner />
									</div>

									<div className="col">
										<AttendanceMsg />
									</div>

								</div>
							</div>
							</div>
							<div class="col">
							</div>
						</div>
					</div>
				
				

			);

		}

	}

	export default DisplayQrScan;