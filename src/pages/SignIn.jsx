import React from "react";
import Logo from "../components/Logo";
import { chair } from "../assets";
import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<>
			<div className="flex h-screen flex-col lg:flex-row">
				<div className="flex-1 bg-cultured relative">
					<div className="flex flex-col items-center justify-center h-full">
						<div className="absolute top-0 mt-8">
							<Logo />
						</div>
						<img
							src={chair}
							alt="chair"
							className="object-contain h-[430px] w-[375px] lg:h-auto lg:w-auto"
							style={{ mixBlendMode: "multiply" }}
						/>
					</div>
				</div>

				<div className="flex-1 flex justify-center items-center px-8">
					<form action="" className="lg:max-w-[456px] lg:ml-0">
						<h4 className="text-primary mt-10 mb-6">Sign In</h4>
						<p className="text-nickel font-inter font-normal text-base">
							Don’t have an accout yet?{" "}
							<Link
								to="/3legant-E-Commerce/sign-up"
								className="text-green font-inter font-semibold text-base hover:underline"
							>
								Sign Up
							</Link>
						</p>
						<input
							type="text"
							name="name"
							placeholder="Your usernam or email address"
							className="w-full border-0 border-b border-bright-gray mt-8 pb-2 focus:border-bright-gray focus:ring-0 font-inter"
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="w-full border-0 border-b border-bright-gray mt-8 pb-2 focus:border-bright-gray focus:ring-0 font-inter"
						/>

						<div className="flex items-center mt-8">
							<input
								type="checkbox"
								id="rememberMe"
								className="border-nickel rounded-sm focus:ring-0"
							/>
							<label
								htmlFor="rememberMe"
								className="text-nickel font-inter text-base font-normal ml-3"
							>
								Remember me
							</label>
							<a
								href="#"
								className="text-primary font-inter text-base font-semibold ml-auto hover:underline"
							>
								Forgot password?
							</a>
						</div>

						<Link
							to="/3legant-E-Commerce/"
							className="w-full h-12 mt-8 mb-10 flex justify-center items-center rounded-lg bg-primary text-white font-inter font-base font-semibold"
						>
							Sign In
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignIn;
