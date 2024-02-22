import { useState } from 'react'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import CardEpisode from '@/components/CardEpisodios'
import { useRickAndMortyApi } from '@/service/api'
import BackToButton from '@/components/BotaoVoltar'

export default function Location() {
  const [page, setPage] = useState(1)
  const router = useRouter()

  const dataEpisode = useRickAndMortyApi('episode', page)

  function handlePaginationChange(
    e: React.SyntheticEvent<EventTarget>,
    value: number
  ) {
    setPage(value)
    router.push(`episode/?page=${value}`, undefined, { shallow: true })
  }

  if (dataEpisode?.isLoading) return 'Loading...'
  if (dataEpisode?.error)
    return 'An error has occurred: ' + dataEpisode.error.message

  return (
    <main className="w-10/12 mt-16 mb-12 mx-auto relative">
      <BackToButton name={'Voltar'} page={'/'} />
      <div className="grid grid-cols-3 gap-8 justify-center">
        {dataEpisode?.episodes?.map((episode) => (
          <CardEpisode
            key={episode.id}
            name={episode.name}
            id={episode.id}
            airDate={episode.air_date}
            numberOfCharacters={episode.characters}
            episode={episode.episode}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination
          count={dataEpisode?.numberPages}
          color="primary"
          page={page}
          onChange={handlePaginationChange}
        />
      </div>
    </main>
  )
}
