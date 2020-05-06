import React from "react";
import { Grid } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { easeQuadInOut } from "d3-ease";
// import { AnimatedProgressProvider } from "./ProgressBarAnimation/AnimatedProgressBar";
// import { ChangingProgressProvider } from "./ProgressBarAnimation/ChangingProgressProvider";

export const Skills: React.FC = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
    >
        <Grid item xs={1} style={{ padding: 10 }}>
    <CircularProgressbar value={0.45} maxValue={1} text="Python" />
  </Grid>
  <Grid item xs={1} style={{ padding: 10 }}>
  <CircularProgressbar value={0.7} maxValue={1} text="React" />
</Grid>
    </Grid>
  );
};

// <Grid item xs={1} style={{ padding: 10 }}>
// <ChangingProgressProvider values={[0, 75]}>
//     <CircularProgressbar
//       value={.70}
//       text={"React"}
//       styles={buildStyles({
//         pathTransition: "stroke-dashoffset 0.5s ease 0s"
//       })}
//     />
//   <CircularProgressbar value={0.7} maxValue={1} text="React" />
//   </ChangingProgressProvider>
// </Grid>
// <Grid item xs={1} style={{ padding: 10 }}>
//   <CircularProgressbar value={0.45} maxValue={1} text="Python" />
// </Grid>

/* <AnimatedProgressBarProvider
          start={0}
          end={66}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
              <CircularProgressbar
                value={0}
                text={"React"}
                /* This is important to include, because if you're fully managing the
            animation yourself, you'll want to disable the CSS animation. */
        //         styles={buildStyles({ pathTransition: "none" })}
        //       />
        //     );

        //   <CircularProgressbar value={0.7} maxValue={1} text="React" />
        // </AnimatedProgressBarProvider> */
    