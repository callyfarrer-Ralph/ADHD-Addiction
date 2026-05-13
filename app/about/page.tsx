export const metadata = {
  title: 'About Our Online ADHD & Addiction Therapy Service | Cally Farrer',
  description: 'Learn about our online ADHD and addiction therapy service, led by BABCP-accredited psychotherapist Cally Farrer. Evidence-based, neuro-affirming care delivered online across the UK.'
}

export default function AboutPage() {
  return (
    <main className="bg-[#F4EFEA] text-[#1C2A3A]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold md:text-5xl">About This Online Therapy Service</h1>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Our Focus</h2>
            <p className="mt-4 text-slate-700">We specialise in the intersection of ADHD and addiction, offering evidence-based online therapy that understands the emotional, behavioural and neurological patterns beneath the surface.</p>
            <p className="mt-4 text-slate-700">Therapy should be compassionate, collaborative, practical and grounded in psychological science. You do not need to mask, explain or justify your neurotype here.</p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">About Cally Farrer</h2>
            <p className="mt-4 text-slate-700">Cally Farrer is a BABCP-accredited psychotherapist and Director of The Farrer Therapy Group. She specialises in ADHD, addiction and co-occurring mental health conditions.</p>
            <p className="mt-4 text-slate-700">Her clinical approach integrates CBT, trauma-informed practice and brief psychodynamic counselling in a warm, grounded and collaborative style.</p>
          </article>
        </div>
        <a href="/contact" className="mt-10 inline-block rounded-full bg-[#4A7FBF] px-6 py-3 font-semibold text-white">Book a Consultation</a>
      </section>
    </main>
  )
}
