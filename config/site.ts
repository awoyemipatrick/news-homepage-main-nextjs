export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "News homepage",
	description: "News homepage challenge on Frontend Mentor",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "New",
      href: "/",
		}, 
		{
			label: "Popular",
			href: "/",
		},
		{
			label: "Trending",
			href: "/",
		},
		{
			label: "Categories",
			href: "/",
		},
	],
	// navMenuItems: [
	// 	{
	// 		label: "Home",
	// 		href: "/",
	// 	},
	// 	{
	// 		label: "About",
	// 		href: "/about",
	// 	}
	// ],
	links: {
		github: "https://github.com",
		twitter: "https://twitter.com",
	},
};
