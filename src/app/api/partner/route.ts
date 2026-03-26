import { supabase } from "@/lib/supabase";
import type { PartnerFormData } from "@/types/forms";

export async function POST(request: Request) {
  try {
    const data: PartnerFormData = await request.json();

    if (!data.organizationName || !data.contactName || !data.email) {
      return Response.json({ error: "Required fields missing" }, { status: 400 });
    }

    if (supabase) {
      const { error } = await supabase.from("partner_inquiries").insert({
        organization_name: data.organizationName,
        contact_name: data.contactName,
        email: data.email,
        organization_type: data.organizationType,
        help_types: data.helpTypes,
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
