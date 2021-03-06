import {isMobile} from "react-device-detect";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper/core';

SwiperCore.use([Autoplay, EffectFade, Pagination]);

export default function Hero() {
  if (isMobile) {
    return (
      <div className="pb-6">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          speed={1200}
          autoplay={{
            "delay": 3000,
            "disableOnInteraction": false
          }}
          effect={'fade'}
          pagination={{
            "clickable": true
          }}
        >
          <SwiperSlide>
            <img src="img/hero/sp/hero1.jpg" alt="松月御膳" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/hero/sp/hero2.jpg" alt="うな重" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/hero/sp/hero3.jpg" alt="刺身定食" />
          </SwiperSlide>
        </Swiper>
        <p className="mt-6 text-center">
          創業80年余、<br />和食と鰻の本格炭火焼を提供しております。<br />
          和食全般に加え、創作料理、名物鰻の刺し身、洗い、肝の塩辛などの珍味もご用意しております。<br />
          皆様どうぞごゆっくりとおくつろぎくださいませ。
        </p>
      </div>
    )
  }

  return (
    <div className="pb-6">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        speed={1200}
        autoplay={{
          "delay": 3000,
          "disableOnInteraction": false
        }}
        effect={'fade'}
        pagination={{
          "clickable": true
        }}
      >
        <SwiperSlide>
          <img src="img/hero/hero1.jpg" alt="松月御膳" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/hero/hero2.jpg" alt="うな重" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/hero/hero3.jpg" alt="刺身定食" />
        </SwiperSlide>
      </Swiper>
      <p className="mt-6 text-center">
        創業80年余、和食と鰻の本格炭火焼を提供しております。<br />
        和食全般に加え、創作料理、名物鰻の刺し身、洗い、肝の塩辛などの珍味もご用意しております。<br />
        皆様どうぞごゆっくりとおくつろぎくださいませ。
      </p>
    </div>
  )
}
