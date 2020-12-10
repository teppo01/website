import React from "react";
import { Link } from 'react-router-dom'
import "./Frontpage.css";
import Navigate from "./components/Navigation"
import MobileNav from "./components/NavMenu"
import Footer from "./components/Footer"
import CarouselDesktop from "./components/CarouselDesktop"
import CarouselMobile from "./components/CarouselMobile"
import Card from "./components/Card"
import Card1 from "./components/Card1"
import Card2 from "./components/Card2"

function Frontpage() {
  return (

<div className="f-bg">

	<div className="f-Navbar f-Desktop">
		<Navigate />
	</div>
	
	<div className="f-Navbar f-Mobile">
		<div className="f-Mobile-Nav">
			<a href="/" ><img className="imgLogo2" src="jarijataikalogo.png" alt="logo"/></a>
			<MobileNav />
		</div>
	</div>
	
	<div className="f-Desktop">
		<CarouselDesktop />
	</div>
	
	<div className="f-Mobile">
		<CarouselMobile />
	</div>
	
	<div className="f-Outer">
		<div className="f-Middle">
		
			<div className="f-Inner">
				<Card />
				<Card1 />
				<Card2 />
			</div>	
		<div className="f-text">Yhtyeen esiintymiset painottuvat yleensä kesäaikaan, jolloin olemme usein soittamassa häissä, synttäreillä, lavatansseissa ja kesäjuhlilla. Toinen sesonkiaika on marras-joulukuussa, jolloin pidetään paljon mm. pikkujouluja ja peijaisia. Koska lähes kaikilla yhtyeen jäsenillä on päiväsaikaan muita töitä, ei keikkoja ole koskaan pyrittykään hankkimaan kovin paljoa - lähinnä on soitettu ne, joita on kysytty, aktiivisen markkinoinnin jäädessä enemmän lehti-ilmoittelun ja www-sivujen varaan. Pääasiassa keikkailemme Turku-Tampere-Helsinki -kolmiossa, mutta aina silloin tällöin kutsu käy kauemmaskin.</div>
		<div className="f-enter"></div>
		<div className="f-text">Lataa ohjelmamme Excel-tiedostona <Link to="/Taika_Ohjelmisto.xls" target="_blank" download><img src="icon-excel.gif" alt="avatar"/></Link></div>
		<div className="f-text">Kuuntele <a href="https://open.spotify.com/artist/3AXzj9CsJxWYHX9IXtlFT2" >Spotifyssä</a></div>

		<div className="f-enter"></div>
		</div>
		
		
	</div>
		
	<div>
		<Footer />	
	</div>
	
</div>

  );
}

export default Frontpage