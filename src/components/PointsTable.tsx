import { PointsTableEntry } from '@/types/ipl';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, TrendingUp, TrendingDown } from 'lucide-react';

interface PointsTableProps {
  entries: PointsTableEntry[];
}

export function PointsTable({ entries }: PointsTableProps) {
  const getPositionBadge = (position: number) => {
    if (position <= 4) {
      return (
        <Badge className="bg-success text-success-foreground">
          <Trophy className="w-3 h-3 mr-1" />
          Q
        </Badge>
      );
    }
    return null;
  };

  const getNRRTrend = (nrr: number) => {
    if (nrr > 0) {
      return <TrendingUp className="w-4 h-4 text-success" />;
    } else if (nrr < 0) {
      return <TrendingDown className="w-4 h-4 text-destructive" />;
    }
    return null;
  };

  return (
    <Card className="bg-gradient-card border-border">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-ipl bg-clip-text text-transparent">
            Points Table
          </h2>
          <Badge className="bg-gradient-ipl text-white">
            IPL 2024
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-sm text-muted-foreground">
                <th className="text-left py-3 px-2">Team</th>
                <th className="text-center py-3 px-2">P</th>
                <th className="text-center py-3 px-2">W</th>
                <th className="text-center py-3 px-2">L</th>
                <th className="text-center py-3 px-2">NRR</th>
                <th className="text-center py-3 px-2">Pts</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr 
                  key={entry.team.id} 
                  className={`border-b border-border/50 hover:bg-muted/30 transition-colors ${
                    index < 4 ? 'bg-success/5' : ''
                  }`}
                >
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-muted-foreground w-6">
                        {entry.position}
                      </span>
                      <span className="text-xl">{entry.team.logo}</span>
                      <div className="flex flex-col">
                        <span className="font-bold">{entry.team.shortName}</span>
                        <span className="text-xs text-muted-foreground hidden sm:block">
                          {entry.team.name}
                        </span>
                      </div>
                      {getPositionBadge(entry.position)}
                    </div>
                  </td>
                  <td className="text-center py-4 px-2 font-medium">{entry.played}</td>
                  <td className="text-center py-4 px-2 font-medium text-success">{entry.won}</td>
                  <td className="text-center py-4 px-2 font-medium text-destructive">{entry.lost}</td>
                  <td className="text-center py-4 px-2">
                    <div className="flex items-center justify-center gap-1">
                      <span className={`font-medium ${entry.netRunRate > 0 ? 'text-success' : entry.netRunRate < 0 ? 'text-destructive' : ''}`}>
                        {entry.netRunRate > 0 ? '+' : ''}{entry.netRunRate.toFixed(3)}
                      </span>
                      {getNRRTrend(entry.netRunRate)}
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge variant="secondary" className="font-bold">
                      {entry.points}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-xs text-muted-foreground text-center">
          <p>Top 4 teams qualify for playoffs • Q = Qualified</p>
        </div>
      </div>
    </Card>
  );
}