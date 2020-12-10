import React from "react";
import './Card.css'



function Card() {
  return (
	<div>
	<a href="/palvelut" style={{ textDecoration: 'none' }}>
		<div className="mystyle1" style={{cursor: 'pointer'}} >
			<div className="card">
				<img className="myImg" src="hannunaama.png" alt="avatar"/>
				<div className="container">
					<h4>Palvelut</h4> 
				</div>
				<div className="text">Palveluita on ja löytyy</div>
			</div>
		</div>
		</a>
	</div>
  );
}

export default Card;