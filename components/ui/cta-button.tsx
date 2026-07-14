import { cn } from '@/lib/cn'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'dark' | 'light'
  className?: string
}

export function CTAButton({
  href,
  children,
  variant = 'dark',
  className = '',
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 px-6 py-3 font-semibold text-base transition-all duration-300'

  const variantClasses = variant === 'dark'
    ? 'bg-ink text-canvas hover:bg-ink-muted'
    : 'border border-ink text-ink hover:bg-ink hover:text-canvas'

  return (
    <a
      href={href}
      className={cn(baseClasses, variantClasses, className)}
    >
      {children}
      <span>→</span>
    </a>
  )
}
