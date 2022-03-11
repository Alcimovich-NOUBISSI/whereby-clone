import classes from "./exemples.module.css";

function Exemple () {
    return (
      <section className = {classes.exemple}>
        <div className = {classes.text}>
          <h2 className = {classes.header_title}> Video calls made easy </h2>
          <p className = {classes.header_subtitle}>
              Whereby's the easiest way to meet over video – 
              with no app or software download required. 
              Just choose your own personalized URL and meet in your browser, 
              on mobile or desktop, with only one click.
          </p>
        </div>
        <div className = {classes.grid_exemple}>
           <div className = {classes.single_exemple}>
              <img src="./images/embedded.webp" alt="exemple" />
              <h3 className= {classes.h3_subtitle}> Customization </h3>
              <p>
                Personalize your meeting room with custom names,
                URLs, and branding.
              </p>
           </div>
           <div className = {classes.single_exemple}>
              <img src="./images/embedded.webp" alt="exemple" />
              <h3 className= {classes.h3_subtitle}> Customization </h3>
              <p>
                Personalize your meeting room with custom names,
                URLs, and branding.
              </p>
           </div>
           <div className = {classes.single_exemple}>
              <img src="./images/embedded.webp" alt="exemple" />
              <h3 className= {classes.h3_subtitle}> Customization </h3>
              <p>
                Personalize your meeting room with custom names,
                URLs, and branding.
              </p>
           </div>
           <div className = {classes.single_exemple}>
              <img src="./images/embedded.webp" alt="exemple" />
              <h3 className= {classes.h3_subtitle}> Customization </h3>
              <p>
                Personalize your meeting room with custom names,
                URLs, and branding.
              </p>
           </div>
        </div>
        <p className= "button"> Try for free</p>
      </section>
    );
}

export default Exemple;