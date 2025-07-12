import { Match } from '@/types/ipl';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Calendar } from 'lucide-react';

interface UpcomingMatchCardProps {
  match: Match;
  isNext?: boolean;
}

export function UpcomingMatchCard({ match, isNext = false }: UpcomingMatchCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card className={`bg-gradient-card border-border hover:border-primary/50 transition-all hover:shadow-glow ${isNext ? 'ring-2 ring-primary/30' : ''}`}>
      <div className="p-4">
        {isNext && (
          <Badge className="mb-3 bg-primary text-primary-foreground">
            Next Match
          </Badge>
        )}

        {/* Match info */}
        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(match.date)}</span>
          <Clock className="w-4 h-4 ml-2" />
          <span>{match.time}</span>
        </div>

        {/* Teams */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{match.team1.logo}</span>
            <span className="font-bold">{match.team1.shortName}</span>
          </div>
          <span className="text-muted-foreground font-medium">vs</span>
          <div className="flex items-center gap-2">
            <span className="font-bold">{match.team2.shortName}</span>
            <span className="text-xl">{match.team2.logo}</span>
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{match.venue}</span>
        </div>
      </div>
    </Card>
  );
}