import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Research
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl">
          Academic work exploring the intersection of data science and soccer analytics.
        </p>
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent rounded-lg">
              <FileText className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Quantification and Analysis of Second Balls in Soccer
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Master's Thesis • 2024
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                In soccer, second balls are crucial to control possession and create attacking chances, 
                but have remained largely unexplored. This thesis creates a mathematical framework to 
                identify, classify, and extract second balls from data. Building on this foundation, 
                the novel Expected Second Ball Value (xSBV) model uses machine learning and Markov 
                chains to estimate both the probability of winning a second ball and the likelihood 
                that the following possession leads to a goal. Predictive models achieved a top-3 
                accuracy of 60% for second ball location and an ROC-AUC score of 0.79 for predicting 
                the winning team. Key results highlighted specific areas to target for higher success 
                rates and produced a ranking of players based on their second-ball winning ability.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-medium rounded">
                  Second Ball Analysis
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-medium rounded">
                  Machine Learning
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-medium rounded">
                  Markov Chains
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-medium rounded">
                  xSBV Model
                </span>
              </div>
              <Button variant="outline" className="font-heading">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
