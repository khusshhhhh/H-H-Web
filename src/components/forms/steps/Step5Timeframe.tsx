"use client";

import { useFormContext } from "react-hook-form";
import { TIMEFRAME_OPTIONS } from "@/content/enquiry-options";
import { RadioCardGroup } from "@/components/forms/RadioCardGroup";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";

export function Step5Timeframe() {
  const { watch, setValue, formState: { errors } } = useFormContext<EnquirySchemaValues>();
  const value = watch("desiredTimeframe");

  return (
    <div>
      <h2 className="font-display text-fluid-xl text-charcoal">When are you hoping to start?</h2>
      <p className="mt-2 text-fluid-sm text-charcoal/60">No pressure — this just helps us plan our response.</p>

      <div className="mt-8">
        <RadioCardGroup
          name="desiredTimeframe"
          legend="Timeframe"
          options={TIMEFRAME_OPTIONS.map((option) => ({ value: option, label: option }))}
          value={value ?? ""}
          onChange={(v) => setValue("desiredTimeframe", v as EnquirySchemaValues["desiredTimeframe"], { shouldValidate: true })}
        />
        {errors.desiredTimeframe && (
          <p role="alert" className="mt-3 text-fluid-xs text-terracotta-text">
            {errors.desiredTimeframe.message}
          </p>
        )}
      </div>
    </div>
  );
}
