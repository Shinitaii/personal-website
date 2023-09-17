import Link from 'next/link'
import styles from '../../css/main/page.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div>
                <p>Wallpaper by <Link href='https://www.deviantart.com/seerlight'>Seerlight</Link></p>
                <p>© 2022-2023. All Rights Reserved.</p>
            </div>
            <div>
                <p>Made with <Link href='https://nextjs.org/'>Next.js</Link>.</p>
            </div>
        </div>
    )
}