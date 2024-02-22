import CardLocation from '../../components/CardLocalizacao'
import { SetStateAction, useState } from 'react'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import { useRickAndMortyApi } from '@/service/api'
import BackToButton from '@/components/BotaoVoltar'

export default function Location() {
  const [page, setPage] = useState(1)
  const router = useRouter()
  const dataLocation = useRickAndMortyApi('location', page)

  if (dataLocation?.isLoading) return 'Loading...'
  if (dataLocation?.error)
    return 'An error has occurred: ' + dataLocation?.error.message

  function handlePaginationChange(
    e: React.SyntheticEvent<EventTarget>,
    value: SetStateAction<number>
  ) {
    setPage(value)
    router.push(`location/?page=${value}`, undefined, { shallow: true })
  }
  return (
    <main className="w-10/12 mt-16 mb-12 mx-auto relative">
      <BackToButton name={'Voltar'} page={'/'} />
      <div className="grid grid-cols-3 gap-8 justify-center">
        {dataLocation?.locations?.map((location) => (
          <CardLocation
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            numberOfResidents={location.residents}
            id={location.id}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination
          count={dataLocation?.numberPages}
          color="primary"
          page={page}
          onChange={handlePaginationChange}
        />
      </div>
    </main>
  )
}
