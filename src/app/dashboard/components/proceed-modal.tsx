// components/SimpleProceedModal.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface SimpleProceedModalProps {
  isOpen: boolean;
  onProceed: string;
  title?: string;
  children: ReactNode;
  proceedText?: string;
}

const ProceedModal = ({
  isOpen,
  onProceed,
  title = "Registration Successful",
  children,
  proceedText = "Proceed to Login",
}: SimpleProceedModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm transform transition-all">
        {/* Content */}
        <div className="p-6 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

          {/* Content */}
          <div className="text-gray-600 mb-6">{children}</div>

          {/* Proceed Button */}
          <Link href={onProceed}>
            {" "}
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              {proceedText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProceedModal;
