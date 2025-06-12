
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-border/50 hover:border-primary/20">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
