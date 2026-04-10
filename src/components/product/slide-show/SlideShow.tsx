'use client';
import { memo, useState } from 'react';
import Image from 'next/image';

import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css'


interface Props {
    images: string[],
    title: string,
    className?: string,
}



export const SlideShow = memo<Props>(({ images, title, className }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();


    return (
        <>
            <Swiper
                style={
                    {
                        '--swiper-navigation-color': '#2563EB',
                        '--swiper-pagination-color': '#fff',
                    } as React.CSSProperties
                }
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    images.map(image =>
                        <SwiperSlide key={image}>
                            <Image
                                loading='eager'
                                src={`/products/${image}`}
                                alt={title}
                                height={900}
                                width={930}
                                className="rounded-2xl"
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map(image =>
                        <SwiperSlide key={image}>
                            <Image
                                loading='eager'
                                src={`/products/${image}`}
                                alt={title}
                                height={400}
                                width={400}
                                className="rounded-lg"
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
)