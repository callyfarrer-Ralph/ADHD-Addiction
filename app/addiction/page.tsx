import { CardGrid, CrisisDisclaimer, CTA, PageHeader, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "Addiction Therapy | ADHD & Addiction Therapy"
};

export default function AddictionPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="Specialist addiction therapy"
        title="Support for substance use and compulsive behaviours"
        text="Online therapy for adults who want to understand and change addictive patterns with compassion, structure and clinical care."
      />
      <Section title="Areas of support">
        <CardGrid
          columns={2}
          items={[
            "Alcohol, drugs and prescribed medication misuse.",
            "Gambling, pornography, sex, spending, gaming, food or work-related compulsions.",
            "Relapse cycles, secrecy, shame and self-sabotage.",
            "Building safer coping, support plans and values-based recovery goals."
          ]}
        />
      </Section>
      <Section title="Therapy without judgement" tone="soft">
        <TextBlock>
          <p>
            Addictive behaviour usually makes sense in context. It may have offered relief, stimulation, escape, comfort or control before it became harmful. Therapy explores that context while helping you make practical changes.
          </p>
          <p>
            Where risk is high, Cally may recommend additional medical, crisis, detox or specialist community support alongside therapy.
          </p>
        </TextBlock>
        <CrisisDisclaimer />
      </Section>
      <CTA theme="adhd" title="Talk through the next step" href="/contact" label="Contact Cally" />
    </main>
  );
}
