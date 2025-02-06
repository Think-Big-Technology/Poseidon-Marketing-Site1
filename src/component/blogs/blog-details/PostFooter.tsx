import { Link } from "react-router-dom";
import BlogComment from "../../forms/BlogComment";

const PostFooter = () => {
   return (
      <div className="post-footer">
         <div className="post-tags-share ul_li_between mt-60 mb-60">
            <div className="tags ul_li mt-10">
               <ul className="list-unstyled ul_li">
                  <li><Link to="#">ICO</Link></li>
                  <li><Link to="#">Blockchain</Link></li>
                  <li><Link to="#">Currency</Link></li>
               </ul>
            </div>
            <div className="social-share ul_li mt-10">
               <ul className="ul_li">
                  <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="#"><i className="fas fa-share-alt"></i></Link></li>
               </ul>
            </div>
         </div>
         <div className="post-author">
            <div className="post-author__avatar">
               <img src="/assets/img/avatar/avatar1.png" alt="" />
            </div>
            <h5>About Goladria Gomez</h5>
            <p>The Founder and Creative Director of coiedge, a digital creative studio in USA, has over 15 years of experience as an award-winning Creative Director/Art for clients.</p>
         </div>
         <div className="post-nav">
            <div className="post-nav__item post-left">
               <div className="post-nav__inner pos-rel">
                  <h3 className="border-effect-2"><Link to="/blog-single">Visiting the Ads of the World blog is like</Link></h3>
                  <span>FEBRUARY 20,2023</span>
                  <div className="icon">
                     <i className="far fa-long-arrow-left"></i>
                  </div>
                  <Link className="link" to="/blog-single"></Link>
               </div>
            </div>
            <div className="post-nav__item post-right">
               <div className="post-nav__inner pos-rel">
                  <h3 className="border-effect-2"><Link to="/blog-single">How to Create an Effective Design </Link></h3>
                  <span>FEBRUARY 20,2024</span>
                  <div className="icon">
                     <i className="far fa-long-arrow-right"></i>
                  </div>
                  <Link className="link" to="/blog-single"></Link>
               </div>
            </div>
            <div className="grid_icon">
               <Link to="/blog"><img src="/assets/img/icon/grid_icon.png" alt="" /></Link>
            </div>
         </div>
         <div className="row mt-50">
            <div className="col-xl-12">
               <div className="post-comments">
                  <h2 className="title mb-25">03 Comments</h2>
                  <div className="latest__comments">
                     <ul className="list-unstyled mb-0">
                        <li>
                           <div className="comments-box">
                              <div className="comments-avatar">
                                 <img src="/assets/img/avatar/avatar2.png" alt="" />
                              </div>
                              <div className="comments-text">
                                 <div className="avatar-name">
                                    <h5>Chris Matts</h5>
                                    <span>19th May 2023</span>
                                 </div>
                                 <p>The platform itself was incredibly user-friendly, making it easy for me to participate in the ICO. The intuitive interface guided me through the token purchase process seamlessly.</p>
                              </div>
                              <Link className="reply" to="#">Reply</Link>
                           </div>
                        </li>
                        <li className="children">
                           <div className="comments-box">
                              <div className="comments-avatar">
                                 <img src="/assets/img/avatar/avatar3.png" alt="" />
                              </div>
                              <div className="comments-text">
                                 <div className="avatar-name">
                                    <h5>Fame Razak</h5>
                                    <span>19th May 2023</span>
                                 </div>
                                 <p>What stood out to me the most was the exceptional customer support. The team behind the platform was responsive and helpful, promptly addressing my inquiries and providing.</p>
                              </div>
                              <Link className="reply" to="#">Reply</Link>
                           </div>
                        </li>
                        <li>
                           <div className="comments-box">
                              <div className="comments-avatar">
                                 <img src="/assets/img/avatar/avatar1.png" alt="" />
                              </div>
                              <div className="comments-text">
                                 <div className="avatar-name">
                                    <h5>Chris Matts</h5>
                                    <span>19th May 2023</span>
                                 </div>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the leap into electronic typesetting, remaining
                                    essentiallyuncha opularisedthe with the release</p>
                              </div>
                              <Link className="reply" to="#">Reply</Link>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="comments-form">
                  <h2 className="title">Post Comments</h2>
                  <p>Your email address will not be published. Required fields are marked * </p>
                  <BlogComment />
               </div>
            </div>
         </div>
      </div>
   )
}

export default PostFooter
