import React from "react";
import { Link } from 'react-router-dom'
import "./Info.css";
import Navigate from "./components/Navigation"
import MobileNav from "./components/NavMenu"
import Footer from "./components/Footer"

function Info() {
  return (

<div className="i-bg">

	
	<div className="i-Navbar i-Desktop">
		<Navigate />
	</div>
	
	<div className="i-Navbar i-Mobile">
		<div className="i-Mobile-Nav">
			<a href="/" ><img className="imgLogo2" src="jarijataikalogo.png" alt="logo"/></a>
			<MobileNav />
		</div>
	</div>
	
	<div className="i-box">
			<div className="s-enter"></div>
		<div className="i-header">
			Tanssiorkesterimme historiaa
		</div>

		<div className="i-text-content">
			<div className="i-enter"></div>
			<div>Taika-yhtye sai alkunsa syksyllä 2004,
			jolloin fonistillamme Jaakko Heikkilällä oli tarve kasata bändi
			muutamaa keikkaa varten Humppilassa sijaitsevaan Otsolan Hovi ravintolaan.
			Jaakko tunsi Humppilassa asuvan Olli Kylä-Markulan ja kysyi tätä rumpaliksi,
			joka puolestaan kysyi Jari Mustajärveä hanuristiksi. Vielä tarvittiin basisti ja laulusolisti
			. Sekä Jarilla, että Ollilla oli yhteisiä soittokokemuksia loimaalaisen Kyösti Vaittisen kanssa,
			joten hänet kutsuttiin bändiin mukaan. Yhtye oli näin saanut alkuperäisen kokoonpanonsa.
			Jaakon myymät keikat hoidettiin sovitusti ja koska homma tuntui toimivan mukavasti päätettiin
			jatkaa harjoittelua ja keikkailua sitä mukaa kun tilauksia tuli.</div>
			<div className="i-enter"></div>
			<div className="i-text">Lataa ohjelmamme Excel-tiedostona <Link to="/Taika_Ohjelmisto.xls" target="_blank" download><img src="icon-excel.gif" alt="avatar"/></Link></div>
			<div className="i-text">Kuuntele <a href="https://open.spotify.com/artist/3AXzj9CsJxWYHX9IXtlFT2" >Spotifyssä</a></div>
			<div className="i-enter"></div>





		</div>
		
	</div>
		
	<div>
		<Footer />	
	</div>
	
</div>

  );
}

export default Info;