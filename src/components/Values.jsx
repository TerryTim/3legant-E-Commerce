import { values } from "../constants";

const Values = () => {
	return (
		<section className="mt-12 mx-8 2xl:mx-60">
			<div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6">
				{values.map((value, index) => (
					<div key={index} className="bg-cultured w-full">
						<div className="mx-4 my-8 lg:mx-8 lg:my-12">
							<img src={value.img} alt={value.title} />
							<p className="font-inter text-sm font-normal text-chinese-black mt-4 lg:text-xl lg:font-medium">
								{value.title}
							</p>
							<p className="font-inter text-sm text-nickel mt-2">
								{value.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Values;
