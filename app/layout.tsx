import {ThemeProvider} from '../components/override/material'
import './globals.css'
import {Inter} from 'next/font/google'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'DuoCulturo',
    description: 'Un site incroyable pour améliorer ta culture générale !',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>{children}
        </ThemeProvider>
        </body>
        </html>
    )
}
