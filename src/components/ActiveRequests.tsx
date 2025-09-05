import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BloodRequest {
  id: string;
  bloodType: string;
  urgency: "critical" | "urgent" | "normal";
  location: string;
  distance: string;
  timePosted: string;
  requesterName: string;
  hospital: string;
  unitsNeeded: number;
}

const mockRequests: BloodRequest[] = [
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
];

export const ActiveRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState<BloodRequest | null>(null);
  const { toast } = useToast();

  const handleRespond = (request: BloodRequest) => {
    toast({
      title: "✅ Response Sent!",
      description: `Thank you for responding to ${request.requesterName}'s request. The hospital will contact you soon with further details.`,
      duration: 6000,
    });
    setSelectedRequest(null);
  };

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
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Heart className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Active Urgent Requests</h2>
        <Badge variant="secondary" className="ml-auto">
          {mockRequests.length} active
        </Badge>
      </div>

      <div className="grid gap-4">
        {mockRequests.map((request) => (
          <Card key={request.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Badge
                    className={`font-bold text-lg px-3 py-1 ${getUrgencyColor(request.urgency)}`}
                  >
                    {request.bloodType}
                  </Badge>
                  <div>
                    <CardTitle className="text-lg">{request.hospital}</CardTitle>
                    <CardDescription className="flex items-center space-x-4 mt-1">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{request.distance}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{request.timePosted}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{request.unitsNeeded} units needed</span>
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className={`capitalize ${
                  request.urgency === "critical" ? "border-destructive text-destructive" : ""
                }`}>
                  {request.urgency}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  Requested by {request.requesterName}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={() => setSelectedRequest(request)}
                      className={request.urgency === "critical" ? "shadow-emergency" : ""}
                    >
                      Respond
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Your Response</DialogTitle>
                      <DialogDescription>
                        You're about to respond to {request.requesterName}'s request for {request.bloodType} blood at {request.hospital}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Blood Type:</strong> {request.bloodType}
                        </div>
                        <div>
                          <strong>Units Needed:</strong> {request.unitsNeeded}
                        </div>
                        <div>
                          <strong>Hospital:</strong> {request.hospital}
                        </div>
                        <div>
                          <strong>Distance:</strong> {request.distance}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        By responding, you confirm your availability to donate. The hospital will contact you directly to schedule the donation.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setSelectedRequest(null)}>
                        Cancel
                      </Button>
                      <Button onClick={() => selectedRequest && handleRespond(selectedRequest)}>
                        Confirm Response
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};