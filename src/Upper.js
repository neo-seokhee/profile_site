import React from "react";
import "./Upper.css";

function Upper(){
    return <div className="upper_container">

        <div>
           <img className="profile_img" src="https://github.com/neo-seokhee/profile_site/blob/master/src/Img/profile2.png?raw=true" />
        </div>

        <h1 className="upper_title">Hello I'm<br/><span className="title_neo">NEO</span></h1>
        <h3 className="upper_des">안녕하세요! 이석희입니다.<br/>밸런스히어로에서 <span className="highlight">Product Manager</span>로 일하고 있구요.<br/>새로운 것을 배우는 걸 좋아합니다.</h3>

    <div className="social">
        <a href="https://brunch.co.kr/@neolee91"><img src="https://github.com/neo-seokhee/profile_site/blob/master/src/Img/brunch.png?raw=true" /></a>
        <a href="https://www.instagram.com/neo_seokhee/"><img src="https://github.com/neo-seokhee/profile_site/blob/master/src/Img/insta.png?raw=true" /></a>
        <a href="https://github.com/neo-seokhee"><img src="https://github.com/neo-seokhee/profile_site/blob/master/src/Img/github.png?raw=true" /></a>
        <a href="https://www.linkedin.com/in/seokhee-lee-6a1b1960/"><img src="https://github.com/neo-seokhee/profile_site/blob/master/src/Img/linkedin.png?raw=true" /></a>                   
    </div>

        <h3 className="timeline">Timeline</h3>
    </div>
}


export default Upper;