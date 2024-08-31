import { cn } from "@/lib/utils";
import { elements } from "@/registry/registry";
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
	const element = elements[0];

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
