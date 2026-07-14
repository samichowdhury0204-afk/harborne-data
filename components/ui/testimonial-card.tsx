interface TestimonialCardProps {
  quote: string
  attribution: string
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <div className="border border-line rounded-none p-8">
      <blockquote className="mb-6">
        <p className="body-lg text-ink italic">
          "{quote}"
        </p>
      </blockquote>
      <div className="text-sm font-medium text-ink-muted">
        — {attribution}
      </div>
    </div>
  )
}
