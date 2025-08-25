export interface WorldBankData {
  year: number;
  gdp: number;
  population: number;
  inflation: number;
  unemployment: number;
  region: string;
  country: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  year?: number;
  category?: string;
}

// Mock World Bank economic data
export const mockWorldBankData: WorldBankData[] = [
  { year: 2018, gdp: 85.87, population: 329.5, inflation: 2.44, unemployment: 3.9, region: 'North America', country: 'United States' },
  { year: 2019, gdp: 87.75, population: 331.9, inflation: 1.81, unemployment: 3.7, region: 'North America', country: 'United States' },
  { year: 2020, gdp: 84.72, population: 332.6, inflation: 1.25, unemployment: 8.1, region: 'North America', country: 'United States' },
  { year: 2021, gdp: 89.12, population: 333.3, inflation: 4.70, unemployment: 5.4, region: 'North America', country: 'United States' },
  { year: 2022, gdp: 91.38, population: 334.2, inflation: 8.00, unemployment: 3.6, region: 'North America', country: 'United States' },
  { year: 2023, gdp: 93.47, population: 335.8, inflation: 4.12, unemployment: 3.7, region: 'North America', country: 'United States' },
  
  { year: 2018, gdp: 42.32, population: 1380.0, inflation: 2.07, unemployment: 3.8, region: 'Asia', country: 'China' },
  { year: 2019, gdp: 44.83, population: 1398.0, inflation: 2.88, unemployment: 3.8, region: 'Asia', country: 'China' },
  { year: 2020, gdp: 43.96, population: 1411.8, inflation: 2.42, unemployment: 4.2, region: 'Asia', country: 'China' },
  { year: 2021, gdp: 48.52, population: 1425.9, inflation: 0.98, unemployment: 3.9, region: 'Asia', country: 'China' },
  { year: 2022, gdp: 49.82, population: 1439.3, inflation: 1.97, unemployment: 4.1, region: 'Asia', country: 'China' },
  { year: 2023, gdp: 51.24, population: 1453.2, inflation: 0.23, unemployment: 4.3, region: 'Asia', country: 'China' },
  
  { year: 2018, gdp: 21.47, population: 67.1, inflation: 2.05, unemployment: 2.3, region: 'Europe', country: 'United Kingdom' },
  { year: 2019, gdp: 22.13, population: 67.5, inflation: 1.79, unemployment: 2.1, region: 'Europe', country: 'United Kingdom' },
  { year: 2020, gdp: 20.67, population: 67.9, inflation: 0.85, unemployment: 4.5, region: 'Europe', country: 'United Kingdom' },
  { year: 2021, gdp: 22.89, population: 68.2, inflation: 2.59, unemployment: 4.6, region: 'Europe', country: 'United Kingdom' },
  { year: 2022, gdp: 23.47, population: 68.5, inflation: 9.06, unemployment: 3.7, region: 'Europe', country: 'United Kingdom' },
  { year: 2023, gdp: 24.15, population: 68.8, inflation: 7.31, unemployment: 4.2, region: 'Europe', country: 'United Kingdom' },
];

export const getGDPTrendData = (region?: string): ChartDataPoint[] => {
  const filteredData = region 
    ? mockWorldBankData.filter(d => d.region === region)
    : mockWorldBankData;
    
  const gdpByYear = filteredData.reduce((acc, curr) => {
    const existingYear = acc.find(item => item.year === curr.year);
    if (existingYear) {
      existingYear.value += curr.gdp;
    } else {
      acc.push({ name: curr.year.toString(), value: curr.gdp, year: curr.year });
    }
    return acc;
  }, [] as ChartDataPoint[]);
  
  return gdpByYear.sort((a, b) => (a.year || 0) - (b.year || 0));
};

export const getUnemploymentData = (startYear?: number, endYear?: number): ChartDataPoint[] => {
  let filteredData = mockWorldBankData;
  
  if (startYear && endYear) {
    filteredData = mockWorldBankData.filter(d => d.year >= startYear && d.year <= endYear);
  }
  
  const unemploymentByCountry = filteredData
    .filter(d => d.year === Math.max(...filteredData.map(item => item.year)))
    .map(d => ({
      name: d.country,
      value: d.unemployment,
      category: d.region
    }));
    
  return unemploymentByCountry;
};

export const getInflationData = (): ChartDataPoint[] => {
  return mockWorldBankData
    .filter(d => d.year === 2023)
    .map(d => ({
      name: d.country,
      value: d.inflation,
      category: d.region
    }));
};

export const getAvailableYears = (): number[] => {
  return [...new Set(mockWorldBankData.map(d => d.year))].sort();
};

export const getAvailableRegions = (): string[] => {
  return [...new Set(mockWorldBankData.map(d => d.region))];
};