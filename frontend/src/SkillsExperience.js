import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from "@fortawesome/free-brands-svg-icons"
import node from "./images/node.png"
import mongoDB from "./images/mongoDB.png"
import js from "./images/javascript.png"
import sql from "./images/mysql.png"
import html from "./images/html.png"
import css from "./images/css.png"


function SkillsExperience() {
    return (
        <>
            <h1>Skills & Experience</h1>
            <div>
                <h2>Skills</h2>
                <div className='d-flex flex-row'>
                    <div>
                        <FontAwesomeIcon icon={faReact} />
                        <h6>React Js</h6>
                    </div>
                    <div>
                        <img src={node} style={{ "width": "50px", "height": "50px" }} />
                        <h6>Node Js</h6>
                    </div>
                    <div>
                        <img src={mongoDB} style={{ "width": "50px", "height": "50px" }} />
                        <h6>MongoDB</h6>
                    </div>
                    <div>
                        <img src={js} style={{ "width": "50px", "height": "50px" }} />
                        <h6>Javascript</h6>
                    </div>
                    <div>
                        <img src={sql} style={{ "width": "50px", "height": "50px" }} />
                        <h6>mySQL</h6>
                    </div>
                    <div>
                        <img src={html} style={{ "width": "50px", "height": "50px" }} />
                        <h6>HTML5</h6>
                    </div>
                    <div>
                        <img src={css} style={{ "width": "50px", "height": "50px" }} />
                        <h6>CSS3</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsExperience