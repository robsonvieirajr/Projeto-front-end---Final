import { SetStateAction, useEffect, useState } from 'react'
import CardCharacter from '../../components/CardPersonagens'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import BackToButton from '@/components/BotaoVoltar'
import { useRickAndMortyApi } from '@/service/api'

export default function Character() {
  const [page, setPage] = useState(1)
  const router = useRouter()

  const characterData = useRickAndMortyApi('character', page)

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page))
    }
  }, [router.query.page])

  function handlePaginationChange(
    e: React.SyntheticEvent<EventTarget>,
    value: SetStateAction<number>
  ) {
    setPage(value)
    router.push(`characters/?page=${value}`, undefined, { shallow: true })
  }

  if (characterData?.isLoading) return 'Loading...'
  if (characterData?.error)
    return 'An error has occurred: ' + characterData.error.message
  return (
    <main className="flex flex-wrap gap-8 w-10/12 items-center justify-center mt-28 mb-12 mx-auto relative">
      <BackToButton name={'Voltar'} page={'/'} />
      {characterData?.characters?.map((character) => (
        <CardCharacter
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
      <Pagination
        count={characterData?.numberPages}
        color="primary"
        page={page}
        onChange={handlePaginationChange}
      />
    </main>
  )
}
