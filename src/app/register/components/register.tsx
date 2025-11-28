"use client";
import React, { useState } from "react";
import { countries } from "./country";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import ProceedModal from "@/app/dashboard/components/proceed-modal";

// --- TypeScript Definitions ---
interface FormData {
  username: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
  agreeToPrivacy: boolean;
}

interface Errors {
  username?: string | null;
  email?: string | null;
  phone?: string | null;
  country?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
  agreeToPrivacy?: string | null;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    agreeToPrivacy: false,
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    let newValue: string | boolean;

    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    } else {
      newValue = value;
    }

    setFormData((prev: FormData) => ({
      ...prev,
      [name]: newValue,
    }));

    if (errors[name as keyof Errors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const validateForm = (): boolean => {
    let newErrors: Errors = {};
    let isValid: boolean = true;

    if (!formData.username.trim()) {
      newErrors.username = "username is required.";
      isValid = false;
    } else if (formData.username.trim().length < 3) {
      newErrors.username = "username must be at least 3 characters long.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., user@domain.com).";
      isValid = false;
    }

    const phoneRegex = /^\d{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Phone number must be at least 10 digits long and contain only numbers.";
      isValid = false;
    }

    if (!formData.country) {
      newErrors.country = "Please select your country.";
      isValid = false;
    }

    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain a number and a special character (!@#$%^&*).";
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirmation is required.";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = "You must agree to the privacy policy.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    setLoading(true);

    if (isValid) {
      try {
        await axios.post("/api/register", formData);
        toast.success("Registration successful! Data logged to console.");
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
          callbackUrl: "/onboarding",
        });
        setModalOpen(true);
      } catch (error: any) {
        console.error("Registration error:", error);
        toast.error(error.response.data.error || "Registration failed");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please correct the errors in the form before submitting.");
      setLoading(false);
    }
  };

  const getInputClass = (fieldName: keyof Errors): string => `
    w-full px-4 py-3 border rounded-lg transition-all duration-200 shadow-sm
    ${
      errors[fieldName]
        ? "border-red-500 focus:ring-4 focus:ring-red-100 focus:border-red-500"
        : "border-gray-300 focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
    }
  `;

  return (
    // Main container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Tailwind CSS import for running the component */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        /* Applying Inter font family globally */
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Brand & Features */}
          <div className="text-center lg:text-left p-4">
            {/* Language Selection Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
                Select Language
              </h1>
              <h2 className="text-xl text-gray-600 mb-4">
                Present to Gene Paradise
              </h2>
              <div className="w-full h-px bg-gray-300 my-6"></div>
            </div>

            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                APEX FUNDING
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We connect you with the world's largest community
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {[
                "Stay ahead with our state-of-the-art training platform and tools",
                "Get in access to expert guidance and educational resources",
                "Teach with confidence, knowing your funds and data are protected",
              ].map((text, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 my-12"></div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 sm:p-10 transform hover:shadow-3xl transition duration-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Sign up for your account!
              </h2>
              <p className="text-gray-600">
                Join us today! Create your account easily with less information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  User Name
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className={getInputClass("username")}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text" // Kept as text for custom validation
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={getInputClass("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number (e.g., 1234567890)"
                  className={getInputClass("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Country Field */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`${getInputClass(
                    "country"
                  )} bg-white appearance-none`}
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors.country}
                  </p>
                )}
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className={getInputClass("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className={getInputClass("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs italic mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Privacy Agreement */}
              <div className="space-y-1 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="pt-1">
                    <input
                      id="agreeToPrivacy"
                      name="agreeToPrivacy"
                      type="checkbox"
                      checked={formData.agreeToPrivacy}
                      onChange={handleChange}
                      className={`w-5 h-5 border-gray-300 rounded focus:ring-blue-500 shadow-sm transition-colors ${
                        errors.agreeToPrivacy
                          ? "border-red-500 text-red-600"
                          : "text-blue-600"
                      }`}
                    />
                  </div>
                  <label
                    htmlFor="agreeToPrivacy"
                    className="text-sm text-gray-700"
                  >
                    By negotiating you agree to our{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      Privacy policy
                    </a>
                  </label>
                </div>
                {errors.agreeToPrivacy && (
                  <p className="text-red-500 text-xs italic ml-8">
                    {errors.agreeToPrivacy}
                  </p>
                )}
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl text-lg mt-6 transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Already on our platform?
                  </span>
                </div>
              </div>

              {/* Sign In Link (Replaced Next.js Link with standard <a> tag) */}
              <div className="text-center">
                <span className="text-gray-600">
                  Have an account?{" "}
                  <a
                    href="/login"
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 hover:underline"
                  >
                    Sign In
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ProceedModal
        isOpen={modalOpen}
        onProceed="/onboarding"
        title="Registration Successful"
        children="Your account has been created successfully."
        proceedText="Proceed"
      />
    </div>
  );
}
