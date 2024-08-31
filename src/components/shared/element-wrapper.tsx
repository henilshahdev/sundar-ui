"use client";

import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import ElementToolbar from "@/components/shared/element-toolbar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { ImperativePanelHandle } from "react-resizable-panels";
import { Icons } from "./icons";
import Balancer from "react-wrap-balancer";
import { ElementType } from "@/types/element";

type ElementWrapperProps = {
	element: ElementType;
};

const ElementWrapper = ({ element }: ElementWrapperProps) => {
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const ref = React.useRef<ImperativePanelHandle>(null);

	return (
		<div className="w-full flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>{element.title}</h1>
				<p className="text-base text-muted-foreground">
					<Balancer>{element.description}</Balancer>
				</p>
			</div>
			<Tabs
				id={element.title}
				defaultValue="preview"
				className="relative grid w-full scroll-m-20 gap-4"
				style={
					{
						"--container-height": element.container?.height,
					} as React.CSSProperties
				}
			>
				<ElementToolbar element={element} resizablePanelRef={ref} />
				<TabsContent
					value="preview"
					className="relative after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted overflow-hidden"
				>
					<ResizablePanelGroup direction="horizontal" className="relative z-10">
						<ResizablePanel
							ref={ref}
							className={cn("relative rounded-lg border bg-background ")}
							defaultSize={100}
							minSize={30}
						>
							{isLoading ? (
								<div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
									<Icons.spinner className="h-4 w-4 animate-spin" />
									Loading...
								</div>
							) : null}
							<iframe
								src={`/elements/nav_shadcn`}
								height={element.container?.height ?? 450}
								className="chunk-mode relative z-20 w-full bg-background"
								onLoad={() => {
									setIsLoading(false);
								}}
							/>
						</ResizablePanel>
						<ResizableHandle
							className={cn(
								"relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block"
							)}
						/>
						<ResizablePanel defaultSize={0} minSize={0} />
					</ResizablePanelGroup>
				</TabsContent>
				<TabsContent value="code">
					<div
						data-rehype-pretty-code-fragment
						dangerouslySetInnerHTML={{ __html: element.code }}
						className="w-full overflow-hidden rounded-md [&_pre]:my-0 [&_pre]:h-[--container-height] [&_pre]:overflow-auto [&_pre]:whitespace-break-spaces [&_pre]:p-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
					/>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default ElementWrapper;
