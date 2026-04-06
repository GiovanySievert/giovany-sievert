type Props = { children: React.ReactNode }

export const C = ({ children }: Props) => <span className="text-syntax-comment">{children}</span>
export const K = ({ children }: Props) => <span className="text-syntax-keyword">{children}</span>
export const B = ({ children }: Props) => <span className="text-syntax-type">{children}</span>
export const V = ({ children }: Props) => <span className="text-syntax-variable">{children}</span>
export const S = ({ children }: Props) => <span className="text-syntax-string">{children}</span>
export const F = ({ children }: Props) => <span className="text-syntax-function">{children}</span>
export const T = ({ children }: Props) => <span className="text-syntax-teal">{children}</span>
export const N = ({ children }: Props) => <span className="text-syntax-number">{children}</span>
