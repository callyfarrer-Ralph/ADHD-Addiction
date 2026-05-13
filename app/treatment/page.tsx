import { CardGrid, CTA, PageHeader, Section } from "@farrer/shared-ui";

export const metadata = {
  title: "Treatment Approach | ADHD & Addiction Therapy"
};

export default function TreatmentPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="Treatment"
        title="Structured therapy tailored to ADHD and addiction"
        text="Treatment is collaborative, paced and focused on understanding the function of behaviour while building skills for safer, more meaningful choices."
      />
      <Section title="What treatment may include">
        <CardGrid
          items={[
            { title: "Assessment and formulation", text: "Mapping triggers, maintaining cycles, ADHD traits, risk, strengths and goals." },
            { title: "CBT and behavioural change", text: "Practical experiments, coping plans, relapse prevention and emotional regulation skills." },
            { title: "Compassion-focused work", text: "Reducing shame, self-attack and hopelessness so change becomes more sustainable." },
            { title: "Values and identity", text: "Rebuilding life around what matters, not just what you are trying to avoid." },
            { title: "Risk planning", text: "Clear plans for cravings, lapses, escalation, crisis signs and support routes." },
            { title: "Review", text: "Regular check-ins on progress, fit and next steps." }
          ]}
        />
      </Section>
      <CTA theme="adhd" title="Discuss treatment options" href="/contact" label="Book a consultation" />
    </main>
  );
}
