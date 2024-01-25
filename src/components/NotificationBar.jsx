import { useState } from "react";
import { ticket, close, arrowRightBlue } from "../assets/";
import { Link } from "react-router-dom";

const NotificationBar = () => {
	const [isVisible, setIsVisible] = useState(true);

	const handleClose = () => {
		setIsVisible(false);
	};
	return (
		<>
			{isVisible && (
				<div className="sticky top-0 z-50 w-full h-10 flex justify-center items-center py-2 bg-cultured">
					<img
						src={ticket}
						alt="ticket-percent"
						className="w-4 h-4 mr-2 sm:w-6 sm:h-6 sm:mr-3"
					/>
					<p className="text-xs font-inter font-semibold mr-3 sm:text-sm">
						30% off storewide — Limited time!
					</p>

					<Link
						to="/shop"
						className="border-b border-Blue hidden sm:flex items-center"
					>
						<p className="font-inter font-medium text-Blue text-sm">Shop Now</p>
						<img src={arrowRightBlue} alt="arrow right" className="ml-1" />
					</Link>

					<img
						src={close}
						alt="close"
						className="w-4 h-4 absolute right-0 mr-4 sm:w-5 sm:h-5 cursor-pointer"
						onClick={handleClose}
					/>
				</div>
			)}
		</>
	);
};

export default NotificationBar;
