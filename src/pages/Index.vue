<template>
  <Layout>
    <main style="height: 100%">
      <section
        id="join-club"
        class="container"
      >
        <div class="row mt-1-sm hero">
          <div class="col-6 center center-horizontal center-vertical">
            <g-image
              src="~/assets/lockup.svg"
              class="lockup mt-2-sm"
            />
            <a
              class="btn-lg mt-4 mt-2-md"
              href="https://gdsc.community.dev/texas-tech-university/"
              target="_blank"
            >
              Become a Member!
            </a>
          </div>
          <div class="col-6 first-sm">
            <img
              id="hero-image"
              src="../assets/smiling.jpg"
            >
          </div>
        </div>
      </section>

      <section
        id="our-goal"
        class="bg-primary"
      >
        <div class="container py-2 mt-3-sm">
          <div
            class="row px-2-sm"
          >
            <div class="col-8 white center-vertical">
              <h3>Our Goal</h3>
              <p class="white">
                Who we are and what we do ~~~ Lorem ipsum dolor sit amet, consec
                tetur adipiscing elit. Nam condimentum tempus diam, ultricies
                sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros
                laoreet consectetur. Vivamus eget elementum
              </p>
            </div>
            <div class="col-4">
              <h3 class="sm-only white">
                Follow Us
              </h3>
              <div
                v-for="socialBtn in socialBtns"
                :key="socialBtn.name"
              >
                <a
                  :href="socialBtn.link"
                  class="btn-social my-1"
                ><span
                  class="mdi"
                  :class="socialBtn.icon"
                />{{ socialBtn.text }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="core-team">
        <div class="container">
          <div class="row center">
            <div class="col-12">
              <h3>Our Core Team</h3>
            </div>
          </div>
          <div
            class="row mb-2"
          >
            <div class="col-12">
              <div
                class="OfficerGrid"
              >
                <div
                  v-for="avatar in avatars"
                  :key="avatar.name"
                  class="OfficerItem"
                >
                  <avatar
                    :title="avatar.name"
                    :officername="avatar.text"
                    :imgsrc="avatar.img"
                    :float="avatar.class"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
import Avatar from '../components/Avatar.vue'

export default {
  components: { Avatar },
  metaInfo: {
    title: 'TTUGSDC'
  },
  data () {
    return {
      socialBtnWrapperProps: {
        target: '_blank',
        class: 'socialBtnWrapper',
        plain: true
      },
      avatarProps: {
        size: '100'
      },
      socialBtns: [
        {
          name: 'tectConnect',
          link: 'https://ttu.campuslabs.com/engage/organization/dsc',
          icon: 'mdi-format-title primary',
          text: 'Tech Connect'
        },
        {
          name: 'twitter',
          link: 'https://twitter.com/ttugdsc',
          icon: 'mdi-twitter red',
          text: 'Official DSC'
        },
        {
          name: 'discord',
          link: 'https://discord.gg/nTSWsXGNeQ',
          icon: 'mdi-discord green',
          text: 'Discord'
        },
        {
          name: 'youtube',
          link: 'https://www.youtube.com/channel/UCMjXs7pB9-E9wmpALv41aWg',
          icon: 'mdi-youtube yellow',
          text: 'Developer Student Clubs TTU'
        },
        {
          name: 'github',
          link: 'https://github.com/ttugdsc',
          icon: 'mdi-github black',
          text: 'GitHub'
        }
      ],
      avatars: [
        {
          name: 'Team Lead',
          class: 'top',
          img: 'https://i.imgur.com/escfpv7.png',
          text: 'Placeholder'
        },
        {
          name: 'Sponsorship',
          class: 'bottom',
          img: 'https://i.imgur.com/escfpv7.png',
          text: 'Placeholder'
        },
        {
          name: 'Marketing',
          class: 'top',
          img: 'https://i.imgur.com/escfpv7.png',
          text: 'Placeholder'
        },
        {
          name: 'Logistics',
          class: 'bottom',
          img: 'https://i.imgur.com/escfpv7.png',
          text: 'Placeholder'
        },
        {
          name: 'Finance',
          class: 'top',
          img: 'https://i.imgur.com/escfpv7.png',
          text: 'Placeholder'
        },
        {
          name: 'Member Experience',
          class: 'bottom',
          img: 'https://i.imgur.com/escfpv7.png',
          text: 'Placeholder'
        },
        {
          name: 'Outreach',
          class: 'top',
          img: 'https://i.imgur.com/escfpv7.png',
          text: 'Placeholder'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../assets/Index.css";
</style>
