import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Users, 
  DollarSign, 
  ArrowRight,
  CheckCircle,
  Play,
  Star
} from 'lucide-react';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-gradient-card border-b border-border/50 shadow-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                World Vision Analytics
              </span>
            </div>
            <Link to="/login&signup">
              <Button variant="outline" className="border-border/50">
                Sign In/Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-foreground">Transform</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-glow to-accent-foreground bg-clip-text text-transparent">
                  Economic Data
                </span>
                <br />
                <span className="text-foreground">Into Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Access comprehensive economic data through interactive visualizations. 
                Make data-driven decisions with real-time economic intelligence.
              </p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center animate-fade-in">
              <p className="text-muted-foreground">
                Ready to get started? 
                <Link to="/login&signup" className="text-primary hover:text-primary/80 ml-1 underline">
                  Sign up/Sign in here
                </Link>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 pt-8 animate-fade-in">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm">200+ Countries</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm">50+ Indicators</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm">Real-time Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Economic Analytics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to analyze and understand global economic trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Interactive Charts</h3>
                <p className="text-muted-foreground">
                  Dynamic line and bar charts with filtering capabilities for deep data exploration
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Globe className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Global Coverage</h3>
                <p className="text-muted-foreground">
                  Comprehensive data from 200+ countries with regional filtering and comparison tools
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-info/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <TrendingUp className="w-8 h-8 text-info" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trend Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced analytics for GDP, unemployment, inflation, and other key economic indicators
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-warning/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Users className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-4">User-Friendly</h3>
                <p className="text-muted-foreground">
                  Intuitive interface designed for both analysts and decision-makers
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Economic Insights</h3>
                <p className="text-muted-foreground">
                  Key metrics and summaries to quickly understand economic performance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <CheckCircle className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reliable Data</h3>
                <p className="text-muted-foreground">
                  Powered by World Bank's trusted economic development indicators
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-gradient-card border border-border/50 rounded-3xl p-12 shadow-elegant">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore Economic Data?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of analysts, researchers, and decision-makers who trust our platform
              for economic intelligence.
            </p>
            <p className="text-sm text-muted-foreground">
              Demo credentials: Any username • Password: admin
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-card border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold">World Vision Analytics</span>
          </div>
          <p className="text-muted-foreground">
            Transforming economic data into actionable insights
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
