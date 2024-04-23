import { ButtonHTMLAttributes, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import { twMerge } from 'tailwind-merge'

const buttonVariants = tv({
  base: [
    'flex items-center justify-center rounded-md text-sm shadow-sm outline-none font-semibold cursor-pointer',
  ],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default:
        'bg-orange-500 text-slate-850 py-2 px-4 gap-2 hover:bg-orange-400',
      outline:
        'bg-zinc-800 border border-white/10 p-1.5 hover:bg-zinc-900 disabled:bg-zinc-900',
    },
  },
})

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={twMerge(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
