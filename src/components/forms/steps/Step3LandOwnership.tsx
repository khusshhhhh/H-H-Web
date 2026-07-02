"use client";

import { useFormContext } from "react-hook-form";
import { LAND_OWNERSHIP_OPTIONS } from "@/content/enquiry-options";
import { RadioCardGroup } from "@/components/forms/RadioCardGroup";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";

export function Step3LandOwnership() {
  const { watch, setValue, formState: { errors } } = useFormContext<EnquirySchemaValues>();
  const value = watch("landOwnershipStatus");

  return (
    <div>
      <h2 className="font-display text-fluid-xl text-charcoal">What&rsquo;s the land situation?</h2>
      <p className="mt-2 text-fluid-sm text-charcoal/60">This helps us understand your timeframe and next steps.</p>

      <div className="mt-8">
        <RadioCardGroup
          name="landOwnershipStatus"
          legend="Land ownership"
          options={LAND_OWNERSHIP_OPTIONS.map((option) => ({ value: option, label: option }))}
          value={value ?? ""}
          onChange={(v) => setValue("landOwnershipStatus", v as EnquirySchemaValues["landOwnershipStatus"], { shouldValidate: true })}
        />
        {errors.landOwnershipStatus && (
          <p role="alert" className="mt-3 text-fluid-xs text-terracotta-text">
            {errors.landOwnershipStatus.message}
          </p>
        )}
      </div>
    </div>
  );
}
