import React from "react";

const Smurfs = props => {
	return (
		<ul>
			{props.smurfs.map((smurf, index) => {
				return [
					<li>{`Name: ${smurf.name}`}</li>,
					<li>{`Age: ${smurf.age}`}</li>,
					<li>{`Height: ${smurf.height}`}</li>,
					// WORK IN PROGRESS: DELETE not fully functional yet.
					<button
					// onClick={() => {
					// 	props.delete();
					// }}
					>
						Delete Smurf
					</button>
				];
			})}
		</ul>
	);
};

export default Smurfs;
