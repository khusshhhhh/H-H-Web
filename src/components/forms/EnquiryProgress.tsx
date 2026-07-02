import { STEP_LABELS } from "@/lib/validation/enquiry-schema";
import { cn } from "@/lib/utils";

interface EnquiryProgressProps {
  currentStep: number;
}

export function EnquiryProgress({ currentStep }: EnquiryProgressProps) {
  const total = STEP_LABELS.length;
  const percent = Math.round((currentStep / (total - 1)) * 100);

  return (
    <div>
      <ol className="flex items-center justify-between text-fluid-xs text-charcoal/45">
        <li>
          Step {currentStep + 1} of {total}
        </li>
        <li aria-current="step" className="font-medium text-terracotta-text">
          {STEP_LABELS[currentStep]}
        </li>
      </ol>
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-charcoal/10" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
        <div
          className={cn("h-full rounded-full bg-terracotta transition-[width] duration-500 ease-editorial")}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
