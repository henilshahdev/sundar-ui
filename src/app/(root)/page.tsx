import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/shared/page-header";
import React from "react";
import ElementWrapper from "@/components/shared/element-wrapper";
import { ElementType } from "@/types/element";
import { elements } from "@/registry/registry";
// import { elements } from "@/registry/registry";

// export const elements: ElementType[] = [
// 	{
// 		id: 1,
// 		title: "shadcn Navigation Menu",
// 		description: "A collection of links for navigating websites.",
// 		component: React.lazy(() => import("@/registry/elements/navbars/navbar-01")),
// 		code: "lorem ipsum",
// 		container: {
// 			height: 56,
// 			className: "",
// 		},
// 	},
// ];

const page = () => {
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
			<section>
				{elements.map((element) => (
					<ElementWrapper key={element.id} element={element} />
				))}
			</section>
		</div>
	);
};

export default page;
