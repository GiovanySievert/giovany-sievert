'use client'

import { useState, useCallback, type ComponentType } from 'react'
import { ContactSideBar } from './ContactSideBar'
import { InfoSideBar, type TreeNode } from './InfoSideBar'
import { Header } from './Header'
import { StatusBar } from './StatusBar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Personal } from '@/components/sections/Personal'

interface SidebarItem {
  id: string
  label: string
  path: string
  Component: ComponentType
}

const ITEMS: SidebarItem[] = [
  { id: 'hero', label: 'Hero.tsx', path: '', Component: Hero },
  { id: 'about', label: 'About.tsx', path: 'components', Component: About },
  { id: 'skills', label: 'Skills.tsx', path: 'components', Component: Skills },
  { id: 'projects', label: 'Projects.tsx', path: 'side-projects', Component: Projects },
  { id: 'personal', label: 'Personal.tsx', path: 'me', Component: Personal }
]

const TREE: TreeNode[] = [
  { type: 'file', id: 'hero', label: 'Hero.tsx' },
  {
    type: 'folder',
    label: 'components',
    children: [
      { type: 'file', id: 'about', label: 'About.tsx' },
      { type: 'file', id: 'skills', label: 'Skills.tsx' }
    ]
  },
  {
    type: 'folder',
    label: 'side-projects',
    children: [{ type: 'file', id: 'projects', label: 'Projects.tsx' }]
  },
  {
    type: 'folder',
    label: 'me',
    children: [{ type: 'file', id: 'personal', label: 'Personal.tsx' }]
  }
]

export function AppShell() {
  const [openTabs, setOpenTabs] = useState<SidebarItem[]>(ITEMS)
  const [activeTabId, setActiveTabId] = useState<string | null>(ITEMS[0].id)

  const openTab = useCallback((id: string) => {
    const item = ITEMS.find((i) => i.id === id)
    if (!item) return
    setOpenTabs((prev) => (prev.some((t) => t.id === id) ? prev : [...prev, item]))
    setActiveTabId(id)
  }, [])

  const closeTab = useCallback((id: string) => {
    setOpenTabs((prev) => {
      const idx = prev.findIndex((t) => t.id === id)
      const next = prev.filter((t) => t.id !== id)
      setActiveTabId((current) => {
        if (current !== id) return current
        return (next[idx] ?? next[idx - 1])?.id ?? null
      })
      return next
    })
  }, [])

  const activeItem = ITEMS.find((i) => i.id === activeTabId)

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex shrink-0">
        <ContactSideBar />
        <div className="hidden md:block">
          <InfoSideBar tree={TREE} activeTabId={activeTabId} onItemClick={openTab} />
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header tabs={openTabs} activeTabId={activeTabId} onTabClick={setActiveTabId} onTabClose={closeTab} />
        <main className="editor-scroll flex-1 overflow-y-auto bg-editor-bg">
          {activeItem ? (
            <activeItem.Component />
          ) : (
            <div className="flex min-h-64 items-center justify-center">
              <p className="text-sm text-zinc-600">Select a file to open</p>
            </div>
          )}
        </main>

        <StatusBar activeTab={activeItem?.label ?? null} />
      </div>
    </div>
  )
}
