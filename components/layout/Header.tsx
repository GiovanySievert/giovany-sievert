'use client'

import { FaReact } from 'react-icons/fa'
import { VscSymbolMethod } from 'react-icons/vsc'

interface Tab {
  id: string
  label: string
  path?: string
}

interface Props {
  tabs: Tab[]
  activeTabId: string | null
  onTabClick: (id: string) => void
  onTabClose: (id: string) => void
}

export function Header({ tabs, activeTabId, onTabClick, onTabClose }: Props) {
  const activeTab = tabs.find((t) => t.id === activeTabId)
  const componentName = activeTab?.label.replace(/\.tsx?$/, '')
  const pathSegments = activeTab?.path?.split('/').filter(Boolean) ?? []

  return (
    <header className="sticky top-0 z-50">
      <div role="tablist" className="flex h-8.75 overflow-x-auto bg-editor-bg">
        {tabs.length === 0 ? (
          <p className="flex items-center px-4 text-xs text-tab-muted">No files open</p>
        ) : (
          tabs.map((tab) => {
            const isActive = activeTabId === tab.id
            return (
              <div
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => onTabClick(tab.id)}
                className={`group relative flex h-full cursor-pointer select-none items-center gap-1.5 border-r border-tab-border px-3 text-ui-md transition-colors ${
                  isActive
                    ? 'bg-editor-bg text-white'
                    : 'bg-editor-bg text-tab-muted hover:bg-tab-hover hover:text-tab-dim'
                }`}
              >
                {isActive && <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-syntax-teal" />}
                {isActive && <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-tab-modified" />}

                <FaReact size={13} className="shrink-0 text-syntax-teal" aria-hidden />

                <span className={`whitespace-nowrap ${isActive ? 'text-syntax-teal' : 'text-white'}`}>{tab.label}</span>

                <span className="text-ui-xs text-tab-modified">U</span>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onTabClose(tab.id)
                  }}
                  className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded text-sm text-tab-muted transition-all hover:bg-tab-close hover:text-white ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  aria-label={`Close ${tab.label}`}
                >
                  ×
                </button>
              </div>
            )
          })
        )}
      </div>

      {activeTab && (
        <div className="flex p-3 items-center overflow-x-auto border-b border-tab-border bg-editor-bg px-3 text-sm">
          {pathSegments.map((seg, i) => (
            <span key={i} className="flex items-center">
              {i > 0 && <span className="mx-1 text-tab-sep">›</span>}
              <span className="text-tab-muted">{seg}</span>
            </span>
          ))}

          <span className="flex items-center">
            {pathSegments.length > 0 && <span className="mx-1 text-tab-sep">›</span>}
            <FaReact size={13} className="mr-2 text-syntax-teal" aria-hidden />
            <span className="text-tab-dim">{activeTab.label}</span>
          </span>

          {componentName && (
            <span className="flex items-center">
              <span className="mx-1 text-tab-sep">›</span>
              <VscSymbolMethod size={14} className="mr-1 text-syntax-keyword" aria-hidden />
              <span className="text-tab-dim">{componentName}</span>
            </span>
          )}
        </div>
      )}
    </header>
  )
}
