import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Shield, Clock, MapPin, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Response",
      description: "Connect with donors in under 5 minutes for urgent blood requirements."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Verified Donors",
      description: "All donors are verified and screened for safety and reliability."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Location-Based",
      description: "Smart location matching to find the nearest available donors."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency blood request system for critical situations."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Driven",
      description: "Built by the community, for the community to save more lives together."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Gamification",
      description: "Leaderboards and rewards to encourage regular blood donation."
    }
  ];

  const stats = [
    { number: "5,000+", label: "Active Donors" },
    { number: "2,500+", label: "Lives Saved" },
    { number: "200+", label: "Partner Hospitals" },
    { number: "50+", label: "Cities Covered" }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Medical Advisor",
      description: "Leading hematologist with 15+ years experience in blood banking."
    },
    {
      name: "Rahul Kumar",
      role: "Technology Lead",
      description: "Full-stack developer passionate about healthcare technology solutions."
    },
    {
      name: "Anita Patel",
      role: "Community Manager",
      description: "Social worker dedicated to building strong donor communities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                About Blood Buddy Pro
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're on a mission to revolutionize blood donation by connecting donors with those in need through technology, creating a seamless and life-saving experience for everyone.
              </p>
              <div className="flex justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Heart className="h-4 w-4 mr-2" />
                  Life Saving Technology
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Zap className="h-4 w-4 mr-2" />
                  Instant Connection
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-12 space-y-16">
          {/* Mission Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                To ensure that no life is lost due to blood shortage by creating the world's most efficient and reliable blood donation network.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A world where every blood request is fulfilled within minutes, saving millions of lives through the power of community and technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compassion, reliability, transparency, and innovation drive everything we do to create a better world for everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Our Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connecting communities, saving lives, and building a sustainable ecosystem for blood donation worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Features Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Blood Buddy Pro?</h2>
              <p className="text-xl text-muted-foreground">
                Advanced features designed to make blood donation simple, safe, and effective
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-xl text-muted-foreground">
                Together, we're making a real difference in saving lives
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">
                Passionate professionals dedicated to saving lives through technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Join Our Life-Saving Mission</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you're a donor, patient, or healthcare professional, you can be part of this amazing community that saves lives every day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/donate"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Become a Donor
                  </a>
                  <a
                    href="/requests"
                    className="inline-flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-background hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Find Donors
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;