// components/MultiStepForm.tsx
"use client";
import ProceedModal from "@/app/dashboard/components/proceed-modal";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";

interface FormData {
  // Step 2
  stockExperience: string;

  // Step 3
  primaryGoal: string;

  // Step 4
  accountType: string;

  // Step 5
  assetClasses: string[];

  // Step 6
  annualIncome: string;
  initialDepositSource: string;
  ongoingDepositSource: string;

  // Step 7
  accountCurrency: string;
  firstName: string;
  lastName: string;
  address: string;
  gender: string;
  city: string;
  zipcode: string;
}

interface RadioOption {
  id: string;
  value: string;
  label: string;
  description?: string;
}

interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

const MultiStepForm = ({ id }: { id: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    stockExperience: "",
    primaryGoal: "",
    accountType: "",
    assetClasses: [],
    annualIncome: "",
    initialDepositSource: "",
    ongoingDepositSource: "",
    accountCurrency: "",
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    city: "",
    zipcode: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      const checked = checkbox.checked;

      if (checked) {
        setFormData((prev) => ({
          ...prev,
          [name]: [...(prev[name as keyof FormData] as string[]), value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: (prev[name as keyof FormData] as string[]).filter(
            (item: string) => item !== value
          ),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleRadioSelect = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 8));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/register/${id}`, formData);

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        setModalOpen(true);
      } else {
        toast.error("Error updating profile");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Error updating profile");
    }
  };

  // Step indicator component
  const StepIndicator = () => (
    <div className="flex justify-between items-center mb-8 relative">
      <div className="absolute top-3 left-0 right-0 h-0.5 -z-10"></div>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((stepNumber) => (
        <div
          key={stepNumber}
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
            stepNumber === step
              ? "bg-blue-600 text-white"
              : stepNumber < step
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
        >
          {stepNumber}
        </div>
      ))}
    </div>
  );

  // Radio options for Step 2
  const experienceOptions: RadioOption[] = [
    {
      id: "yes-experience",
      value: "yes",
      label: "Yes. I have experience with Stock Trading",
    },
    {
      id: "no-experience",
      value: "no",
      label: "No. I have little experience with Stock Trading",
    },
    {
      id: "complete-notice",
      value: "complete",
      label: "Complete notice in Stock Trading",
    },
  ];

  // Radio options for Step 3
  const goalOptions: RadioOption[] = [
    {
      id: "demetrization",
      value: "demetrization",
      label: "Demetrization & performance",
      description:
        "I'm interested in gaining access to alternative investments and diversifying my portfolio through personal trading and improving my trading performance, in an effort to earn better long-term returns.",
    },
    {
      id: "income",
      value: "income",
      label: "Generate Consistent Real Income",
      description:
        "I'm interested in investments that deliver lower-risk but consistent fixed income distributions (often best for those who are retired).",
    },
    {
      id: "venture",
      value: "venture",
      label: "Access to venture capital and long-term wealth",
      description:
        "I'm interested in venture capital and private tech companies even though these investments are inherently less liquid and often more volatile and are long term investment options.",
    },
    {
      id: "other",
      value: "other",
      label: "Another Option",
    },
  ];

  // Radio options for Step 4
  const accountOptions: RadioOption[] = [
    {
      id: "personal",
      value: "personal",
      label: "Personal Account",
      description:
        "A flexible trading/investing account created to help you build long-term results.",
    },
    {
      id: "corporate",
      value: "corporate",
      label: "Corporate (For Expert Trader)",
      description:
        "This account is the best for experts that trade with various company funds. It allows each company to monitor your performance.",
    },
  ];

  // Checkbox options for Step 5
  const assetOptions: CheckboxOption[] = [
    { id: "stocks", value: "stocks", label: "Stocks" },
    { id: "cryptocurrency", value: "cryptocurrency", label: "Cryptocurrency" },
    {
      id: "venture-capital",
      value: "venture-capital",
      label: "Venture Capital",
    },
    { id: "real-estate", value: "real-estate", label: "Real Estate" },
  ];

  return (
    <div className="min-h-screen py-8 px-1 md:px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold text-center">
            Apex Trade Fundings
          </h1>
        </div>

        <div className="p-6">
          <StepIndicator />

          <form onSubmit={handleSubmit}>
            {/* Step 1: Introduction */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Personalize your experience
                </h2>
                <p className="text-gray-600">
                  We're going to ask you questions throughout the account setup
                  process, and suggest strategies that fit you best.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                  >
                    Let's get started
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Investment Experience */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  How have you invested in stock exchanges and cryptocurrency
                  before?
                </h2>
                <p className="text-gray-600">
                  Have you ventured into the dynamic areas of stock exchanges
                  and cryptocurrency, exploring market stocks and digital
                  assets, whether you're a seasoned investor or a new trader.
                </p>

                <div className="space-y-4">
                  {experienceOptions.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="radio"
                        id={option.id}
                        name="stockExperience"
                        value={option.value}
                        checked={formData.stockExperience === option.value}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={option.id}
                        className="ml-3 block text-gray-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Primary Goal */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  What's your primary goal with Apex Trade Fundings?
                </h2>
                <p className="text-gray-600">
                  Why would you want to embark on a journey into the intricate
                  landscape of stock exchanges and cryptocurrency, navigating
                  the realm of private stocks and digital assets.
                </p>

                <div className="space-y-4">
                  {goalOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.primaryGoal === option.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-blue-300"
                      }`}
                      onClick={() =>
                        handleRadioSelect("primaryGoal", option.value)
                      }
                    >
                      <div className="flex items-start">
                        <input
                          type="radio"
                          id={option.id}
                          name="primaryGoal"
                          value={option.value}
                          checked={formData.primaryGoal === option.value}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-1"
                        />
                        <div className="ml-3">
                          <label
                            htmlFor={option.id}
                            className="block text-gray-700 font-medium"
                          >
                            {option.label}
                          </label>
                          {option.description && (
                            <p className="mt-1 text-gray-600 text-sm">
                              {option.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Account Type */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  What account would you like to open?
                </h2>
                <p className="text-gray-600">
                  Choose an account that meets your goals, and describe your
                  trading goals.
                </p>

                <div className="space-y-4">
                  {accountOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.accountType === option.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-blue-300"
                      }`}
                      onClick={() =>
                        handleRadioSelect("accountType", option.value)
                      }
                    >
                      <div className="flex items-start">
                        <input
                          type="radio"
                          id={option.id}
                          name="accountType"
                          value={option.value}
                          checked={formData.accountType === option.value}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-1"
                        />
                        <div className="ml-3">
                          <label
                            htmlFor={option.id}
                            className="block text-gray-700 font-medium"
                          >
                            {option.label}
                          </label>
                          <p className="mt-1 text-gray-600 text-sm">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Asset Classes */}
            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Which asset classes interest you the most?
                </h2>
                <p className="text-gray-600">Choose one or more options</p>

                <div className="space-y-3">
                  {assetOptions.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={option.id}
                        name="assetClasses"
                        value={option.value}
                        checked={formData.assetClasses.includes(option.value)}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={option.id}
                        className="ml-3 block text-gray-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Financial Information */}
            {step === 6 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Please Share Your Financial Information
                </h2>
                <p className="text-gray-600">
                  This information helps us to know you better in order to give
                  you the best recommendations.
                </p>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="annualIncome"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Annual Income
                    </label>
                    <select
                      id="annualIncome"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your annual income</option>
                      <option value="0-14999">$0 - $14,999</option>
                      <option value="15000-29999">$15,000 - $29,999</option>
                      <option value="30000-49999">$30,000 - $49,999</option>
                      <option value="50000-74999">$50,000 - $74,999</option>
                      <option value="75000+">$75,000+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="initialDepositSource"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      What is the source of your initial deposit?
                    </label>
                    <select
                      id="initialDepositSource"
                      name="initialDepositSource"
                      value={formData.initialDepositSource}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select source</option>
                      <option value="pension">Pension</option>
                      <option value="savings">Savings</option>
                      <option value="inheritance">Inheritance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="ongoingDepositSource"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      What is the source of your ongoing deposit?
                    </label>
                    <select
                      id="ongoingDepositSource"
                      name="ongoingDepositSource"
                      value={formData.ongoingDepositSource}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select source</option>
                      <option value="pension">Pension</option>
                      <option value="salary">Salary</option>
                      <option value="business-income">Business Income</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Account Details */}
            {step === 7 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Complete your Account Details
                </h2>
                <p className="text-gray-600">
                  Kindly fill in your account information below:
                </p>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="accountCurrency"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Account Currency
                    </label>
                    <select
                      id="accountCurrency"
                      name="accountCurrency"
                      value={formData.accountCurrency}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select currency</option>
                      <option value="usd">USD - United States Dollar</option>
                      <option value="cad">CAD - Canadian Dollar</option>
                      <option value="eur">EUR - Euro</option>
                      <option value="gbp">GBP - Pound Sterling</option>
                      <option value="aud">AUD - Australian Dollar</option>
                      <option value="afn">AFN - Afghan Afghani</option>
                      <option value="cny">CNY - Chinese Yuan</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your address"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="zipcode"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Zipcode
                      </label>
                      <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                        placeholder="Your zipcode"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: Review and Submit */}
            {step === 8 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Review Your Information
                </h2>
                <p className="text-gray-600">
                  Please review your information before submitting your
                  application.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700">
                      Investment Experience
                    </h3>
                    <p className="text-gray-600">
                      {formData.stockExperience
                        ? experienceOptions.find(
                            (opt) => opt.value === formData.stockExperience
                          )?.label
                        : "Not provided"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-700">Primary Goal</h3>
                    <p className="text-gray-600">
                      {formData.primaryGoal
                        ? goalOptions.find(
                            (opt) => opt.value === formData.primaryGoal
                          )?.label
                        : "Not provided"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-700">Account Type</h3>
                    <p className="text-gray-600">
                      {formData.accountType
                        ? accountOptions.find(
                            (opt) => opt.value === formData.accountType
                          )?.label
                        : "Not provided"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-700">Asset Classes</h3>
                    <p className="text-gray-600">
                      {formData.assetClasses.length > 0
                        ? formData.assetClasses
                            .map(
                              (asset) =>
                                assetOptions.find((opt) => opt.value === asset)
                                  ?.label
                            )
                            .filter(Boolean)
                            .join(", ")
                        : "Not provided"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-700">
                      Financial Information
                    </h3>
                    <p className="text-gray-600">
                      Annual Income: {formData.annualIncome || "Not provided"}
                      <br />
                      Initial Deposit Source:{" "}
                      {formData.initialDepositSource || "Not provided"}
                      <br />
                      Ongoing Deposit Source:{" "}
                      {formData.ongoingDepositSource || "Not provided"}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-700">
                      Personal Details
                    </h3>
                    <p className="text-gray-600">
                      Name: {formData.firstName} {formData.lastName}
                      <br />
                      Address: {formData.address || "Not provided"}
                      <br />
                      City: {formData.city || "Not provided"},{" "}
                      {formData.zipcode || "Not provided"}
                      <br />
                      Gender: {formData.gender || "Not provided"}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-700 text-sm">
                    By submitting this application, you agree to our Terms of
                    Service and Privacy Policy.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-200 font-medium"
                >
                  Previous
                </button>
              )}

              {step < 8 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 font-medium ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200 font-medium ml-auto"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <ProceedModal
        isOpen={modalOpen}
        onProceed="/dashboard"
        title="Registration Successful"
        children="Your account has been created successfully."
        proceedText="Proceed"
      />
    </div>
  );
};

export default MultiStepForm;
