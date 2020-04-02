import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sahil Batra</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>You can always gmail me or contact me through whatsapp on the given number. Always keen to do some intersting work:)</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent class="con-cla" >
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+91) 7011227220
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent class="con-cla">
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (011)-47065721
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent class="con-cla">
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    sahilbatra1211@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent class="con-cla">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  batra_sahill
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;