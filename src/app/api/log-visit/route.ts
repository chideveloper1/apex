// src/app/api/visit/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { page } = await req.json();

    // 1️⃣ Get visitor IP safely
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");

    let ip = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : realIp || "Unknown";

    // 2️⃣ Try to get country/city from Vercel headers first
    let country = req.headers.get("x-vercel-ip-country");
    let city = req.headers.get("x-vercel-ip-city");

    // 3️⃣ If not on Vercel, use ipwho.is
    if (!country || !city) {
      if (ip && ip !== "Unknown" && ip !== "127.0.0.1" && ip !== "::1") {
        try {
          const geoRes = await fetch(`https://ipwho.is/${ip}`);
          const geoData = await geoRes.json();

          if (geoData.success !== false) {
            country = geoData.country || "Unknown";
            city = geoData.city || "Unknown";
          } else {
            country = "Unknown";
            city = "Unknown";
          }
        } catch (geoError) {
          console.error("Geo lookup failed:", geoError);
          country = "Unknown";
          city = "Unknown";
        }
      } else {
        country = "Local";
        city = "Local";
      }
    }

    const info = {
      page: page || "Unknown",
      ip,
      country: country || "Unknown",
      city: city || "Unknown",
      time: new Date().toLocaleString(),
    };

    // 4️⃣ Telegram API
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const message = `👀 *New Visitor*
*Page:* ${info.page}
*Country:* ${info.country}
*City:* ${info.city}
*IP:* ${info.ip}
*Time:* ${info.time}`;

    await fetch(telegramUrl, {
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

