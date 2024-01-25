import ButtonText from "./ButtonText";
import { chair_2, drawer, toaster } from "../assets";

const BannerGrid = () => {
	return (
		<section className="mt-10 mx-8 2xl:mx-60">
			<div className="flex container flex-col sm:flex-row">
				<div className="w-1/2 h-auto bg-cultured mr-4 max-sm:w-full max-sm:mb-4">
					<div className="m-4">
						<h5 className="font-medium max-sm:text-[28px]">Living Room</h5>
						<ButtonText text={"Shop Now"} linkTo={"shop"} />
					</div>
					<div className="flex justify-center">
						<img
							src={chair_2}
							alt="chair"
							className="max-sm:w-4/5"
							style={{ mixBlendMode: "multiply" }}
						/>
					</div>
				</div>

				<div className="w-1/2 flex flex-col max-sm:w-full">
					<div className="h-1/2 bg-cultured flex justify-between mb-4">
						<div className="flex justify-end items-end">
							<div className="cotainer m-4">
								<h5 className="max-sm:text-[28px]">Bedroom</h5>
								<ButtonText text={"Shop Now"} linkTo={"shop"} />
							</div>
						</div>

						<div className="flex justify-center items-center">
							<img
								src={drawer}
								alt="drawer"
								style={{ mixBlendMode: "multiply" }}
								className="w-4/5 m-auto"
							/>
						</div>
					</div>

					<div className="h-1/2 bg-cultured flex justify-between">
						<div className="flex justify-end items-end">
							<div className="cotainer m-4">
								<h5 className="max-sm:text-[28px]">Kitchen</h5>
								<ButtonText text={"Shop Now"} linkTo={"shop"} />
							</div>
						</div>

						<div className="container">
							<img
								src={toaster}
								alt="toaster"
								style={{ mixBlendMode: "multiply" }}
								className="w-4/5 m-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerGrid;
