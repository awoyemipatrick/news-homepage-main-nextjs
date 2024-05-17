import { Inter as FontSans } from "next/font/google"


export const fontSans = FontSans({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-sans",
})

