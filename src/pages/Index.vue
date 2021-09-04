<template>
  <Layout>
    <main class="container-full ">
    <section id="join-club" class="container">
      <div class="row">
        <div class="col-7 center center-vertical">
          <h2>Developers Student Club <br />Texas Tech</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            interdum blandit lacus, mollis mollis tortor vehicula vitae.
          </p>
          <a
            class="btn-lg mt-2  "
            href="https://gdsc.community.dev/texas-tech-university/"
            target="_blank"
          >
            Become a Member!
          </a>
        </div>
        <div class="col-5 first-sm">
          <g-image class="img-responsive" src="https://picsum.photos/640/360"/>
        </div>
      </div>
      </section>

    <section id="our-goal" class="bg-blue mt-5">
      <div class="container py-2">
      <div class="row">
        <div class="col-8 center-vertical">
          <h3>Our Goal</h3>
          <p> Who we are and what we do ~~~ Lorem ipsum dolor sit amet, consec
            tetur adipiscing elit. Nam condimentum tempus diam, ultricies
            sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros
            laoreet consectetur. Vivamus eget elementum</p>
        </div>
        <div class="col-4">
          <h3 class="sm-only">Follow Us</h3>
          <div v-for="socialBtn in socialBtns" :key="socialBtn.name">
            <a :href="socialBtn.link" class="btn-social my-1"><span class="mdi" :class="socialBtn.icon"></span>{{socialBtn.text}}</a>
          </div>

        </div>
      </div>
      </div>
    </section>

    <section id="core-team">
      <div class="container">
        <div class="row">
          <div v-for="avatar in avatars" :key="avatar.name">
            <avatar :title="avatar.text" :officername="avatar.text" :imgsrc="avatar.img"/>
          </div>
        </div>
        <div class="row">

        </div>
      </div>
    </section>
    </main>
  </Layout>
</template>

<script>
import Avatar from '../components/Avatar.vue';

export default {
  components: { Avatar },
  metaInfo: {
    title: 'TTUGSDC'
  },
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
@import "../assets/Index.css";
</style>
