import { cn } from "@/lib/utils";

interface RadioCardGroupProps {
  name: string;
  legend: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  columns?: 1 | 2;
}

export function RadioCardGroup({ name, legend, options, value, onChange, columns = 2 }: RadioCardGroupProps) {
  return (
    <fieldset>
      <legend className="mb-4 text-fluid-xs uppercase tracking-widest2 text-charcoal/55">{legend}</legend>
      <div className={cn("grid gap-3", columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-sm border px-4 py-3.5 text-fluid-sm transition-colors",
                checked ? "border-terracotta bg-terracotta/10 text-charcoal" : "border-charcoal/20 text-charcoal/75 hover:border-charcoal/40",
              )}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className="h-4 w-4 accent-terracotta"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
