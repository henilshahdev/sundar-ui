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
	chartsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Documentation",
			href: "/docs",
		},
		{
			title: "Components",
			href: "/docs/components/accordion",
		},
		{
			title: "Blocks",
			href: "/blocks",
		},
		{
			title: "Charts",
			href: "/charts",
		},
		{
			title: "Themes",
			href: "/themes",
		},
		{
			title: "Examples",
			href: "/examples",
		},
		{
			title: "Colors",
			href: "/colors",
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs",
					items: [],
				},
				{
					title: "Installation",
					href: "/docs/installation",
					items: [],
				},
				{
					title: "components.json",
					href: "/docs/components-json",
					items: [],
				},
				{
					title: "Theming",
					href: "/docs/theming",
					items: [],
				},
				{
					title: "Dark mode",
					href: "/docs/dark-mode",
					items: [],
				},
				{
					title: "CLI",
					href: "/docs/cli",
					items: [],
				},
				{
					title: "Typography",
					href: "/docs/components/typography",
					items: [],
				},
				{
					title: "Figma",
					href: "/docs/figma",
					items: [],
				},
				{
					title: "Changelog",
					href: "/docs/changelog",
					items: [],
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "/docs/components/accordion",
					items: [],
				},
				{
					title: "Alert",
					href: "/docs/components/alert",
					items: [],
				},
				{
					title: "Alert Dialog",
					href: "/docs/components/alert-dialog",
					items: [],
				},
				{
					title: "Aspect Ratio",
					href: "/docs/components/aspect-ratio",
					items: [],
				},
				{
					title: "Avatar",
					href: "/docs/components/avatar",
					items: [],
				},
				{
					title: "Badge",
					href: "/docs/components/badge",
					items: [],
				},
				{
					title: "Breadcrumb",
					href: "/docs/components/breadcrumb",
					items: [],
				},
				{
					title: "Button",
					href: "/docs/components/button",
					items: [],
				},
				{
					title: "Calendar",
					href: "/docs/components/calendar",
					items: [],
				},
				{
					title: "Card",
					href: "/docs/components/card",
					items: [],
				},
				{
					title: "Carousel",
					href: "/docs/components/carousel",
					items: [],
				},
				{
					title: "Chart",
					href: "/docs/components/chart",
					label: "New",
					items: [],
				},
				{
					title: "Checkbox",
					href: "/docs/components/checkbox",
					items: [],
				},
				{
					title: "Collapsible",
					href: "/docs/components/collapsible",
					items: [],
				},
				{
					title: "Combobox",
					href: "/docs/components/combobox",
					items: [],
				},
				{
					title: "Command",
					href: "/docs/components/command",
					items: [],
				},
				{
					title: "Context Menu",
					href: "/docs/components/context-menu",
					items: [],
				},
				{
					title: "Data Table",
					href: "/docs/components/data-table",
					items: [],
				},
				{
					title: "Date Picker",
					href: "/docs/components/date-picker",
					items: [],
				},
				{
					title: "Dialog",
					href: "/docs/components/dialog",
					items: [],
				},
				{
					title: "Drawer",
					href: "/docs/components/drawer",
					items: [],
				},
				{
					title: "Dropdown Menu",
					href: "/docs/components/dropdown-menu",
					items: [],
				},
				{
					title: "Form",
					href: "/docs/components/form",
					items: [],
				},
				{
					title: "Hover Card",
					href: "/docs/components/hover-card",
					items: [],
				},
				{
					title: "Input",
					href: "/docs/components/input",
					items: [],
				},
				{
					title: "Input OTP",
					href: "/docs/components/input-otp",
					items: [],
				},
				{
					title: "Label",
					href: "/docs/components/label",
					items: [],
				},
				{
					title: "Menubar",
					href: "/docs/components/menubar",
					items: [],
				},
				{
					title: "Navigation Menu",
					href: "/docs/components/navigation-menu",
					items: [],
				},
				{
					title: "Pagination",
					href: "/docs/components/pagination",
					items: [],
				},
				{
					title: "Popover",
					href: "/docs/components/popover",
					items: [],
				},
				{
					title: "Progress",
					href: "/docs/components/progress",
					items: [],
				},
				{
					title: "Radio Group",
					href: "/docs/components/radio-group",
					items: [],
				},
				{
					title: "Resizable",
					href: "/docs/components/resizable",
					items: [],
				},
				{
					title: "Scroll Area",
					href: "/docs/components/scroll-area",
					items: [],
				},
				{
					title: "Select",
					href: "/docs/components/select",
					items: [],
				},
				{
					title: "Separator",
					href: "/docs/components/separator",
					items: [],
				},
				{
					title: "Sheet",
					href: "/docs/components/sheet",
					items: [],
				},
				{
					title: "Skeleton",
					href: "/docs/components/skeleton",
					items: [],
				},
				{
					title: "Slider",
					href: "/docs/components/slider",
					items: [],
				},
				{
					title: "Sonner",
					href: "/docs/components/sonner",
					items: [],
				},
				{
					title: "Switch",
					href: "/docs/components/switch",
					items: [],
				},
				{
					title: "Table",
					href: "/docs/components/table",
					items: [],
				},
				{
					title: "Tabs",
					href: "/docs/components/tabs",
					items: [],
				},
				{
					title: "Textarea",
					href: "/docs/components/textarea",
					items: [],
				},
				{
					title: "Toast",
					href: "/docs/components/toast",
					items: [],
				},
				{
					title: "Toggle",
					href: "/docs/components/toggle",
					items: [],
				},
				{
					title: "Toggle Group",
					href: "/docs/components/toggle-group",
					items: [],
				},
				{
					title: "Tooltip",
					href: "/docs/components/tooltip",
					items: [],
				},
			],
		},
	],
	chartsNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs/charts",
					items: [],
				},
				{
					title: "Installation",
					href: "/docs/charts/installation",
					items: [],
				},
				{
					title: "Theming",
					href: "/docs/charts/theming",
					items: [],
				},
			],
		},
		{
			title: "Charts",
			items: [
				{
					title: "Area Chart",
					href: "/docs/charts/area",
					items: [],
				},
				{
					title: "Bar Chart",
					href: "/docs/charts/bar",
					items: [],
				},
				{
					title: "Line Chart",
					href: "/docs/charts/line",
					items: [],
				},
				{
					title: "Pie Chart",
					href: "/docs/charts/pie",
					items: [],
				},
				{
					title: "Radar Chart",
					href: "/docs/charts/radar",
					items: [],
				},
				{
					title: "Radial Chart",
					href: "/docs/charts/radial",
					items: [],
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Tooltip",
					href: "/docs/charts/tooltip",
					items: [],
				},
				{
					title: "Legend",
					href: "/docs/charts/legend",
					items: [],
				},
			],
		},
	],
};

