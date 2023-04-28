import styled from "styled-components";

export const SectionAbout = styled.section`
  .about-container {
    margin-top: 38px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    @media (max-width: 1020px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  .img-side {
    position: relative;

    span {
      position: absolute;
      background-color: white;
      bottom: -55px;
      right: -30px;
      border-radius: 50%;

      @media (max-width: 1020px) {
        bottom: 5px;
        right: 62px;
      }

      @media (max-width: 880px) {
        bottom: 2px;
        right: 47px;
      } 
      @media (max-width: 750px) {
        bottom: 30px;
        right: 55px;
      }
      @media(max-width: 500px){
        right: 55px;
      }

   

      img {
        right: 100px;
        width: 150px;
        animation: rotate 9s linear infinite;

        @media (max-width: 750px) {
          width: 80px;
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
  }

  .main-img {
    width: 30rem;
    height: 24rem;
    border-radius: 1.7rem;

    @media (max-width: 1020px) {
      margin-bottom: 3.5rem;
    }
    @media (max-width: 750px) {
      width: 90%;
      height: auto;
    }
    @media (max-width: 500px) {
      width: 70%;
      height: auto;
    }

    @media (max-width: 460px) {
      width: 90%;
      height: auto;
    }
  }

  .work-emoji {
    position: absolute;
    z-index: 10;
    width: 50px;
    bottom: 8px;
    right: 22px;

    @media (max-width: 1020px) {
      bottom: 70px;
      right: 118px;
    }

    @media (max-width: 880px) {
      bottom: 65px;
      right: 100px;
    }

    @media (max-width: 750px) {
      width: 30px;
      right: 81px;
    }
  }

  .text-side {
    margin-left: 2.5rem;
    @media (max-width: 1020px) {
      max-width: 54rem;
      margin: 0 auto;
    }

    @media (max-width: 400px) {
      padding-right: 0;
    }
    
    h4 {
      font-size: 15px;
      color: #3098ff;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    h3 {
      color: #2d2e32;
      font-family: Poppins,sans-serif;
      font-size: 1.5rem;
      line-height: 1.4;
      margin-bottom: 2rem;
    }

    p {
      color: #767676;
      font-family: Mulish,sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.2
    }
  }

`