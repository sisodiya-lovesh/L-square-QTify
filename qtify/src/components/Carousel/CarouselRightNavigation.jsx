import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react"
import {ReactComponent as RightArrow} from '../../assets/right.svg';
import styles from './Carousel.module.css';

export const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsEnd(swiper.isEnd);
        })
    }, [swiper])
  return (
    <div className={styles.rightNavigation}>
    {
        !isEnd && <RightArrow onClick={() => swiper.slideNext()} />
    }
</div>
  )
}
