export type ElementType = {
	id: number;
	title: string;
	slug: string;
	description: string;
	component: React.LazyExoticComponent<() => React.JSX.Element>;
	code: string;
	container: {
		height: number;
		className: string;
	};
};
