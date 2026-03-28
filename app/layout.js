import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "Portfolio-Md Ashad",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <BackgroundBeamsWithCollision>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </BackgroundBeamsWithCollision>
      </body>
    </html>
  );
}
