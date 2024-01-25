import React from 'react'
import { Link } from "react-router-dom";
import { arrowRight } from '../assets';

const ButtonText = ({ text, linkTo }) => {
  return (
    <div className="flex justify-start">
			<Link to={`/${linkTo}`} className="border-b-2 border-primary flex items-center">
				<p className="font-inter font-medium text-primary text-sm">{text}</p>
				<img src={arrowRight} alt="arrow right" className="ml-1" />
			</Link>
		</div>
  )
}

export default ButtonText