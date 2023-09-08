import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav(props: { url: string, name: string }) {
  return (
    <Link href={ props.url }>
      <div className={ styles.nav }>{ props.name }</div>
    </Link>
  )
}