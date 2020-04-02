import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%',margin: 'auto'}}>
                <div id="sahil">
                <Grid  ClassName="landing-grid">
                    <Cell col={12}>
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        alt="avatar"
                        className="avtar-img"
                        />
                    <div className="banner-text">
                      <h1>Full stack web developer</h1> 

                      <hr/> 
                      <p>HTML/CSS | Bootstrap | Javascript | React | NodeJs | MongoDB</p>
                       <div className="social-links">
                            <a href="http://google.com"   target="_blank"  rel="noopener noreferrer">
                               <i class="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            <a href="http://google.com"   target="_blank"  rel="noopener noreferrer">
                               <i class="fa fa-github-square" aria-hidden="true"/>
                            </a> 
                            <a href="http://google.com"   target="_blank"  rel="noopener noreferrer">
                               <i class="fa fa-youtube-square" aria-hidden="true"/>
                            </a>
                            <a href="http://google.com"   target="_blank"  rel="noopener noreferrer">
                               <i class="fa fa-free-code-camp" aria-hidden="true"/>
                            </a>
                        </div> 
                    </div>
                    </Cell>
                </Grid>
                </div>
            </div>
        )
    }
}

export default Landing;