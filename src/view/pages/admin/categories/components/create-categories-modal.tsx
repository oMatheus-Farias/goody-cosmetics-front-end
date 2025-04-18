import { Plus } from 'lucide-react'

import { Button } from '@/view/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/view/components/ui/dialog'

import { CreateCategoriesForm } from './create-categories-form'

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateCategoriesModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          type="button"
          aria-label="Cadastrar"
          className="bg-goodycosmetics-primary-400 hover:bg-goodycosmetics-primary-500 flex w-full items-center gap-1 transition-colors duration-150 ease-linear hover:cursor-pointer md:w-28"
        >
          <Plus />
          Cadastrar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-1 font-normal text-gray-700 sm:justify-start">
            <Plus className="w-4" />
            Cadastrar categoria
          </DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para cadastrar uma nova categoria.
          </DialogDescription>
        </DialogHeader>
        <CreateCategoriesForm onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  )
}
