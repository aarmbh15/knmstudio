import { useEffect } from "react";
import style from './HomeBlogs.module.css';
import { Link } from "react-router-dom";
import BL1 from "../../../../img/BlogImg/Some-of-the-Most-Viral-Advertisements.jpg"
import BL2 from "../../../../img/BlogImg/The-Importance-of-Visual-Content-Creation-in-Large-Companies-and-Businesses-thumbnail.jpg"
import BL3 from "../../../../img/BlogImg/BLOG 3 Influencer.png"

import { FaCircle } from "react-icons/fa";

import HomeBlogsCard from './HomeBlogsCard/HomeBlogsCard';
const HomeBlogs =() =>{
    return(
        <>  
            <div className={style.container}>

            <div className={style.sub}>
                    <h3><FaCircle /></h3>
                            <div className={style.subTitle}>
                                    <div> LATEST NEWS</div>
                                </div>
                                </div>  
                                <div className={style.tittleContainer}>
                                <h3 className={style.divTitle}>LATEST AND</h3>
                                <div className={style.title}>
                                <h1>  GREATEST POST</h1>
                                </div>
                                </div>

            <div className={style.subContainer}>
            <Link className={style.subContainerLink} to="/blogs/Why-is-Marketing-Important-for-Business?">
                    <HomeBlogsCard 
                        src={   <img src={BL3} alt=">Why is marketing important for businesses?" height="300"/>} 
                        tag="July 12, 2023"
                        title="Why is marketing important for businesses?"
                    />
                  </Link>  
                  <Link className={style.subContainerLink} to="/blogs/The-Importance-of-Visual-Content">
                    <HomeBlogsCard 
                        src={   <img src={BL2} alt="The Importance of
                        Visual Content Creation." height="300"/>} 
                        tag="July 18, 2023"
                        title="The Importance of
                        Visual Content Creation."
                    />
                     </Link> 
                     <Link className={style.subContainerLink} to="/blogs/Some-of-the-Most-Viral-Advertisements">
                    <HomeBlogsCard 
                        src={   <img src={BL1} alt=">Some of the Most Viral Advertisements" height="300"/>} 
                        tag="July 22, 2022"
                        title="Some of the Most Viral Advertisements"
                    />
                    </Link> 
            </div>
            </div>
        </>
    );
}
export default HomeBlogs;