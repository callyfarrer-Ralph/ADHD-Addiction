import { CardGrid, CTA, PageHeader, ProcessSteps, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "Assessments | ADHD & Addiction Therapy"
};

export default function AssessmentsPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="Assessments"
        title="Initial assessment and therapy planning"
        text="The first stage is a careful clinical conversation about your goals, history, current risks and the patterns you want to change."
      />
      <Section title="What assessment covers">
        <CardGrid
          items={[
            { title: "Current difficulties", text: "ADHD traits, addiction patterns, mood, anxiety, trauma symptoms and daily functioning." },
            { title: "Risk and support", text: "Safety, relapse risk, crisis routes, medical needs and existing professional support." },
            { title: "Goals", text: "What you want to understand, reduce, repair, strengthen or build." }
          ]}
        />
      </Section>
      <Section title="Assessment flow" tone="soft">
        <ProcessSteps
          steps={[
            { title: "Fit and safety", text: "Clarify what you need and whether online therapy is the right level of support." },
            { title: "Pattern mapping", text: "Explore ADHD traits, addictive behaviours, triggers, emotions and protective factors." },
            { title: "Shared formulation", text: "Build a clear explanation of what keeps the cycle going and what may help." },
            { title: "Next steps", text: "Agree therapy goals, review points and any additional support that may be useful." }
          ]}
        />
      </Section>
      <Section title="Important note" tone="soft">
        <TextBlock>
          <p>
            This service provides therapy assessment and formulation. It does not provide emergency care, medication prescribing, detox services or formal diagnostic ADHD assessments.
          </p>
        </TextBlock>
      </Section>
      <CTA theme="adhd" title="Arrange an initial conversation" href="/contact" label="Contact Cally" />
    </main>
  );
}
