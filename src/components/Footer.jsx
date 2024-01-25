import React from "react";
import { Link } from "react-router-dom";
import { instagram, facebook, youtube } from "../assets";

const Footer = () => {
	return (
		<footer className="bg-dark-gunmetal">
			<div className="py-12 px-8 text-white">
				<div className="flex flex-col md:flex-row md:justify-between md:border-b md:border-nickel">
					<div className="flex flex-col text-center md:flex-row my-auto">
						<p className="font-poppins font-medium text-2xl mb-8 md:pr-8 md:my-auto md:border-r md:border-nickel">
							3legant<span className="text-nickel">.</span>
						</p>
						<a href="" className="md:pl-8 my-auto">Gift & Decoration Store</a>
					</div>

					<div className="flex flex-col mt-10 text-center md:flex-row">
						<Link to={"/"} className="mb-8 md:mr-10">
							Home
						</Link>
						<Link to={"/shop"} className="mb-8 md:mr-10">
							Shop
						</Link>
						<Link to={"/product"} className="mb-8 md:mr-10">
							Product
						</Link>
						<Link to={"/blog"} className="mb-8 md:mr-10">
							Blog
						</Link>
						<Link to={"/contact"} className="mb-10">
							Contact Us
						</Link>
					</div>
				</div>

				<div className="flex flex-col md:flex-row-reverse md:justify-between md:mt-4">
					<div className="flex items-center justify-center">
						<img src={instagram} alt="instagram" className="cursor-pointer" />
						<img src={facebook} alt="facebook" className="cursor-pointer mx-8" />
						<img src={youtube} alt="youtube" className="cursor-pointer" />
					</div>

					<div className="flex flex-col md:flex-row-reverse">
						<div className="flex justify-center font-poppins font-semibold text-xs text-white mt-8 md:my-auto">
							<a href="" className="mr-7">Privacy Policy</a>
							<a href="">Terms of Use</a>
						</div>
						<p className="text-bright-gray text-xs font-normal text-center mt-7 md:mr-7 md:my-auto">
							Copyright © 2023 3legant. All rights reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
