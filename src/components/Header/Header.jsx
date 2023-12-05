import React from 'react'; 
import stylles from './Header.module.scss'

export const Header = () => {
    const linkHeader = ['Home', 'Page', 'About Us', 'Blog', 'Contact Us']
    return (
        <header className={stylles.header}>
            <div className="container">
                <div className={stylles.header__inner}>
                    <nav className={stylles.header__nav}>
                        <div className={stylles.header__logo}>
                            <h2>Logo TYPE</h2>
                            <span style={{color: 'red', fontSize: '24px', fontWeight: 'bold'}}>*</span>
                        </div>
                        <ul>
                            {linkHeader.map((link, index) => (
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                        <div className={stylles.header__block}>
                            <input type="text" placeholder='search'/>
                            <button>Sign Up</button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}