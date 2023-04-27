import styled from "styled-components";

export const SectionHome = styled.section`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  width: 100%;
  @media (max-width: 900px) {
    height: auto;
    padding: 7rem 0;
  }

  .content {
    margin-top: 100px;
    align-items: center;
    gap: 10rem;
    height: 40rem;
    justify-content: center;
    position: relative;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 3rem;
      height: auto;
      text-align: center;
      margin-top: 0;
    }
  }

  .hero-main {
    align-items: center;
    display: flex;
    gap: 0rem;
    justify-content: center;
    position: relative;
    @media (max-width: 900px) {
      flex-direction: column-reverse;
      gap: 3rem;
      height: auto;
      text-align: center;
    }
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    position: relative;

    h1 {
      color: #2d2e32;
      font-size: 3.5rem;
      line-height: 1.2;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 500;
      color: #767676;
      font-family: Mulish, sans-serif;
      line-height: 1.6;

      @media (max-width: 900px) {
        margin-bottom: 2rem;
      }
    }

    span {
      cursor: pointer;
      display: flex;
      gap: 1.3rem;
      margin: 2.5rem 0;
      @media (max-width: 900px) {
        gap: 1.6rem;
        justify-content: center;
        margin-bottom: 4rem;
      }

      a {
        color: #2d2e32;
        font-size: 3rem;
      }

      i {
        transition: all .2s;

        &:hover {
          color: #3098ff;
        }
      }
    }
  }

  .hero-img {
    animation: morph 8s ease-in-out infinite;
    background-image: url(/Portfolio/hero.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid #2d2e32;
    border-radius: 60% 40% 30% 70% / 10% 30% 70% 40%;
    height: 18rem;
    position: relative;
    transition: all 1s ease-in-out;
    width: 24rem;
    @media (max-width: 900px) {
      height: 15rem;
      width: 16rem;
    }
    animation: morph 4s ease-in-out infinite;
    border-radius: 100% 100% 100% 100% / 100% 100% 80% 40%;
    position: relative;
    transition: all 1s ease-in-out;
    @keyframes morph {
      0% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }

      50% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
      }

      100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }
    }
  }
  .logos{
    @media(max-width: 750px){
      padding: 10px 50px;
    }
  }

  .skills {
    margin-top: 60px;
    display: flex;
    position: relative;
    align-items: center;
    bottom: 0;
    color: #767676;
    font-size: 1.7rem;
    left: 0;
    @media (max-width: 900px) {
      flex-direction: column;
    }

    p {
      border-right: 2px solid rgba(45, 46, 50, .5);
      color: #2d2e32;
      font-family: Mulish, sans-serif;
      font-weight: 600;
      margin-right: 7rem;
      padding-right: 2rem;
      @media (max-width: 900px) {
        margin-right: 0;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 2.5rem;
      list-style: none;

      li {
        margin-top: 20px;
        align-items: center;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, .09);
        cursor: pointer;
        display: flex;
        height: 4rem;
        justify-content: center;
        width: 4rem;

        img {
          height: auto;
          width: 2.4rem;
        }
      }
    }
  }
  
`