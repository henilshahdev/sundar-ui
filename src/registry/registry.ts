import { ElementType } from "@/types/element";
import React from "react";

export const elements: ElementType[] = [
	{
		id: 1,
		title: "shadcn Navigation Menu",
		description: "A collection of links for navigating websites.",
		component: React.lazy(() => import("@/registry/elements/navbars/navbar-01")),
		code: "lorem ipsum",
		container: {
			height: 56,
			className: "",
		},
	},
];
