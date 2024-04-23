import { Button } from '../components/ui/button'
import { EventsTable } from '../components/events-table'
import { PlusCircle, ClipboardCheck } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { SearchFilter } from '../components/search-filter'

export function Events() {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-gray-100 font-bold text-2xl">Eventos</h1>
          <SearchFilter />
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">
              <PlusCircle className="size-4" />
              Criar Evento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar novo evento</DialogTitle>
              <DialogDescription>
                Preencha os campos sobre o evento.
              </DialogDescription>
            </DialogHeader>

            <form className="flex flex-col gap-4 mt-3">
              <div className="flex flex-col gap-3">
                <Label>Nome</Label>
                <Input type="text" className="border-zinc-800" />
              </div>

              <div className="flex flex-col gap-3">
                <Label>Detalhes</Label>
                <Input type="text" className="border-zinc-800" />
              </div>

              <div className="flex flex-col gap-3">
                <Label className="w-auto">Limite de Participantes</Label>
                <Input type="number" min={1} className="w-40 border-zinc-800" />
              </div>
            </form>
            <DialogFooter className="flex items-center gap-3">
              <Button type="submit" variant="default">
                <ClipboardCheck className="size-4" />
                Criar
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="outline" className="p-2">
                  Cancelar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <main className="border border-white/10 rounded-lg">
        <EventsTable />
      </main>
    </div>
  )
}
