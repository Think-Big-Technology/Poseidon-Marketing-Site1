import { Link } from "react-router-dom";
import { useState } from "react";
import ReactPaginate from 'react-paginate';
import BlogSidebar from "../blog-sidebar";
import blog_data from "../../../data/BlogData";

const BlogArea = () => {

   const blog = blog_data;

   const itemsPerPage = 4;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: { selected: number }) => {
      const newOffset = (event.selected * itemsPerPage) % blog.length;
      setItemOffset(newOffset);
   };

   return (
      <section className="blog pt-120 pb-120">
         <div className="container">
            <div className="row mt-none-30">
               <div className="col-lg-8 mt-30">
                  <div className="blog-post-wrap mt-none-25">
                     {currentItems.map((item) => (
                        <article key={item.id} className="blog__item mt-25">
                           <Link className="thumb" to={`/blog-single/${item.id}`}><img src={item.thumb} alt="" /></Link>
                           <div className="blog__inner">
                              <ul className="blog__meta ul_li mb-30">
                                 <li><Link to={`/blog-single/${item.id}`}><i className="far fa-user"></i>{item.user}</Link></li>
                                 <li><i className="far fa-clock"></i>Dec 28, 2022</li>
                                 <li><Link to={`/blog-single/${item.id}`}><i className="far fa-comment"></i>(04) Coments</Link></li>
                              </ul>
                              <h2 className="title border_effect"><Link to={`/blog-single/${item.id}`}>{item.title}</Link></h2>
                              <p>{item.desc}</p>
                              <Link className="thm-btn" to={`/blog-single/${item.id}`}>Read MOre</Link>
                           </div>
                        </article>
                     ))}
                  </div>
                  <div className="pagination_wrap pt-50">
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="far fa-long-arrow-left"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={<i className="far fa-long-arrow-right"></i>}
                        renderOnZeroPageCount={null}
                     />
                  </div>
               </div>
               <BlogSidebar />
            </div>
         </div>

         <div className="blog__shape">
            <div className="shape shape--1">
               <img src="/assets/img/shape/b_shape2.png" alt="" />
            </div>
            <div className="shape shape--2">
               <img src="/assets/img/shape/b_shape3.png" alt="" />
            </div>
            <div className="shape shape--3">
               <img src="/assets/img/shape/b_shape4.png" alt="" />
            </div>
            <div className="shape shape--4">
               <img src="/assets/img/shape/t_shape2.png" alt="" />
            </div>
            <div className="shape shape--5">
               <img src="/assets/img/shape/b_shape5.png" alt="" />
            </div>
         </div>
      </section>
   )
}

export default BlogArea
