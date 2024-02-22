import { Video } from '@phosphor-icons/react'

import { spectral700, creepster } from '../../styles/fonts'

interface CardEpsodeProps {
  id: number
  name: string
  airDate: string
  numberOfCharacters: number
  episode: string
}
export default function CardEpisode(props: Readonly<CardEpsodeProps>) {
  return (
    <section
      className={` relative w-56 h-46 p-1 bg-gray-rm-300 rounded-t-lg ${spectral700.className}`}
    >
      <Video size={26} className="absolute -top-4" />
      <section
        className={`${spectral700.className} text-green-rm-300 flex flex-col ml-4 mt-4 items-cente justify-center`}
      >
        <strong>
          {' '}
          <span className={`${creepster.className} text-gray-rm-200`}>
            Nome :{' '}
          </span>{' '}
          {props.name}
        </strong>
        <strong>
          {' '}
          <span className={`${creepster.className} text-gray-rm-200`}>
            Episódio :{' '}
          </span>{' '}
          {props.episode}
        </strong>
        <strong>
          {' '}
          <span className={`${creepster.className} text-gray-rm-200`}>
            Data de Lançamento :{' '}
          </span>{' '}
          {props.airDate}
        </strong>
      </section>
      <strong className={`text-green-rm-300`}>
        <span className={`${creepster.className} text-gray-rm-200`}>
          Número de Personagens :{' '}
        </span>{' '}
        {props.numberOfCharacters}
      </strong>
    </section>
  )
}
