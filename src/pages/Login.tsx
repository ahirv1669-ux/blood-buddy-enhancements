import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAuth, UserType } from '@/contexts/AuthContext';
import { bloodGroups } from '@/data/mockData';
import { Heart, ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: 'donor' as UserType,
    bloodGroup: '',
    city: '',
    pincode: '',
    age: '',
    weight: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Mock login - in real app, validate credentials
      if (formData.email && formData.name) {
        const userData = {
          id: Math.random().toString(36).substr(2, 9),
          name: formData.name,
          email: formData.email,
          userType: formData.userType,
          phone: formData.phone,
          city: formData.city,
          pincode: formData.pincode,
          bloodGroup: formData.bloodGroup,
          donationCount: formData.userType === 'donor' ? Math.floor(Math.random() * 10) : undefined
        };
        
        login(userData);
        toast({
          title: "Login Successful!",
          description: `Welcome back, ${formData.name}!`,
        });
        navigate('/');
      } else {
        toast({
          title: "Login Failed",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
    } else {
      // Registration
      if (formData.name && formData.email && formData.phone && formData.city && formData.pincode) {
        const userData = {
          id: Math.random().toString(36).substr(2, 9),
          name: formData.name,
          email: formData.email,
          userType: formData.userType,
          phone: formData.phone,
          city: formData.city,
          pincode: formData.pincode,
          bloodGroup: formData.bloodGroup,
          donationCount: 0
        };
        
        login(userData);
        toast({
          title: "Registration Successful!",
          description: `Welcome to Blood Buddy Pro, ${formData.name}!`,
        });
        navigate('/');
      } else {
        toast({
          title: "Registration Failed",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? 'Welcome Back' : 'Join Blood Buddy Pro'}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Sign in to your account to continue saving lives' 
                : 'Create an account to start donating or requesting blood'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              {!isLogin && (
                <>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label>Account Type</Label>
                    <RadioGroup 
                      value={formData.userType} 
                      onValueChange={(value) => handleInputChange('userType', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="donor" id="donor" />
                        <Label htmlFor="donor">Blood Donor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="patient" id="patient" />
                        <Label htmlFor="patient">Patient/Family Member</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hospital" id="hospital" />
                        <Label htmlFor="hospital">Hospital/Medical Professional</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.userType === 'donor' && (
                    <div>
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange('bloodGroup', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          {bloodGroups.map(group => (
                            <SelectItem key={group} value={group}>{group}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {formData.userType === 'donor' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age</Label>
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
                        <Label htmlFor="weight">Weight (kg)</Label>
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
                  )}
                </>
              )}

              <Button type="submit" className="w-full">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;