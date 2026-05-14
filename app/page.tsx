import { CardGrid, CrisisDisclaimer, CTA, Hero, Section, TextBlock } from "@farrer/shared-ui";

export default function HomePage() {
  return (
    <main>
      <Hero
        theme="adhd"
        eyebrow="Specialist online CBT · ADHD, addiction and co-occurring mental health · UK-wide"
        title="Premium specialist therapy for ADHD and addictive patterns"
        text="A calm, highly structured and neurodiversity-affirming therapy service for adults who want to understand the link between ADHD, emotional regulation, impulsivity and addictive behaviour — and build change that lasts."
        primary={{ href: "/contact", label: "Book a free consultation" }}
        secondary={{ href: "/treatment", label: "What to expect" }}
      />

      <Section
        title="Designed for the intersection of mind, behaviour and recovery"
        intro="ADHD and addictive behaviours rarely exist in neat separate boxes. They often reinforce each other through impulsivity, emotional intensity, stimulation seeking, shame, avoidance and exhausted executive functioning."
      >
        <TextBlock>
          <p>
            Therapy begins by making sense of the pattern without blame. We look at what the behaviour has been doing for you, where it has become costly, and what kind of support will help you move forward with more clarity, autonomy and control.
          </p>
          <p>
            The work is practical, collaborative and paced carefully. Sessions can include ADHD-informed CBT, relapse prevention, emotional regulation, values-based planning, compassion-focused work and support for the wider mental health difficulties that often sit alongside addiction.
          </p>
        </TextBlock>
      </Section>

      <Section title="Specialist support, clearly held" tone="soft">
        <CardGrid
          items={[
            {
              title: "Adult ADHD",
              text: "Support with impulsivity, emotional dysregulation, overwhelm, focus, self-esteem, rejection sensitivity, burnout and post-diagnosis adjustment."
            },
            {
              title: "Addiction and substance use",
              text: "Therapy for alcohol, drug use and compulsive behaviours, with relapse prevention, recovery planning and post-rehab aftercare where needed."
            },
            {
              title: "Co-occurring mental health",
              text: "A careful approach to anxiety, low mood, trauma symptoms, OCD traits, shame, relationship patterns and the stress of trying to manage everything alone."
            }
          ]}
        />
      </Section>

      <Section title="A more considered therapy experience">
        <CardGrid
          columns={2}
          items={[
            "Secure online sessions for adults anywhere in the UK, with clear boundaries and a steady therapeutic frame.",
            "A structured assessment that maps ADHD, addiction, risk, motivation, strengths and practical barriers to change.",
            "NICE-recommended CBT principles adapted for neurodivergent presentations rather than forcing a standard protocol to fit.",
            "Goal-focused therapy with regular review points, between-session strategies and a clear emphasis on independence rather than dependency."
          ]}
        />
      </Section>

      <Section title="What working together can focus on" tone="white">
        <CardGrid
          columns={2}
          items={[
            "Understanding the function of addictive behaviour: relief, escape, stimulation, numbness, connection or control.",
            "Reducing shame and building practical, compassionate accountability.",
            "Planning for high-risk moments, cravings, lapses and relapse without all-or-nothing thinking.",
            "Strengthening emotional regulation, routines, communication and self-trust in daily life."
          ]}
        />
        <CrisisDisclaimer />
      </Section>

      <Section title="Free 15-minute initial consultation" tone="soft">
        <TextBlock>
          <p>
            The first step is a short, no-obligation conversation. You can explain what has been happening, ask questions about the approach, and get a sense of whether specialist online therapy with Cally Farrer is the right fit.
          </p>
          <p>
            If therapy is suitable, the next stage is an initial assessment followed by regular 50-minute online sessions tailored to your goals, current risk, support needs and pace.
          </p>
        </TextBlock>
      </Section>

      <CTA
        theme="adhd"
        title="Begin with a confidential conversation"
        text="Book a free 15-minute consultation to explore whether this specialist ADHD and addiction therapy service is right for you."
        href="/contact"
        label="Book a free consultation"
      />
    </main>
  );
}
