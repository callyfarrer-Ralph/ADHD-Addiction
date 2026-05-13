export const metadata = {
  title: 'Treatment | Online ADHD and Therapy Support',
  description: 'Structured online therapy using CBT, trauma-informed practice and neuro-affirming approaches.'
}

export default function TreatmentPage() {
  const items = [
    'NICE-aligned Cognitive Behavioural Therapy',
    'Trauma-informed practice',
    'ADHD-specific behavioural strategies',
    'Relapse prevention tailored to neurodivergent brains',
    'Strengths-based, non-pathologising care',
    'Brief psychodynamic counselling where appropriate'
  ]

  return (
    <main className="bg-white text-[#1C2A3A]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">Treatment</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700">Therapy is collaborative, structured and paced to your nervous system. We focus on practical change while making space for the emotional and relational patterns that sit underneath symptoms.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item) => <div key={item} className="rounded-2xl bg-[#F4EFEA] p-5 shadow-sm">{item}</div>)}
        </div>
      </section>
    </main>
  )
}
