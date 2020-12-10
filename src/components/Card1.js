import React from "react";
import './Card.css'

function Card1() {
  return (
	<div>
	<a href="/tietoa" style={{ textDecoration: 'none' }}>
		<div className="mystyle1" style={{cursor: 'pointer'}} >
			<div className="card">
				<img className="myImg" src="jaakkonaama.png" alt="avatar"/>
				<div className="container">
					<h4>Tietoja yhtyeestä</h4> 
				</div>
				<div className="text">Yhtye perustettiin vuonna 95</div>
			</div>
		</div>
		</a>
	</div>
  );
}

export default Card1;