import Link from "next/link";
import { Terminal } from "lucide-react";

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
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(6,182,212,0.02)_50%,transparent_100%)] bg-size[100%_4px] animate-scanline pointer-events-none" />
      
      <div className="relative flex">
        <aside className="w-64 min-h-screen border-r border-emerald-500/30 p-4 sticky top-0">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <Terminal className="text-cyan-400" size={24} />
            <span className="font-mono text-xl font-bold text-emerald-300">Glitchcn</span>
          </Link>
          
          <nav className="space-y-1">
            <div className="font-mono text-xs text-emerald-400/50 uppercase mb-2 px-2">Components</div>
            {components.map((comp) => (
              <Link
                key={comp}
                href={`/docs/components/${comp}`}
                className="block px-2 py-1.5 text-sm font-mono text-emerald-300/70 hover:text-emerald-300 hover:bg-emerald-500/10 rounded transition-colors"
              >
                {comp}
              </Link>
            ))}
          </nav>
        </aside>
        
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}