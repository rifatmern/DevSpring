import React from "react"
import "./globals.css"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ScrollToTop from "@/components/ScrollToTop"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                {children}
                <ScrollToTop/>
                <Footer/>
                
            </body>
        </html>
    )
}