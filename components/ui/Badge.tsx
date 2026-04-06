interface Props {
  children: React.ReactNode;
}

export function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
      {children}
    </span>
  );
}
