import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='main-div'>
    <div className='main-div1'>
      <div className='community'>
        <h2>Join Our AI Community</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div>
        <input type="text" placeholder='Enter Your Email'/>
        <button className='sub'>Subscribe</button>
      </div>
    </div>
    </div>

    <footer class="footer">
    <div class="container">
        
        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

       
        <div class="footer-section">
            <h3>Company</h3>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>

     
        <div class="footer-section">
            <h3>Support</h3>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>

        
        <div class="footer-section">
            <h3>Stay Connected</h3>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>

    <hr class="footer-line"/>

    
    <div class="bottom-footer">
        <p>Reserved @2025</p>
        <div class="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer
