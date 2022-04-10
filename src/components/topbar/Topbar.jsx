import "./topbar.scss"
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Hyunjae(Jason) Song</a>
                <div className="itemContainer">
                    <Person/>
                    <span>+1(248) 561-4785</span>
                </div>
                <div className="itemContainer">
                    <Mail/>
                    <span>hjsong240@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/hyunjae-song-59926ba5/">
                        <LinkedIn/>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="itemContainer">
                    <a href="https://github.com/shj941013/">
                        <GitHub/>
                        <span>GitHub</span>
                    </a>
                </div>
                
            </div>
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
