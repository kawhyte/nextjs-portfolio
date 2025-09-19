import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Zap,
  Users,
  Monitor,
  Shield,
  Award,
  Clock,
  DollarSign
} from "lucide-react";
import type { ProjectMetric } from "../types/contentful";

interface MetricsCardProps {
  metrics: ProjectMetric[];
}

const typeIcons = {
  performance: Zap,
  business: TrendingUp,
  technical: Monitor,
  user_experience: Users
};

const typeColors = {
  performance: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
    icon: 'text-purple-600'
  },
  business: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    icon: 'text-green-600'
  },
  technical: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    icon: 'text-blue-600'
  },
  user_experience: {
    bg: 'bg-orange-50',
    text: 'text-orange-700',
    border: 'border-orange-200',
    icon: 'text-orange-600'
  }
};

export default function MetricsCard({ metrics }: MetricsCardProps) {
  if (!metrics || metrics.length === 0) {
    return <SampleMetricsCard />;
  }

  return (
    <div className="portfolio-fade-in portfolio-stagger-2">
      <Card className="overflow-hidden border-0 shadow-lg">
        <CardContent className="p-600">
          <h3 className="font-serif font-bold text-gray-900 portfolio-section-title mb-400">
            Project Impact
          </h3>
          <p className="text-gray-600 mb-600 portfolio-content">
            Key metrics and achievements from this project
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-300">
            {metrics.map((metric, index) => {
              const IconComponent = typeIcons[metric.fields.type] || Award;
              const colors = typeColors[metric.fields.type];

              return (
                <div
                  key={metric.sys.id}
                  className="metric-card p-400 rounded-lg border transition-all duration-300 hover:border-teal-200"
                >
                  <div className="flex items-start gap-300">
                    <div className={`p-200 ${colors.bg} rounded-lg`}>
                      <IconComponent className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <Badge
                        variant="secondary"
                        className={`mb-200 ${colors.bg} ${colors.text} ${colors.border}`}
                      >
                        {metric.fields.type.replace('_', ' ')}
                      </Badge>
                      <div className="space-y-100">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {metric.fields.label}
                        </h4>
                        <p className="font-bold text-lg text-gray-900">
                          {metric.fields.value}
                        </p>
                        {metric.fields.description && (
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {metric.fields.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Sample metrics for demonstration
export function SampleMetricsCard() {
  const sampleMetrics: ProjectMetric[] = [
    {
      sys: { id: 'metric1' },
      fields: {
        label: 'Page Load Speed',
        value: '0.9s',
        description: '78% improvement from original 4.2s load time',
        type: 'performance'
      }
    },
    {
      sys: { id: 'metric2' },
      fields: {
        label: 'User Engagement',
        value: '+127%',
        description: 'Increase in average session duration',
        type: 'user_experience'
      }
    },
    {
      sys: { id: 'metric3' },
      fields: {
        label: 'Revenue Impact',
        value: '+23%',
        description: 'Monthly recurring revenue increase',
        type: 'business'
      }
    },
    {
      sys: { id: 'metric4' },
      fields: {
        label: 'Code Coverage',
        value: '94%',
        description: 'Test coverage across all components',
        type: 'technical'
      }
    }
  ];

  return <MetricsCard metrics={sampleMetrics} />;
}