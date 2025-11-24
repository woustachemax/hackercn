"use client"

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";


export default function Home() {
  const {theme, setTheme} = useTheme()

  const toggleTheme = ()=>{
    setTheme(theme == "dark" ? "light" : "dark")

  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Button variant={"destructive"}
        onClick={toggleTheme}>Press Me!!</Button>
    </div>
  );
}
