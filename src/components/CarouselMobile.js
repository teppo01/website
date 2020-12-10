import React from 'react';
import { Carousel } from 'react-responsive-carousel';

 
function CarouselMobile() {
  return (
	<Carousel >
		<div>
			<img src="kuva01.jpg" alt="description"/>
		</div>
		<div>
			<img src="kuva02.jpg" alt="description"/>
		</div>
		<div>
			<img src="kuva03.jpg" alt="description"/>
		</div>
	</Carousel>
  );
}

export default CarouselMobile;