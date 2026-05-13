import { CardGrid, CTA, PageHeader, Section } from "@farrer/shared-ui";

export const metadata = {
  title: "FAQ | ADHD & Addiction Therapy"
};

export default function FAQPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="FAQ"
        title="Frequently asked questions"
        text="Practical answers about online ADHD and addiction therapy."
      />
      <Section>
        <CardGrid
          items={[
            { title: "Do you work online only?", text: "Yes. Therapy is online only for adults across the UK." },
            { title: "Do I need an ADHD diagnosis?", text: "No. Therapy can still explore ADHD traits and support needs. This service does not provide formal diagnosis." },
            { title: "Can therapy help if I still use substances?", text: "Often, yes, depending on risk and stability. Cally will discuss whether additional medical or specialist support is needed." },
            { title: "Is this crisis support?", text: "No. If you are at immediate risk, call 999, attend A&E, contact NHS 111 or call Samaritans on 116 123." },
            { title: "What happens first?", text: "You can email or phone to ask about availability. The first stage is an initial assessment and fit conversation." },
            { title: "Are sessions confidential?", text: "Therapy is confidential within standard professional and safeguarding limits, which are explained before work begins." }
          ]}
        />
      </Section>
      <CTA theme="adhd" title="Have another question?" href="/contact" label="Contact Cally" />
    </main>
  );
}
