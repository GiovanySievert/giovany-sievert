import { VscSourceControl, VscError, VscWarning, VscBell } from 'react-icons/vsc'

interface StatusBarProps {
  activeTab: string | null
}

export function StatusBar({ activeTab }: StatusBarProps) {
  const lang = activeTab ? 'TypeScript React' : ''

  return (
    <div className="flex h-5.5 shrink-0 items-center justify-between bg-statusbar-bg px-2 text-ui-xs text-white select-none overflow-hidden">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 cursor-pointer">
          <VscSourceControl className="text-ui-sm" />
          main
        </span>
        <span className="flex items-center gap-1 hover:bg-white/10 px-1.5 py-0.5 cursor-pointer">
          <VscError className="text-ui-sm" />
          0
          <VscWarning className="text-ui-sm ml-1" />0
        </span>
      </div>

      <div className="flex items-center gap-0.5">
        {lang && <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer">{lang}</span>}
        <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer">Ln 1, Col 1</span>
        <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer">Spaces: 2</span>
        <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer">UTF-8</span>
        <span className="hover:bg-white/10 px-2 py-0.5 cursor-pointer flex items-center gap-1">
          <VscBell className="text-ui-sm" />
        </span>
      </div>
    </div>
  )
}
