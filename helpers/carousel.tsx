import { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

const MobileCarousel = () => {
  useEffect(() => {
    const scrollHandler = (e: Event) => {
      const delta = Math.sign((e as WheelEvent).deltaX)
      const carousel = document.querySelector(
        '.mobile-carousel .carousel-slider'
      ) as HTMLElement
      if (carousel) {
        carousel.scrollLeft += delta * 50
      }
    }

    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.addEventListener('wheel', scrollHandler)
    }

    return () => {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        window.removeEventListener('wheel', scrollHandler)
      }
    }
  }, [])

  return (
    <div className='mobile-carousel'>
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <Image
            src='https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg'
            alt='Carousel image'
            height={100}
            width={100}
          />
        </div>
        <div>
          <Image
            src='https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg'
            alt='Carousel image'
            height={100}
            width={100}
          />
        </div>
        <div>
          <Image
            src='https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg'
            alt='Carousel image'
            height={100}
            width={100}
          />
        </div>
      </Carousel>

      <style jsx>{`
        .mobile-carousel {
          display: none;
        }

        @media only screen and (max-width: 767px) {
          .mobile-carousel {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}

export default MobileCarousel
