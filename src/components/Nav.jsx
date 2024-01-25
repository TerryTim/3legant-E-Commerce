import React, { useState } from "react";
import Logo from "./Logo";
import {
	menu,
	line,
	heart,
	shoppingBag,
	userCircle,
	search,
	instagramB,
	facebookB,
	youtubeB,
} from "../assets";
import { Link } from "react-router-dom";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<nav className="sticky z-40 bg-white h-[60px] flex justify-between items-center mx-8 2xl:mx-60">
				<div
					className={`fixed top-0 left-0 w-full h-full max-md:bg-black max-md:bg-opacity-50 ${
						isMenuOpen ? "" : "hidden"
					}`}
					onClick={() => setIsMenuOpen(false)}
				/>
				<div className="flex">
					<img
						src={menu}
						alt="menu"
						className="mr-1 md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					/>
					<Logo />
				</div>

				<div
					className={`flex flex-col absolute top-0 -left-8 bg-white py-6 px-6 text-chinese-black font-inter text-sm font-medium md:hidden`}
					style={{
						transform: isMenuOpen ? "translateX(0)" : "translateX(-110%)",
						transition: "transform 0.3s ease-in-out",
					}}
				>
					<img
						src={line}
						alt="close"
						className="w-6 absolute right-0 mr-6"
						onClick={() => setIsMenuOpen(false)}
					/>

					<Logo />

					<div className="flex border rounded-md border-nickel mt-4">
						<img src={search} alt="search" className="w-6 ml-4" />
						<input
							type="text"
							name="search"
							placeholder="Search"
							className="w-3/4 border-transparent focus:border-transparent focus:ring-0"
						/>
					</div>

					<Link to="/3legant-E-Commerce/" className="py-4 border-b border-bright-gray">
						Home
					</Link>

					<Link to="/3legant-E-Commerce/shop" className="py-4 border-b border-bright-gray">
						Shop
					</Link>

					<Link to="/3legant-E-Commerce/product" className="py-4 border-b border-bright-gray">
						Product
					</Link>

					<Link to="/3legant-E-Commerce/contact" className="py-4 border-b border-bright-gray">
						Contact Us
					</Link>

					<div className="flex justify-between mt-40 py-4 border-b border-bright-gray">
						<p>Cart</p>

						<div className="flex items-center ">
							<img src={shoppingBag} alt="shopping bag" className="mr-1" />
							<div className="w-5 h-5 bg-primary rounded-full text-white text-center font-inter font-bold text-sm">
								2
							</div>
						</div>
					</div>

					<div className="flex justify-between py-4 border-b border-bright-gray">
						<p>Wishlist</p>

						<div className="flex items-center ">
							<img src={heart} alt="heart" className="mr-1" />
							<div className="w-5 h-5 bg-primary rounded-full text-white text-center font-inter font-bold text-sm">
								2
							</div>
						</div>
					</div>

					<Link
						to="/3legant-E-Commerce/"
						className="w-full h-12 mt-8 mb-10 flex justify-center items-center rounded-lg bg-primary text-white font-inter font-base font-semibold"
					>
						Sign In
					</Link>

					<div className="flex items-center">
						<img src={instagramB} alt="instagram" className="cursor-pointer" />
						<img
							src={facebookB}
							alt="facebook"
							className="cursor-pointer mx-4"
						/>
						<img src={youtubeB} alt="youtube" className="cursor-pointer" />
					</div>
				</div>

				<div className="text-nickel font-space-grotesk text-sm font-medium hidden md:block">
					<Link to="/3legant-E-Commerce/" className="mr-10 text-chinese-black">
						Home
					</Link>

					<Link to="/3legant-E-Commerce/shop" className="mr-10">
						Shop
					</Link>

					<Link to="/3legant-E-Commerce/product" className="mr-10">
						Product
					</Link>

					<Link to="/3legant-E-Commerce/contact">Contact Us</Link>
				</div>

				<div className="flex justify-center items-center">
					<img src={search} alt="search" className="mr-4 hidden md:block" />
					<Link to="/3legant-E-Commerce/sign-in">
						<img
							src={userCircle}
							alt="user circle"
							className="mr-4 hidden md:block"
						/>
					</Link>
					<img src={shoppingBag} alt="shopping bag" className="mr-4" />
					<div className="w-5 h-5 bg-primary rounded-full text-white text-center font-inter font-bold text-sm">
						2
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
