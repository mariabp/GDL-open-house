import React, { Component } from 'react';



class ShowStats extends Component {

	render () {

		return (

			<div className="container" >

				<div className="row">

					<div className="col">
						<div className="stats">Ausencias<p>2</p></div>
					</div>

					<div className="col">
						<div className="stats">Retardos<p>5</p></div>
					</div>

					<div className="col">
						<div className="stats">Drop Out<p>3</p></div>
					</div>

				</div>

			</div>

		);

	}

}

export default ShowStats;