import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
  hint?: string;
}

export function FormField({ label, htmlFor, error, children, hint }: FormFieldProps) {
  return (
    <div>
      {htmlFor ? (
        <label htmlFor={htmlFor} className="mb-2 block text-fluid-xs uppercase tracking-widest2 text-charcoal/55">
          {label}
        </label>
      ) : (
        <p className="mb-2 block text-fluid-xs uppercase tracking-widest2 text-charcoal/55">{label}</p>
      )}
      {children}
      {hint && <p className="mt-1.5 text-fluid-xs text-charcoal/45">{hint}</p>}
      {error && (
        <p role="alert" className="mt-1.5 text-fluid-xs text-terracotta-text">
          {error}
        </p>
      )}
    </div>
  );
}
