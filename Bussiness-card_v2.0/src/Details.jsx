import Em from "./Social/Email.png"
import Li from "./Social/Linkdin-blue.png"

function Details(){
    return (
        <div className="details">
            <div className="first">
                <h1>Darius Jecu</h1>
                <h3>Frontend Developer</h3>
                <p>darius.website</p>
                <button><img className="icon" src={Em}/>Email</button>
                <button><img className="icon" src={Li}/>LinkedIn</button>
            </div>
            <div className="second">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things 
                    simple and automating daily tasks. I try to keep up with security 
                    and best practices, and am always looking for new things to learn.</p>
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. 
                    Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. 
                    Coffee fanatic.</p>
            
            </div>
        </div>
    )
}

export {Details}