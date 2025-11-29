import Link from "next/link";
import { Terminal } from "lucide-react";

export default function DocsIndex() {
  return (
    <div className="max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="font-mono text-5xl font-bold text-emerald-300">Documentation</h1>
        <p className="text-xl text-emerald-300/70">
          Terminal-styled cyberpunk components for your Next.js projects
        </p>
      </div>

      <div className="border border-emerald-500/30 rounded p-6 bg-black/40 space-y-4">
        <h2 className="font-mono text-2xl font-bold text-emerald-300">Quick Start</h2>
        <div className="space-y-2">
          <p className="text-emerald-300/70">Install any component directly:</p>
          <div className="bg-black border border-emerald-500/30 rounded p-4">
            <pre className="font-mono text-sm text-emerald-300">
              npx shadcn@latest add https://glitchcn-ui.vercel.app/r/button.json
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-mono text-2xl font-bold text-emerald-300">Components</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            "alert", "badge", "button", "card", "command", "dialog",
            "input", "progress", "separator", "sheet", "sidebar",
            "skeleton", "table", "tabs", "tooltip"
          ].map((comp) => (
            <Link
              key={comp}
              href={`/docs/components/${comp}`}
              className="border border-emerald-500/30 rounded p-4 hover:bg-emerald-500/10 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-cyan-400" />
                <span className="font-mono text-emerald-300 group-hover:text-emerald-200 capitalize">
                  {comp}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}