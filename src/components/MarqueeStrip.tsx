import { cn } from '@/lib/utils';

export function MarqueeStrip({
  items,
  reverse,
  className,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const segment = (
    <div className="flex shrink-0 items-center">
      {items.map((label, i) => (
        <span
          key={`${label}-${i}`}
          className="inline-flex items-center shrink-0 px-5 md:px-8"
        >
          <span className="text-[11px] md:text-sm font-bold uppercase tracking-[0.18em] md:tracking-[0.22em] text-muted-foreground whitespace-nowrap">
            {label}
          </span>
          <span className="mx-4 md:mx-6 text-[hsl(var(--naz-green)/0.45)] select-none">*</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        'overflow-hidden border-y border-white/[0.07] bg-black/25 py-4 md:py-5',
        className
      )}
    >
      <div
        className={cn(
          'naz-marquee-track flex w-max',
          reverse && 'naz-marquee-track-reverse'
        )}
      >
        {segment}
        {segment}
      </div>
    </div>
  );
}
