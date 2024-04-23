import {
  Ellipsis,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  ChevronsLeft,
  Pencil,
  Trash2,
} from 'lucide-react'
import { Table } from './Table/table'
import { TableHead } from './Table/table-head'
import { TableRow } from './Table/table-row'
import { TableHeader } from './Table/table-header'
import { TableCell } from './Table/table-cell'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
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
import { Label } from './ui/label'
import { Input } from './ui/input'

export function ParticipantsTable() {
  return (
    <div className="border border-white/10 rounded-lg">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader style={{ width: 48 }}>
              <input type="checkbox" className="h-4 w-4 bg-transparent" />
            </TableHeader>
            <TableHeader style={{ width: 100 }}>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de Inscrição</TableHeader>
            <TableHeader>Data do Check-in</TableHeader>
            <TableHeader style={{ width: 80 }} />
          </TableRow>
        </TableHead>
        {Array.from({ length: 10 }).map((_, index) => (
          <tbody key={index}>
            <TableRow>
              <TableCell>
                <input type="checkbox" className="h-4 w-4" />
              </TableCell>
              <TableCell>51423</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-white">Amanda Saporiti</p>
                  <span className="text-xs text-zinc-300">
                    amanda@email.com
                  </span>
                </div>
              </TableCell>
              <TableCell>12 days ago</TableCell>
              <TableCell>7 days ago</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer" asChild>
                    <Button variant="outline">
                      <Ellipsis className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <Pencil className="mr-2 size-4" />
                          Editar
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Editar participante</DialogTitle>
                          <DialogDescription>
                            Não é possível editar as datas de Check-in e
                            Inscrição.
                          </DialogDescription>
                        </DialogHeader>
                        <form className="flex flex-col gap-4 mt-3">
                          <div className="flex flex-col gap-3">
                            <Label>Nome</Label>
                            <Input type="text" />
                          </div>

                          <div className="flex flex-col gap-3">
                            <Label>E-mail</Label>
                            <Input type="text" />
                          </div>

                          <div className="flex flex-col gap-3">
                            <Label className="w-auto">Data de Inscrição</Label>
                            <Input type="date" className="w-44" />
                          </div>

                          <div className="flex flex-col gap-3">
                            <Label className="w-auto">Data de Check-In</Label>
                            <Input type="date" className="w-44" />
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
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action can&apos;t be undone and the participant
                            will be permanently deleted from the server.
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
          </tbody>
        ))}

        <tfoot>
          <tr className="border-b border-white/10">
            <TableCell className="text-left" colSpan={3}>
              Showing 10 of 228 items
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
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
    </div>
  )
}
