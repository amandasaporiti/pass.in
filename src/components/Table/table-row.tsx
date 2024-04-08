import { ComponentProps } from 'react'

type TableRowProps = ComponentProps<'tr'>

export function TableRow({ ...props }: TableRowProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-zinc-900" {...props} />
  )
}
