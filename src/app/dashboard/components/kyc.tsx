"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function KYCPage({ id }: { id: string }) {
  const [idFile, setIdFile] = useState<File | null>(null);
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // --- Universal Cloudinary Upload Helper ---
  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "oegimyrl");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        { method: "POST", body: formData }
      );

      return await response.json();
    } catch (err) {
      toast.error("Upload failed");
      return null;
    }
  };

  // --- Submit Handler ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!idFile || !passportFile) {
      toast.error("Please select both files");
      return;
    }

    setIsLoading(true);

    try {
      // Upload both files
      const [passportUpload, idUpload] = await Promise.all([
        uploadToCloudinary(passportFile),
        uploadToCloudinary(idFile),
      ]);

      if (!passportUpload?.secure_url || !idUpload?.secure_url) {
        toast.error("Upload failed");
        return;
      }

      // Update user
      await axios.put(`/api/register/${id}`, {
        passport: passportUpload.secure_url,
        idcard: idUpload.secure_url,
      });

      toast.success("KYC submitted successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">KYC</h1>
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">KYC Verification</h2>
            <p className="text-gray-300">KYC Compliance System Software</p>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-6">Documents Upload</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ID Upload */}
              <FileInput
                label="Government Approved ID"
                file={idFile}
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={setIdFile}
              />

              {/* Passport Upload */}
              <FileInput
                label="User Passport Photo"
                file={passportFile}
                accept=".jpg,.jpeg,.png"
                onChange={setPassportFile}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg"
              >
                {isLoading ? "Uploading..." : "Upload Documents"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- File Input Component (reusable) ---------------- */

function FileInput({
  label,
  file,
  accept,
  onChange,
}: {
  label: string;
  file: File | null;
  accept: string;
  onChange: (file: File | null) => void;
}) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-200">{label}</label>

      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition">
        <input
          type="file"
          id={label}
          accept={accept}
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0] || null)}
        />

        <label htmlFor={label} className="cursor-pointer">
          <div className="flex flex-col items-center space-y-2">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>

            <span className="text-sm text-gray-300">
              {file ? file.name : "Choose file"}
            </span>

            <span className="text-xs text-gray-400">Click to upload</span>
          </div>
        </label>
      </div>
    </div>
  );
}
