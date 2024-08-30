import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/shared/page-header";

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
		</div>
	);
};

export default page;
