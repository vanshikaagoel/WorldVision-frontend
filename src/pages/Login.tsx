import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { BarChart3, TrendingUp, Globe, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, login, isLoading } = useAuth();
  const { toast } = useToast();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await login(username, password);
    
    if (success) {
      toast({
        title: "Welcome back!",
        description: "You've been successfully logged in.",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials. Use any username with password 'admin'",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative">
      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Hero Section */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              World Vision
              <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Access comprehensive economic data and interactive visualizations for global economic analysis.
            </p>
          </div>
          
          <div className="grid gap-4 max-w-md lg:max-w-none">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="font-medium">Interactive Economic Charts</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-medium">Real-time Global Data</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-medium">Comprehensive Coverage</span>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="animate-fade-in">
          <Card className="w-full max-w-md mx-auto bg-card/95 backdrop-blur-sm border-white/10 shadow-elegant">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl font-bold text-center text-foreground">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Sign in to access your economic dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/30">
                <p className="text-xs text-muted-foreground text-center mb-2">Demo credentials:</p>
                <p className="text-xs text-center text-accent-foreground">
                  <span className="font-mono bg-background/50 px-2 py-1 rounded">Any username</span> • 
                  <span className="font-mono bg-background/50 px-2 py-1 rounded ml-1">admin</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;