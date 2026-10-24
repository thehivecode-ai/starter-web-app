const steps = [
  {
    title: "Make it yours",
    text: "Change the words on this page in app/page.tsx, and fill in the lines at the top of HIVE.md.",
  },
  {
    title: "List it on The Hive Code",
    text: "People try it, star it, and suggest what to build next.",
    link: { href: "https://thehivecode.ai/submit", label: "List your project" },
  },
  {
    title: "Put it online",
    text: "Import this repo on Vercel and click Deploy. It's free to start.",
    link: { href: "https://vercel.com/new", label: "Deploy on Vercel" },
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-10 px-6 py-16">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-400">
          Your app starts here
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My hive app</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          Say what your app does and who it is for. The hive will help you build the rest.
        </p>
      </div>
      <ol className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-300 font-bold text-zinc-900">
              {index + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">{step.title}</h2>
              <p className="text-zinc-700 dark:text-zinc-300">{step.text}</p>
              {step.link && (
                <a
                  href={step.link.href}
                  className="font-semibold text-amber-800 underline underline-offset-4 dark:text-amber-300"
                >
                  {step.link.label}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
