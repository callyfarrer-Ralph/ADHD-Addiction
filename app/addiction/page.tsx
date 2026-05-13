export const metadata = {
  title: 'Addiction Therapy | Online CBT for Addiction & Compulsive Behaviours',
  description: 'Online therapy for addiction and compulsive behaviours including gambling, porn, gaming, food and substance use.'
}

export default function AddictionPage() {
  return (
    <main className="bg-white text-[#1C2A3A]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">Online Therapy for Addiction & Compulsive Behaviours</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700">We offer CBT-based therapy for substance use and behavioural addictions including gambling, porn, spending, food and gaming. Therapy is non-judgemental, collaborative and grounded in practical behaviour change.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {['Substance use', 'Compulsive gambling', 'Pornography addiction', 'Food and binge behaviours', 'Gaming and digital compulsions', 'Relapse prevention and emotional regulation'].map((item) => (
            <div key={item} className="rounded-2xl bg-[#F4EFEA] p-5 shadow-sm">{item}</div>
          ))}
        </div>
      </section>
    </main>
  )
}
