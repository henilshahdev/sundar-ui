import { cn } from "@/lib/utils";

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section
			className={cn(
				"w-full flex justify-center flex-col items-start gap-4 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10",
				className
			)}
			{...props}
		>
			{children}
		</section>
	);
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn(
				"w-full text-center text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-6xl lg:leading-[1.1]",
				className
			)}
			{...props}
		/>
	);
}

function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn("w-full text-center text-balance text-lg md:text-xl font-light text-foreground", className)}
			{...props}
		/>
	);
}

function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("flex w-full items-center justify-center gap-2 py-2", className)} {...props} />;
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
