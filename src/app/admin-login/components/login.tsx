"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
// Removed Next.js imports: next-auth/react, next/link, next/navigation
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

// --- TypeScript Definitions for Validation ---
interface Errors {
  email?: string;
  password?: string;
}
// --- End TypeScript Definitions ---

const FeatureIcon = ({ startColor, endColor, children }: any) => (
  <div
    className={`w-8 h-8 bg-gradient-to-r ${startColor} ${endColor} rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover:shadow-lg transition-all duration-200`}
  >
    {children}
  </div>
);

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [authError, setAuthError] = useState<string | null>(null); // State for mock server error
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Simulate Next.js searchParams and error handling for the Canvas environment
  useEffect(() => {
    try {
      // Use standard browser API to read search parameters
      const params = new URLSearchParams(window.location.search);
      const errorParam = params.get("error");
      if (
        errorParam === "CredentialsSignin" ||
        errorParam === "AuthenticationFailed"
      ) {
        setAuthError("Invalid email or password. Please try again.");
      }
    } catch (e) {
      // Safely handle environments where window.location might be restricted
      console.error("Error accessing window location search params:", e);
    }
  }, []);

  /**
   * Helper function to apply styling based on error state.
   */
  const getInputClass = (isError: boolean): string => `
    w-full pl-10 pr-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-200
    ${
      isError
        ? "bg-red-50 border border-red-500 focus:ring-2 focus:ring-red-200"
        : "bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    }
  `;

  /**
   * Client-side validation logic.
   */
  const validateForm = (): boolean => {
    let newErrors: Errors = {};
    let isValid: boolean = true;

    // Email validation (Required, Valid email format)
    if (!email.trim()) {
      newErrors.email = "Email address is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Password validation (Required, Min 8 chars)
    if (!password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /**
   * Custom change handlers to clear the specific error when the user types.
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
    // Clear mock auth error on change
    if (authError) setAuthError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password)
      setErrors((prev) => ({ ...prev, password: undefined }));
    // Clear mock auth error on change
    if (authError) setAuthError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const callbackUrl = searchParams.get("callbackUrl") || "/admin";

      // Mocked signIn logic
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });
      console.log("result", result);

      if (result?.error) {
        toast.error("Invalid email or password");
      } else if (result?.url) {
        // Successfully signed in
        router.push(callbackUrl);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Determine which error message to display
  // const errorDisplay =
  //   authError ||
  //   (window && window.location.search.includes("error=")
  //     ? "Authentication failed."
  //     : null);

  return (
    // Light mode, blue to cyan background gradient
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Animated Background Elements (subtle light accents) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Brand & Features */}
          <div className="text-center lg:text-left">
            <div className="mb-12">
              <div className="inline-flex items-center justify-center lg:justify-start mb-6">
                {/* Logo Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-xl">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                  APEX FUNDING
                </h1>
              </div>

              <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                We connect you with the world's largest trading community
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 max-w-lg">
              <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-transform duration-200">
                <FeatureIcon startColor="from-green-500" endColor="to-teal-500">
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
                </FeatureIcon>
                <div>
                  <p className="text-lg text-gray-700 group-hover:text-blue-700 transition-colors duration-200 font-medium">
                    Stay ahead with our state-of-the-art training platform
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-transform duration-200">
                <FeatureIcon startColor="from-blue-500" endColor="to-cyan-500">
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
                </FeatureIcon>
                <div>
                  <p className="text-lg text-gray-700 group-hover:text-blue-700 transition-colors duration-200 font-medium">
                    Access expert guidance and educational resources
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-transform duration-200">
                <FeatureIcon
                  startColor="from-indigo-500"
                  endColor="to-blue-500"
                >
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
                </FeatureIcon>
                <div>
                  <p className="text-lg text-gray-700 group-hover:text-blue-700 transition-colors duration-200 font-medium">
                    Trade with confidence, your funds and data are protected
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-1">
                  50K+
                </div>
                <div className="text-sm text-gray-500">Traders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-1">
                  $2B+
                </div>
                <div className="text-sm text-gray-500">Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-1">99%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form (Updated with Validation) */}
          <div>
            <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 lg:p-10 transform hover:shadow-3xl transition-shadow duration-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-500">
                  Nice to see you! Please log in with your account.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className={`h-5 w-5 transition-colors ${
                          errors.email ? "text-red-400" : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email"
                      className={getInputClass(!!errors.email)}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs italic mt-1 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className={`h-5 w-5 transition-colors ${
                          errors.password ? "text-red-400" : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Enter your password"
                      className={getInputClass(!!errors.password)}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs italic mt-1 ml-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <a // Changed Link component to standard <a> tag
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Login Button (Blue to Cyan Gradient) */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5 ${
                    isLoading
                      ? "opacity-70 cursor-not-allowed"
                      : "shadow-blue-500/25"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      New to our platform?
                    </span>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <span className="text-gray-600">
                    Don't have an account?{" "}
                    <a // Changed Link component to standard <a> tag
                      href="/register"
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 hover:underline"
                    >
                      Create account
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
