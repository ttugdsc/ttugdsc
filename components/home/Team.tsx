import { Typography, Grid, Paper } from "@mui/material";
import TeamMember from "../../components/home/TeamMember";

const Team = () => {
  return (
    <Grid container maxHeight="30%" mb={5}>
      <Grid container m={3} justifyContent="space-around">
        <Typography variant="h4">Our Core Team</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="space-evenly" md={12}>
        <TeamMember
          title="GDSC Lead"
          name="Samuel Adetunji"
          link="https://media-exp1.licdn.com/dms/image/C4E03AQFA4qZDyN1hsA/profile-displayphoto-shrink_400_400/0/1642438096694?e=2147483647&v=beta&t=oNBgN4xJrxK8caXc1OitCNJBmtBme05QnySn7T7N7xM"
          linkedIn="https://www.linkedin.com/in/sadetunji/"
        />
        <TeamMember
          title="HackWesTX Lead"
          name="Ahmed Bayoumi"
          link="https://media-exp1.licdn.com/dms/image/C4E03AQFCZre-_cGGBA/profile-displayphoto-shrink_400_400/0/1573610087349?e=2147483647&v=beta&t=bQVsnyBW5trdqKBuWOHm7uGdHljkRmsmWTFBO-9KTmo"
          linkedIn="https://www.linkedin.com/in/ahmed-bayoumi/"
        />
        <TeamMember
          title="Finance Lead"
          name="Garret Carmouche"
          link="https://media-exp1.licdn.com/dms/image/C4E03AQFlLuF0duOgEw/profile-displayphoto-shrink_400_400/0/1568575754744?e=1653523200&v=beta&t=OoS57nBquyCAxhwdYCqQ_Q8jhx2-BmWF5oh0cRPz-NY"
          linkedIn="https://www.linkedin.com/in/garret-carmouche/"
        />
        <TeamMember
          title="Marketing Lead"
          name="Minoshun Renganathan"
          link="https://media-exp1.licdn.com/dms/image/D4E35AQGJrrqFZ8CWyw/profile-framedphoto-shrink_400_400/0/1628579565830?e=1648184400&v=beta&t=EhOiad-VrolluZLlQAOEf4mzbOvXn2txjsCwoeAdED8"
          linkedIn="https://www.linkedin.com/in/minoshun-renganathan/"
        />
        <TeamMember
          title="Event Planning Lead"
          name="Arnob Roy"
          link="https://media-exp1.licdn.com/dms/image/C4D03AQHly8NI2GTw1w/profile-displayphoto-shrink_800_800/0/1636159388835?e=2147483647&v=beta&t=PLkQBXxilHhPCMocnSJ9Uul24a7kVhwkw84lbyn38Z0"
          linkedIn="https://www.linkedin.com/in/arnob-roy-58762569/"
        />
        <TeamMember
          title="Project Lead"
          name="Sahil Shamdasani"
          link="https://media-exp1.licdn.com/dms/image/C4E03AQHs4HFWwEsx9w/profile-displayphoto-shrink_800_800/0/1645944953802?e=1653523200&v=beta&t=TuvCGfjnnIbfxkaJHGDbOlc5w5r0tLbsVVDXd53PPTU"
          linkedIn="https://www.linkedin.com/in/sahil-shamdasani/"
        />
        <TeamMember
          title="Code the Shift - Founder"
          name="Shruti Nagawekar"
          link="https://media-exp1.licdn.com/dms/image/C4E03AQGpnvlIAPjG_w/profile-displayphoto-shrink_800_800/0/1638852604020?e=2147483647&v=beta&t=KHqK_l4ZjD4bLLntv7zodY_KJb3EgAhikI_Ewr7Fcjg"
          linkedIn="https://www.linkedin.com/in/shruti-nagawekar/"
        />
      </Grid>
    </Grid>
  );
};
export default Team;
