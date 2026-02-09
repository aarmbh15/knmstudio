import style from './BlogPages.module.css';
import Marketing from "../../../../img/BlogImg/Marketing.jpg"
const BlogThree = () =>{
    return (
        <>
            <div className={style.container}>
                <div className={style.blogHead}>
                    <div className={style.blogHeadingAdv}>Why is Marketing Important for Business?</div>

                </div>
                <div className={style.blogContentContainer}>

                 <div className={style.blogContent}>
                            <div className={style.blogContentHead} >Have you ever been in a situation where your business isn't seeing any new opportunities coming its way?

                            </div>    
                              <p className={style.blogContentPara}>It's unfortunate when good businesses don't focus on marketing. They     have            excellent products,
                                        but because they're not visible, potential customers can't find them. This leads to lost sales as
                                     customers choose their competitors instead. Business owners feel frustrated knowing their
                                     products could make a difference if more people were aware of them.
                                     <br />
                                     <br />
                                     Being in this space of Digital marketing and Video Production for the last 6 years, here is what i
                                     have found most business owners suffer because they don't have enough customers, their
                                     business is not growing, or they rely only on people spreading the word about their business.
                                     This makes their lives very difficult. People start businesses to improve their lives, but the truth
                                     is that the business starts controlling them. It's sad to see how much they struggle every day to
                                     keep their business going. They work hard, but they're not sure what the future holds for them.
                                </p>
                              
                             <div className={style.blogSubContent}>
                                 <div className={style.blogSubContentHeadAdv}>Here is what you get after doing consistent marketing.
                                 <div className={style.blogImgAdv}>
                                <img src={Marketing} alt="The Importance of  Visual Content 
                                 Creation." height="300"/>
                                 </div>
                                 </div>   
                                 <div className={style.blogSubContentPara}>
                                 <br/>
                                    <b>● Visibility Awareness - </b>Your Target Customers need to know your existence.<br/>
                                    <b>● Credibility -</b> The more people hear about you and see you, the more they trust and
                                    respect you.<br/>
                                    <b>● Lead Generation </b> Inquiries and walk-ins are essential prospects needed to reach your
                                    revenue goals.<br/>
                                 </div>  
    
                            </div>    
                             <p className={style.blogContentPara}>Visibility plays a crucial role in the success of any business. Your target customers need to be
                                aware of your existence in order to consider your products or services. Creating awareness
                                about your brand, whether through advertising, marketing campaigns, or online presence, is
                                essential to capture the attention of potential customers.
                                <br/><br />
                                Credibility is another important factor that contributes to your business's growth. The more
                                people hear about you and see you, the more they develop trust and respect for your brand.
                                Building a positive reputation and establishing credibility can be achieved through consistent
                                messaging, delivering high-quality products or services, and maintaining a strong presence in
                                your industry.
                                <br/><br />
                                Lead generation is the lifeblood of any revenue-driven business. Inquiries and walk-ins are the
                                essential prospects needed to achieve your revenue goals. By attracting potential customers
                                and encouraging them to engage with your business, you increase the chances of converting
                                them into paying customers. Implementing effective lead generation strategies, such as targeted
                                marketing campaigns and providing exceptional customer experiences, can significantly impact
                                your bottom line and help you reach your financial targets.
                               </p>
                             <p className={style.blogContentPara}>Overall, a combination of visibility, credibility, and lead generation efforts is essential for driving
                                business growth and achieving long-term success. By ensuring that your target customers know
                                about your existence, establishing a trustworthy reputation, and actively generating leads, you
                                can position your business for sustainable growth and profitability.
                                <br/><br />
                                If you like this BLOG helpful, then share with your friends or relatives to help them in their
                                business.
                                </p>
                             
                </div>
                </div>
            </div>
        </>
    );
}
export default BlogThree;