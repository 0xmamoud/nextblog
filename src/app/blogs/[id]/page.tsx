import Comments from "@/components/comments";
import FormComments from "@/components/form-comments";
import prisma from "@/lib/db";

type BlogProps = {
	params: {
		id: string;
	};
};

export default async function page({ params }: BlogProps) {
	const post = await prisma.post.findFirst({
		where: {
			id: params.id,
		},
		include: {
			author: true,
		},
	});

	return (
		<div className="max-w-4xl mx-auto py-8">
			<h1 className="text-3xl font-bold">{post?.title}</h1>
			<p>by: {post?.author?.name}</p>
			<div className="mt-4">{post?.content}</div>
			<Comments postId={params.id} />
			<FormComments postId={params.id} />
		</div>
	);
}
