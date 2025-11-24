"use client"
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
    const [mounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!mounted){
        return <>{children}</>
    }

    return <ThemeProvider
    attribute="class" defaultTheme="dark" enableSystem>{children}</ThemeProvider>;
}
