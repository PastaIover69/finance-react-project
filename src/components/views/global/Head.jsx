import React from 'react'
import headerStyles from '../../../styles/views/global/head-style'

const {Header, HeaderLogo, HeaderNav} = headerStyles

const buttonCSS = {
    display: 'block',
    padding: '10px 10px 10px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    outline: 'unset',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px'
}

export default function Head() {
  return (
    <React.Fragment>
        <Header>
            <HeaderLogo
            href='/'
            >
                Mrz-Planning
            </HeaderLogo>
            <HeaderNav>
                <button style={buttonCSS}>Главная</button>
                <button style={buttonCSS}>Статистика</button>
                <button style={buttonCSS}>Планирование</button>
            </HeaderNav>
        </Header>
    </React.Fragment>
  )
}
