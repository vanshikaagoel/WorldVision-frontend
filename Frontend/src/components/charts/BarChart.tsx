import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartDataPoint } from '@/utils/mockData';
import { BarChart3 } from 'lucide-react';

interface BarChartProps {
  data: ChartDataPoint[];
  title: string;
  yAxisLabel?: string;
  color?: string;
}

const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  title, 
  yAxisLabel = "Value", 
  color = "hsl(250 100% 70%)" 
}) => {
  return (
    <div className="w-full h-full animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
          <BarChart3 className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              fontWeight={500}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              fontWeight={500}
              label={{ value: yAxisLabel, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                color: 'hsl(var(--card-foreground))',
                boxShadow: 'var(--shadow-card)',
                fontSize: '14px',
                fontWeight: '500'
              }}
              cursor={{ fill: color, opacity: 0.1 }}
            />
            <Bar 
              dataKey="value" 
              fill={color}
              radius={[6, 6, 0, 0]}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;