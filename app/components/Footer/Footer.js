import React from 'react';
import styles from './footer.module.css'
import Link from "next/link";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h3>Контакты</h3>
                    <p>Адрес: 1234 Рыбная улица, Рыбинск, Рыбная область</p>
                    <p>Телефон: +123 456 7890</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className={styles.section}>
                    <h3>Следите за нами</h3>
                    <ul className={styles.list}>
                        <li><a className='link' href="#">Facebook</a></li>
                        <li><a className='link' href="#">Twitter</a></li>
                        <li><a className='link' href="#">Instagram</a></li>
                    </ul>
                </div>

            </div>
            <div className={styles.copyright}>
                <p>&copy; 2023 Рыбный Проект. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;
