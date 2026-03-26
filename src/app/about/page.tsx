import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Seeds for Tomorrow — our mission, team, and roadmap to bring AI-powered education to underserved communities worldwide.",
};

const timeline = [
  {
    phase: "Phase 1",
    title: "Rio de Janeiro Pilot",
    status: "current",
    description:
      "Deploy AI learning platform in a Rio favela community center serving 270 families and 166 children. Measure baseline literacy, track engagement, and iterate on curriculum.",
  },
  {
    phase: "Phase 2",
    title: "Grant Funding & Evidence Collection",
    status: "next",
    description:
      "Publish learning outcome data. Apply for education-focused grants. Build partnerships with universities for independent evaluation.",
  },
  {
    phase: "Phase 3",
    title: "Government Partnerships",
    status: "future",
    description:
      "Partner with municipal and state education departments. Integrate with existing community infrastructure across Brazil.",
  },
  {
    phase: "Phase 4",
    title: "Scale Across Brazil & Sub-Saharan Africa",
    status: "future",
    description:
      "Expand to new countries and languages. Deploy in communities across Brazil and Sub-Saharan Africa where the need is greatest.",
  },
];

const team = [
  {
    name: "Team Member",
    role: "Founder & Executive Director",
    bio: "Passionate about using technology to create educational access where none exists.",
  },
  {
    name: "Team Member",
    role: "Head of Technology",
    bio: "Building the AI platform that makes personalized education possible at scale.",
  },
  {
    name: "Team Member",
    role: "Community Partnerships Lead",
    bio: "Connecting with communities on the ground to ensure our tools meet real needs.",
  },
  {
    name: "Team Member",
    role: "Curriculum Designer",
    bio: "Creating learning experiences that are engaging, effective, and culturally relevant.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Story"
            title="Why We Exist"
          />
          <div className="prose prose-lg mx-auto max-w-none text-warm-gray">
            <p className="text-lg leading-relaxed">
              It started with a phone call. A community coordinator in a Rio de
              Janeiro favela described what education looks like for the 166
              children in her program: overcrowded classrooms, absent teachers,
              kids graduating without being able to read.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              She wasn&apos;t asking for much — just a way to give these kids the
              basics. Reading. Writing. Maybe some English. The kind of
              education that most of us take for granted.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We realized that AI could be the answer. Not as a replacement for
              human connection, but as a patient, tireless tutor that meets every
              child where they are. A tutor that speaks their language, adapts to
              their pace, and is available whenever they can sit down at a
              computer.
            </p>
            <p className="text-xl font-serif font-bold text-warm-black mt-8">
              Seeds for Tomorrow exists because every child deserves access to
              education — regardless of where they were born.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Roadmap"
            title="Where We're Going"
            description="A phased approach to proving the model and scaling impact."
          />

          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" />

            {timeline.map((item) => (
              <div key={item.phase} className="relative pl-12 sm:pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 sm:left-4.5 ${
                    item.status === "current"
                      ? "border-teal bg-teal"
                      : item.status === "next"
                        ? "border-teal bg-white"
                        : "border-border bg-white"
                  }`}
                />

                <div className="rounded-xl border border-border bg-warm-white p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-sm font-bold uppercase tracking-wider text-teal">
                      {item.phase}
                    </span>
                    {item.status === "current" && (
                      <Badge className="bg-teal/10 text-teal border-teal/20 text-xs">
                        Current
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-warm-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-warm-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Team"
            title="The People Behind the Mission"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.role}
                className="rounded-2xl border border-border bg-white p-6 text-center"
              >
                {/* Avatar placeholder */}
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal/20 to-amber/20">
                  <span className="font-serif text-2xl font-bold text-teal">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-warm-black">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-teal">{member.role}</p>
                <p className="mt-3 text-sm text-warm-gray">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners placeholder */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Partners"
            title="Organizations We Work With"
            description="We're building partnerships with organizations that share our mission."
          />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex h-20 items-center justify-center rounded-xl border border-dashed border-border"
              >
                <span className="text-sm text-warm-gray italic">
                  Partner Logo
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
