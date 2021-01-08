import * as React from 'react'
import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'

const Wrapper = styled.div`
  z-index: 99999;
  position: absolute;
  top: 0;
  right: 0;
`

const Menu = styled(Link)`
  cursor: pointer;
  z-index: 99999;
  top: 1.4em;
  right: 1.4em;
  left: auto;
  background: #f09;
  position: absolute;
  padding: 0.75em;

  border-radius: 4px;

  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const Button = styled.button`
  position: relative;
  background-color: transparent;
  border: 0;
  border-bottom: 0.35em solid #000;
  border-top: 0.35em solid #000;
  font-size: 16px;
  cursor: pointer;
  height: 1.5em;
  border-radius: 2px;
  outline: 0 !important;
  position: relative;
  transition: border-color 150ms ease-out, transform 150ms ease-out;
  width: 1.8em;
  position: relative;
  right: 0;

  &:after,
  &:before {
    border-bottom: 0.35em solid #000;
    bottom: 0.25em;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    right: 0;
    transition: transform 200ms ease-out;
  }

  span {
    color: transparent;
    height: 0;
    width: 0;
    overflow: hidden;
    position: absolute;
  }

  &.isActive {
    border-color: transparent;
    transform: rotateZ(90deg);

    &:after,
    &:before {
      transition: transform 200ms ease-out;
    }

    &:after {
      transform: rotateZ(45deg);
    }

    &:before {
      transform: rotateZ(-45deg);
    }
  }
`

const Hamburger = (): JSX.Element => {
  const location = useLocation()

  return (
    <Wrapper>
      <Menu to={location.pathname === '/preferences' ? '/' : '/preferences'}>
        <Button className={location.pathname !== '/' ? 'isActive' : ''}>
          <span>Toggle Navigation</span>
        </Button>
      </Menu>
    </Wrapper>
  )
}

export default Hamburger
