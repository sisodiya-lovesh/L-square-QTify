import styles from './HeroSection.module.css'
import heroImage from '../../assets/vibrating-headphone.svg'
const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <div>
                <h2>100 Thousand Songs, ad-free</h2>
                <h2>Over thousands podcast episodes</h2>
            </div>
            <div>
                <img src={heroImage} alt="" />
            </div>
        </div>
    )
}

export default HeroSection