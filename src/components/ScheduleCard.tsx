import { Match } from '@/types/ipl';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ScheduleCardProps {
  matches: Match[];
}

export function ScheduleCard({ matches }: ScheduleCardProps) {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  
  const filteredMatches = matches.filter(match => {
    if (filter === 'all') return true;
    return match.status === filter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getStatusBadge = (match: Match) => {
    switch (match.status) {
      case 'live':
        return <Badge variant="destructive" className="bg-gradient-live">LIVE</Badge>;
      case 'upcoming':
        return <Badge variant="outline" className="border-primary text-primary">Upcoming</Badge>;
      case 'completed':
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-gradient-card border-border">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-ipl bg-clip-text text-transparent">
            Match Schedule
          </h2>
          
          {/* Filter buttons */}
          <div className="flex gap-2">
            <Button 
              variant={filter === 'all' ? 'ipl' : 'ghost'} 
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'upcoming' ? 'ipl' : 'ghost'} 
              size="sm"
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </Button>
            <Button 
              variant={filter === 'completed' ? 'ipl' : 'ghost'} 
              size="sm"
              onClick={() => setFilter('completed')}
            >
              Completed
            </Button>
          </div>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredMatches.map((match) => (
            <div 
              key={match.id} 
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex-1">
                {/* Date and time */}
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(match.date)}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{match.time}</span>
                </div>

                {/* Teams */}
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{match.team1.logo}</span>
                    <span className="font-bold">{match.team1.shortName}</span>
                  </div>
                  <span className="text-muted-foreground">vs</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{match.team2.shortName}</span>
                    <span className="text-lg">{match.team2.logo}</span>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{match.venue}</span>
                </div>

                {/* Result for completed matches */}
                {match.status === 'completed' && match.result && (
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-success font-medium">{match.result}</span>
                  </div>
                )}
              </div>

              <div className="ml-4">
                {getStatusBadge(match)}
              </div>
            </div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No matches found for the selected filter.</p>
          </div>
        )}
      </div>
    </Card>
  );
}