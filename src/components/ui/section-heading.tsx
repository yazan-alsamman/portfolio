type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <p className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-[var(--card)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-900 dark:border-cyan-300/30 dark:text-cyan-200 backdrop-blur">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold text-[var(--text)] sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}
