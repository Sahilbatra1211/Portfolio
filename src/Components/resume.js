import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <p><h4>For detailed Resume:<a href="https://drive.google.com/open?id=1SxH3kATgpzuTYqo3BngFKNuNRAWiq4gk" target="_blank"  rel="noopener noreferrer">Click Here</a></h4></p>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img
                       src={require('../assets/circle-cropped.png')}
                        alt="avatar"
                        className="avtar-img"
                        />
                </div>

            <h2 style={{paddingTop: '2em'}}>Sahil Batra</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
           <p> I am doing competitive programming since 2 years and always keen to learn new algorithms. I am also a full stack web developer and has made projects using Nodejs and React. Nowadays I am studying network security and cloud computing and trying to make some good projects in it.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1957 Rani Bagh, Delhi-110034</p>
            <h5>Phone</h5>
            <p>(+91) 7011227220</p>
            <h5>Email</h5>
            <p>sahilbatra1211@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2017}
              schoolName="Goodley Public School"
              schoolDescription="I have done my 11-12th from cbse board. Scored 93 per cent in my 12th board exam and 10 cgpa in class 10th."
               />

               <Education
                 startYear={2017}
                 endYear={2021}
                 schoolName="Thapar Institute of Engineering and Technology"
                 schoolDescription="I am pursuing Computer Science(B.E). My current cgpa is 9.1 and my specialisation subject is Network Security."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="C++"
                progress={100}
                />
                <Skills
                  skill="React"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="Javascript"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;