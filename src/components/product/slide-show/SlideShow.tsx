'use client';
import { useState } from 'react';
import Image from 'next/image';

import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

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



export const SlideShow = ({ images, title, className }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();


    return (
        <>
            <Swiper
                style={
                    {
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    } as React.CSSProperties
                }
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    images.map(image =>
                        <SwiperSlide key={image}>
                            <Image
                                loading='eager'
                                src={`/products/${image}`}
                                alt={title}
                                height={400}
                                width={900}
                                className="rounded-lg object-fill"
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
                                width={900}
                                className="rounded-lg object-fill"
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}
