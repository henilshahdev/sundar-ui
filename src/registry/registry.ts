"use server";

import { ElementType } from "@/types/element";
import React from "react";
import fs from "fs";
import path from "path";

const getCode = (file: string) => {
	// Read the source file.
	const filePath = path.join(process.cwd(), file);
	const source = fs.readFileSync(filePath, "utf8");
	return source;
};

export const getAllElements = async () => {
	const elements: ElementType[] = [
		{
			id: 1,
			title: "shadcn Navigation Menu",
			slug: "nav_shadcn",
			description: "A collection of links for navigating websites.",
			component: React.lazy(() => import("@/registry/elements/navbars/navbar-01")),
			code: getCode("/src/registry/elements/navbars/navbar-01.tsx"),
			container: {
				height: 56,
				className: "",
			},
		},
		{
			id: 2,
			title: "Dashboard Navigation Menu",
			slug: "nav_dashboard_1",
			description: "A collection of links for your dashboard.",
			component: React.lazy(() => import("@/registry/elements/navbars/navbar-02")),
			code: getCode("/src/registry/elements/navbars/navbar-02.tsx"),
			container: {
				height: 56,
				className: "",
			},
		},
	];

	return elements;
};
