import { ContactPanel, CrisisDisclaimer, PageHeader, Section, TextBlock } from "@farrer/shared-ui";
import { contact } from "../site";

export const metadata = {
  title: "Contact | ADHD & Addiction Therapy"
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="Contact"
        title="Get in touch"
        text="Contact Cally Farrer to ask about availability for online therapy for adults across the UK."
      />
      <Section>
        <ContactPanel contact={contact} theme="adhd" />
        <TextBlock>
          <p>
            Please do not include highly sensitive clinical details in your first email. A brief note about what you are seeking support with and your availability is enough.
          </p>
        </TextBlock>
        <CrisisDisclaimer />
      </Section>
    </main>
  );
}
