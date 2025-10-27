// Performance monitoring utility
// Add this if you want to track performance metrics

interface PerformanceMetric {
  name: string;
  value: number;
  delta?: number;
  id?: string;
  rating?: 'good' | 'needs-improvement' | 'poor';
}

export const reportWebVitals = (onPerfEntry?: (metric: PerformanceMetric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Usage: import and call in main.tsx if needed
// reportWebVitals(console.log);
