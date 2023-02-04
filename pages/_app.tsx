import '@/styles/globals.css'
import { Inter as FontSans } from "@next/font/google"
import type { AppProps } from 'next/app'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return <><style jsx global>{`
  :root {
    --font-sans: ${fontSans.style.fontFamily};
  }
}`}</style> <Component {...pageProps} /> </>
    
    
  
}
