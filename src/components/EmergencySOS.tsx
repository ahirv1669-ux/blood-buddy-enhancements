import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const EmergencySOS = () => {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const { toast } = useToast();

  const handleEmergencyBroadcast = () => {
    setIsEmergencyActive(true);
    toast({
      title: "🚨 Emergency Alert Sent!",
      description: "Your request has been broadcast to all nearby donors. Help is on the way!",
      duration: 5000,
    });

    // Simulate emergency being handled after 30 seconds
    setTimeout(() => {
      setIsEmergencyActive(false);
    }, 30000);
  };

  return (
    <div className="rounded-lg border-2 border-destructive bg-gradient-to-br from-destructive/5 to-destructive/10 p-6">
      <div className="flex items-center space-x-3 mb-4">
        <AlertTriangle className="h-8 w-8 text-destructive" />
        <div>
          <h2 className="text-2xl font-bold text-destructive">Emergency SOS</h2>
          <p className="text-sm text-muted-foreground">Critical blood need? Get help immediately</p>
        </div>
      </div>

      {isEmergencyActive ? (
        <div className="space-y-4">
          <div className="animate-pulse bg-destructive/20 rounded-lg p-4 border-2 border-destructive">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
              <span className="font-semibold text-destructive">EMERGENCY ACTIVE</span>
            </div>
            <p className="text-sm">Broadcasting to all donors within 10km radius...</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" size="sm" className="w-full">
              <MapPin className="mr-2 h-4 w-4" />
              Track Donors
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Phone className="mr-2 h-4 w-4" />
              Call Hospital
            </Button>
          </div>
        </div>
      ) : (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button 
              variant="destructive" 
              size="lg" 
              className="w-full h-14 text-lg font-bold shadow-emergency hover:scale-105 transition-all duration-200"
            >
              <AlertTriangle className="mr-3 h-6 w-6" />
              EMERGENCY SOS
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <span>Confirm Emergency Broadcast</span>
              </AlertDialogTitle>
              <AlertDialogDescription>
                This will immediately alert all nearby donors about your critical blood need. 
                Only use this for genuine medical emergencies.
                <br /><br />
                <strong>Are you sure you want to broadcast an emergency SOS?</strong>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction 
                onClick={handleEmergencyBroadcast}
                className="bg-destructive hover:bg-destructive/90"
              >
                Yes, Send Emergency Alert
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};