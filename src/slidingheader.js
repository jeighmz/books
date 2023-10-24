import React from 'react'
import styled from 'styled-components'

// create a react component of a styled div that starts off covering the entire page and then shrinks to a fixed height of 100px
const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #000;
    color: #fff;
    font-size: 2em;
    text-align: center;
    line-height: 100px;
    transition: height 0.5s;
    z-index: 1000;
    &.shrink {
        height: 50px;
    }
`
// export the component so it can be imported and used in other components
export default Header
