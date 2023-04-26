import styled from 'styled-components';

export const SectionContact = styled.section`
  padding: 40px 0;

  .contact-content {
    display: flex;
    flex-direction: column;

    .contact {
      color: #147efb;
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    h3 {
      color: #2d2e32;
      font-size: 20px;
    }
  }

  .contact-title {
    @media (max-width: 750px) {
      text-align: center;
    }
  }

  .contact-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 8rem;
    margin-top: 40px;
    @media (max-width: 750px) {
      flex-direction: column;
      gap: 5rem;
      justify-content: center;
      text-align: center;
    }
  }

  .contact-icons-box {
    align-items: center;
    display: flex;
    gap: 1.5rem;
    @media (max-width: 750px) {
      flex-direction: column;
    }

    span {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      padding: 2rem;
      i {
        color: #147efb;
        font-size: 19px;
      }
      
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      color: #2d2e32;
      font-size: 18px;
    }

    .location {
      color: #767676;
      cursor: pointer;
      font-size: 18px;
      text-decoration: none;
    &:hover{
      color: rgb(48, 152, 255);
    }
    }
  }

  a {
    color: #767676;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      color: rgb(48, 152, 255);
    }
  }


`