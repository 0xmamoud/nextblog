import { posts } from "@/data/posts";
import Link from "next/link";

export default function page() {
	return (
		<div className="max-w-4xl mx-auto py-8">
			<h1 className="text-3xl font-bold mb-4">BLogs</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{posts.map((post) => (
					<Link
						href={`/blogs/${post.id}`}
						key={post.id}
						className="bg-white p-4 rounded-md shadow"
					>
						<h2 className="text-xl font-bold">{post.title}</h2>
						<p>by: {post.username}</p>
					</Link>
				))}
			</div>
		</div>
	);
}
