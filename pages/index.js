import Exemple from "../components/exemples/exemples";
import Offers from "../components/onPage/offers";
import Testimonials from "../components/testimonials/testimonials"

function HomePage(){
 return(
    <>
      <section id="herro"> 
         <div className= "text">
            <h1>Beautiful, simple <br/> video calls</h1>   
            <h2>
               Whereby is the super simple way to connect over video. 
               No apps, downloads, or long meeting links.
            </h2>
            <p className= "button"> Try for free</p>
            <p>Trusted by 5+ million people at companies like</p>
         </div>
         <div className= "herro_images">
            <span>
               <img src="images/ogilvy.svg" alt="ogilvy"/>
            </span>
            <span>
               <img src="images/hubspot.svg" alt="hubspot"/>
            </span>
            <span>
               <img src="images/netflix.svg" alt="netflix"/>
            </span>
            <span>
               <img src="images/ikea.svg" alt="ikea"/>
            </span>
            <span>
               <img src="images/spotify.svg" alt="spotify"/>
            </span>
            <span>
            <img src="images/shopify.svg" alt="shopify"/>
            </span>
         </div>
         <div className= "videocalls">
            <img src="images/whereby-meetings.webp" alt="video_call"/>
         </div>
      </section>
      <Offers/>
      {/* <Testimonials/> */}
      <Exemple/>
      <section className= "know_us" >
         <div className= "know_us_container" >
           <div className= "know_us_container_left" >
              <h3 className= "know_us_title" >
              Great culture is key to building a great company
              </h3>
              <p>
              Founded in privacy-friendly Norway, we try to do business the right way. 
              Check out our transparent progression framework, 
              thoughts on remote work culture, and parental leave policies.
              </p>
              <p className= "know_us_button" >Get to know us</p>
           </div>
           <div>
              <img src="./images/get-to-know-us.webp" alt="know_us"/>
           </div>
         </div>
      </section>

      <section className="call_to_action" >
         <div className="cta_image_left" >
            <img src="./images/scene-lady-talking-128.png" alt="women_left" />
         </div>
         <div className="cta_image_right" >
            <img src="./images/scene-person-and-plant-1024.png" alt="women_left" />
         </div>
         <h4>Start hosting better meetings today</h4>
         <p className="know_us_button" >Try for free </p>
      </section>
    </>
 );
}

export default HomePage;