import { LiveMatch } from '@/types/ipl';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Radio } from 'lucide-react';

interface LiveMatchCardProps {
  match: LiveMatch;
}

export function LiveMatchCard({ match }: LiveMatchCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-card border-primary/30 animate-slide-up">
      {/* Live indicator */}
      <div className="absolute top-4 right-4">
        <Badge variant="destructive" className="bg-gradient-live text-white animate-pulse-glow">
          <Radio className="w-3 h-3 mr-1" />
          LIVE
        </Badge>
      </div>

      <div className="p-6">
        {/* Match header */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{match.venue}</span>
        </div>

        {/* Teams and scores */}
        <div className="space-y-4">
          {/* Team 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{match.team1.logo}</span>
              <div>
                <h3 className="font-bold text-lg">{match.team1.shortName}</h3>
                <p className="text-sm text-muted-foreground">{match.team1.name}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{match.liveScore.team1Score}</div>
            </div>
          </div>

          {/* VS divider */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-border flex-1" />
            <span className="px-4 text-sm font-medium text-muted-foreground">VS</span>
            <div className="h-px bg-border flex-1" />
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{match.team2.logo}</span>
              <div>
                <h3 className="font-bold text-lg">{match.team2.shortName}</h3>
                <p className="text-sm text-muted-foreground">{match.team2.name}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{match.liveScore.team2Score}</div>
            </div>
          </div>
        </div>

        {/* Live details */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">Current Batsman</span>
            <span className="font-medium">{match.liveScore.currentBatsman}</span>
          </div>
          
          {/* Recent balls */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-muted-foreground">Recent:</span>
            <div className="flex gap-1">
              {match.liveScore.recentBalls.map((ball, index) => (
                <span
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    ball === '4' || ball === '6' 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {ball}
                </span>
              ))}
            </div>
          </div>

          {/* Latest commentary */}
          <div className="bg-muted/50 rounded-md p-3">
            <p className="text-sm leading-relaxed">{match.liveScore.commentary[0]}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}