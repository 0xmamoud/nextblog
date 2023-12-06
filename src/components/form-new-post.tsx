"use client";

import ReactTextareaAutosize from "react-textarea-autosize";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function FormNewPost() {
	const router = useRouter();
	const inputClass =
		"w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300";

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.currentTarget);
			const title = formData.get("title");
			const content = formData.get("content");

			const response = await fetch("/api/posts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title, content }),
			});
			const data = await response.json();
			router.push(`/blogs/${data.id}`);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className={inputClass}
					placeholder="Blog title"
					name="title"
				/>
			</div>
			<div className="mb-4">
				<ReactTextareaAutosize
					minRows={5}
					name="content"
					className={inputClass}
					placeholder="Blog content"
				/>
			</div>
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-600 text-white 
				font-bold py-2 px-4 rounded-md focus:outline-none focus:ring 
				focus:border-blue-300 w-full disabled:bg-gray-400"
			>
				Submit
			</button>
		</form>
	);
}
