import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const user = await getCurrentUser();
	try {
		if (!user?.email)
			return NextResponse.json(
				{ message: "Not authorized" },
				{ status: 401 }
			);
		const { postId, content } = await req.json();
		const newComment = await prisma.comment.create({
			data: { postId, content, authorEmail: user.email },
		});
		return NextResponse.json(newComment, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ message: "Something went wrong" },
			{ status: 500 }
		);
	}
}
