import type { ReactNode } from 'react'

export function Lines({ children }: { children: ReactNode }) {
  return <div className="code-lines">{children}</div>
}

export function Line({ children, indent = 0, className, wrap = false, cursorLine = false }: { children?: ReactNode; indent?: number; className?: string; wrap?: boolean; cursorLine?: boolean }) {
  return (
    <div className={`code-line${wrap ? ' code-line-wrap' : ''}${cursorLine ? ' code-line-cursor' : ''}`}>
      <span
        className={`shrink-0${className ? ` ${className}` : ''}`}
        style={indent ? { paddingLeft: `${indent}rem` } : undefined}
      >
        {children}
      </span>
    </div>
  )
}
