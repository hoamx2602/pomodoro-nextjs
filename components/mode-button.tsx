import { Button } from "@/components/ui/button";

interface ModeButtonProps {
  label: string;
}

const ModeButton = ({ label }: ModeButtonProps) => {
  return <Button variant="ghost">{label}</Button>;
};

export default ModeButton;
