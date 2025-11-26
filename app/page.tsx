"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import { Terminal, Cpu, Shield, Activity, Lock, Sun, Moon, AlertTriangle, CheckCircle } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="min-h-screen bg-zinc-50 dark:bg-black p-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <header className="flex items-center justify-between py-8">
            <div className="flex items-center gap-3">
              <Terminal className="text-cyan-400" size={32} />
              <h1 className="font-mono text-3xl font-bold tracking-wider uppercase text-emerald-300">
                HACKERCN
              </h1>
            </div>
            <Button onClick={toggleTheme} size="sm">
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
          </header>

          <section>
            <h2 className="font-mono text-xl font-bold tracking-wider uppercase text-emerald-300 mb-6">
              Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity size={14} className="text-cyan-400" />
                      <span className="text-xs">0 threats detected</span>
                    </div>
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
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">View Queue</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="font-mono text-xl font-bold tracking-wider uppercase text-emerald-300 mb-6">
              Alerts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Alert data-theme={theme}>
                <CheckCircle size={16} />
                <AlertTitle>System Online</AlertTitle>
                <AlertDescription>
                  All systems operational. Connection established.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive" data-theme={theme}>
                <AlertTriangle size={16} />
                <AlertTitle>Security Alert</AlertTitle>
                <AlertDescription>
                  Unauthorized access attempt detected.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          <section>
            <h2 className="font-mono text-xl font-bold tracking-wider uppercase text-emerald-300 mb-6">
              Buttons & Badges
            </h2>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent data-theme={theme}>
                    <DialogHeader>
                      <DialogTitle>Terminal Access</DialogTitle>
                      <DialogDescription>
                        Configure your terminal connection settings
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="p-3 bg-black/40 rounded font-mono text-xs border border-emerald-500/30">
                        <p className="text-green-400">$ ssh user@192.168.1.100</p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button size="sm" variant="destructive">Disconnect</Button>
                      <Button size="sm">Connect</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge data-theme={theme}>Default</Badge>
                <Badge variant="destructive" data-theme={theme}>Destructive</Badge>
                <Badge data-theme={theme}>
                  <Activity size={12} />
                  Active
                </Badge>
                <Badge variant="destructive" data-theme={theme}>
                  <AlertTriangle size={12} />
                  Critical
                </Badge>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}