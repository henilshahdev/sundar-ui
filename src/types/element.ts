export type ElementType = {
	id: number;
	title: string;
	description: string;
	component: React.LazyExoticComponent<() => React.JSX.Element>;
	code: string;
	container: {
		height: number;
		className: string;
	};
};
