import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

interface Props {
  children: React.ReactNode
  toolText: string
}

export function TooltipLink ({ children, toolText }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{toolText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
