import classes from "./offers.module.css";

function Offers () {
    return (
        <>
        <div className = {classes.offers_container} >
            <div className = {classes.offers} >
                <p className = {classes.title}>Host better video calls with</p>
                    <h2>Whereby Meetings</h2>
                    <img src="./images/meetings.webp" alt="vide_call_illustration"/>
                    <p>
                        Impress clients, win new business, 
                        and keep your team happy with our easy-to-use video 
                        meetings platform.
                    </p>
                    <p className = {classes.offers_button} > Learn More</p>
            </div>
            <div className = {classes.offers} >
                <p>Host better video calls with</p>
                    <h2>Whereby Meetings</h2>
                    <img src="./images/embedded.webp" alt="vide_call_illustration"/>
                    <p>
                    Connect with your customers without leaving your own 
                    platform using our easy video call API. 
                    Add custom video calls to your product with a few lines of code.
                    </p>
                    <p className = {classes.offers_button} > Learn More</p>
            </div>               
        </div>

        </>
    );
}

export default Offers;