import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

import { Monitor, Smartphone, Tablet } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { ElementCopyButton } from "./element-copy-button";
import { ElementType } from "@/types/element";

type ElementToolbarType = {
	element: ElementType;
	resizablePanelRef: any;
};

const ElementToolbar = ({ element, resizablePanelRef }: ElementToolbarType) => {
	return (
		<div className="flex flex-col items-center gap-4 sm:flex-row">
			<div className="flex items-center gap-2">
				<TabsList className="hidden h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)] sm:flex">
					<TabsTrigger value="preview" className="h-[1.45rem] rounded-sm px-2 text-xs">
						Preview
					</TabsTrigger>
					<TabsTrigger value="code" className="h-[1.45rem] rounded-sm px-2 text-xs">
						Code
					</TabsTrigger>
				</TabsList>
			</div>
			{element.code && (
				<div className="flex items-center gap-2 pr-[14px] sm:ml-auto">
					<div className="hidden h-[28px] items-center gap-1.5 rounded-md border p-[2px] shadow-sm md:flex">
						<ToggleGroup
							type="single"
							defaultValue="100"
							onValueChange={(value) => {
								if (resizablePanelRef.current) {
									resizablePanelRef.current.resize(parseInt(value));
								}
							}}
						>
							<ToggleGroupItem value="100" className="h-[22px] w-[22px] rounded-sm p-0">
								<Monitor className="h-3.5 w-3.5" />
							</ToggleGroupItem>
							<ToggleGroupItem value="60" className="h-[22px] w-[22px] rounded-sm p-0">
								<Tablet className="h-3.5 w-3.5" />
							</ToggleGroupItem>
							<ToggleGroupItem value="30" className="h-[22px] w-[22px] rounded-sm p-0">
								<Smartphone className="h-3.5 w-3.5" />
							</ToggleGroupItem>
						</ToggleGroup>
					</div>
					<Separator orientation="vertical" className="mx-2 hidden h-4 md:flex" />
					<ElementCopyButton event="copy_block_code" name={element.title} code={element.code} />
				</div>
			)}
		</div>
	);
};

export default ElementToolbar;
