import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"Avyrixa Digital | Websites, Marketing & Branding",description:"Avyrixa Digital helps businesses grow with professional websites, social media, performance advertising, SEO and branding."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
