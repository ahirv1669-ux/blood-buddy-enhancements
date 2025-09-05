import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { bloodGroups } from '@/data/mockData';
import { Heart, Shield, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Donate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuth();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bloodGroup: user?.bloodGroup || '',
    phone: user?.phone || '',
    email: user?.email || '',
    city: user?.city || '',
    pincode: user?.pincode || '',
    age: '',
    weight: '',
    medicalConditions: '',
    medications: '',
    lastDonation: '',
    preferredTime: '',
    consent: false,
    emergencyContact: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast({
        title: "Please Login",
        description: "You need to login to register as a donor.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    // Mock registration
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering as a blood donor. We'll contact you when there's a matching request.",
    });

    // Reset form
    setFormData(prev => ({
      ...prev,
      age: '',
      weight: '',
      medicalConditions: '',
      medications: '',
      lastDonation: '',
      preferredTime: '',
      consent: false,
    }));
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Become a Life Saver</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of heroes who donate blood regularly. Your single donation can save up to 3 lives.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Benefits Section */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Why Donate Blood?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Health Benefits</h4>
                    <p className="text-sm text-muted-foreground">Regular donation helps maintain iron levels and reduces cardiovascular risks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Quick Process</h4>
                    <p className="text-sm text-muted-foreground">The entire donation process takes only 30-45 minutes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Convenient Locations</h4>
                    <p className="text-sm text-muted-foreground">We'll connect you with nearby blood banks and hospitals.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donation Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Age: 18-65 years</li>
                  <li>• Weight: Minimum 50 kg</li>
                  <li>• Wait 56 days between donations</li>
                  <li>• Must be in good health</li>
                  <li>• Eat iron-rich foods before donation</li>
                  <li>• Stay hydrated</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Donor Registration Form</CardTitle>
                <CardDescription>
                  Fill out this form to register as a blood donor. All information is kept confidential.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="bloodGroup">Blood Group *</Label>
                      <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange('bloodGroup', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          {bloodGroups.map(group => (
                            <SelectItem key={group} value={group}>{group}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="18"
                        max="65"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Weight (kg) *</Label>
                      <Input
                        id="weight"
                        type="number"
                        min="50"
                        value={formData.weight}
                        onChange={(e) => handleInputChange('weight', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="lastDonation">Last Blood Donation Date</Label>
                    <Input
                      id="lastDonation"
                      type="date"
                      value={formData.lastDonation}
                      onChange={(e) => handleInputChange('lastDonation', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="medicalConditions">Medical Conditions (if any)</Label>
                    <Textarea
                      id="medicalConditions"
                      placeholder="Please list any medical conditions, allergies, or chronic illnesses"
                      value={formData.medicalConditions}
                      onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="medications">Current Medications</Label>
                    <Textarea
                      id="medications"
                      placeholder="List any medications you are currently taking"
                      value={formData.medications}
                      onChange={(e) => handleInputChange('medications', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Donation Time</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When can you donate?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                        <SelectItem value="weekend">Weekends Only</SelectItem>
                        <SelectItem value="emergency">Emergency Calls Anytime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="emergencyContact"
                        checked={formData.emergencyContact}
                        onCheckedChange={(checked) => handleInputChange('emergencyContact', checked)}
                      />
                      <Label htmlFor="emergencyContact" className="text-sm">
                        I agree to be contacted for emergency blood requirements
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked)}
                      />
                      <Label htmlFor="consent" className="text-sm">
                        I consent to donate blood and confirm that all information provided is accurate *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Register as Blood Donor
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;