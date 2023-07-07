import styled from "styled-components";

export const Navbar = styled.div`
  align-items: center;
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
  z-index: 300;

  h3 {
    color: #2d2e32;
    cursor: pointer;
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;

    a {
      color: #767676;
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

  .theme {
    right: 50px;
    border-radius: 50%;
    background-color: white;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 22px;
    overflow: hidden;
    @media(max-width: 800px){
      right: 70px;
    }
  }

  .theme-container {
    bottom: -45px;
    position: absolute;
    width: 300%;
    height: 300%;
    right: -45px;
  }

  .img-theme {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-180deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    background-color: black;
  }
`
export const MobileNav = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: center;
  left: 199px;
  position: fixed;
  text-align: center;
  top: 60px;
  transition: all .3s ease-in-out;
  width: 46%;
  z-index: 302;
  border-radius: 20px;
  padding: 50px;

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
    font-size: 1.3rem;
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

  &.close-menu {
    left: 100%
  }

  &.open-menu {
    left: 0
  }
`

