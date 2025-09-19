import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Zap,
  Target,
  CheckCircle2
} from "lucide-react";
import type { ChallengeCard } from "../types/contentful";

interface ChallengeSolutionCardProps {
  challenge: ChallengeCard;
  index: number;
}

const iconMap = {
  'alert-triangle': AlertTriangle,
  'lightbulb': Lightbulb,
  'trending-up': TrendingUp,
  'zap': Zap,
  'target': Target,
  'check-circle': CheckCircle2,
};

export default function ChallengeSolutionCard({ challenge, index }: ChallengeSolutionCardProps) {
  const { title, challenge: challengeText, solution, result, icon } = challenge.fields;

  // Get icon component or default to Lightbulb
  const IconComponent = icon ? iconMap[icon as keyof typeof iconMap] || Lightbulb : Lightbulb;

  return (
    <div className={`portfolio-fade-in portfolio-stagger-${Math.min(index + 1, 4)}`}>
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-0">
          {/* Challenge Section */}
          <div className="challenge-card p-400 border-b border-gray-100">
            <div className="flex items-start gap-300 mb-300">
              <div className="p-200 bg-red-100 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <Badge variant="secondary" className="mb-200 bg-red-50 text-red-700 border-red-200">
                  Challenge
                </Badge>
                <h3 className="font-serif font-bold text-gray-900 portfolio-card-title mb-200">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed portfolio-content">
                  {challengeText}
                </p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="solution-card p-400 border-b border-gray-100">
            <div className="flex items-start gap-300 mb-300">
              <div className="p-200 bg-green-100 rounded-lg">
                <IconComponent className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <Badge variant="secondary" className="mb-200 bg-green-50 text-green-700 border-green-200">
                  Solution
                </Badge>
                <p className="text-gray-700 leading-relaxed portfolio-content">
                  {solution}
                </p>
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="result-card p-400">
            <div className="flex items-start gap-300">
              <div className="p-200 bg-teal-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <Badge variant="secondary" className="mb-200 bg-teal-50 text-teal-700 border-teal-200">
                  Result
                </Badge>
                <p className="text-gray-700 leading-relaxed portfolio-content font-medium">
                  {result}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Fallback component for when no challenges are available
export function SampleChallengeSolutionCard() {
  const sampleChallenge: ChallengeCard = {
    sys: { id: 'sample' },
    fields: {
      title: "Slow Page Load Times",
      challenge: "Users were experiencing 3-5 second load times, causing high bounce rates and poor user experience on mobile devices.",
      solution: "Implemented image optimization, code splitting, and lazy loading. Added CDN integration and optimized database queries.",
      result: "Reduced page load time from 4.2s to 0.9s (78% improvement). Mobile bounce rate decreased by 45%.",
      icon: "zap"
    }
  };

  return <ChallengeSolutionCard challenge={sampleChallenge} index={0} />;
}