import { ParticipantsTable } from '../components/participants-table'
import { SearchFilter } from '../components/search-filter'

export function Participants() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-6">
        <h1 className="text-gray-100 font-bold text-2xl">Participantes</h1>
        <SearchFilter />
      </div>
      <ParticipantsTable />
    </div>
  )
}
