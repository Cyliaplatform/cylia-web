interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="w-5 h-0.5 bg-lime-400" />
      <span className="text-sm font-medium text-gray-500 tracking-wide">{text}</span>
    </div>
  );
}