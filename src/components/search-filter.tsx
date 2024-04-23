import { Search } from 'lucide-react'

export function SearchFilter() {
  return (
    <div className="flex items-center">
      <div className="bg-transparent border rounded-md border-white/10 flex items-center gap-3 py-1.5 px-3 w-72">
        <Search className="size-4 text-orange-300" />
        <input
          type="text"
          placeholder="Buscar..."
          className="outline-none bg-transparent placeholder:text-gray-300"
        />
      </div>
    </div>
  )
}
