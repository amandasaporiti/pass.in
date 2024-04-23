import { Table } from './Table/table'
import { TableCell } from './Table/table-cell'
import { TableHead } from './Table/table-head'
import { TableHeader } from './Table/table-header'
import { TableRow } from './Table/table-row'

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
  Eye,
  Pencil,
  Trash2,
} from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from './ui/input'
import { Link } from 'react-router-dom'

export function EventsTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader style={{ width: 48 }}>
            <input type="checkbox" className="h-4 w-4" />
          </TableHeader>
          <TableHeader style={{ width: 100 }}>Código</TableHeader>
          <TableHeader>Nome</TableHeader>
          <TableHeader>Capacidade de participantes</TableHeader>
          <TableHeader>Total de participantes</TableHeader>
          <TableHeader>Data de Criação</TableHeader>
          <TableHeader>Data de Início</TableHeader>
          <TableHeader>Data de Encerramento</TableHeader>
          <TableHeader style={{ width: 80 }}></TableHeader>
        </TableRow>
      </TableHead>
      <tbody>
        {Array.from({ length: 10 }).map((_, i) => (
          <TableRow key={i}>
            <TableCell>
              <input type="checkbox" className="h-4 w-4" />
            </TableCell>
            <TableCell>23sd23</TableCell>
            <TableCell>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-white">Nlw Expert</p>
                <span className="text-xs text-zinc-300">
                  Acelere o seu nível em programação
                </span>
              </div>
            </TableCell>
            <TableCell>20.000</TableCell>
            <TableCell>18.670</TableCell>
            <TableCell>27/04/2024</TableCell>
            <TableCell>29/04/2024</TableCell>
            <TableCell>01/05/2024</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer" asChild>
                  <Button variant="outline">
                    <Ellipsis className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    asChild
                  >
                    <Link to="/eventos/1">
                      <Eye className="mr-2 size-4" />
                      Ver participantes
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <Dialog>
                    <DialogTrigger asChild>
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <Pencil className="mr-2 size-4" />
                        Editar
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Editar evento</DialogTitle>
                        <DialogDescription>
                          Preencha todas os campos abaixo.
                        </DialogDescription>
                      </DialogHeader>
                      <form className="flex flex-col gap-4 mt-3">
                        <div className="flex flex-col gap-3">
                          <Label className="text-sm">Nome</Label>
                          <Input type="text" />
                        </div>

                        <div className="flex flex-col gap-3">
                          <Label className="text-sm">Detalhes</Label>
                          <Input type="text" />
                        </div>

                        <div className="flex flex-col gap-3">
                          <Label className="w-auto text-sm">
                            Limite de Participantes
                          </Label>
                          <Input
                            type="number"
                            min={1}
                            className="w-40 border-zinc-800"
                          />
                        </div>
                        <DialogFooter>
                          <Button variant="default">
                            <Pencil className="size-4" />
                            Editar
                          </Button>
                          <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                          </DialogClose>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <DropdownMenuSeparator />
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <Trash2 className="mr-2 size-4" />
                        Excluir
                      </DropdownMenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Após excluir este evento não será possível recuperá-lo
                          no sistema.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction asChild>
                          <Button variant="default">
                            <Trash2 className="size-4" />
                            Delete
                          </Button>
                        </AlertDialogAction>
                        <AlertDialogCancel asChild>
                          <Button variant="outline">Cancelar</Button>
                        </AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
      <tfoot>
        <tr className="border-b border-white/10">
          <TableCell className="text-left" colSpan={3}>
            Showing 10 of 228 items
          </TableCell>
          <TableCell className="text-right" colSpan={7}>
            <div className="inline-flex items-center gap-8">
              <p className="text-sm text-zinc-300">Page 1 of 11</p>
              <div className="flex gap-2">
                <Button variant="outline">
                  <ChevronLeft className="size-4" />
                </Button>
                <Button variant="outline">
                  <ChevronsLeft className="size-4" />
                </Button>
                <Button variant="outline" disabled>
                  <ChevronsRight className="size-4" />
                </Button>
                <Button variant="outline" disabled>
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </TableCell>
        </tr>
      </tfoot>
    </Table>
  )
}
