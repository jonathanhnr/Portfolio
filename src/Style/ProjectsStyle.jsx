import styled from "styled-components";

export const SectionProjects = styled.section`
  padding: 10rem 0;

  p {
    color: #3098ff;
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 25px;
    color: #767676;
    margin-bottom: 6rem;
  }

  .projects-grid {
    grid-gap: 5rem;
    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: auto;
    width: 100%;

    .pro {
      display: flex;
      background-color: white;
      box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
      border-radius: 1.7rem;

      &__1 {
        height: auto;
        flex-direction: row;
        padding: 2rem;
        gap: 8rem;

        @media (max-width: 1020px) {
          height: auto;
          flex-direction: column !important;
          gap: 3rem;
          width: fit-content;
          margin: 0 auto;
        }

        @media (max-width: 400px) {
          width: 100%;
        }
      }


      &__img {
        width: auto;
        height: 267px;
        border-radius: 1.7rem;
        background-color: #76767633;
        overflow: hidden;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);

        @media (max-width: 650px) {
          width: 100%;
        }


        img {
          width: 100%;
          height: auto;
        }
      }

      &__text {
        display: flex;
        width: auto;
        height: auto;
        flex-direction: column;
        text-align: center;
        justify-content: center;

        @media (max-width: 1020px) {
          margin: 0 auto;
        }

        @media (max-width: 400px) {
          width: 100%;
        }

        img {
          width: 7rem;
          position: absolute;
          top: -2px;
          right: -19px;
        }

        h3 {
          font-size: 25px;
          text-transform: uppercase;
          color: black;
          margin-bottom: 2rem;
          position: relative;
        }

        p {
          font-size: 17px;
          color: gray;
          text-align: center;
          text-transform: none;
          font-weight: 500;
        }
      }
    }
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;

    p {
      color: black !important;
      font-weight: 600 !important;
      background-color: white;
      box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
      padding: 1rem 1.3rem;
      font-family: Poppins, sans-serif !important;
    }
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    align-items: center;

    a {
      font-size: 20px;
      color: black;
      font-weight: 500;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 7px;

      i {
        font-size: 2.2rem;
      }

      .link-icon {
        font-size: 15px !important;
      }

      img {
        width: 3.5rem;
      }

      &:hover {
        color: #3098ff;
        transition: all 0.3s;
      }
    }
  }

  .project-content {
    display: flex;
    flex-direction: column;

  }
`
