// src/app/api/visit/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { page } = await req.json();

    // Get IP from headers
    let ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "Unknown";

    // If localhost, get public IP using ipify
    if (ip === "127.0.0.1" || ip === "::1" || ip === "Unknown") {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      ip = ipData.ip;
    }

    // Get geolocation from ipwho.is
    const geoRes = await fetch(`https://ipwho.is/${ip}`);
    const geoData = await geoRes.json();

    const country = geoData.country || "Unknown";
    const city = geoData.city || "Unknown";

    const info = {
      page,
      ip,
      country,
      city,
      time: new Date().toLocaleString(),
    };

    // Telegram API URL
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const message = `👀 *New Visitor*
*Page:* ${info.page}
*Country:* ${info.country}
*City:* ${info.city}
*IP:* ${info.ip}
*Time:* ${info.time}`;

    // Send to Telegram
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visit error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
