import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./TabsCarousel.module.css";
import BookmarkIllustration from '../../assets/image/bookmark-illustration.svg';
import SearchIllustration from '../../assets/image/search-illustration.svg';
import ShareIllustration from '../../assets/image/share-illustration.svg';


const tabData = [
  {
    title: "Simple Bookmarking",
    heading: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: BookmarkIllustration,
  },
  {
    title: "Speedy Searching",
    heading: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: SearchIllustration,
  },
  {
    title: "Easy Sharing",
    heading: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: ShareIllustration,
  },
];

const TabsCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <>
      {/* Синий фон за слайдом */}
      <div className={styles.backgroundShape}></div>
      <div className={styles.tabsCarousel}>
        <div className={styles.tabsContainer}>
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${styles.tab} ${activeTab === index ? styles.active : ""}`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
          spaceBetween={50}
          slidesPerView={1}
          allowTouchMove={true}
        >
          {tabData.map((tab, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideContent}>
                <div className={styles.illustrationContainer}>
                  <img
                    src={tab.image}
                    alt={tab.heading}
                    className={styles.tabIllustration}
                  />
                </div>
                <div className={styles.textContent}>
                  <h2>{tab.heading}</h2>
                  <p>{tab.text}</p>
                  <button className={styles.moreInfoBtn}>More Info</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TabsCarousel;
