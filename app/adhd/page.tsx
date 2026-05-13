import { CardGrid, CTA, PageHeader, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "ADHD Therapy | ADHD & Addiction Therapy"
};

export default function ADHDPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="Neuro-affirming ADHD therapy"
        title="Therapy that understands adult ADHD"
        text="Support for emotional regulation, executive functioning, impulsivity, shame and the coping cycles that often build around ADHD."
      />
      <Section title="Common therapy goals">
        <CardGrid
          columns={2}
          items={[
            "Understanding how ADHD affects attention, motivation, planning and follow-through.",
            "Reducing impulsive decisions and building pause points that work in real life.",
            "Managing emotional intensity, rejection sensitivity and overwhelm.",
            "Building routines without perfectionism, self-criticism or all-or-nothing rules."
          ]}
        />
      </Section>
      <Section title="A strengths-based approach" tone="soft">
        <TextBlock>
          <p>
            ADHD therapy is most useful when it respects the nervous system in front of it. We work with your energy, sensory needs, memory, values and environment rather than trying to force generic advice onto a neurodivergent brain.
          </p>
          <p>
            The work can sit alongside medication, coaching, assessment or other clinical care. Therapy focuses on understanding patterns, reducing distress and making change possible.
          </p>
        </TextBlock>
      </Section>
      <CTA theme="adhd" title="Ask about ADHD-informed therapy" href="/contact" label="Get in touch" />
    </main>
  );
}
