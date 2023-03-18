import { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import ProductInfo from '../components/Product/ProductInfo'

interface ItemsProps {
  images: Array<{ image?: string }> // Add error checking for the image property
  id: string
  name: string
  brand: string
  price: string
}

interface CarouselProps {
  data: Array<ItemsProps>
  children?: React.ReactNode
}

const MobileCarousel = ({ data, children }: CarouselProps) => {
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
      <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
        {data.map((item: ItemsProps) => (
          <div key={item.id}>
            {item.images[0]?.image ? (
              <div className='mb-[19.36px] bg-white flex justify-center items-center flex-col  rounded-[21.53px] px-4 py-4 h-[255.13px]'>
                <div className='w-full h-[143.51px] bg-[#f2f7fc] flex justify-center items-center rounded-[21.53px] relative'>
                  <Image
                    src={item.images[0].image}
                    width='100%'
                    height='100%'
                    className='absolute top-0 right-0 left-0 bottom-0'
                  />
                </div>
                <ProductInfo
                  type={item.name}
                  model={item.brand}
                  amount={item.price}
                />
              </div>
            ) : (
              // <Image
              //   src={item.images[0].image}
              //   alt='Carousel image'
              //   height={100}
              //   width={100}
              // />
              <div>Image not found</div>
            )}
          </div>
        ))}
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

        .custom-carousel {
          position: relative;
        }

        .custom-carousel .carousel-status {
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .custom-carousel .carousel-status span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ccc;
          margin: 5px;
          cursor: pointer;
        }

        .custom-carousel .carousel-status span.selected {
          background-color: #333;
        }
      `}</style>
    </div>
  )
}

export default MobileCarousel
