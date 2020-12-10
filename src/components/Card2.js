import React from "react";
import './Card.css'

function Card2() {
  return (
	<div>
	<a href="/yhteystiedot" style={{ textDecoration: 'none' }}>
		<div className="mystyle1" style={{cursor: 'pointer'}} >
			<div className="card">
				<img className="myImg" src="jarinaama.png" alt="avatar"/>
				<div className="container">
					<h4>Yhteystiedot</h4> 
				</div>
				<div className="text">Yhteystiedot on hyviä</div>
			</div>
		</div>
		</a>
	</div>
  );
}

export default Card2;