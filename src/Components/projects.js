import React, {Component} from 'react'
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from "react-mdl"
class Projects extends Component{
   constructor(props){
       super(props);
       this.state= {
           activeTab:0
       }
   }
   toggleCategories(){
        if( this.state.activeTab === 0){    
            return(
                
               <Grid>
                 <Cell col={4}>
                {/* Project 1 */}
               
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: 'black', height: '176px',fontWeight:'bolder',fontFamily: 'Anaton', background: 'url(https://nodejs.org/static/images/logo.svg) center / cover'}} >Event Creator</CardTitle>
                  <CardText>
                  A web app where one could book a hall and genrate tickets for an event. Tickets will have qr codes and will be used for verification.
Software used-
Nodejs,mongodb,js,html,css
                  </CardText>
                  <CardActions border>
                    <Button colored><a href="https://github.com/Sahilbatra1211/invent"  target="_blank"  rel="noopener noreferrer">GitHub</a></Button>
                    <Button colored>CodePen</Button>
                    <Button colored><a href="https://eventcreator2345.herokuapp.com/"  target="_blank"  rel="noopener noreferrer">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                
                </Cell>
               
                 <Cell col={4}>
                 
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png) center / cover'}} >. PicBill Web App</CardTitle>
                  <CardText>
                  It's a clone of magicpin app where one can put photo of bills and in return get free coupons.
Software used-
Backend-Nodejs
Database- mongodb
Front-end - html,css,js
                  </CardText>
                  <CardActions border>
                  <Button colored><a href="https://github.com/Sahilbatra1211/final"  target="_blank"  rel="noopener noreferrer">GitHub</a></Button>
                  <Button colored>CodePen</Button>
                  <Button colored><a href="https://snapbill.herokuapp.com/"  target="_blank"  rel="noopener noreferrer">Live Demo</a></Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
               
                </Cell>
                <Cell col={4}>
                
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Portfolio</CardTitle>
                  <CardText>
                   This is my portfolio which you are currently using.:)
                   Built on React js and different npm modules for styling!
                  </CardText>
                  <CardActions border>
                  <Button colored><a href="https://github.com/Sahilbatra1211/Portfolio"  target="_blank"  rel="noopener noreferrer">GitHub</a></Button>
                  <Button colored>CodePen</Button>
                  <Button colored><a href="/">Live Demo</a></Button>
                 </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
               </Cell>
              </Grid>
            )
        }
        else if( this.state.activeTab === 1){    
            return(
              <Grid>
                 <Cell col={4}>
                <div style={{padding:"10px"}}> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hacksandhops.com/wp-content/uploads/2018/06/Hacker-square.png) center / cover'}} >.. Mac Changer</CardTitle>
                <CardText>
                A small python project which will help change your mac address of computer for anonymity.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/Sahilbatra1211/mac_changer"  target="_blank"  rel="noopener noreferrer">GitHub</a></Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card></div>
              </Cell>
              </Grid>
            )
        }
        else if( this.state.activeTab === 2){    
            return(
                <div><h1>Still Learning :)</h1></div>
            )
        }
        else{
            return(
                <div><h1>This is mongodb</h1></div>
            )
        }    
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                <Tab >Web Dev</Tab>
                <Tab>Network Security</Tab>
                <Tab>Machine Learning</Tab>
                </Tabs>

               
                            <div className="content">{this.toggleCategories()}</div>
                 
            </div>
        )
    }
}

export default Projects;