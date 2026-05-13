import { CardGrid, CrisisDisclaimer, CTA, Hero, Section, TextBlock } from "@farrer/shared-ui";

export default function HomePage() {
  return (
    <main>
      <Hero
        theme="adhd"
        eyebrow="Online therapy only for adults across the UK"
        title="Specialist therapy for ADHD, addiction and the places they overlap"
        text="Clinical, structured and neuro-affirming CBT-informed therapy with Cally Farrer, BABCP-accredited Psychotherapist and Director of The Farrer Therapy Group."
        primary={{ href: "/contact", label: "Book a consultation" }}
        secondary={{ href: "/treatment", label: "Explore treatment" }}
      />
      <Section
        title="Understanding the ADHD-addiction connection"
        intro="ADHD and addictive patterns often reinforce each other through impulsivity, emotional intensity, shame, sensory seeking, avoidance and exhausted executive functioning."
      >
        <TextBlock>
          <p>
            Therapy helps make sense of the pattern without blame. We look at what the behaviour has been doing for you, where it has become costly, and which skills, supports and treatment goals will help you move forward.
          </p>
          <p>
            Sessions are collaborative and practical, with space for complexity. The work can include ADHD-informed CBT, relapse prevention, emotional regulation, values-based planning and compassion-focused work.
          </p>
        </TextBlock>
      </Section>
      <Section title="Specialist support" tone="soft">
        <CardGrid
          items={[
            { title: "ADHD", text: "Executive functioning, emotional regulation, rejection sensitivity, impulsivity, overwhelm and self-esteem." },
            { title: "Addiction", text: "Substance use and compulsive behaviours including gambling, pornography, spending, gaming, food and work." },
            { title: "Co-occurring difficulties", text: "Anxiety, depression, trauma symptoms, OCD traits, burnout and relationship patterns." }
          ]}
        />
      </Section>
      <Section title="A calm online therapy space">
        <CardGrid
          columns={2}
          items={[
            "Secure online sessions for adults anywhere in the UK.",
            "Clear goals, review points and practical between-session strategies.",
            "A non-judgemental stance that treats neurodivergence as context, not a character flaw.",
            "Evidence-based therapy tailored to your pace, risk profile and support needs."
          ]}
        />
        <CrisisDisclaimer />
      </Section>
      <CTA
        theme="adhd"
        title="Begin with a confidential conversation"
        text="Use the contact page to ask about availability and whether this specialist online therapy service is the right fit."
        href="/contact"
        label="Contact Cally"
      />
    </main>
  );
}
