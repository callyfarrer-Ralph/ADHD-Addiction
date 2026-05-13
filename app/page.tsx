export const metadata = {
  title: 'Online ADHD & Addiction Therapy | Specialist CBT Across the UK',
  description: 'Specialist online therapy for ADHD and addiction. Evidence-based CBT, trauma-informed support, and neuro-affirming treatment for impulsivity, compulsive behaviours, emotional regulation, and co-occurring conditions.'
}

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-[#1C2A3A] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#4A7FBF]">Online therapy across the UK</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Specialist Online Therapy for ADHD, Addiction & Co-Occurring Conditions</h1>
          <p className="mt-6 max-w-2xl text-xl text-slate-200">Evidence-based, neuro-affirming therapy delivered online across the UK.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact" className="rounded-full bg-[#4A7FBF] px-6 py-3 font-semibold text-white">Book a Consultation</a>
            <a href="/treatment" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">Learn More</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-[#1C2A3A]">Understanding the ADHD-Addiction Connection</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-slate-700">
          <p>ADHD and addiction often overlap, yet most services treat them separately. This can leave people misunderstood, misdiagnosed, or stuck in cycles that feel impossible to break.</p>
          <p>Our online therapy service specialises in the intersection of ADHD and addiction. We understand impulsivity, emotional intensity, shame, and coping patterns. Therapy is collaborative, structured, and grounded in psychological science.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <div className="rounded-3xl bg-[#F4EFEA] p-8">
            <h2 className="text-2xl font-bold text-[#1C2A3A]">Areas We Support</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              <li>ADHD-related impulsivity, emotional dysregulation and overwhelm</li>
              <li>Substance use difficulties</li>
              <li>Compulsive behaviours including gambling, porn, spending, food and gaming</li>
              <li>Co-occurring anxiety, depression, trauma-related symptoms and OCD</li>
              <li>Executive functioning challenges</li>
              <li>Identity, self-esteem and rejection sensitivity</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-[#1C2A3A]">Our Therapeutic Approach</h2>
            <p className="mt-4 text-slate-700">We blend NICE-aligned CBT, trauma-informed practice, ADHD-specific behavioural strategies, relapse prevention tailored to neurodivergent brains, and strengths-based, non-pathologising care.</p>
            <p className="mt-4 text-slate-700">All sessions are delivered securely online and paced to your nervous system.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-[#1C2A3A]">A Safe, Structured, Online Therapeutic Space</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {['A calm, non-judgemental space', 'Clear structure and collaborative goal-setting', 'Practical tools for emotional regulation and behaviour change', 'Support that understands ADHD traits rather than pathologising them', 'Flexible online sessions across the UK'].map((item) => (
            <li key={item} className="rounded-2xl bg-white p-5 shadow-sm">{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-[#4A7FBF] px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Begin Your Online Therapy Journey</h2>
        <a href="/contact" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#1C2A3A]">Book a Consultation</a>
      </section>
    </main>
  )
}
