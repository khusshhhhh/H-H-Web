"use client";

import { useFormContext } from "react-hook-form";
import { BUDGET_RANGES } from "@/content/enquiry-options";
import { RadioCardGroup } from "@/components/forms/RadioCardGroup";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";

export function Step4Budget() {
  const { watch, setValue, formState: { errors } } = useFormContext<EnquirySchemaValues>();
  const value = watch("approximateBudget");

  return (
    <div>
      <h2 className="font-display text-fluid-xl text-charcoal">What&rsquo;s your approximate budget?</h2>
      <p className="mt-2 text-fluid-sm text-charcoal/60">
        Indicative ranges to help scope a conversation — not a fixed quote.
      </p>

      <div className="mt-8">
        <RadioCardGroup
          name="approximateBudget"
          legend="Budget range"
          options={BUDGET_RANGES.map((range) => ({ value: range.value, label: range.label }))}
          value={value ?? ""}
          onChange={(v) => setValue("approximateBudget", v as EnquirySchemaValues["approximateBudget"], { shouldValidate: true })}
        />
        {errors.approximateBudget && (
          <p role="alert" className="mt-3 text-fluid-xs text-terracotta-text">
            {errors.approximateBudget.message}
          </p>
        )}
      </div>
    </div>
  );
}
