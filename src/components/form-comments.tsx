"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type Props = {
	postId: string;
};

export default function FormComments({ postId }: Props) {
	const { data } = useSession();
	const router = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.currentTarget);
			const comment = formData.get("comment");
			await fetch("/api/comments", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ postId, content: comment }),
			});

			router.refresh();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mt-4">
				<label
					htmlFor="comment"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Add Comment
				</label>
				<input
					type="text"
					className="w-full py-2 px-3 border border-gray-300 rounded-md 
						focus:outline-none focus:ring focus:border-blue-300"
					name="comment"
				/>
				<button
					className="bg-blue-500 hover:bg-blue-600
				 	text-white font-bold py-2 px-4 rounded-md mt-2
				 	disabled:bg-gray-400"
					type="submit"
					disabled={!data?.user?.email}
				>
					Submit Comment
				</button>
			</div>
		</form>
	);
}
