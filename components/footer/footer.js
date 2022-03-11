import classes from "./footer.module.css";

function Footer () {
    return (
        <footer>
          <div className= {classes.footer_container}>
            <div>
                <h3>About</h3>
                <ul>
                    <li>About Us</li>
                    <li>Our vision</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Video Conferencing</li>
                </ul>
            </div>
            <div>
                <h3>Product</h3>
                <ul>
                    <li>Embedded</li>
                    <li>Meetings</li>
                    <li>What's New</li>
                    <li>Status</li>
                </ul>
            </div>
            <div>
                <h3>Pricing</h3>
                <ul>
                    <li>For Embedded</li>
                    <li>For Meetings</li>
                </ul>
            </div>
            <div>
                <h3>Social</h3>
                <ul>
                    <li>Blog</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <div>
                <h3>Support</h3>
                <ul>
                    <li>Getting started</li>
                    <li>Support Center</li>
                    <li>Terms of Service</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Privacy Policy</li>
                    <li>PGDPR Statement</li>
                    <li>VDP</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div>
                <h3>Get in touch</h3>
                <ul>
                    <li>Contact Support</li>
                </ul>
            </div>
          </div>
        </footer>
    );
}

export default Footer;