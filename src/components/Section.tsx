import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  /** classes extras no <section> (wrapper) */
  className?: string;
  /** classes extras no <h2> (título) */
  titleClassName?: string;
};

export default function Section({
  title,
  children,
  className = "",
  titleClassName = "",
}: Props) {
  return (
    <section className={`space-y-3 ${className}`}>
      <h2 className={`text-xl md:text-2xl font-semibold ${titleClassName}`}>
        {title}
      </h2>

      <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-4">
        {children}
      </div>
    </section>
  );
}
