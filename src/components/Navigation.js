import React from "react";
import './Navigation.css'


function Navigate() {
	
	return (
	<div>
		<div className="Navi">
			<a className="logo" href="/" ><img className="imgLogo" src="jarijataikalogo.png" alt="logo"/></a>
			<a className="logo" href="https://www.facebook.com/JariTaika-191704827574713/" ><img className="imgLogo1" src="facebook.png" alt="logo"/></a>
			<a className="content" href="/yhteystiedot" >Yhteystiedot</a>
			<a className="content" href="/tietoa" >Tietoa yhtyeestä</a>
			<a className="content" href="/palvelut" >Palvelut</a>
			<a className="content" href="/" >Etusivu</a>
		</div>
	</div>
	)
}

export default Navigate