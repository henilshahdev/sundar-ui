"use server";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/shared/page-header";
import React from "react";
import ElementWrapper from "@/components/shared/element-wrapper";
import { getAllElements } from "@/registry/registry";

const page = async () => {
	const allElements = await getAllElements();

	return (
		<div className="container relative">
			<PageHeader>
				<PageHeaderHeading>Welcome to Sundar UI</PageHeaderHeading>
				<PageHeaderDescription>
					Beautifully designed templates on top of shadcn/ui. Just Copy & Paste. Fully Open Source.
				</PageHeaderDescription>
				<PageActions>
					<Button asChild>
						<Link href="/docs">Get Started</Link>
					</Button>
					<Button asChild variant="secondary">
						<Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
							GitHub
						</Link>
					</Button>
				</PageActions>
			</PageHeader>
			<section className="flex flex-col gap-6">
				{allElements.map((element) => (
					<ElementWrapper key={element.id} element={element} />
				))}
			</section>
		</div>
	);
};

export default page;
