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
                Thesis Title Goes Here
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Your University • 2024
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                A comprehensive analysis of [your thesis topic]. This research explores 
                how advanced statistical methods can be applied to soccer data to uncover 
                insights about team performance, player evaluation, and tactical analysis. 
                The study introduces novel approaches to [specific contribution] and 
                demonstrates practical applications for professional soccer organizations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-medium rounded">
                  Soccer Analytics
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-medium rounded">
                  Machine Learning
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-heading font-medium rounded">
                  Statistical Modeling
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
