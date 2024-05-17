import React from 'react'
import facebook from '../images/Facebook.png'
import instagram from '../images/Instagram.png'
import twitter from '../images/Twitter.png'
import linkedin from '../images/Linkedin.png'
import sendIcon from '../images/send.png'

export default function Footer(){
    
    const [email, setEmail] = React.useState("")
    const [style, setStyle] = React.useState({})

    function handleChange(event){
        setEmail(event.target.value)
        if(email.includes('@') && email.includes('.') && !email.includes(' ')){
            setStyle({borderColor : 'green'})
        } else{
            setStyle({borderColor : 'red'})
        }
    }
    
    return (
        <footer>
        <div className="footer">
            <div className="about-feo">
                <h3 className="about-name">NFT'S FEO</h3>
                <p className="about-desc">Lorem ipsum dolor sitamet,consectetuer adipiscing elit, sed diam nonummy nibhtincidunt ut laoreet dolore magna.</p>
                < div className="icons">
                    <img src={facebook} className="social-icon" />
                    <img src={instagram} className="social-icon" />
                    <img src={twitter} className="social-icon" />
                    <img src={linkedin} className="social-icon" />
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-sub">
                    <p className="info-title">Marketplace</p>
                    <hr className="info-line"/>
                    <p className="info-options hovered">All NFTs</p>
                    <p className="info-options hovered">How it Works</p>
                    <p className="info-options hovered">Create</p>
                    <p className="info-options hovered">Explore</p>
                    <p className="info-options hovered">Privacy & Terms</p>
                </div>
                <div className="footer-sub">
                    <p className="info-title">Community</p>
                    <hr className="info-line"/>
                    <p className="info-options hovered">Help Center</p>
                    <p className="info-options hovered">Newsletter</p>
                    <p className="info-options hovered">Partners</p>
                    <p className="info-options hovered">Suggestions</p>
                    <p className="info-options hovered">Blog</p>
                </div>
                <div className="newsletter">
                    <p className="info-title">Join Newsletter</p>
                    <hr className="info-line"/>
                    <p className="info-options">signup for our newsletter to get the latest news in your inbox.</p>
                    <div style = {style} className="input-container">
                        <input
                            onChange={handleChange} 
                            className="input-email" 
                            type="email" 
                            placeholder="Email Address"
                            value={email}
                        />
                        <img src={sendIcon} className="send-icon"/> 
                    </div>
                </div>                  
            </div>
        </div>
        <p className="footer-text">Copyright © 2021 ib-Themes. All Rights Reserved.</p>
        </footer>
    )
}