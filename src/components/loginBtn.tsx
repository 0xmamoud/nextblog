"use client";

import { signIn } from "next-auth/react";

export default function LogintBtn() {
	return (
		<button onClick={() => signIn()} className="text-white hover:underline">
			Login
		</button>
	);
}
