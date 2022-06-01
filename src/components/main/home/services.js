import React from 'react';
import "../../../styles/Services/services.scss"
import {media} from "../../media";


const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        <a href="mailto:chonalaybokonbaev@gmail"><span style={{fontSize: media(15, 20)}}><i
                            className="fa-solid fa-envelope"/> chonalaybokonbaev@gmail</span></a>
                        <a href="https://www.instagram.com/bokonbaevmektebi/"><span style={{fontSize: media(15, 20)}}><i
                            className="fa-brands fa-instagram"/> bokonbaevmektebi</span></a>
                        {/*<a href="#"><span style={{fontSize: media(15,20)}}><i className="fa-brands fa-facebook-f"/> balancha_mektebi</span></a>*/}
                        <a href="tel:0779-16-19-75"><span style={{fontSize: media(15, 20)}}><i
                            className="fa-solid fa-phone"/> 0779-16-19-75</span></a>
                        <a href="#"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-location-dot"/> Ош облусу, Чоң-Алай району, Ачы -Суу
айылы, А.Хожомуратов көчөсү 5 </span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748333.6258356399!2d71.09197970011246!3d39.47921709927254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bef6a2deb6dd0f%3A0x1dca74df919e538c!2z0KfQvtC9LdCQ0LvQsNC50YHQutC40Lkg0YDQsNC50L7QvQ!5e1!3m2!1sru!2skg!4v1654078546773!5m2!1sru!2skg"
                            style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;