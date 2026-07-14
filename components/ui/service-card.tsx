interface ServiceCardProps {
  number: string
  title: string
  description: string
}

export function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="border-b border-line pb-8">
      <div className="flex gap-4 mb-4">
        <span className="text-gold font-black text-xl flex-shrink-0">
          {number}
        </span>
        <h3 className="h3-display">{title}</h3>
      </div>
      <p className="body-lg text-ink ml-[4.5rem]">
        {description}
      </p>
    </div>
  )
}
