"use client";
import { useEffect } from "react";

export default function Tawk() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/69297c72b154901962a514ae/1jb50s8fi";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);
  }, []);

  return null;
}
