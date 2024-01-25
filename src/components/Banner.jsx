import ButtonText from "./ButtonText";
import { living_room_2 } from "../assets";

const Banner = () => {
	return (
		<section className="mt-12">
			<div className="flex flex-col lg:flex-row">
				<img
					src={living_room_2}
					alt="couch"
					className="max-sm:h-96 lg:w-1/2 object-cover"
				/>
				<div className="bg-cultured lg:w-1/2">
					<div className="my-14 mx-8 lg:my-40 lg:ml-20">
						<p className="text-Blue font-inter text-base font-bold">
							SALE UP TO 35% OFF
						</p>
						<h5 className="my-4 lg:text-5xl">HUNDREDS of New lower prices!</h5>
						<p className="font-inter text-chinese-black text-base font-normal mb-6 lg:text-xl">
							It’s more affordable than ever to give every room in your home a
							stylish makeover
						</p>
						<ButtonText text={"Shop Now"} linkTo={"shop"} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