export default function Navbar_shadcn() {
	const [open, setOpen] = React.useState(false);
	const [sheetOpen, setSheetOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<div className="mr-4 hidden md:flex">
					<Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
						<Icons.shadcn className="h-6 w-6" />
						<span className="hidden font-bold lg:inline-block">shadcn/ui</span>
					</Link>
					<nav className="flex items-center gap-4 text-sm lg:gap-6">
						<Link
							href="/docs"
							className={cn("text-muted-foreground transition-colors hover:text-foreground/80")}
						>
							Docs
						</Link>
						<Link
							href="/docs/components"
							className={cn("text-muted-foreground transition-colors hover:text-foreground/80")}
						>
							Components
						</Link>
						<Link
							href="/blocks"
							className={cn("text-muted-foreground transition-colors hover:text-foreground/80")}
						>
							Blocks
						</Link>
						<Link
							href="/charts"
							className={cn("text-muted-foreground transition-colors hover:text-foreground/80")}
						>
							Charts
						</Link>
						<Link
							href="/themes"
							className={cn("text-muted-foreground transition-colors hover:text-foreground/80")}
						>
							Themes
						</Link>
						<Link
							href="/examples"
							className={cn("text-muted-foreground transition-colors hover:text-foreground/80")}
						>
							Examples
						</Link>
						<Link
							href="/colors"
							className={cn("text-muted-foreground transition-colors hover:text-foreground/80")}
						>
							Colors
						</Link>
					</nav>
				</div>
				<Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
						>
							<svg
								strokeWidth="1.5"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
							>
								<path
									d="M3 5H11"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M3 12H16"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M3 19H21"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
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
										<CommandItem>
											<SunIcon className="mr-2 h-4 w-4" />
											Light
										</CommandItem>
										<CommandItem>
											<MoonIcon className="mr-2 h-4 w-4" />
											Dark
										</CommandItem>
										<CommandItem>
											<LaptopIcon className="mr-2 h-4 w-4" />
											System
										</CommandItem>
									</CommandGroup>
								</CommandList>
							</CommandDialog>
						</>
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
