import {ThemeProvider} from '../components/override/material'
import './globals.css'
import {Inter} from 'next/font/google'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Analytics} from "@vercel/analytics/react";
import DefaultNavbar from "@/components/components/Navbar";
import {getCurrentUser} from "@/components/lib/session";


config.autoAddCss = false

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'DuoCulturo',
    description: 'Un site incroyable pour améliorer ta culture générale !',
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    const user = await getCurrentUser()

    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
            <DefaultNavbar user={user}/>
            {children}
        </ThemeProvider>
        <Analytics/>
        </body>
        </html>
    )
}
