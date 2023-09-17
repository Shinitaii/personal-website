import styles from '../css/main/page.module.css'
import Wallpaper from './template/wallpaper'
import Header from './template/header'
import Footer from './template/footer'

const Template = ({children}) => {
  return (
    <main>
      <Wallpaper/>
      <div className={styles.main}>
        <Header/>
          {children}
        <Footer/>
      </div>
    </main>
  )
};

export default Template;
