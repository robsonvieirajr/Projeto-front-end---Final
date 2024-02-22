import Link from 'next/link'
import { creepster } from '../../styles/fonts'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer
      className={`text-center text-xs bg-gray-rm-300 ${creepster.className} p-1`}
    >
      <p className="text-gray-rm-100">
        Coded by{' '}
        <Link href="https://github.com/robsonvieirajr">
          <span className="text-green-rm-300">Robson Vieira</span>
        </Link>{' '}
        &#169; {currentYear}
      </p>
    </footer>
  )
}
