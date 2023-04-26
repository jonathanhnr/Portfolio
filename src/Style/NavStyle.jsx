import styled from "styled-components";

export const Navbar = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .09);
  display: flex;
  font-size: 1.2rem;
  height: auto;
  justify-content: space-between;
  left: 0;
  padding: 25px 40px 25px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;

  h3 {
    color: #2d2e32;
    cursor: pointer;
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;

    a {
      color: black;
      font-weight: 600;
      text-decoration: none;
      transition: all .23s;
      @media (max-width: 900px) {
        display: none;
      }
      &:hover {
        color: #3098ff;
        transition: all 0.3s;
      }
    }

    i {
      cursor: pointer;
      display: none;
      font-size: 1.5rem;
      @media (max-width: 900px) {
        display: flex;
      }
    }
  }
`
export const MobileNav = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  transition: all .3s ease-in-out;
  width: 100%;
  z-index: 300;

  span {
    font-size: 2rem;
    position: absolute;
    top: 2rem;
    right: 4rem;
    cursor: pointer;
    

    &:hover {
      color: #3098ff;
      transition: all 0.3s;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    font-size: 2.3rem;
    list-style: none;

    a {
      color: black;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        color: #3098ff;
        transition: all 0.3s;
      }
    }
  }
  &.close-menu{
    left: -100%
  }
  &.open-menu {
    left: 0 
  }
`

