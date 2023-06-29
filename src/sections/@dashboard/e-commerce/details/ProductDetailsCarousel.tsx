import { useState, useRef, useEffect } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// utils
import { bgGradient } from '../../../../utils/cssStyles';
// @types
import { IProduct } from '../../../../@types/product';
// components
import Image from '../../../../components/image';
// import Lightbox from '../../../../components/lightbox';


// ----------------------------------------------------------------------

const THUMB_SIZE = 64;

type StyledThumbnailsContainerProps = {
  length: number;
};

const StyledThumbnailsContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'length',
})<StyledThumbnailsContainerProps>(({ length, theme }) => ({
  margin: theme.spacing(0, 'auto'),
  position: 'relative',

  '& .slick-slide': {
    opacity: 0.48,
    '&.slick-current': {
      opacity: 1,
    },
    '& > div': {
      padding: theme.spacing(0, 0.75),
    },
  },

  ...(length === 1 && {
    maxWidth: THUMB_SIZE * 1 + 16,
  }),
  ...(length === 2 && {
    maxWidth: THUMB_SIZE * 2 + 32,
  }),
  ...((length === 3 || length === 4) && {
    maxWidth: THUMB_SIZE * 3 + 48,
  }),
  ...(length >= 5 && {
    maxWidth: THUMB_SIZE * 6,
  }),
  ...(length > 2 && {
    '&:before, &:after': {
      ...bgGradient({
        direction: 'to left',
        startColor: `${alpha(theme.palette.background.default, 0)} 0%`,
        endColor: `${theme.palette.background.default} 100%`,
      }),
      top: 0,
      zIndex: 9,
      content: "''",
      height: '100%',
      position: 'absolute',
      width: (THUMB_SIZE * 2) / 3,
    },
    '&:after': {
      right: 0,
      transform: 'scaleX(-1)',
    },
  }),
}));

// ----------------------------------------------------------------------

type Props = {
  product: IProduct;
};

export default function ProductDetailsCarousel({ product }: Props) {
  const theme = useTheme();

  // const carousel1 = useRef<Carousel | null>(null);

  // const carousel2 = useRef<Carousel | null>(null);

  // const [nav1, setNav1] = useState<Carousel>();

  // const [nav2, setNav2] = useState<Carousel>();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState<number>(-1);

  const imagesLightbox = product.images.map((img) => ({ src: img }));

  const handleOpenLightbox = (imageUrl: string) => {
    const imageIndex = imagesLightbox.findIndex((image) => image.src === imageUrl);
    setSelectedImage(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(-1);
  };

  const carouselSettings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const carouselSettings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    slidesToShow: product.images.length > 3 ? 3 : product.images.length,
  };



  const renderLargeImg = (
    <Box sx={{ mb: 3, borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      {/* <Carousel {...carouselSettings1} asNavFor={nav2} ref={carousel1}>
        {product.images.map((img) => (
          <Image
            key={img}
            alt="product"
            src="https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/hero-01-free-img.png"
          // ratio="1/1"
          // onClick={() => handleOpenLightbox(img)}
          // sx={{ cursor: 'zoom-in' }}
          />
        ))}
      </Carousel> */}
      {/* 
      <CarouselArrowIndex
        index={currentIndex}
        total={product.images.length}
        onNext={handleNext}
        onPrevious={handlePrev}
      /> */}
    </Box>
  );

  const renderThumbnails = (
    <StyledThumbnailsContainer length={product.images.length}>
      {/* <Carousel {...carouselSettings2} asNavFor={nav1} ref={carousel2}>
        {product.images.map((img, index) => (
          <Image
            key={img}
            disabledEffect
            alt="thumbnail"
            src={img}
            sx={{
              width: THUMB_SIZE,
              height: THUMB_SIZE,
              borderRadius: 1.5,

            }}
          />
        ))}
      </Carousel> */}
    </StyledThumbnailsContainer>
  );

  return (
    <>
      <Box
        sx={{
          '& .slick-slide': {
            float: theme.direction === 'rtl' ? 'right' : 'left',
          },
        }}
      >
        {renderLargeImg}

        {/* {renderThumbnails} */}
      </Box>

      {/* <Lightbox
        index={selectedImage}
        slides={imagesLightbox}
        open={selectedImage >= 0}
        close={handleCloseLightbox}
        onGetCurrentIndex={(index) => setCurrentIndex(index)}
      /> */}
    </>
  );
}
