"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { Terminal, Cpu, Shield, Zap, Activity, Lock, Sun, Moon } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 p-8 font-sans dark:bg-black">
      <Button onClick={toggleTheme}>
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        Toggle Theme
      </Button>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card data-theme={theme}>
          <CardHeader>
            <CardTitle>
              <Terminal className="inline-block mr-2" size={16} />
              System Status
            </CardTitle>
            <CardDescription>Real-time monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs">CPU</span>
                <Badge data-theme={theme}>42%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">Memory</span>
                <Badge data-theme={theme}>68%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">Network</span>
                <Badge data-theme={theme}>Active</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Monitor</Button>
          </CardFooter>
        </Card>

        <Card data-theme={theme}>
          <CardHeader>
            <CardTitle>
              <Shield className="inline-block mr-2" size={16} />
              Security
            </CardTitle>
            <CardDescription>Firewall configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-green-400" />
                <span className="text-xs">Encrypted connection</span>
                <Badge data-theme={theme}>Secure</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-cyan-400" />
                <span className="text-xs">0 threats detected</span>
              </div>
              <p className="text-xs mt-3">Last scan: 2 minutes ago</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Scan Now</Button>
          </CardFooter>
        </Card>

        <Card data-theme={theme}>
          <CardHeader>
            <CardTitle>
              <Cpu className="inline-block mr-2" size={16} />
              Processing
            </CardTitle>
            <CardDescription>Task queue manager</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Tasks completed</span>
                  <span className="font-bold">247/300</span>
                </div>
                <div className="h-2 bg-emerald-950/50 rounded overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-cyan-500 to-emerald-400" 
                    style={{ width: '82%' }}
                  />
                </div>
              </div>
              <p className="text-xs">ETA: ~15 minutes</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">View Queue</Button>
          </CardFooter>
        </Card>

        <Card data-theme={theme}>
          <CardHeader>
            <CardTitle>
              <Zap className="inline-block mr-2" size={16} />
              Alert System
            </CardTitle>
            <CardDescription>Critical notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-2 border border-rose-500/30 bg-rose-950/20 clip-corners">
                <p className="text-xs text-rose-300">
                  ⚠ High memory usage detected
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="destructive" data-theme={theme}>Critical</Badge>
                <span className="text-xs">3 active alerts</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" size="sm">
              Clear All
            </Button>
          </CardFooter>
        </Card>

        <Card data-theme={theme}>
          <CardHeader>
            <CardTitle>Data Transfer</CardTitle>
            <CardDescription>Upload/Download stats</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-emerald-400">↑ Upload:</span>
                <span className="ml-2 font-bold">1.2 GB/s</span>
              </div>
              <div>
                <span className="text-cyan-400"> Download:</span>
                <span className="ml-2 font-bold">3.4 GB/s</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-theme={theme}>
          <CardHeader>
            <CardTitle>Terminal Access</CardTitle>
            <CardDescription>SSH connections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-black/40 rounded font-mono text-xs">
              <p className="text-green-400">$ ssh user@server</p>
              <p className="text-emerald-300/70">Connected...</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Connect</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </div>

      <div className="flex flex-wrap gap-3 items-center mt-6">
        <Badge data-theme={theme}>Default</Badge>
        <Badge variant="destructive" data-theme={theme}>Destructive</Badge>
        <Badge  data-theme={theme}>Secondary</Badge>
        <Badge data-theme={theme}>Outline</Badge>
      </div>
    </div>
  );
}