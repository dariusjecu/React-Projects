import Tw from "./Social/Twitter.png"
import Fb from "./Social/Facebook.png"
import In from "./Social/Instagram.png"
import Git from "./Social/Git.png"

function Footer(){
    return(
        <div className="footer">
            <div></div>
            <button><img className="icon" src={Tw}/></button>
            <button><img className="icon" src={Fb}/></button>
            <button><img className="icon" src={In}/></button>
            <button><img className="icon" src={Git}/></button>
            <div></div>
        </div>
    )
}

export {Footer}