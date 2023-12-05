import Comments from "@/components/comments";
import FormComments from "@/components/form-comments";

export default function page() {
	return (
		<div className="max-w-4xl mx-auto py-8">
			<h1 className="text-3xl font-bold"> Post one</h1>
			<p>by: mamoud</p>
			<div className="mt-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
				ipsam quam ipsum deleniti reiciendis dolore veritatis! Iste
				exercitationem enim ex nam natus magnam expedita assumenda, esse
				velit, dolores sed itaque.
			</div>
			<Comments />
			<FormComments />
		</div>
	);
}
