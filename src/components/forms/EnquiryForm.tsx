"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { enquirySchema, STEP_FIELDS, type EnquirySchemaValues } from "@/lib/validation/enquiry-schema";
import { EnquiryProgress } from "@/components/forms/EnquiryProgress";
import { HoneypotField } from "@/components/forms/HoneypotField";
import { SuccessState } from "@/components/forms/SuccessState";
import { Button } from "@/components/ui/Button";
import { Step1ProjectType } from "@/components/forms/steps/Step1ProjectType";
import { Step2Location } from "@/components/forms/steps/Step2Location";
import { Step3LandOwnership } from "@/components/forms/steps/Step3LandOwnership";
import { Step4Budget } from "@/components/forms/steps/Step4Budget";
import { Step5Timeframe } from "@/components/forms/steps/Step5Timeframe";
import { Step6StylePreferences } from "@/components/forms/steps/Step6StylePreferences";
import { Step7PersonalDetails } from "@/components/forms/steps/Step7PersonalDetails";
import { Step8Upload } from "@/components/forms/steps/Step8Upload";

const STEPS = [
  Step1ProjectType,
  Step2Location,
  Step3LandOwnership,
  Step4Budget,
  Step5Timeframe,
  Step6StylePreferences,
  Step7PersonalDetails,
  Step8Upload,
];

const LAST_STEP = STEPS.length - 1;

export function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  // Lazy initializer — the sanctioned way to run a one-off impure read (Date.now) exactly once per mount.
  const [mountedAt] = useState(() => Date.now());

  const methods = useForm<EnquirySchemaValues>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    defaultValues: {
      projectType: undefined,
      preferredLocation: "",
      landOwnershipStatus: undefined,
      approximateBudget: undefined,
      desiredTimeframe: undefined,
      stylePreferences: [],
      fullName: "",
      email: "",
      phone: "",
      preferredContactMethod: undefined,
      message: "",
      fileName: null,
      fileSize: null,
      privacyConsent: false as unknown as true,
      honeypot: "",
      formRenderedAt: mountedAt,
    },
  });

  const { handleSubmit, trigger, register } = methods;

  async function goNext() {
    const fields = STEP_FIELDS[step];
    const valid = fields.length === 0 || (await trigger(fields));
    if (valid) setStep((s) => Math.min(LAST_STEP, s + 1));
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function onSubmit(values: EnquirySchemaValues) {
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLFormElement>) {
    const target = event.target as HTMLElement;
    if (event.key === "Enter" && target.tagName !== "TEXTAREA" && step !== LAST_STEP) {
      event.preventDefault();
      goNext();
    }
  }

  if (submitState === "success") {
    return <SuccessState />;
  }

  const StepComponent = STEPS[step];

  return (
    <FormProvider {...methods}>
      <div className="mb-10">
        <EnquiryProgress currentStep={step} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown} noValidate>
        <HoneypotField register={register("honeypot")} />
        <input type="hidden" {...register("formRenderedAt", { valueAsNumber: true })} />

        <div key={step}>
          <StepComponent />
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-charcoal/10 pt-8">
          <Button
            type="button"
            variant="ghost"
            onClick={goBack}
            className={step === 0 ? "invisible" : ""}
            icon={<ArrowLeft size={15} />}
          >
            Back
          </Button>

          {step === LAST_STEP ? (
            <Button type="submit" size="lg" disabled={submitState === "submitting"}>
              {submitState === "submitting" ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" /> Submitting
                </span>
              ) : (
                "Submit enquiry"
              )}
            </Button>
          ) : (
            <Button type="button" size="lg" onClick={goNext} icon={<ArrowRight size={15} />}>
              Next
            </Button>
          )}
        </div>

        {submitState === "error" && (
          <p role="alert" className="mt-6 text-fluid-sm text-terracotta-text">
            Something went wrong submitting your enquiry — please try again, or contact us directly.
          </p>
        )}
      </form>
    </FormProvider>
  );
}
