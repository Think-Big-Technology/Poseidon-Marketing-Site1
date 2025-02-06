import { Link } from "react-router-dom";;

interface DataType {
   id: number,
   thumb: string;
   date: string;
   title: string;
};

const recent_blog: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/blog/w_01.jpg",
      date: "JULY 25,2023",
      title: "We Advocate Swapping Screen Time",
   },
   {
      id: 2,
      thumb: "/assets/img/blog/w_02.jpg",
      date: "MARCH 20,2023",
      title: "Utilizing mobile technology in the field",
   },
   {
      id: 3,
      thumb: "/assets/img/blog/w_03.jpg",
      date: "JULY 18,2023",
      title: "Building intelligent transportation systems",
   },
];

const RecentPost = () => {
   return (
      <div className="widget mt-30">
         <h3 className="widget__title">Recent Posts</h3>
         <div className="widget__post">
            {recent_blog.map((item) => (
               <div key={item.id} className="widget__post-item ul_li">
                  <div className="post-thumb">
                     <Link to="/blog-single"><img src={item.thumb} alt="" /></Link>
                  </div>
                  <div className="post-content">
                     <span className="post-date">{item.date}</span>
                     <h4 className="post-title border-effect-2"><Link to="/blog-single">{item.title}</Link></h4>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default RecentPost
