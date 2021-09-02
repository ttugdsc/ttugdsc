<template>
  <Layout>
    <div class="homeHeaderWrapper">
      <div class="becomeAMemberWrapper">
        <p class="developersStudentClubText">Developers Student Club</p>
        <p class="developersStudentClubText">Texas Tech</p>
        <p class="extraText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          interdum blandit lacus, mollis mollis tortor vehicula vitae.
        </p>
        <v-btn
          block
          color="primary"
          outlined
          class="becomeAMemberBtn"
          href="https://gdsc.community.dev/texas-tech-university/"
          target="_blank"
        >
          Become a Member!
        </v-btn>
      </div>
      <v-img
        src="https://i.imgur.com/escfpv7.png"
        class="studentsTalkingImg"
      ></v-img>
    </div>
    <div class="homeBodyWrapper">
      <div class="bodyText">
        <p class="ourGoalText">Our Goal</p>
        <p>
          Who we are and what we do ~~~ Lorem ipsum dolor sit amet, consec tetur
          adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin
          erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet
          consectetur. Vivamus eget elementum
        </p>
      </div>
      <div class="bodyBtns">
        <div v-for="socialBtn in socialBtns" :key="socialBtn.name">
          <v-btn :href="socialBtn.link" v-bind="socialBtnWrapperProps">
            <v-icon class="socialBtn"> {{ socialBtn.icon }} </v-icon>
            {{ socialBtn.text }}
          </v-btn>
        </div>
      </div>
    </div>
    <div class="coreTeamWrapper">
      <p class="coreTeamText">Core Team</p>
      <div class="coreTeamImagesWrapper">
        <div v-for="avatar in avatars" :key="avatar.name" :class="avatar.class">
          <v-avatar v-bind="avatarProps">
            <img :src="avatar.img" />
          </v-avatar>
          {{ avatar.text }}
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      socialBtnWrapperProps: {
        target: "_blank",
        class: "socialBtnWrapper",
        plain: true,
      },
      avatarProps: {
        size: "100",
      },
      socialBtns: [
        {
          name: "tectConnect",
          link: "https://ttu.campuslabs.com/engage/organization/dsc",
          icon: "mdi-format-title",
          text: "Tech Connect",
        },
        {
          name: "twitter",
          link: "https://twitter.com/ttugdsc",
          icon: "mdi-twitter",
          text: "Official DSC",
        },
        {
          name: "discord",
          link: "https://discord.gg/nTSWsXGNeQ",
          icon: "mdi-discord",
          text: "Discord",
        },
        {
          name: "youtube",
          link: "https://www.youtube.com/channel/UCMjXs7pB9-E9wmpALv41aWg",
          icon: "mdi-youtube",
          text: "Developer Student Clubs TTU",
        },
        {
          name: "github",
          link: "https://github.com/ttugdsc",
          icon: "mdi-github",
          text: "GitHub",
        },
      ],
      avatars: [
        {
          name: "teamMember1",
          class: "topTeamImg",
          img: "https://i.imgur.com/escfpv7.png",
          text: "Team Lead Placeholder Name",
        },
        {
          name: "teamMember2",
          class: "bottomTeamImg",
          img: "https://i.imgur.com/escfpv7.png",
          text: "Sponsorship Placeholder Name",
        },
        {
          name: "teamMember3",
          class: "topTeamImg",
          img: "https://i.imgur.com/escfpv7.png",
          text: "Markteting Placeholder Name",
        },
        {
          name: "teamMember4",
          class: "bottomTeamImg",
          img: "https://i.imgur.com/escfpv7.png",
          text: "Logistics Placeholder Name",
        },
        {
          name: "teamMember5",
          class: "topTeamImg",
          img: "https://i.imgur.com/escfpv7.png",
          text: "Finance Placeholder Name",
        },
        {
          name: "teamMember6",
          class: "bottomTeamImg",
          img: "https://i.imgur.com/escfpv7.png",
          text: "Member Experience Placeholder Name",
        },
        {
          name: "teamMember7",
          class: "topTeamImg",
          img: "https://i.imgur.com/escfpv7.png",
          text: "Logistics Placeholder Name",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "./Index.css";
</style>
