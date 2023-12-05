"use client";

export default function FormComments() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const comment = formData.get("comment");
		console.log(comment);
		e.currentTarget.reset();
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
				>
					Submit Comment
				</button>
			</div>
		</form>
	);
}
