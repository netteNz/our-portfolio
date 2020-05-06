import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

// Lo que esta dentro de card content you can grab it from your linked in profile. y lo puedes paste ahi. 

interface LinkedInData {
  url: string;
  vanity: string;
}

export const LinkedIn: React.FC<LinkedInData> = (props) => {
    const { url, vanity } = props
    // const url = props.url
    // const vanity = props.vanity
    return (

        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Card>
            <CardContent>
            <div className="LI-profile-badge"  
            data-version="v1" 
            data-size="medium" 
            data-locale="en_US"
             data-type="vertical"
              data-theme="light"
               data-vanity={vanity}
               >
                   <a className="LI-simple-link" 
                         href={url}>Chalbert Rivera
                   </a>
                </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    )
}