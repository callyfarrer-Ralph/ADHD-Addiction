import { PageHeader, Section, TextBlock } from "@farrer/shared-ui";

export const metadata = {
  title: "Privacy Policy | ADHD & Addiction Therapy"
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        theme="adhd"
        eyebrow="Privacy"
        title="Privacy policy"
        text="How enquiry and therapy information is handled for this online therapy service."
      />
      <Section>
        <TextBlock>
          <p>
            The Farrer Therapy Group handles personal information for the purposes of responding to enquiries, arranging appointments, providing therapy, keeping clinical records and meeting professional, legal and safeguarding responsibilities.
          </p>
          <p>
            Information may include your name, contact details, appointment information, relevant clinical information, correspondence and billing records. Information is only shared where you consent, where required by law, or where there is a serious risk of harm to you or another person.
          </p>
          <p>
            You can request access to your personal information or ask a privacy question by emailing info@farrertherapy.co.uk. Clinical records are retained in line with professional and legal requirements.
          </p>
        </TextBlock>
      </Section>
    </main>
  );
}
