import { ComponentProps } from 'react'

type TableHeadProps = ComponentProps<'thead'>

export function TableHead({ ...props }: TableHeadProps) {
  return <thead {...props} />
}
