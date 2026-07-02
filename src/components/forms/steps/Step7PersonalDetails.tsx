"use client";

import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/forms/FormField";
import { RadioCardGroup } from "@/components/forms/RadioCardGroup";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";

export function Step7PersonalDetails() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<EnquirySchemaValues>();
  const contactMethod = watch("preferredContactMethod");

  return (
    <div>
      <h2 className="font-display text-fluid-xl text-charcoal">Your details</h2>
      <p className="mt-2 text-fluid-sm text-charcoal/60">So we know who we&rsquo;re speaking with.</p>

      <div className="mt-8 flex flex-col gap-6">
        <FormField label="Full name" htmlFor="fullName" error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className="w-full rounded-sm border border-charcoal/20 bg-cream px-4 py-3 text-fluid-sm text-charcoal outline-none focus:border-terracotta"
            {...register("fullName")}
          />
        </FormField>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField label="Email" htmlFor="email" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-sm border border-charcoal/20 bg-cream px-4 py-3 text-fluid-sm text-charcoal outline-none focus:border-terracotta"
              {...register("email")}
            />
          </FormField>

          <FormField label="Phone" htmlFor="phone" error={errors.phone?.message}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className="w-full rounded-sm border border-charcoal/20 bg-cream px-4 py-3 text-fluid-sm text-charcoal outline-none focus:border-terracotta"
              {...register("phone")}
            />
          </FormField>
        </div>

        <RadioCardGroup
          name="preferredContactMethod"
          legend="Preferred contact method"
          options={[
            { value: "Email", label: "Email" },
            { value: "Phone", label: "Phone" },
          ]}
          value={contactMethod ?? ""}
          onChange={(v) => setValue("preferredContactMethod", v as EnquirySchemaValues["preferredContactMethod"], { shouldValidate: true })}
        />
        {errors.preferredContactMethod && (
          <p role="alert" className="text-fluid-xs text-terracotta-text">
            {errors.preferredContactMethod.message}
          </p>
        )}

        <FormField label="Anything else? (optional)" htmlFor="message">
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-sm border border-charcoal/20 bg-cream px-4 py-3 text-fluid-sm text-charcoal outline-none focus:border-terracotta"
            {...register("message")}
          />
        </FormField>

        <div className="flex items-start gap-3">
          <input id="privacyConsent" type="checkbox" className="mt-1 h-4 w-4 accent-terracotta" {...register("privacyConsent")} />
          <label htmlFor="privacyConsent" className="text-fluid-sm text-charcoal/70">
            I consent to Hills &amp; Harbour storing my details to respond to this enquiry, in line with the privacy
            notice.
          </label>
        </div>
        {errors.privacyConsent && (
          <p role="alert" className="text-fluid-xs text-terracotta-text">
            {errors.privacyConsent.message}
          </p>
        )}
      </div>
    </div>
  );
}
