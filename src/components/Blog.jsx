import ButtonText from "./ButtonText";
import { blogs } from "../constants";

const Blog = () => {
	return (
		<article className="mt-20 mx-8 2xl:mx-60">
			<div className="flex justify-between mb-4">
				<h5>Articles</h5>
				<div className="flex items-end">
					<ButtonText text={"More Articles"} linkTo={"shop"} />
				</div>
			</div>

			<div className="flex flex-col lg:flex-row lg:justify-between">
				{blogs.map((blog, index) => (
					<div key={index} className={`my-6 ${index === 1 ? "lg:mx-7" : ""}`}>
						<img src={blog.img} alt={blog.img} className="max-sm:h-80 lg:h-96 lg:w-96 object-cover" />

						<p className="font-inter text-base font-semibold text-chinese-black mt-4 mb-2 lg:text-xl">
							{blog.title}
						</p>
						<ButtonText text={"Read More"} linkTo={blog.link} />
					</div>
				))}
			</div>
		</article>
	);
};

export default Blog;
