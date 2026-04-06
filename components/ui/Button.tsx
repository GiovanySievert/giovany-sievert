import { type ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary'

const variants: Record<Variant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600',
  secondary:
    'border border-zinc-300 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900 focus-visible:outline-zinc-600'
}

interface Props extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant
  href: string
}

export function Button({ variant = 'primary', href, children, className = '', ...props }: Props) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
