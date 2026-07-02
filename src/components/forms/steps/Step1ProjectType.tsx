"use client";

import { useFormContext } from "react-hook-form";
import { PROJECT_TYPE_OPTIONS } from "@/content/enquiry-options";
import { RadioCardGroup } from "@/components/forms/RadioCardGroup";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";

export function Step1ProjectType() {
  const { watch, setValue, formState: { errors } } = useFormContext<EnquirySchemaValues>();
  const value = watch("projectType");

  return (
    <div>
      <h2 className="font-display text-fluid-xl text-charcoal">What are you looking to build?</h2>
      <p className="mt-2 text-fluid-sm text-charcoal/60">Select the option closest to your project.</p>

      <div className="mt-8">
        <RadioCardGroup
          name="projectType"
          legend="Project type"
          options={PROJECT_TYPE_OPTIONS.map((option) => ({ value: option, label: option }))}
          value={value ?? ""}
          onChange={(v) => setValue("projectType", v as EnquirySchemaValues["projectType"], { shouldValidate: true })}
        />
        {errors.projectType && (
          <p role="alert" className="mt-3 text-fluid-xs text-terracotta-text">
            {errors.projectType.message}
          </p>
        )}
      </div>
    </div>
  );
}
