import { star } from "../assets";
import { productSlider } from "../constants";

const NewLabel = () => {
	return (
		<div className="flex justify-start items-start flex-col z-10 font-inter font-bold m-4">
			<p className=" px-2 text-sm text-chinese-black bg-white rounded-sm mb-2">
				NEW
			</p>
			<p className=" px-2 text-sm text-white bg-green-400 rounded-sm">-50%</p>
		</div>
	);
};

const Star = () => {
	const stars = Array(5).fill(); // Create an array with 5 elements

	return (
		<div className="flex">
			{stars.map((_, index) => (
				<img key={index} src={star} alt="star" />
			))}
		</div>
	);
};

const Product = ({ img, title, price, discountPrice }) => {
	return (
			<div className="flex flex-col justify-start items-start mr-6 mb-12 ">
					<div className="w-[300px] bg-cultured lg:w-[400px]">
							<NewLabel />
							<img src={img} alt={title} style={{ mixBlendMode: "multiply" }} className="flex h-48 m-auto mb-12 lg:h-56" />
					</div>
					<div className="flex flex-col mt-4 font-inter text-chinese-black">
							<Star />
							<p className="font-poppins font-semibold text-xl">{title}</p>
							<div className="flex">
									<p className="text-sm mr-3">{price}</p>
									<p className="text-sm text-nickel line-through">{discountPrice}</p>
							</div>
					</div>
			</div>
	);
};


const SlideItems = () => {
    return (
        <>
            <main className="flex flex-col justify-between bg-white overflow-hidden mt-8 mb-8 mx-8 2xl:mx-60">
                <div className="flex overflow-x-scroll">
                    {productSlider.map((item, index) => (
                        <Product key={index} img={item.img} title={item.title} price={item.price} discountPrice={item.discountPrice} />
                    ))}
                </div>
            </main>
        </>
    );
};



export default SlideItems;
