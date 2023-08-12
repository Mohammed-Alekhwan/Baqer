import "./Footer.css";

const Footer=()=>{
    return(
        <footer className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Trending</h4>
                        <a href="/LearnChatGPT">
                            <p>Learn ChatGPT</p>
                        </a>
                        <a href="/Learn Cyber Security">
                            <p>Learn Cyber Security</p>
                        </a>

                        <a href="/Learn Excel">
                            <p>Learn Excel</p>
                        </a>

                        <a href="/Learn Python">
                            <p>Learn Python</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Skills</h4>
                        <a href="/Learn Web Development">
                            <p>Learn Web Development</p>
                        </a>
                        <a href="/Learn Project Management">
                            <p>Learn Project Management</p>
                        </a>

                        <a href="/Learn Digital Marketing">
                            <p>Learn Digital Marketing</p>
                        </a>

                        <a href="/Learn Data Analysis">
                            <p>Learn Data Analysis</p>
                        </a>
                    </div>

                    <div className="sb__footer-links_div">
                        <h4>Popular Certificates</h4>
                        <a href="/Google Advanced Data Certificate">
                            <p>Google Advanced Data Analysis Certificate</p>
                        </a>
                        <a href="/IBM AI Engineering Professional Certificate">
                            <p>IBM AI Engineering Professional Certificate</p>
                        </a>

                        <a href="/Machine Learning Specialization">
                            <p>Machine Learning Specialization</p>
                        </a>

                        <a href="/Google Cyber Security Professional Certificate">
                            <p>Google Cyber Security Professional Certificate</p>
                        </a>
                    </div>


                    <div className="sb__footer-links_div">
                        <h4>More</h4>
                        <a href="/FAQ">
                            <p>FAQ</p>
                        </a>
                        <a href="/Contact Us">
                            <p>Contact Us</p>
                        </a>

                        <a href="/Privacy">
                            <p>Privacy</p>
                        </a>

                        <a href="/Terms">
                            <p>Terms</p>
                        </a>
                    </div>
                    
                    <hr></hr>

                    <div className="sb__footer-below">
                        <div className="sb__footer-copyright">
                            <p>
                                @{new Date().getFullYear()} Baqer Inc. All rights reserved.
                            </p>
                        </div>

                    </div>

                    
                </div>
            </div>

        </footer>
    )
}

export default Footer;