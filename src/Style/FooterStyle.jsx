import styled from 'styled-components';

export const SectionFooter = styled.footer`
  background-color: #2d2e32;
  padding: 40px 0;
  width: 100%;

  .footerc {
    align-items: center;
    display: flex;
    justify-content: space-between;

    h3 {
      color: #fff;
      font-size: 1rem;
    }
  }

  .footerc-socials {
    display: flex;
    gap: 2rem;

    i {
      color: #fff;
      font-size: 2.3rem;

      &:hover {
      color:   rgb(48, 152, 255);
      }
    }
  }
`