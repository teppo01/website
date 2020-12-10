import React from "react";
import { Link } from "react-router-dom";

import "./Services.css";


import Navigate from "./components/Navigation"
import MobileNav from "./components/NavMenu"
import Footer from "./components/Footer"

function Services() {
  return (

<div className="s-bg">

	
	<div className="s-Navbar s-Desktop">
		<Navigate />
	</div>
	
	<div className="s-Navbar s-Mobile">
		<div className="s-Mobile-Nav">
			<a href="/" ><img className="imgLogo2" src="jarijataikalogo.png" alt="logo"/></a>
			<MobileNav />
		</div>
	</div>
	
	<div className="s-box">
			<div className="s-enter"></div>
		<div className="s-header">
			Palvelut
		</div>

		<div className="s-text-content">
			<div className="s-enter"></div>
			<div>Voit tilata meidät esimerkiksi:</div>
			<div>-Tanssilavoille</div>
			<div>-Kesäjuhliin</div>
			<div>-Häihin</div>
			<div>-Pikkujouluihin ja peijaisiin</div>
			<div>-Ravintoloihin ja terasseille</div>
			<div>-Synttäreille</div>
			<div className="s-enter"></div>
			<div>Lisäksi tulemme minne tahansa, missä kaivataan musiikkia piristämään menoa tai ylläpitämään leppoisaa tunnelmaa. Ota siis yhteyttä ja kysy tarjousta!</div>
			<div>Ohjelmisto asiakkaan toiveiden mukaan</div>
			<div className="s-enter"></div>
			<div>Tarjoamme valmiina 16 settivaihtoehtoa, joiden joukossa on sekä menevämpiä tanssipotpureita,
			että rauhallisempiin tilaisuuksiin
			taustamusiikiksi soveltuvia settejä.
			Pyrimme vastaamaan mahdollisimman hyvin asiakkaan toiveisiin
			ohjelmiston osalta, joten neuvotellaan extrakappaleista tarpeen mukaan.
			Valmiiden esimerkkien joukosta on helppo poimia omaa makua ja haluttua
			tunnelmaa vastaava setti.</div>
			<div className="s-enter"></div>
			<div className="s-text">Lataa ohjelmamme Excel-tiedostona <Link to="/Taika_Ohjelmisto.xls" target="_blank" download><img src="icon-excel.gif" alt="avatar"/></Link></div>
			<div className="s-text">Kuuntele <a href="https://open.spotify.com/artist/3AXzj9CsJxWYHX9IXtlFT2">Spotifyssä</a></div>
			<div className="s-enter"></div>




		</div>
		
	</div>
		
	<div>
		<Footer />	
	</div>
	
</div>

  );
}

export default Services