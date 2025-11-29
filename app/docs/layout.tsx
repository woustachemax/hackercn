import Link from "next/link";
import { Terminal, BookOpen, Package } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarSeparator,
} from "@/components/ui/sidebar";

const components = [
  "alert",
  "badge", 
  "button",
  "card",
  "command",
  "dialog",
  "input",
  "progress",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "table",
  "tabs",
  "tooltip"
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true} className="bg-black overflow-x-hidden">
      <Sidebar variant="inset" collapsible="icon" className="overflow-x-hidden">
        <SidebarHeader>
          <Link href="/" className="flex items-center gap-2 group px-2">
            <Terminal className="text-cyan-400" size={24} />
            <span className="font-mono text-xl font-bold text-emerald-300 group-data-[collapsible=icon]:hidden">
              Glitchcn
            </span>
          </Link>
        </SidebarHeader>
        
        <SidebarContent className="overflow-x-hidden">
          <SidebarGroup>
            <SidebarGroupLabel>Documentation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/docs">
                      <BookOpen className="h-4 w-4" />
                      <span>Getting Started</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/docs/components">
                      <Package className="h-4 w-4" />
                      <span>Components</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Components</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {components.map((comp) => (
                  <SidebarMenuItem key={comp}>
                    <SidebarMenuButton asChild>
                      <Link href={`/docs/components/${comp}`}>
                        <span className="capitalize">{comp}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      
      <SidebarInset className="bg-black">
        <main className="flex-1 p-8 overflow-x-hidden">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}