export const metadata = {
  title: 'ADHD Therapy | Online ADHD-Informed CBT',
  description: 'Online ADHD-informed CBT for impulsivity, emotional regulation, executive functioning, rejection sensitivity and self-esteem.'
}

export default function ADHDPage() {
  return (
    <main className="bg-[#F4EFEA] text-[#1C2A3A]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">ADHD-Informed CBT</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700">ADHD-informed CBT is structured, practical therapy tailored to neurodivergent minds. We focus on emotional regulation, impulsivity, executive functioning, identity, shame and rejection sensitivity.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {['Emotional dysregulation', 'Impulsivity and overwhelm', 'Executive functioning', 'Low self-esteem and identity', 'Rejection sensitivity', 'Practical tools that fit your brain'].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-5 shadow-sm">{item}</div>
          ))}
        </div>
      </section>
    </main>
  )
}
