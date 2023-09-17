import Link from 'next/link'
import styles from '../../css/main/page.module.css'

export default function Header(){
    return (
        <div className={styles.navigation}>
            <div>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/project'>Projects</Link>
            </div>
        </div>
    )
}