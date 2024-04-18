import { ComponentProps, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'flex items-center justify-center rounded-md text-sm shadow-sm outline-none font-semibold',
  ],
  variants: {
    variant: {
      default:
        'bg-orange-500 text-slate-850 py-2 px-4 gap-2 hover:bg-orange-400',
      outline:
        'bg-slate-800 border border-white/10 p-1.5 hover:bg-zinc-900 disabled:bg-zinc-900',
    },
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <button {...props} className={button({ variant, className })} ref={ref} />
    )
  },
)
