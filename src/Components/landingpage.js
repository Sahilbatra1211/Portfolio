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
                        /*src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"*/
                        src={require('../assets/circle-cropped.png')}
                        alt="avatar"
                        className="avtar-img"
                        />
                    <div className="banner-text">
                      <h1>Developer And Competitive Coder </h1> 

                      <hr/> 
                      <p>C++ | Bootstrap | Javascript | React | NodeJs | MongoDB</p>
                       <div className="social-links">
                            <a href="https://www.linkedin.com/in/sahil-batra-17b86b167/"   target="_blank"  rel="noopener noreferrer">
                               <i class="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/Sahilbatra1211"   target="_blank"  rel="noopener noreferrer">
                               <i class="fa fa-github-square" aria-hidden="true"/>
                            </a> 
                            <a href="mailto:sahilbatra1211@gmail.com"   target="_blank"  rel="noopener noreferrer">
                            <i class="fa fa-google" aria-hidden="true"></i>
                            </a>
                            <a href="https://stackoverflow.com/users/9784503/sahil-batra"   target="_blank"  rel="noopener noreferrer">
                               <i class="fa fa-stack-overflow" aria-hidden="true"/>
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