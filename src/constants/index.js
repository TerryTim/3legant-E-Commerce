import {
	couch,
	lamp,
	beigeLamp,
	bambooBasket,
	toaster,
	fastDelivery,
  money,
  lock,
  call,  
} from "../assets";

import { living_room_1, kitchen, bedroom } from "../assets/slides";

export const productSlider = [
	{ img: couch, title: "Loveseat Sofa", price: "$199.00", discountPrice: "$400.00" },
	{ img: lamp, title: "Table Lamp", price: "$24.99" },
	{ img: beigeLamp, title: "Beige Table Lamp", price: "$24.99" },
	{ img: bambooBasket, title: "Bamboo basket", price: "$24.99" },
	{ img: toaster, title: "Toasted", price: "$224.99" },
	// More items...
];

export const values = [
	{ img: fastDelivery, title: "Free Shipping", desc: "Order above $200" },
	{ img: money, title: "Money-back", desc: "30 days guarantee" },
	{ img: lock, title: "Secure Payments", desc: "Secured by Stripe" },
	{ img: call, title: "24/7 Support", desc: "Phone and Email support" },
];

export const blogs = [
  { img: living_room_1, title: "7 ways to decor your home", link: "blog/1" },
  { img: kitchen, title: "Kitchen organization", link: "blog/2" },
  { img: bedroom, title: "Decor your bedroom", link: "blog/3" },
]
