import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background md:mx-[5%] font-sans antialiased",
					fontSans.variable
				)}
			>

				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex mx-2 flex-col md:pt-16 h-screen">
						<Navbar />
						<main className="container mx-auto flex-grow">
							{children}
						</main>
						<footer className="w-full md:flex items-center gap-4 justify-center py-3 text-[11px] ">
							<div className="flex items-center gap-1 text-current">
								<span className="text-default-600">Challenge by</span>
								<Link
									isExternal
									className="flex items-center gap-1 text-current"
									href="https://www.frontendmentor.io?ref=challenge"
									target="_blank"
								>
									<p className="text-primary text-[11px]">Frontend Mentor</p>
								</Link>
							</div>
							<div className="flex items-center gap-1 text-current">
								<span className="text-default-600">Coded by</span>
								<Link
									isExternal
									className="flex items-center gap-1 text-current"
									href="https://www.github.com"
									target="_blank"
								>
									<p className="text-primary text-[11px] ">Awoyemi Patrick</p>
								</Link>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
