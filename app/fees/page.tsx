import { CardGrid, CTA, PageHeader, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "Fees | ADHD & Addiction Therapy"
};

export default function FeesPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="Fees"
        title="Fees and practical details"
        text="Online therapy only for adults across the UK. Fees are confirmed directly before therapy begins."
      />
      <Section title="Sessions">
        <CardGrid
          columns={2}
          items={[
            { title: "Online appointments", text: "Sessions are held securely online, so you can attend from a private space anywhere in the UK." },
            { title: "Fees", text: "Please contact Cally for current fee information, availability and cancellation terms." }
          ]}
        />
      </Section>
      <Section title="Before starting" tone="soft">
        <TextBlock>
          <p>
            The initial conversation helps clarify whether this specialist online service is appropriate for your needs and whether any additional support should be in place.
          </p>
        </TextBlock>
      </Section>
      <CTA theme="adhd" title="Ask about fees and availability" href="/contact" label="Contact Cally" />
    </main>
  );
}
