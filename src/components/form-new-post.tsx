"use client";

import ReactTextareaAutosize from "react-textarea-autosize";
import { ChangeEvent, useState } from "react";
import { FormData } from "@/types/blogs";

export default function FormNewPost() {
	const [formData, setFormData] = useState<FormData>({
		title: "",
		content: "",
	});

	const inputClass =
		"w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300";

	const hanfleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className={inputClass}
					placeholder="Blog title"
					name="title"
					value={formData.title}
					onChange={(e) => hanfleChange(e)}
				/>
			</div>
			<div className="mb-4">
				<ReactTextareaAutosize
					minRows={5}
					name="content"
					className={inputClass}
					placeholder="Blog content"
					value={formData.content}
					onChange={(e) => hanfleChange(e)}
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
