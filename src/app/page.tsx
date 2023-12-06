import FormNewPost from "@/components/form-new-post";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
	const user = await getCurrentUser();
	if (!user) {
		return (
			<main className="max-w-4xl mx-auto my-5">
				<h1 className="text-2xl font-bold text-center">
					Please login to continue
				</h1>
			</main>
		);
	}
	return (
		<main className="max-w-4xl mx-auto my-5">
			<FormNewPost />
		</main>
	);
}
