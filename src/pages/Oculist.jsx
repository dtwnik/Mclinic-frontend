
import Header from '../component/HeaderNav';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Modal from '../component/Modal'
const Oculist = () => {
    const [modalActive, setModalActive] = useState(false)
    const [Doctor, setDoctor] = useState([]);
    
    useEffect(() => {
        const apiUrl = 'https://mclinic-drf.herokuapp.com/api/Doctor/';
        axios.get(apiUrl, {
            params: {
                post: "Офтальмолог"
            }
        }).then((resp) => {
            const allDoctor = resp.data;
            setDoctor(allDoctor);
        });
    }, [setDoctor]);
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("mclinic_username")) {
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
        }
    }, [])
    console.log(isAuth)
    console.log(Doctor)
    const postReq = ()=>{
        if(isAuth){
            setModalActive(true)
        }
        else
            alert("Авторизуйтесь")
    }
    const data = "Офтальмолог"
    console.log(data)
    return (
        <>
        <Header />
        <div className='cont'>
            <div class="line-art flex">
                <div></div>
                <h1 className='lead'>Офтальмолог</h1>
                <div></div>
            </div>
            <div className='doctor'>
                {Doctor.map((doctor) =>
                    <div className='employee'>
                        <div className='emp-img'><img src={doctor.photo} /></div>
                        <h1>{doctor.name}</h1>
                        <h4>{doctor.degree}</h4>
                    </div>
                )}
            </div>
            <div className='textcontent'>
                <div className='text2'>
                Современное оснащение Mclinic – это широкие возможности для ранней диагностики  заболеваний сетчатки глаза и зрительного нерва. 
                    <br />
                    <br />
                    Для точной диагностики врачи-офтальмологи Mclinic используют оптические приборы японской компании Topcon, известного во всем мире производителя высококлассного оптического оборудования. 
                </div>
            </div>
            <div className='price'>
                <div class="line-art flex">
                    <div></div>
                    <h1 className='lead'>Стоимость:</h1>
                    <div></div>
                </div>
                <p>Прием врача офтальмолога первичный – <span className='big'>6 000 тг.</span></p><br/>
                <p>Прием врача офтальмолога повторный – <span className='big'>4 000 тг.</span></p><br/>
                <p>Дистанционная (онлайн) консультация врача офтальмолога – <span className='big'>5 500 тг.</span></p>
                <p>Дистанционная консультация офтальмолога по ранее выявленному диагнозу (повторная онлайн консультация) – <span className='big'>4 000 тг.</span></p>
                <button className='buttona' onClick={postReq}>Заказать прием</button>
                <Modal active={modalActive} setActive={setModalActive} post={data}></Modal>
            </div>


        </div>
        <Footer/>
    </>
    );
}

export default Oculist;