import '../css/Modal.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Modal2 = ({ active, setActive, post}) => {
    const [Tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    console.log(name)
    const Req = (e) => {
        axios.post('http://127.0.0.1:8000/api/CallBack/',{name: name, email: email, tel: Tel})
        .then(()=>{
            setActive(false)
            alert("Ваша заявка отправлена")
        }
        )
        
    }
    return (
        <>
        <div className={active ? "modal2 active2" : "modal2"} onClick={() => setActive(false)}>
            <div className="modal_content2" onClick={e => e.stopPropagation()}>
                
                <span className='close2' onClick={() => {
                    setActive(false)
                }}></span>
                <h1 className='title2'>ЗАПОЛНЕНИЕ ФОРМЫ</h1>
                <div className='desc'>
                Заполнять форму чтобы с вами связались операторы.<br/>
                <span className='big'>Внимание!</span> Звонок от оператора бесплатный.<br/>
            
                +7(727) 303 3333
                </div>
                <form onSubmit={Req}>
                    <div className='form-group' placeholder="Ваше имя" value>
                        <input type="text" onChange={(e)=>setName(e.target.value)} maxlength="11" className='form-control' placeholder='Ваш ФИО' required/>
                    </div>
                    <div className='form-group' placeholder="Ваше имя">
                        <input type="email" onChange={(e)=>setEmail(e.target.value)}  className='form-control' placeholder='Ваш e-mail' required/>
                    </div>
                    <div className='form-group' placeholder="Ваше имя" value>
                        <input type="text" onChange={(e)=>setTel(e.target.value)} maxlength="11" className='form-control' placeholder='Мобильный номер' required/>
                    </div>
                    <div className='checkbox2'>
                        <input type="checkbox"  required></input>
                        <label> Договор оферты - ознакомлен, согласие подтверждаю</label>
                    </div>
                    <div className='checkbox3'>
                        <input type="checkbox"  required></input>
                        <label> Информированное согласие - ознакомлен, согласие подтверждаю</label>
                    </div>
                    <button className='button2'>Отправить</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Modal2;