import { Link } from 'react-router-dom';
import header from '../assets/images/header.png'
import React, { useState } from 'react';
import Modal from './Modal2';
const HeaderText = () => {
    const [modalActive, setModalActive] = useState(false)
    const open = ()=>{
        setModalActive(true)
    }
    console.log(modalActive)
    return (
        <>
            <div class="header-inner text-white text-center">
                <div class="container grid">
                    <div class="header-inner-left">
                        <h1>Ваш Самый Надежный<br /> <span>ПАРТНЕР В ОБЛАСТИ ЗДРАВООХРАНЕНИЯ</span></h1>
                        <p class="lead">лучшие услуги подбора персонала для вас</p>
                        <p class="text text-md">Современная платная частная клиника Medical Park оснащена новейшим диагностическим оборудованием. К вашим услугам безукоризненно вежливый персонал, доброжелательная атмосфера и внимательные врачи. Наши пациенты с первого момента и до выписки ощущают максимальный комфорт. Мы поддержим вас на всех этапах лечения, начиная со сбора пакета документов и до окончания вашей реабилитации.</p>
                        <div class="btn-group">
                            <a onClick={open} class="btn btn-white zakaz">Заказать звонок</a>
                            
                            <Link to={'/login/'} class="btn btn-light-blue">Авторизоваться</Link>
                            <Modal  active={modalActive} setActive={setModalActive}></Modal>
                        </div>
                    </div>
                    <div class="header-inner-right">
                        <img src={header} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderText;