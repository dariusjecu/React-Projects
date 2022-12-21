import React from 'react';
import Tw from "./Social/Twitter.png";
import Fb from "./Social/Facebook.png";
import In from "./Social/Linkdin.png";
import Git from "./Social/Git.png";


export default function Social(){
    return (
        <div className='social-media'>
            <button><img src={Tw}></img></button>
            <button><img src={Fb}></img></button>
            <button><img src={In}></img></button>
            <button><img src={Git}></img></button>
        </div>
    )
}