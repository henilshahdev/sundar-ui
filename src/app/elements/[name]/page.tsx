"use server";

import { cn } from "@/lib/utils";
import { getAllElements } from "@/registry/registry";
import { notFound } from "next/navigation";
import React from "react";

export default async function ElementPage({
	params,
}: {
	params: {
		name: string;
	};
}) {
	const { name } = params;
	const allElements = await getAllElements();
	const element = allElements.find((elem) => elem.slug === name);

	if (!element) {
		return notFound();
	}

	const Component = element.component;

	return (
		<div className={cn("themes-wrapper bg-background", element.container?.className)}>
			<Component />
		</div>
	);
}
