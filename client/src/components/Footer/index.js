import React from 'react';
import { FaLinkedinIn,FaGithub, FaTwitter } from "react-icons/fa";


function Footer() {
	return (
		<footer className="p-2 d-flex fixed-bottom justify-content-center" 
        style={{
            height:'65px',backgroundColor:'#C3BF6D',
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '100%',
            textAlign: 'center',
            }}>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/Project3-Team2/ClubQ"
						className="social-icon"
						style={{position:'relative',top:'10px',left:'-10px'}}
					>
                        <FaGithub size={42} color={'black'}/>
					</a>{'   '}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/"
						className="social-icon"
						style={{position:'relative',top:'10px',left:'10px'}}

					>
                        <FaTwitter size={42} color={'black'}/>
					</a>		
		</footer>
	);
}

export default Footer;