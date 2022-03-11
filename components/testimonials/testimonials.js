import classes from "./testimonials.module.css";

function Testimonials () {
    return (
        <section id = "testimonials">
          <div className = "classes.testimonials_container">
            <div className= "classes.testimonials_item" >
                <img src= "./images/miro-logo.svg" alt = "firm_logo"/>
                <p>
                    "Whereby makes it super simple for
                    collaborating teams to jump on a video call. A 
                    single meeting link shared instantly ensures 
                    a moment of creativity is never lost"
                </p>
                <div className= "classes.testimonials_image" >
                  <img src="./images/Andrey_Khusid__1_.webp" alt= "autor_image" />
                  <div>
                    <h5>André Khusid,</h5>
                    <p>CEO - Mori</p>
                  </div>
                </div>
            </div>
          </div>
        </section>
    );
}

export default Testimonials;