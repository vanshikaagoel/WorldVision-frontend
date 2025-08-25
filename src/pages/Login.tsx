import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';

const Auth: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, login, signup, isLoading } = useAuth();
  const { toast } = useToast();

  // Don't redirect if we're still loading the initial auth state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Only redirect if user exists and we're not loading
  if (user && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignup) {
      const success = await signup({ username, email, password });
      if (success) {
        toast({ title: 'Account created!', description: 'You can now log in.' });
        setIsSignup(false);
      } else {
        toast({ title: 'Signup failed', description: 'Username or email may already exist.', variant: 'destructive' });
      }
    } else {
      const success = await login(username, password);
      if (success) {
        toast({ title: 'Welcome back!', description: 'You are logged in.' });
        // Don't need to manually redirect here, the component will re-render
        // and the Navigate component above will handle the redirect
      } else {
        toast({ title: 'Login failed', description: 'Invalid credentials.', variant: 'destructive' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative">
      <Link to="/" className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            World Vision
            <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">Analytics</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Access comprehensive economic data and interactive visualizations for global economic analysis.
          </p>
        </div>

        <div className="animate-fade-in">
          <Card className="w-full max-w-md mx-auto bg-card/95 backdrop-blur-sm border-white/10 shadow-elegant">
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl font-bold text-center text-foreground">{isSignup ? 'Create Account' : 'Welcome Back'}</CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                {isSignup ? 'Sign up to start your journey' : 'Sign in to access your dashboard'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                  <Input id="username" type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                {isSignup && (
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-primary" disabled={isLoading}>
                  {isLoading ? (isSignup ? 'Signing up...' : 'Signing in...') : (isSignup ? 'Sign Up' : 'Sign In')}
                </Button>
              </form>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                {isSignup ? (
                  <>Already have an account? <button onClick={() => setIsSignup(false)} className="text-primary font-medium underline">Sign In</button></>
                ) : (
                  <>Don't have an account? <button onClick={() => setIsSignup(true)} className="text-primary font-medium underline">Sign Up</button></>
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;