import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { page } = await req.json();

    // Grab IP
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] || "Unknown";

    // Get location from IP
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geo = await geoRes.json();

    const info = {
      page,
      ip,
      country: geo.country_name || "Unknown",
      city: geo.city || "Unknown",
      time: new Date().toLocaleString(),
    };

    // Telegram API URL
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const message = `👀 *New Visitor*
*Page:* ${info.page}
*Country:* ${info.country}
*City:* ${info.city}
*IP:* ${info.ip}
*Time:* ${info.time}
    `;

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
