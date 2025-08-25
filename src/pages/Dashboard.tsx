import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import LineChart from '@/components/charts/LineChart';
import BarChart from '@/components/charts/BarChart';
import DashboardFilters from '@/components/DashboardFilters';
import { getGDPTrendData, getUnemploymentData, getInflationData, getAvailableYears } from '@/utils/mockData';
import { LogOut, User, BarChart3, TrendingUp, DollarSign, Users, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const years = getAvailableYears();
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedStartYear, setSelectedStartYear] = useState(Math.min(...years));
  const [selectedEndYear, setSelectedEndYear] = useState(Math.max(...years));

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  // Generate chart data based on filters
  const gdpData = getGDPTrendData(selectedRegion === 'all' ? undefined : selectedRegion);
  const unemploymentData = getUnemploymentData(selectedStartYear, selectedEndYear);
  const inflationData = getInflationData();

  // Calculate summary statistics
  const latestGDP = gdpData[gdpData.length - 1]?.value || 0;
  const avgUnemployment = unemploymentData.reduce((acc, curr) => acc + curr.value, 0) / unemploymentData.length;
  const avgInflation = inflationData.reduce((acc, curr) => acc + curr.value, 0) / inflationData.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header */}
      <header className="bg-gradient-card border-b border-border/50 shadow-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  World Vision Analytics
                </h1>
                <p className="text-sm text-muted-foreground">Economic Intelligence Dashboard</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">Welcome back</p>
                <p className="text-xs text-muted-foreground">{user?.username}</p>
              </div>
              <Button 
                onClick={handleLogout} 
                variant="outline" 
                size="sm"
                className="border-border/50 hover:bg-destructive/10 hover:border-destructive/50 hover:text-destructive transition-all duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Enhanced Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Latest GDP</p>
                  <p className="text-3xl font-bold text-success">${latestGDP.toFixed(1)}T</p>
                  <p className="text-xs text-muted-foreground mt-1">Trillion USD</p>
                </div>
                <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Unemployment</p>
                  <p className="text-3xl font-bold text-warning">{avgUnemployment.toFixed(1)}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Rate</p>
                </div>
                <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Users className="w-6 h-6 text-warning" />
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Inflation</p>
                  <p className="text-3xl font-bold text-info">{avgInflation.toFixed(1)}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Rate</p>
                </div>
                <div className="w-12 h-12 bg-info/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <TrendingUp className="w-6 h-6 text-info" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Filters */}
        <Card className="bg-gradient-card border-border/50 shadow-card">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Data Filters</h2>
            </div>
            <DashboardFilters
              selectedRegion={selectedRegion}
              selectedStartYear={selectedStartYear}
              selectedEndYear={selectedEndYear}
              onRegionChange={setSelectedRegion}
              onStartYearChange={setSelectedStartYear}
              onEndYearChange={setSelectedEndYear}
            />
          </div>
        </Card>

        {/* Enhanced Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="p-6">
              <LineChart
                data={gdpData}
                title="GDP Trends Over Time"
                yAxisLabel="GDP (Trillions USD)"
                color="hsl(262 83% 58%)"
              />
            </div>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="p-6">
              <BarChart
                data={unemploymentData}
                title="Current Unemployment Rates"
                yAxisLabel="Unemployment Rate (%)"
                color="hsl(38 92% 50%)"
              />
            </div>
          </Card>
        </div>

        {/* Additional Enhanced Chart */}
        <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
          <div className="p-6">
            <BarChart
              data={inflationData}
              title="Current Inflation Rates Analysis"
              yAxisLabel="Inflation Rate (%)"
              color="hsl(199 89% 48%)"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;