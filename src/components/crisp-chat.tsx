"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export default function CrispChat() {
  useEffect(() => {
    // Crisp global variables
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "a731839d-133d-4d2d-8d9d-1b9b1b1b1b1b";

    // Create script tag
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup MUST return void
    return () => {
      // prevent TypeScript from complaining
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
