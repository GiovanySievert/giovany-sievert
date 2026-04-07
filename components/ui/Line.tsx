import type { ReactNode } from 'react'

export function Lines({ children }: { children: ReactNode }) {
  return <div className="code-lines">{children}</div>
}

export function Line({ children, indent = 0, className, wrap = false }: { children?: ReactNode; indent?: number; className?: string; wrap?: boolean }) {
  return (
    <div className={`code-line${wrap ? ' code-line-wrap' : ''}`}>
      <span
        className={`shrink-0${className ? ` ${className}` : ''}`}
        style={indent ? { paddingLeft: `${indent}rem` } : undefined}
      >
        {children}
      </span>
    </div>
  )
}
