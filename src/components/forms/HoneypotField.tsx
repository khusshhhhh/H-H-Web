import type { UseFormRegisterReturn } from "react-hook-form";

interface HoneypotFieldProps {
  register: UseFormRegisterReturn;
}

/** Visually hidden (not display:none) spam trap — bots that auto-fill every field will populate this. */
export function HoneypotField({ register }: HoneypotFieldProps) {
  return (
    <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      <label htmlFor="companyWebsite">Leave this field empty</label>
      <input id="companyWebsite" type="text" tabIndex={-1} autoComplete="off" {...register} />
    </div>
  );
}
