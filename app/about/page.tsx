import { CTA, PageHeader, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "About Cally Farrer | ADHD & Addiction Therapy"
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="About"
        title="Cally Farrer"
        text="BABCP-accredited Psychotherapist and Director of The Farrer Therapy Group."
      />
      <Section title="Clinical experience">
        <TextBlock>
          <p>
            Cally offers online therapy for adults across the UK, with a specialist focus on ADHD, addiction, compulsive behaviours and co-occurring emotional difficulties.
          </p>
          <p>
            Her approach is evidence-based, compassionate and practical. Therapy is designed to help you understand what is happening, reduce risk and build change that fits your life.
          </p>
        </TextBlock>
      </Section>
      <CTA theme="adhd" title="Contact Cally" href="/contact" label="Get in touch" />
    </main>
  );
}
