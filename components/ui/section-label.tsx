interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`eyebrow mb-4 ${className}`}>
      {children}
    </div>
  )
}
