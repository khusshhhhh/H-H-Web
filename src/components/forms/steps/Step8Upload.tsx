"use client";

import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Upload, FileCheck2, X } from "lucide-react";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";

export function Step8Upload() {
  const { watch, setValue } = useFormContext<EnquirySchemaValues>();
  const fileName = watch("fileName");
  const fileSize = watch("fileSize");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setValue("fileName", file.name);
    setValue("fileSize", file.size);
  }

  function clearFile() {
    setValue("fileName", null);
    setValue("fileSize", null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <h2 className="font-display text-fluid-xl text-charcoal">Plans or inspiration (optional)</h2>
      <p className="mt-2 text-fluid-sm text-charcoal/60">
        Attach a site plan, existing drawing or inspiration image if you have one handy.
      </p>

      <div className="mt-8">
        <label
          htmlFor="planUpload"
          className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-charcoal/30 px-6 py-12 text-center hover:border-terracotta"
        >
          {fileName ? (
            <>
              <FileCheck2 size={28} className="text-eucalyptus-text" aria-hidden="true" />
              <p className="text-fluid-sm text-charcoal">{fileName}</p>
              {fileSize && <p className="text-fluid-xs text-charcoal/50">{(fileSize / 1024).toFixed(0)} KB</p>}
            </>
          ) : (
            <>
              <Upload size={28} className="text-charcoal/40" aria-hidden="true" />
              <p className="text-fluid-sm text-charcoal/70">Click to choose a file, or drag one here</p>
              <p className="text-fluid-xs text-charcoal/45">PDF, JPG or PNG, up to 10MB</p>
            </>
          )}
          <input
            ref={inputRef}
            id="planUpload"
            type="file"
            accept="image/*,application/pdf"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>

        {fileName && (
          <button
            type="button"
            onClick={clearFile}
            className="mt-3 flex items-center gap-1.5 text-fluid-xs text-charcoal/60 hover:text-terracotta-text"
          >
            <X size={14} /> Remove file
          </button>
        )}

        <p className="mt-6 text-fluid-xs leading-relaxed text-charcoal/50">
          At this stage we record the file name only — we&rsquo;ll follow up by email to arrange secure transfer of
          the actual file.
        </p>
      </div>
    </div>
  );
}
