const Footer = () => {
    return (
        <footer className="footer">
            <footer>
                <div className="container">
                    <div className="logo">
                        <a href="#none">
                            <img src="asset/img/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="logo_p">
                        <p>
                           이 세상 모든 <span className="coco">코코</span>들을 위한 저희의 여정에 함께해 주셔서 감사합니다.
                        </p>
                    </div>
                    <ul>
                        <li><a href="#none">서비스 이용약관</a></li>
                        <li><a href="#none">개인정보 취급방침</a></li>
                    </ul>
                    {/* <div className="sns">
                    <a href="https://blog.naver.com/daily-shot" target="blank"><i className="xi-youtube-play"></i></a>
                        <a href="https://www.instagram.com/dailyshot.co" target="blank"><i className="xi-instagram"></i></a>
                        <a href="https://www.facebook.com/dailyshot.co" target="blank"><i className="xi-facebook"></i></a>
                    </div> */}
                    <div className="copyright">
                        <p>Copyright ⓒ Olit All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </footer>
    )
}

export default Footer;