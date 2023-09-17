import Image from 'next/image'
import styles from '../../../../css/main/page.module.css'
export default function Photo(){
    return (
        <div>
            <Image src='/richmond-photo.jpg' alt='Richmond' width={300} height={300} className={styles.photo}/>
        </div>
    )
}