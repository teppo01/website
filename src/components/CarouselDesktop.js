import React from 'react';
import { Carousel } from 'react-responsive-carousel';

 
function CarouselDesktop() {
  return (
	<Carousel >
		<div>
			<img src="site-header02.png" alt="description"/>
		</div>
		<div>
			<img src="site-header01.png" alt="description"/>
		</div>
		<div>
			<img src="concert.jpg" alt="description"/>
		</div>
	</Carousel>
  );
}

export default CarouselDesktop;