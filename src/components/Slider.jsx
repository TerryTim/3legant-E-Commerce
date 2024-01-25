import { Carousel } from "flowbite-react";
import {
	living_room_1,
	living_room_2,
	living_room_3,
	kitchen,
	bedroom,
} from "../assets/slides";

const Slide = () => {
	return (
		<div className="h-56 sm:h-64 lg:h-[536px] lg:w-auto mx-8 2xl:mx-60 object-cover">
			<Carousel slide={true} pauseOnHover>
				<img src={living_room_1} alt="living room" />
				<img src={living_room_2} alt="living room" />
				<img src={living_room_3} alt="living room" />
				<img src={kitchen} alt="kitchen" />
				<img src={bedroom} alt="bedroom" />
			</Carousel>
		</div>
	);
};

export default Slide;
