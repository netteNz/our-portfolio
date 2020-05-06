import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';

// Lo que esta dentro de card content you can grab it from your linked in profile. y lo puedes paste ahi. 
export const LinkedIn: React.FC = () => {
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
               data-vanity="chalbert-rivera-1b310b82"
               >
                   <a className="LI-simple-link" 
                         href='https://www.linkedin.com/in/chalbert-rivera-1b310b82?trk=profile-badge'>Chalbert Rivera
                   </a>
                </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    )
}