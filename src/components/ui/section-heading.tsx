type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
      <p className="mb-4 inline-flex rounded-full border border-teal-200/90 bg-sky-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-900 backdrop-blur dark:border-cyan-300/30 dark:bg-[var(--card)] dark:text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold text-[var(--text)] sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}
