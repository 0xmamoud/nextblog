import { posts } from "@/data/posts";
import prisma from "@/lib/db";
import { log } from "console";
import Link from "next/link";

export default async function page() {
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: "desc",
		},
		include: {
			author: true,
		},
	});
	return (
		<div className="max-w-4xl mx-auto py-8 px-1">
			<h1 className="text-3xl font-bold mb-4">BLogs</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
				{posts.map((post) => (
					<Link
						href={`/blogs/${post.id}`}
						key={post.id}
						className="bg-white p-4 rounded-md shadow"
					>
						<h2 className="text-xl font-bold">{post.title}</h2>
						<p>by: {post.author?.name}</p>
					</Link>
				))}
			</div>
		</div>
	);
}
