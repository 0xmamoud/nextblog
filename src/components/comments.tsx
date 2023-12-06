import prisma from "@/lib/db";

type CommentProps = {
	postId: string;
};

export default async function Comments({ postId }: CommentProps) {
	const comments = await prisma.comment.findMany({
		where: {
			postId,
		},
		include: {
			author: true,
		},
	});

	return (
		<div className="mt-8">
			<h2 className="tex-2xl font-bold">Comments</h2>
			<ul>
				{comments.map((comment) => (
					<li className="mb-4 bg-slate-300 p-2" key={comment.id}>
						<div className="flex items-center mb-2">
							<div className="text-blue-500 font-bold mr-2">
								{comment.author?.name}
							</div>
							<div className="text-gray-500">
								{new Date(
									comment.createdAt
								).toLocaleDateString()}
							</div>
						</div>
						<p>{comment.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
