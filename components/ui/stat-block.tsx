interface StatBlockProps {
  number: string
  label: string
}

export function StatBlock({ number, label }: StatBlockProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="text-3xl md:text-4xl font-black text-gold mb-2">
        {number}
      </div>
      <div className="text-sm md:text-base text-ink-muted leading-snug">
        {label}
      </div>
    </div>
  )
}
