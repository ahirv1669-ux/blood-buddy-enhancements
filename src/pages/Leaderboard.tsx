import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Medal, Award, Heart, Star, Crown } from 'lucide-react';
import { mockDonors } from '@/data/mockData';

const Leaderboard = () => {
  // Sort donors by total donations and add some mock data for leaderboard
  const topDonors = [...mockDonors]
    .sort((a, b) => b.totalDonations - a.totalDonations)
    .slice(0, 10)
    .map((donor, index) => ({
      ...donor,
      rank: index + 1,
      points: donor.totalDonations * 50, // 50 points per donation
      badges: getBadges(donor.totalDonations),
      streak: Math.floor(Math.random() * 12) + 1, // Mock streak data
    }));

  // Mock recent donations for activity feed
  const recentDonations = [
    { donor: 'Arjun Kumar', hospital: 'AIIMS Delhi', time: '2 hours ago', bloodGroup: 'O-' },
    { donor: 'Priya Sharma', hospital: 'Fortis Mumbai', time: '5 hours ago', bloodGroup: 'A+' },
    { donor: 'Rajesh Patel', hospital: 'Apollo Bangalore', time: '1 day ago', bloodGroup: 'B+' },
    { donor: 'Sneha Reddy', hospital: 'Care Hyderabad', time: '2 days ago', bloodGroup: 'AB-' },
    { donor: 'Amit Singh', hospital: 'Apollo Chennai', time: '3 days ago', bloodGroup: 'O+' },
  ];

  function getBadges(donations: number) {
    const badges = [];
    if (donations >= 25) badges.push({ name: 'Super Hero', icon: '🦸‍♂️', color: 'bg-purple-500' });
    if (donations >= 20) badges.push({ name: 'Life Saver', icon: '💝', color: 'bg-red-500' });
    if (donations >= 15) badges.push({ name: 'Champion', icon: '🏆', color: 'bg-yellow-500' });
    if (donations >= 10) badges.push({ name: 'Guardian', icon: '🛡️', color: 'bg-blue-500' });
    if (donations >= 5) badges.push({ name: 'Helper', icon: '🤝', color: 'bg-green-500' });
    return badges;
  }

  function getRankIcon(rank: number) {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  }

  function getRankColor(rank: number) {
    switch (rank) {
      case 1:
        return 'border-yellow-300 bg-yellow-50/50';
      case 2:
        return 'border-gray-300 bg-gray-50/50';
      case 3:
        return 'border-amber-300 bg-amber-50/50';
      default:
        return 'border-border bg-card';
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Donor Leaderboard</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating our amazing donors who are making a difference every day. Join the leaderboard and earn points for every life you save!
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Top Blood Donors
                </CardTitle>
                <CardDescription>
                  Heroes who are leading the way in saving lives through blood donation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topDonors.map((donor) => (
                    <div
                      key={donor.id}
                      className={`p-4 rounded-lg border ${getRankColor(donor.rank)} hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            {getRankIcon(donor.rank)}
                          </div>
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {donor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{donor.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{donor.city}</span>
                              <span>•</span>
                              <Badge variant="outline" className="text-xs">
                                {donor.bloodGroup}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Heart className="h-4 w-4 text-primary" fill="currentColor" />
                            <span className="font-bold text-lg">{donor.totalDonations}</span>
                            <span className="text-sm text-muted-foreground">donations</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 text-yellow-500" fill="currentColor" />
                            <span>{donor.points} points</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Badges */}
                      {donor.badges.length > 0 && (
                        <div className="flex gap-2 mt-3 flex-wrap">
                          {donor.badges.slice(0, 3).map((badge, index) => (
                            <Badge key={index} className={`${badge.color} text-white text-xs`}>
                              {badge.icon} {badge.name}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievement Levels */}
            <Card>
              <CardHeader>
                <CardTitle>Achievement Levels</CardTitle>
                <CardDescription>Unlock badges as you donate more</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 rounded">
                  <div className="flex items-center gap-2">
                    <span>🤝</span>
                    <span className="text-sm">Helper</span>
                  </div>
                  <span className="text-xs text-muted-foreground">5+ donations</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded">
                  <div className="flex items-center gap-2">
                    <span>🛡️</span>
                    <span className="text-sm">Guardian</span>
                  </div>
                  <span className="text-xs text-muted-foreground">10+ donations</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded">
                  <div className="flex items-center gap-2">
                    <span>🏆</span>
                    <span className="text-sm">Champion</span>
                  </div>
                  <span className="text-xs text-muted-foreground">15+ donations</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded">
                  <div className="flex items-center gap-2">
                    <span>💝</span>
                    <span className="text-sm">Life Saver</span>
                  </div>
                  <span className="text-xs text-muted-foreground">20+ donations</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded">
                  <div className="flex items-center gap-2">
                    <span>🦸‍♂️</span>
                    <span className="text-sm">Super Hero</span>
                  </div>
                  <span className="text-xs text-muted-foreground">25+ donations</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
                <CardDescription>Latest life-saving contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-muted/50">
                      <div>
                        <div className="font-medium text-sm">{donation.donor}</div>
                        <div className="text-xs text-muted-foreground">{donation.hospital}</div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs mb-1">
                          {donation.bloodGroup}
                        </Badge>
                        <div className="text-xs text-muted-foreground">{donation.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15,247</div>
                  <div className="text-sm text-muted-foreground">Total Donations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5,891</div>
                  <div className="text-sm text-muted-foreground">Active Donors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">45,741</div>
                  <div className="text-sm text-muted-foreground">Lives Saved</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leaderboard;