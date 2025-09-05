import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, User, Filter } from "lucide-react";

const mockAllRequests = [
  {
    id: "1",
    bloodType: "O-",
    urgency: "critical",
    location: "City Hospital",
    distance: "2.3 km",
    timePosted: "5 mins ago",
    requesterName: "John Doe",
    hospital: "City General Hospital",
    unitsNeeded: 3,
  },
  {
    id: "2",
    bloodType: "A+",
    urgency: "urgent",
    location: "Metro Medical Center",
    distance: "4.7 km",
    timePosted: "12 mins ago",
    requesterName: "Sarah Johnson",
    hospital: "Metro Medical Center",
    unitsNeeded: 2,
  },
  {
    id: "3",
    bloodType: "B+",
    urgency: "normal",
    location: "Regional Hospital",
    distance: "8.1 km",
    timePosted: "1 hour ago",
    requesterName: "Mike Wilson",
    hospital: "Regional Hospital",
    unitsNeeded: 1,
  },
  {
    id: "4",
    bloodType: "AB-",
    urgency: "urgent",
    location: "Children's Hospital",
    distance: "6.2 km",
    timePosted: "2 hours ago",
    requesterName: "Emma Davis",
    hospital: "Children's Hospital",
    unitsNeeded: 2,
  },
  {
    id: "5",
    bloodType: "O+",
    urgency: "normal",
    location: "University Medical",
    distance: "12.4 km",
    timePosted: "3 hours ago",
    requesterName: "Robert Chen",
    hospital: "University Medical Center",
    unitsNeeded: 1,
  },
];

const Requests = () => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "critical":
        return "bg-destructive text-destructive-foreground shadow-urgent";
      case "urgent":
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
            <h1 className="text-3xl font-bold">All Blood Requests</h1>
            <p className="text-muted-foreground mt-2">
              Find and respond to blood donation requests in your area
            </p>
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </div>

        <div className="grid gap-6">
          {mockAllRequests.map((request) => (
            <Card key={request.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge
                      className={`font-bold text-xl px-4 py-2 ${getUrgencyColor(request.urgency)}`}
                    >
                      {request.bloodType}
                    </Badge>
                    <div>
                      <CardTitle className="text-xl">{request.hospital}</CardTitle>
                      <CardDescription className="flex items-center space-x-6 mt-2">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{request.distance}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{request.timePosted}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{request.unitsNeeded} units needed</span>
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className={`capitalize ${
                      request.urgency === "critical" ? "border-destructive text-destructive" : ""
                    }`}>
                      {request.urgency}
                    </Badge>
                    <Button 
                      className={request.urgency === "critical" ? "shadow-emergency" : ""}
                    >
                      Respond
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                  Requested by {request.requesterName} • Location: {request.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Requests;