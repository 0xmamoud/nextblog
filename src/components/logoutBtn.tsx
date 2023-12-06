"use client";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
	return (
		<button
			onClick={() => signOut()}
			className="text-white hover:underline"
		>
			Logout
		</button>
	);
}
