import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp } from "lucide-react";

const ROICalculator = () => {
  const [values, setValues] = useState({
    monthlyRevenue: "",
    conversionRate: "",
    averageOrderValue: "",
  });

  const [results, setResults] = useState<{
    currentMonthlyRevenue: number;
    projectedRevenue: number;
    roiIncrease: number;
    annualGain: number;
  } | null>(null);

  const calculateROI = () => {
    const monthlyRevenue = parseFloat(values.monthlyRevenue) || 0;
    const conversionRate = parseFloat(values.conversionRate) || 0;
    const averageOrderValue = parseFloat(values.averageOrderValue) || 0;

    // Conservative improvement estimates based on promotional campaigns
    const conversionImprovement = 2.5; // 2.5x conversion rate improvement
    const aovImprovement = 1.3; // 30% AOV improvement

    const currentMonthlyRevenue = monthlyRevenue;
    const projectedRevenue = currentMonthlyRevenue * conversionImprovement * aovImprovement;
    const roiIncrease = ((projectedRevenue - currentMonthlyRevenue) / currentMonthlyRevenue) * 100;
    const annualGain = (projectedRevenue - currentMonthlyRevenue) * 12;

    setResults({
      currentMonthlyRevenue,
      projectedRevenue,
      roiIncrease,
      annualGain,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Calculate Your ROI Potential</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how much revenue you could generate with optimized promotional campaigns
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Business Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthlyRevenue">Current Monthly Revenue ($)</Label>
                <Input
                  id="monthlyRevenue"
                  type="number"
                  placeholder="50,000"
                  value={values.monthlyRevenue}
                  onChange={(e) => handleInputChange("monthlyRevenue", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversionRate">Current Conversion Rate (%)</Label>
                <Input
                  id="conversionRate"
                  type="number"
                  placeholder="2.5"
                  value={values.conversionRate}
                  onChange={(e) => handleInputChange("conversionRate", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="averageOrderValue">Average Order Value ($)</Label>
                <Input
                  id="averageOrderValue"
                  type="number"
                  placeholder="150"
                  value={values.averageOrderValue}
                  onChange={(e) => handleInputChange("averageOrderValue", e.target.value)}
                />
              </div>

              <Button 
                onClick={calculateROI} 
                className="w-full"
                variant="cta"
                size="lg"
              >
                Calculate ROI
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Projected Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                      <div className="text-sm text-muted-foreground">Current Revenue</div>
                      <div className="text-2xl font-bold">
                        ${results.currentMonthlyRevenue.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-sm text-muted-foreground">Projected Revenue</div>
                      <div className="text-2xl font-bold text-primary">
                        ${results.projectedRevenue.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="text-center p-6 bg-gradient-primary rounded-lg text-primary-foreground">
                    <div className="text-sm opacity-90">ROI Increase</div>
                    <div className="text-4xl font-bold">
                      +{results.roiIncrease.toFixed(0)}%
                    </div>
                  </div>

                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-sm text-muted-foreground">Annual Revenue Gain</div>
                    <div className="text-3xl font-bold text-accent">
                      ${results.annualGain.toLocaleString()}
                    </div>
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    Get Started Today
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your business metrics to see potential ROI</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;