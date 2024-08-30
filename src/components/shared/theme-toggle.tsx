"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<div
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className={cn(
				buttonVariants({
					variant: "ghost",
				}),
				"h-8 w-8 px-0 hover:cursor-pointer"
			)}
		>
			<SunIcon className="h-5 w-5 text-neutral-800 dark:hidden dark:text-neutral-200" />
			<MoonIcon className="hidden h-5 w-5 text-neutral-800 dark:block dark:text-neutral-200" />
			<span className="sr-only">Site Theme</span>
		</div>
	);
}
