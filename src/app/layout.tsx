import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import '../styles/globals.css'
import { ThemeProvider } from "@/providers/theme-provider"
import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"


const robotoSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hotto Dev - Code that burns 🔥",
  description: "Modern web development with the best technologies on the market",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${robotoSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class" // Diz-lhe para usar a classe ".dark" no <html>
          defaultTheme="system" // Usa o tema do sistema como padrão
          enableSystem // Permite que ele detete o tema do sistema
          disableTransitionOnChange // Desativa transições de cor ao mudar de tema
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
