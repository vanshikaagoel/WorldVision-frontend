import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { getAvailableYears, getAvailableRegions } from '@/utils/mockData';

interface DashboardFiltersProps {
  selectedRegion: string;
  selectedStartYear: number;
  selectedEndYear: number;
  onRegionChange: (region: string) => void;
  onStartYearChange: (year: number) => void;
  onEndYearChange: (year: number) => void;
}

const DashboardFilters: React.FC<DashboardFiltersProps> = ({
  selectedRegion,
  selectedStartYear,
  selectedEndYear,
  onRegionChange,
  onStartYearChange,
  onEndYearChange,
}) => {
  const years = getAvailableYears();
  const regions = getAvailableRegions();

  return (
    <Card className="p-6 bg-dashboard-card border-border animate-fade-in">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Data Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Region</label>
          <Select value={selectedRegion} onValueChange={onRegionChange}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="All Regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Start Year</label>
          <Select value={selectedStartYear.toString()} onValueChange={(value) => onStartYearChange(parseInt(value))}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">End Year</label>
          <Select value={selectedEndYear.toString()} onValueChange={(value) => onEndYearChange(parseInt(value))}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
};

export default DashboardFilters;