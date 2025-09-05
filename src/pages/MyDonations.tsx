import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Award, Heart } from "lucide-react";

const mockDonations = [
  {
    id: "1",
    bloodType: "O+",
    date: "March 15, 2025",
    hospital: "City General Hospital",
    location: "Downtown Medical Center",
    status: "completed",
    unitsGiven: 1,
    recipientAge: "32-year-old patient",
  },
  {
    id: "2",
    bloodType: "O+",
    date: "February 8, 2025",
    hospital: "Metro Medical Center",
    location: "Metro Medical Center",
    status: "completed",
    unitsGiven: 1,
    recipientAge: "45-year-old patient",
  },
  {
    id: "3",
    bloodType: "O+",
    date: "January 12, 2025",
    hospital: "Regional Hospital",
    location: "Regional Hospital",
    status: "completed",
    unitsGiven: 1,
    recipientAge: "28-year-old patient",
  },
];

const MyDonations = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "scheduled":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Donations</h1>
            <p className="text-muted-foreground mt-2">
              Track your donation history and impact
            </p>
          </div>
          <Button className="flex items-center space-x-2">
            <Heart className="h-4 w-4" />
            <span>Schedule Donation</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-2xl text-primary">3</CardTitle>
              <CardDescription className="text-center">Total Donations</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-2xl text-success">3</CardTitle>
              <CardDescription className="text-center">Lives Saved</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-2xl text-warning">3</CardTitle>
              <CardDescription className="text-center">Units Donated</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Donation History</h2>
          </div>

          <div className="grid gap-4">
            {mockDonations.map((donation, index) => (
              <Card key={donation.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-primary text-primary-foreground font-bold text-lg px-3 py-1">
                        {donation.bloodType}
                      </Badge>
                      <div>
                        <CardTitle className="text-lg">{donation.hospital}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 mt-1">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{donation.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{donation.location}</span>
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={`capitalize ${getStatusColor(donation.status)}`}>
                      {donation.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm">
                        <strong>Units donated:</strong> {donation.unitsGiven}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Helped save a {donation.recipientAge}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyDonations;