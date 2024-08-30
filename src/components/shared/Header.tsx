import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/shared/icons";
import { MainNav } from "@/components/shared/MainNav";
import { MobileNav } from "@/components/shared/MobileNav";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { CommandMenu } from "./CommandMenu";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<CommandMenu />
					</div>
					<nav className="flex items-center">
						<Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
							<div
								className={cn(
									buttonVariants({
										variant: "ghost",
									}),
									"h-8 w-8 px-0"
								)}
							>
								<Icons.gitHub className="h-4 w-4" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
							<div
								className={cn(
									buttonVariants({
										variant: "ghost",
									}),
									"h-8 w-8 px-0"
								)}
							>
								<Icons.twitter className="h-3 w-3 fill-current" />
								<span className="sr-only">Twitter</span>
							</div>
						</Link>
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
