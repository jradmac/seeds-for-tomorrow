import { supabase } from "@/lib/supabase";
import type { VolunteerFormData } from "@/types/forms";

export async function POST(request: Request) {
  try {
    const data: VolunteerFormData = await request.json();

    if (!data.name || !data.email) {
      return Response.json({ error: "Name and email are required" }, { status: 400 });
    }

    if (supabase) {
      const { error } = await supabase.from("volunteers").insert({
        name: data.name,
        email: data.email,
        skills: data.skills,
        availability: data.availability,
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
