export interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
  logo: string;
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  venue: string;
  date: string;
  time: string;
  status: 'upcoming' | 'live' | 'completed';
  result?: string;
  liveScore?: {
    team1Score: string;
    team2Score: string;
    overs: string;
    currentBatsman?: string;
    recentBalls?: string[];
  };
}

export interface PointsTableEntry {
  team: Team;
  played: number;
  won: number;
  lost: number;
  tied: number;
  noResult: number;
  netRunRate: number;
  points: number;
  position: number;
}

export interface LiveMatch extends Match {
  status: 'live';
  liveScore: {
    team1Score: string;
    team2Score: string;
    overs: string;
    currentBatsman: string;
    recentBalls: string[];
    commentary: string[];
  };
}