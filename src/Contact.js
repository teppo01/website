import React from "react";
import { Link } from 'react-router-dom'
import "./Contact.css";
import Navigate from "./components/Navigation"
import MobileNav from "./components/NavMenu"
import Footer from "./components/Footer"

function Contact() {
  return (

<div className="c-bg">

	
	<div className="c-Navbar c-Desktop">
		<Navigate />
	</div>
	
	<div className="c-Navbar c-Mobile">
		<div className="c-Mobile-Nav">
			<a href="/" ><img className="imgLogo2" src="jarijataikalogo.png" alt="logo"/></a>
			<MobileNav />
		</div>
	</div>
	
	<div className="c-box">
			<div className="c-enter"></div>
		<div className="c-header">
			Yhteystiedot
		</div>

		<div className="c-text-content">
			<div className="c-enter"></div>
				<img className="c-myImg" src="kuva04.jpg" alt="avatar"/>
				<div className="c-enter"></div>
				<a className="c-link" href="tel:+358 999999999">Puh: +358 999999999</a>
				<div className="c-enter"></div>
				<a className="c-link" href="mailto:esimerkki@esimerkki.com">Email: jarijataika@gmail.com</a>
				<div className="c-text">Lataa ohjelmamme Excel-tiedostona <Link to="/Taika_Ohjelmisto.xls" target="_blank" download><img src="icon-excel.gif" alt="avatar"/></Link></div>
				<div className="c-text">Kuuntele <a href="https://open.spotify.com/artist/3AXzj9CsJxWYHX9IXtlFT2" >Spotifyssä</a></div>
			<div className="c-gap"></div>
			


		</div>
		
	</div>
		
	<div>
		<Footer />	
	</div>
	
</div>

  );
}

export default Contact;