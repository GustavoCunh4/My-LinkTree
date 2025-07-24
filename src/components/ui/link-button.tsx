import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
  onClick?: () => void;
}

export const LinkButton = ({ href, icon: Icon, label, className, onClick }: LinkButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="lg"
      className={cn(
        "w-full max-w-md h-14 justify-start gap-4 text-left font-medium",
        "bg-gradient-card backdrop-blur-sm border-white/20",
        "hover:shadow-hover hover:scale-[1.02] transition-all duration-300",
        "group",
        className
      )}
    >
      <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
      <span className="flex-1">{label}</span>
    </Button>
  );
};