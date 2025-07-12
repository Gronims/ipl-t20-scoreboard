import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCcw, Wifi, WifiOff } from 'lucide-react';
import heroImage from '@/assets/cricket-stadium-hero.jpg';

export function DashboardHeader() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate periodic updates
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  const handleRefresh = () => {
    setLastUpdated(new Date());
    // In a real app, this would trigger data fetching
  };

  return (
    <div className="relative overflow-hidden bg-gradient-card border-b border-border">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-ipl bg-clip-text text-transparent mb-2">
              IPL T20 Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Live cricket scores, points table, and match schedules
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Connection status */}
            <Badge variant={isOnline ? 'default' : 'destructive'} className="flex items-center gap-1">
              {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              {isOnline ? 'Online' : 'Offline'}
            </Badge>

            {/* Last updated */}
            <div className="text-sm text-muted-foreground">
              Updated: {lastUpdated.toLocaleTimeString()}
            </div>

            {/* Refresh button */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefresh}
              className="hover:bg-primary/10"
            >
              <RefreshCcw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}