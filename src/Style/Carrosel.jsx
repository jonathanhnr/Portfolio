import styled from 'styled-components';

export const GaleryPhoto = styled.div`
  .product-images-slider {
    .swiper-slide {
      padding-top: 70%;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }

    .swiper-button-prev {
      left: 10px;
      color: rgb(255, 255, 255);
    }

    .swiper-button-next {
      right: 10px;
      color: rgb(255, 255, 255);
    }
  }

  .product-images-slider-thumbs {
    .swiper-slide {
      cursor: pointer;
      border: 1px solid #dddbdb;

      &-thumb-active {
        border-color: #ff02f2;
      }
    }

    &-wrapper {
      width: 100%;
      padding-top: 65%;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`