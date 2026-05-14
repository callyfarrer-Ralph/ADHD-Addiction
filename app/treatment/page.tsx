import { CardGrid, CTA, FeatureBand, PageHeader, ProcessSteps, Section } from "@farrer/shared-ui";

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
      <FeatureBand
        theme="adhd"
        eyebrow="Therapy frame"
        title="A precise, compassionate plan for behaviour change"
        text="Treatment begins by understanding the job the behaviour has been doing. From there, therapy builds safer options, better regulation and more reliable support."
        items={[
          { kicker: "Stabilise", title: "Reduce immediate risk", text: "Identify high-risk patterns, early warning signs and what helps you stay connected to support." },
          { kicker: "Understand", title: "Make the cycle visible", text: "Map triggers, urges, ADHD traits, beliefs, feelings and consequences without blame." },
          { kicker: "Change", title: "Practise new responses", text: "Build realistic strategies for cravings, emotional storms, transitions and recovery routines." }
        ]}
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
      <Section title="How therapy typically unfolds" tone="soft">
        <ProcessSteps
          steps={[
            { title: "Assessment and formulation", text: "We identify the key maintaining cycles and agree where therapy should focus first." },
            { title: "Skills and experiments", text: "Sessions translate insight into practical strategies you can test between appointments." },
            { title: "Relapse prevention", text: "We plan for predictable pressure points, lapses, shame spirals and support needs." },
            { title: "Consolidation", text: "Therapy reviews what is working and strengthens the routines, values and relationships that support change." }
          ]}
        />
      </Section>
      <CTA theme="adhd" title="Discuss treatment options" href="/contact" label="Book a consultation" />
    </main>
  );
}
