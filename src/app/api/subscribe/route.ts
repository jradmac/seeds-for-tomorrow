import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    if (supabase) {
      const { error } = await supabase
        .from("subscribers")
        .upsert({ email }, { onConflict: "email" });

      if (error) {
        console.error("Supabase error:", error);
        return Response.json({ error: "Failed to subscribe" }, { status: 500 });
      }
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
