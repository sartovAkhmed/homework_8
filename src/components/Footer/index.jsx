
import React from 'react'; 
import stylles from './Footer.module.scss'

import icon from '../../images/IMAGE.svg'
import icon1 from '../../images/IMAGE-1.svg'
import icon2 from '../../images/IMAGE-2.svg'
import icon3 from '../../images/IMAGE-3.svg'
import map from '../../images/map.png'

export const Footer = () => {
    return (
        <footer className={stylles.footer}>
            <div className="container">
                <div className={stylles.footer__inner}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px'}}>
                        <h2>Logo TYPE</h2><span 
                            style={{color: 'red', fontSize: '24px', fontWeight: 'bold'}}>*</span>
                    </div>
                    <div className={stylles.footer__block}>
                        <h2>Информация</h2>
                        <p style={{maxWidth: '400px'}}>Мы узнали, что такое футер сайта. Рассмотрели, какие элементы 
                            рекомендуется в нем размещать для эффективной работы с посетителями. Разобрали основные 
                            критерии создания функционального и красивого подвала страницы.</p>
                    </div>
                    <div className={stylles.footer__block}>
                        <h2>Каталог</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contants</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className={stylles.footer__block}>
                        <h2>Соц-сети</h2>
                        <ul>
                            <li><a href="#"><img src={icon} alt="link" />instangram</a></li>
                            <li><a href="#"><img src={icon1} alt="link" />facebook</a></li>
                            <li><a href="#"><img src={icon2} alt="link" />twitter</a></li>
                            <li><a href="#"><img src={icon3} alt="link" />linckedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}