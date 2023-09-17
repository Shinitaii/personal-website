import styles from '../../../css/main/page.module.css'
import PhotoContainer from './containers/photo'
import LinkContainer from './containers/link'
import TextContainer from './containers/text'

export default function HomeContent(){
    return (
        <div className={styles.home}>
            <PhotoContainer/>
            <LinkContainer/>
            <TextContainer/>
        </div>
    )
}