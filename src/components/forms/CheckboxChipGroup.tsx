import { cn } from "@/lib/utils";

interface CheckboxChipGroupProps {
  name: string;
  legend: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
}

export function CheckboxChipGroup({ name, legend, options, values, onChange }: CheckboxChipGroupProps) {
  function toggle(option: string) {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option));
    } else {
      onChange([...values, option]);
    }
  }

  return (
    <fieldset>
      <legend className="mb-4 text-fluid-xs uppercase tracking-widest2 text-charcoal/55">{legend}</legend>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const id = `${name}-${option}`;
          const checked = values.includes(option);
          return (
            <label
              key={option}
              htmlFor={id}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-fluid-sm transition-colors",
                checked ? "border-terracotta bg-terracotta text-cream" : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/40",
              )}
            >
              <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={() => toggle(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
