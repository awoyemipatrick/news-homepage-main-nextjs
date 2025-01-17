import { tv } from "tailwind-variants";

export const title = tv({
	base: "tracking-tight inline font-semibold",
	variants: {
		color: {
		},
		size: {
			// sm: "text-3xl lg:text-4xl",
			// md: "text-[2.3rem] lg:text-5xl leading-9",
			// lg: "text-4xl lg:text-6xl",
		},
		fullWidth: {
			// true: "w-full block",
		},
	},
	defaultVariants: {
		// size: "md",
	},
	compoundVariants: [
		{
			color: [
				// "violet",
				// "yellow",
				// "blue",
				// "cyan",
				// "green",
				// "pink",
				// "foreground",
				// "graishBlue",
			],
			// class: "bg-clip-text text-transparent bg-gradient-to-b",
		},
	],
});

export const subtitle = tv({
	// base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
	// variants: {
	// 	fullWidth: {
	// 		true: "!w-full",
	// 	},
	// },
  // defaultVariants:{
  //   fullWidth: true
  // }
});

