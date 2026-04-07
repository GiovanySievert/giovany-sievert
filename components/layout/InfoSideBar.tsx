'use client'

import { useState, useRef, useCallback } from 'react'
import { FaReact, FaFolder, FaFolderOpen } from 'react-icons/fa'
import { IoChevronDown, IoChevronForward } from 'react-icons/io5'
import { HiDotsHorizontal } from 'react-icons/hi'
import { VscRootFolder } from 'react-icons/vsc'

export interface FileNode {
  type: 'file'
  id: string
  label: string
}

export interface FolderNode {
  type: 'folder'
  label: string
  children: FileNode[]
}

export type TreeNode = FileNode | FolderNode

const MIN_WIDTH = 160
const MAX_WIDTH = 500
const DEFAULT_WIDTH = 220

interface Props {
  tree: TreeNode[]
  activeTabId: string | null
  onItemClick: (id: string) => void
}

export function InfoSideBar({ tree, activeTabId, onItemClick }: Props) {
  const [width, setWidth] = useState(DEFAULT_WIDTH)
  const [isRootOpen, setIsRootOpen] = useState(true)
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(['components', 'side-projects']))
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleFolder = (label: string) =>
    setOpenFolders((prev) => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })

  const startResize = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const startX = e.clientX
    const startWidth = containerRef.current?.offsetWidth ?? DEFAULT_WIDTH

    const onMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - startX
      setWidth(Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, startWidth + delta)))
    }
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }, [])

  return (
    <div ref={containerRef} className="relative flex h-full select-none flex-col bg-sidebar-bg" style={{ width }}>
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-ui-xs font-semibold uppercase tracking-widest text-sidebar-text">Explorer</span>
        <button className="rounded p-0.5 text-sidebar-text hover:bg-sidebar-hover hover:text-white" aria-label="Mais ações">
          <HiDotsHorizontal size={14} />
        </button>
      </div>

      <button
        onClick={() => setIsRootOpen((o) => !o)}
        className="flex w-full items-center gap-1 px-2 py-0.5 text-ui-xs font-bold uppercase tracking-widest text-sidebar-text hover:bg-sidebar-hover"
      >
        {isRootOpen ? (
          <IoChevronDown size={12} className="shrink-0" />
        ) : (
          <IoChevronForward size={12} className="shrink-0" />
        )}
        Giovany-Sievert
      </button>

      {isRootOpen && (
        <ul>
          {tree.map((node) => {
            if (node.type === 'file') {
              const isActive = activeTabId === node.id
              return (
                <li key={node.id}>
                  <button
                    onClick={() => onItemClick(node.id)}
                    className={`flex w-full cursor-pointer items-center gap-1.5 py-0.5 pl-5.5 pr-2 text-left text-ui-md transition-colors ${
                      isActive ? 'bg-sidebar-active text-white' : 'text-sidebar-file hover:bg-sidebar-hover'
                    }`}
                  >
                    <FaReact size={13} className="shrink-0 text-syntax-teal" aria-hidden />
                    <span className="flex-1 truncate">{node.label}</span>
                    <span className="text-ui-xs text-tab-modified">U</span>
                  </button>
                </li>
              )
            }

            const isOpen = openFolders.has(node.label)
            return (
              <li key={node.label}>
                <button
                  onClick={() => toggleFolder(node.label)}
                  className="flex w-full cursor-pointer items-center gap-1 py-0.5 pl-3 pr-2 text-left text-ui-md text-sidebar-file transition-colors hover:bg-sidebar-hover"
                >
                  {isOpen ? (
                    <IoChevronDown size={12} className="shrink-0 text-sidebar-text" />
                  ) : (
                    <IoChevronForward size={12} className="shrink-0 text-sidebar-text" />
                  )}
                  {isOpen ? (
                    <FaFolderOpen size={13} className="shrink-0 text-sidebar-folder" aria-hidden />
                  ) : (
                    <FaFolder size={13} className="shrink-0 text-sidebar-folder" aria-hidden />
                  )}
                  <span className="flex-1 truncate">{node.label}</span>
                </button>

                {isOpen && (
                  <ul>
                    {node.children.map((child) => {
                      const isActive = activeTabId === child.id
                      return (
                        <li key={child.id}>
                          <button
                            onClick={() => onItemClick(child.id)}
                            className={`flex w-full cursor-pointer items-center gap-1.5 py-0.5 pl-9.5 pr-2 text-left text-ui-md transition-colors ${
                              isActive ? 'bg-sidebar-active text-white' : 'text-sidebar-file hover:bg-sidebar-hover'
                            }`}
                          >
                            <FaReact size={13} className="shrink-0 text-syntax-teal" aria-hidden />
                            <span className="flex-1 truncate">{child.label}</span>
                            <span className="text-ui-xs text-tab-modified">U</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      )}

      <div
        className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-transparent transition-colors hover:bg-sidebar-resize"
        onMouseDown={startResize}
      />
    </div>
  )
}
