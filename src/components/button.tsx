import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: [
    'flex items-center justify-center rounded-md text-sm shadow-sm outline-none font-semibold',
  ],
  variants: {
    variant: {
      primary:
        'bg-orange-500 hover:bg-orange-400 py-2 px-4 gap-2 text-slate-850',
      outline:
        'p-1.5 bg-slate-800 border border-white/10 hover:bg-zinc-900 disabled:bg-zinc-900',
    },
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant })} />
}

// className="bg-white/10 border-white/10 hover:bg-white/5"
// className="bg-white/10 border-white/10 hover:bg-white/5"
// variável base = estilizações base, que todos os meus botões irão ter por padrão
// variants: as customizações
