import React from "react";
import { Card } from "@/components/ui/card";
import { Meteors } from "@/components/Meteors";
import { cn } from "@/lib/utils"; // Added this import

interface MeteorCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const MeteorCard = ({ title, description, className, children }: MeteorCardProps) => {
  return (
    <div className="relative w-full h-full">
      <Card className={cn(
        "relative overflow-hidden bg-secondary/50 backdrop-blur-sm border-0 p-8",
        "group hover:shadow-lg transition-all duration-500",
        className
      )}>
        <div className="relative z-10">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-4">{description}</p>
          {children}
        </div>
        <Meteors number={20} />
      </Card>
    </div>
  );
};

export default MeteorCard;