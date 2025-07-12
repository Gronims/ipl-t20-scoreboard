import { Team, Match, PointsTableEntry, LiveMatch } from '@/types/ipl';

export const teams: Team[] = [
  { id: 'csk', name: 'Chennai Super Kings', shortName: 'CSK', color: '#FDB914', logo: '🦁' },
  { id: 'mi', name: 'Mumbai Indians', shortName: 'MI', color: '#004BA0', logo: '🔵' },
  { id: 'rcb', name: 'Royal Challengers Bangalore', shortName: 'RCB', color: '#EC1C24', logo: '👑' },
  { id: 'dc', name: 'Delhi Capitals', shortName: 'DC', color: '#282968', logo: '🏛️' },
  { id: 'kkr', name: 'Kolkata Knight Riders', shortName: 'KKR', color: '#3A225D', logo: '⚔️' },
  { id: 'pbks', name: 'Punjab Kings', shortName: 'PBKS', color: '#ED1B24', logo: '👑' },
  { id: 'rr', name: 'Rajasthan Royals', shortName: 'RR', color: '#254AA5', logo: '👑' },
  { id: 'srh', name: 'Sunrisers Hyderabad', shortName: 'SRH', color: '#FF822A', logo: '☀️' },
  { id: 'gt', name: 'Gujarat Titans', shortName: 'GT', color: '#1B2133', logo: '⚡' },
  { id: 'lsg', name: 'Lucknow Super Giants', shortName: 'LSG', color: '#E04F16', logo: '🦸' },
];

export const liveMatch: LiveMatch = {
  id: 'live-1',
  team1: teams[0], // CSK
  team2: teams[1], // MI
  venue: 'M. A. Chidambaram Stadium, Chennai',
  date: '2024-03-22',
  time: '19:30',
  status: 'live',
  liveScore: {
    team1Score: '178/4 (18.2)',
    team2Score: '156/7 (20.0)',
    overs: '18.2',
    currentBatsman: 'MS Dhoni*',
    recentBalls: ['4', '1', '6', '0', '2', '1'],
    commentary: [
      '18.2 Bumrah to Dhoni, SIX! What a shot! MS Dhoni shows his class with a magnificent hit over long-on!',
      '18.1 Bumrah to Gaikwad, single taken, good running between the wickets',
      '17.6 Archer to Dhoni, FOUR! Classic Dhoni finishing, straight down the ground'
    ]
  }
};

export const upcomingMatches: Match[] = [
  {
    id: 'match-1',
    team1: teams[2], // RCB
    team2: teams[3], // DC
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    date: '2024-03-23',
    time: '15:30',
    status: 'upcoming'
  },
  {
    id: 'match-2',
    team1: teams[4], // KKR
    team2: teams[5], // PBKS
    venue: 'Eden Gardens, Kolkata',
    date: '2024-03-23',
    time: '19:30',
    status: 'upcoming'
  },
  {
    id: 'match-3',
    team1: teams[6], // RR
    team2: teams[7], // SRH
    venue: 'Sawai Mansingh Stadium, Jaipur',
    date: '2024-03-24',
    time: '15:30',
    status: 'upcoming'
  }
];

export const pointsTable: PointsTableEntry[] = [
  {
    team: teams[8], // GT
    played: 8,
    won: 6,
    lost: 2,
    tied: 0,
    noResult: 0,
    netRunRate: 1.425,
    points: 12,
    position: 1
  },
  {
    team: teams[0], // CSK
    played: 8,
    won: 5,
    lost: 3,
    tied: 0,
    noResult: 0,
    netRunRate: 0.652,
    points: 10,
    position: 2
  },
  {
    team: teams[1], // MI
    played: 8,
    won: 5,
    lost: 3,
    tied: 0,
    noResult: 0,
    netRunRate: 0.318,
    points: 10,
    position: 3
  },
  {
    team: teams[2], // RCB
    played: 8,
    won: 4,
    lost: 4,
    tied: 0,
    noResult: 0,
    netRunRate: -0.145,
    points: 8,
    position: 4
  },
  {
    team: teams[4], // KKR
    played: 8,
    won: 4,
    lost: 4,
    tied: 0,
    noResult: 0,
    netRunRate: -0.321,
    points: 8,
    position: 5
  },
  {
    team: teams[9], // LSG
    played: 8,
    won: 3,
    lost: 5,
    tied: 0,
    noResult: 0,
    netRunRate: -0.156,
    points: 6,
    position: 6
  },
  {
    team: teams[6], // RR
    played: 8,
    won: 3,
    lost: 5,
    tied: 0,
    noResult: 0,
    netRunRate: -0.485,
    points: 6,
    position: 7
  },
  {
    team: teams[3], // DC
    played: 8,
    won: 3,
    lost: 5,
    tied: 0,
    noResult: 0,
    netRunRate: -0.712,
    points: 6,
    position: 8
  },
  {
    team: teams[7], // SRH
    played: 8,
    won: 2,
    lost: 6,
    tied: 0,
    noResult: 0,
    netRunRate: -0.845,
    points: 4,
    position: 9
  },
  {
    team: teams[5], // PBKS
    played: 8,
    won: 1,
    lost: 7,
    tied: 0,
    noResult: 0,
    netRunRate: -1.234,
    points: 2,
    position: 10
  }
];

export const schedule: Match[] = [
  ...upcomingMatches,
  {
    id: 'completed-1',
    team1: teams[0],
    team2: teams[1],
    venue: 'M. A. Chidambaram Stadium, Chennai',
    date: '2024-03-22',
    time: '19:30',
    status: 'completed',
    result: 'CSK won by 6 wickets'
  },
  {
    id: 'completed-2',
    team1: teams[2],
    team2: teams[4],
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    date: '2024-03-21',
    time: '15:30',
    status: 'completed',
    result: 'RCB won by 18 runs'
  }
];