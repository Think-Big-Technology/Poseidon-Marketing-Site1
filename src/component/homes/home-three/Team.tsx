import { Link } from "react-router-dom";
import team_data from "../../../data/TeamData";

const Team = () => {
   return (
      <section id="team" className="team pos-rel pos-rel pt-130">
         <div className="container">
            <div className="sec-title text-center mb-70">
               <h5 className="sec-title__subtitle">Our Team</h5>
               <h2 className="sec-title__title">Meet our skilld team</h2>
            </div>
            <div className="team__wrap ul_li">
               {team_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="team__item">
                     <div className="avatar">
                        <img src={item.thumb} alt="" />
                     </div>
                     <div className="team__info text-center mb-20">
                        <h3>{item.title}</h3>
                        <span>{item.designation}</span>
                     </div>
                     <div className="team__social ul_li_center">
                        <ul className="team__social-link link-left ul_li">
                           <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                           <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                        </ul>
                        <span className="h-icon"><i className="far fa-plus"></i></span>
                        <ul className="team__social-link link-right ul_li">
                           <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                           <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="team__shape">
            <div className="shape shape--1">
               <img src="/assets/img/shape/t_shape1.png" alt="" />
            </div>
            <div className="shape shape--2">
               <img src="/assets/img/shape/t_shape1.png" alt="" />
            </div>
         </div>
      </section>
   )
}

export default Team
