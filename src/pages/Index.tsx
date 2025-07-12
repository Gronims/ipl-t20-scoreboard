import { DashboardHeader } from '@/components/DashboardHeader';
import { LiveMatchCard } from '@/components/LiveMatchCard';
import { UpcomingMatchCard } from '@/components/UpcomingMatchCard';
import { PointsTable } from '@/components/PointsTable';
import { ScheduleCard } from '@/components/ScheduleCard';
import { liveMatch, upcomingMatches, pointsTable, schedule } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Live/Next Match Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Live Match</h2>
          <LiveMatchCard match={liveMatch} />
        </div>

        {/* Upcoming Matches */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Upcoming Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingMatches.map((match, index) => (
              <UpcomingMatchCard 
                key={match.id} 
                match={match} 
                isNext={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Tabs for Points Table and Schedule */}
        <Tabs defaultValue="points" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
            <TabsTrigger value="points" className="text-sm font-medium">
              Points Table
            </TabsTrigger>
            <TabsTrigger value="schedule" className="text-sm font-medium">
              Full Schedule
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="points" className="space-y-4">
            <PointsTable entries={pointsTable} />
          </TabsContent>
          
          <TabsContent value="schedule" className="space-y-4">
            <ScheduleCard matches={schedule} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
