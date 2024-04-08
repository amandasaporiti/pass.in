import { ComponentProps } from 'react'

type TableProps = ComponentProps<'table'>

export function Table({ ...props }: TableProps) {
  return <table className="w-full" {...props} />
}
