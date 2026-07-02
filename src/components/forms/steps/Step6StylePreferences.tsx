"use client";

import { useFormContext } from "react-hook-form";
import { STYLE_PREFERENCE_OPTIONS } from "@/content/enquiry-options";
import { CheckboxChipGroup } from "@/components/forms/CheckboxChipGroup";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";

export function Step6StylePreferences() {
  const { watch, setValue } = useFormContext<EnquirySchemaValues>();
  const values = watch("stylePreferences") ?? [];

  return (
    <div>
      <h2 className="font-display text-fluid-xl text-charcoal">Any style preferences?</h2>
      <p className="mt-2 text-fluid-sm text-charcoal/60">Optional — select as many as feel relevant.</p>

      <div className="mt-8">
        <CheckboxChipGroup
          name="stylePreferences"
          legend="Style preferences"
          options={STYLE_PREFERENCE_OPTIONS}
          values={values}
          onChange={(next) => setValue("stylePreferences", next, { shouldValidate: true })}
        />
      </div>
    </div>
  );
}
