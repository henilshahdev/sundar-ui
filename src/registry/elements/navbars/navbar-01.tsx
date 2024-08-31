"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/shared/icons";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import { CircleIcon, FileIcon, LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export interface NavItem {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: keyof typeof Icons;
	label?: string;
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface DocsConfig {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
}

const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Documentation",
			href: "#",
		},
		{
			title: "Components",
			href: "#",
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "#",
					items: [],
				},
				{
					title: "Installation",
					href: "#",
					items: [],
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "#",
					items: [],
				},
				{
					title: "Alert",
					href: "#",
					items: [],
				},
			],
		},
	],
};

const navLinks: string[] = ["Docs", "Components", "Blocks", "Charts", "Themes", "Examples", "Colors"];

const socialLinks = [
	{ link: "https://github.com/shadcn-ui/ui", icon: <Icons.gitHub className="h-4 w-4" />, slug: "Github" },
	{ link: "https://twitter.com/shadcn", icon: <Icons.twitter className="h-4 w-4 fill-current" />, slug: "X" },
];

const themeOptions = [
	{ icon: <SunIcon className="mr-2 h-4 w-4" />, title: "Light" },
	{ icon: <MoonIcon className="mr-2 h-4 w-4" />, title: "Dark" },
	{ icon: <LaptopIcon className="mr-2 h-4 w-4" />, title: "System" },
];

export default function Navbar_shadcn() {
	const [open, setOpen] = React.useState(false);
	const [sheetOpen, setSheetOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<Link href="#" className="mr-4 flex items-center space-x-2 lg:mr-6">
						<Icons.shadcn className="h-6 w-6" />
						<span className="hidden font-bold lg:inline-block">shadcn/ui</span>
					</Link>
					<nav className="flex items-center gap-3 text-sm lg:gap-6">
						{navLinks.map((eachLink, index) => (
							<Link
								key={index}
								href="#"
								className={cn("text-muted-foreground transition-colors hover:text-foreground/80")}
							>
								{eachLink}
							</Link>
						))}
					</nav>
				</div>
				<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
						>
							<Icons.menu />
							<span className="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="pr-0">
						<Link href="/" className="flex items-center">
							<Icons.logo className="mr-2 h-4 w-4" />
							<span className="font-bold">{siteConfig.name}</span>
						</Link>
						<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
							<div className="flex flex-col space-y-3">
								{docsConfig.mainNav?.map(
									(item) =>
										item.href && (
											<Link key={item.href} href={item.href}>
												{item.title}
											</Link>
										)
								)}
							</div>
							<div className="flex flex-col space-y-2">
								{docsConfig.sidebarNav.map((item, index: number) => (
									<div key={index} className="flex flex-col space-y-3 pt-6">
										<h4 className="font-medium">{item.title}</h4>
										{item?.items?.length &&
											item.items.map((item) => (
												<React.Fragment key={item.href}>
													{!item.disabled &&
														(item.href ? (
															<Link href={item.href} className="text-muted-foreground">
																{item.title}
																{item.label && (
																	<span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
																		{item.label}
																	</span>
																)}
															</Link>
														) : (
															item.title
														))}
												</React.Fragment>
											))}
									</div>
								))}
							</div>
						</ScrollArea>
					</SheetContent>
				</Sheet>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<>
							<Button
								variant="outline"
								className={cn(
									"relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
								)}
								onClick={() => setOpen(true)}
							>
								<span className="hidden lg:inline-flex">Search documentation...</span>
								<span className="inline-flex lg:hidden">Search...</span>
								<kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
									<span className="text-xs">⌘</span>K
								</kbd>
							</Button>
							<CommandDialog open={open} onOpenChange={setOpen}>
								<CommandInput placeholder="Type a command or search..." />
								<CommandList>
									<CommandEmpty>No results found.</CommandEmpty>
									<CommandGroup heading="Links">
										{docsConfig.mainNav
											.filter((navitem) => !navitem.external)
											.map((navItem) => (
												<CommandItem key={navItem.href} value={navItem.title}>
													<FileIcon className="mr-2 h-4 w-4" />
													{navItem.title}
												</CommandItem>
											))}
									</CommandGroup>
									{docsConfig.sidebarNav.map((group) => (
										<CommandGroup key={group.title} heading={group.title}>
											{group.items.map((navItem) => (
												<CommandItem key={navItem.href} value={navItem.title}>
													<div className="mr-2 flex h-4 w-4 items-center justify-center">
														<CircleIcon className="h-3 w-3" />
													</div>
													{navItem.title}
												</CommandItem>
											))}
										</CommandGroup>
									))}
									<CommandSeparator />
									<CommandGroup heading="Theme">
										{themeOptions.map((eachOption, index) => (
											<CommandItem key={index}>
												{eachOption.icon}
												{eachOption.title}
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</CommandDialog>
						</>
					</div>
					<nav className="flex items-center">
						{socialLinks.map((eachSocialLink, index) => (
							<Link key={index} href={eachSocialLink.link} target="_blank" rel="noreferrer">
								<div
									className={cn(
										buttonVariants({
											variant: "ghost",
										}),
										"h-8 w-8 px-0"
									)}
								>
									<>{eachSocialLink.icon}</>
									<span className="sr-only">{eachSocialLink.slug}</span>
								</div>
							</Link>
						))}
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
