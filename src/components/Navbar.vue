<template>
  <div
    id="nav-wrap"
    :class="toggleNavClass()"
  >
    <nav>
      <a
        href="/"
        class="brand-logo left"
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 192"
          width="100%"
          height="48"
        ><path
          class="cls-1"
          d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z"
        /><path
          class="cls-2"
          d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z"
        /><path
          class="cls-3"
          d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z"
        /><path
          class="cls-4"
          d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z"
        /></svg>
      </a>
      <ul
        id="tabs"
        class="tabs"
      >
        <g-link
          class="tab"
          to="/"
          @click.native="changeActive(1)"
        >
          Home
        </g-link>

        <g-link
          class="tab"
          to="/projects"
          @click.native="changeActive(2)"
        >
          Projects
        </g-link>

        <g-link
          class="tab"
          to="/events"
          @click.native="changeActive(3)"
        >
          Events
        </g-link>
        <li
          id="tab-1"
          class="underline pos-1"
        />
        <li
          id="tab-2"
          class="underline pos-2"
        />
        <li
          id="tab-3"
          class="underline pos-3"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      active: false,
      index: 0
    }
  },
  computed: {
    currentIndex () {
      let current = this.index
      const tabs = document.getElementById('tabs')
      const children = tabs.children
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('active--exact')) {
          current = i + 1
          break
        }
      }
      return current
    }
  },
  mounted () {
    window.document.onscroll = () => {
      const navBar = document.getElementById('nav-wrap')
      const offset = navBar.offsetTop
      if (window.scrollY > offset) {
        this.active = true
        document.body.style.paddingTop = navBar.offsetHeight + 'px'
      } else {
        this.active = false
        document.body.style.paddingTop = '0px'
      }
    }

    window.addEventListener('resize', () => {
      const navBar = document.getElementById('nav-wrap')
      if (this.active === true) {
        document.body.style.paddingTop = navBar.offsetHeight + 'px'
      }
    })

    const createUnderline = () => {
      const tab = document.getElementById('tab-' + this.currentIndex)
      tab.classList.add('active')
    }

    createUnderline()
  },
  methods: {
    toggleNavClass () {
      if (this.active === false) {
        return ''
      } else {
        return 'navbar-fixed'
      }
    },

    changeActive (next) {
      console.log('currnet: ' + this.currentIndex)
      console.log(next)
      if (this.currentIndex !== next) {
        const oldIndex = this.currentIndex
        const underlineOld = document.getElementById('tab-' + oldIndex)
        const underlineNew = document.getElementById('tab-' + next)
        underlineOld.classList.remove('active')
        underlineNew.classList.add('active')
        this.index = next
      }
    }
  }
}
</script>

<style>
.cls-1{fill:#ea4335;}.cls-2{fill:#4285f4;}.cls-3{fill:#fbbc04;}.cls-4{fill:#0f9d58;}
</style>
