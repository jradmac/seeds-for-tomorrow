import { supabase } from "@/lib/supabase";
import type { ContactFormData } from "@/types/forms";

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    if (!data.name || !data.email || !data.subject || !data.message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    if (supabase) {
      const { error } = await supabase.from("contacts").insert({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      if (error) {
        console.error("Supabase error:", error);
        return Response.json({ error: "Failed to submit" }, { status: 500 });
      }
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
