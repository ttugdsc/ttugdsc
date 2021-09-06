<template>
  <Layout>
    <main style="height: 100%">
      <section
        id="join-club"
      >
        <div class="inner-container">
          <div class="row mt-1-sm hero">
            <div class="col-6 mt-2 mt-1-sm mb-3-md mb-0-sm center-vertical">
              <h1 class=" text-left">
                Google Developer <span class="avoid-break">Student Club</span><h4 class="mt-0 roboto">
                  Texas Tech University
                </h4>
              </h1>

              <a
                class="btn-lg mt-2 mb-2-md btn-centered-md"
                href="https://gdsc.community.dev/texas-tech-university/"
                target="_blank"
              >
                Become a Member!
              </a>
            </div>
            <div class="col-6 first-sm">
              <g-image
                id="hero-image"
                src="~/assets/images/smiling.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-goal"
        class=" bg-primary"
      >
        <div class="inner-container py-3">
          <div class="row">
            <div
              class="
            col-7
            white"
            >
              <h3>Our Goal</h3>
              <p class="white">
                Who we are and what we do ~~~ Lorem ipsum dolor sit amet, consec
                tetur adipiscing elit. Nam condimentum tempus diam, ultricies
                sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros
                laoreet consectetur. Vivamus eget elementum
              </p>
            </div>
            <div class="col-5">
              <h3 class=" white">
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
          <div class="row">
            <div class="col-12 py-2">
              <h2>Our Core Team</h2>
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
          name: 'techConnect',
          link: 'https://ttu.campuslabs.com/engage/organization/dsc',
          icon: 'mdi-format-title',
          text: 'Tech Connect'
        },
        {
          name: 'twitter',
          link: 'https://twitter.com/ttugdsc',
          icon: 'mdi-twitter',
          text: 'Official DSC'
        },
        {
          name: 'discord',
          link: 'https://discord.gg/nTSWsXGNeQ',
          icon: 'mdi-discord',
          text: 'Discord'
        },
        {
          name: 'youtube',
          link: 'https://www.youtube.com/channel/UCMjXs7pB9-E9wmpALv41aWg',
          icon: 'mdi-youtube',
          text: 'Youtube Channel'
        },
        {
          name: 'github',
          link: 'https://github.com/ttugdsc',
          icon: 'mdi-github',
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
