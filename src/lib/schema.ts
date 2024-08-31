import { z } from "zod";

export const registryEntrySchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	dependencies: z.array(z.string()).optional(),
	devDependencies: z.array(z.string()).optional(),
	files: z.array(z.string()),
	source: z.string().optional(),
	type: z.enum(["element"]),
	category: z.string().optional(),
});

export const registrySchema = z.array(registryEntrySchema);

export type RegistryEntry = z.infer<typeof registryEntrySchema>;

export type Registry = z.infer<typeof registrySchema>;

export const elementSchema = registryEntrySchema.extend({
	type: z.literal("element"),
	component: z.any(),
	container: z
		.object({
			height: z.string().nullish(),
			className: z.string().nullish(),
		})
		.optional(),
	code: z.string(),
	highlightedCode: z.string(),
});

export type Element = z.infer<typeof elementSchema>;
