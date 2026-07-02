"use client";

import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/forms/FormField";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";

export function Step2Location() {
  const { register, formState: { errors } } = useFormContext<EnquirySchemaValues>();

  return (
    <div>
      <h2 className="font-display text-fluid-xl text-charcoal">Where is the project?</h2>
      <p className="mt-2 text-fluid-sm text-charcoal/60">A suburb or region is enough for now.</p>

      <div className="mt-8">
        <FormField label="Suburb or region" htmlFor="preferredLocation" error={errors.preferredLocation?.message}>
          <input
            id="preferredLocation"
            type="text"
            placeholder="e.g. Burnside, or Adelaide Hills"
            className="w-full rounded-sm border border-charcoal/20 bg-cream px-4 py-3 text-fluid-sm text-charcoal outline-none focus:border-terracotta"
            {...register("preferredLocation")}
          />
        </FormField>
      </div>
    </div>
  );
}
