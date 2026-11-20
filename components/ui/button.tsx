import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "group/button inline-flex max-w-full shrink-0 cursor-pointer items-center justify-center rounded-[40px] border border-transparent bg-clip-padding text-center font-sans text-base leading-relaxed font-semibold whitespace-normal transition-[color,background-color,border-color,box-shadow,opacity] duration-300 ease-in-out outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline:
          'border-primary/30 bg-background text-primary hover:bg-muted aria-expanded:bg-muted',
        secondary:
          'bg-accent text-accent-foreground hover:bg-accent/80 aria-expanded:bg-accent',
        light: 'bg-background text-primary hover:bg-accent',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-11 gap-2.5 px-6 py-2',
        xs: 'min-h-8 gap-1.5 px-3 py-1',
        sm: 'min-h-11 gap-2 px-4 py-2',
        lg: 'min-h-13 gap-3 px-7 py-3',
        icon: 'size-11',
        'icon-xs': 'size-8',
        'icon-sm': 'size-11',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
