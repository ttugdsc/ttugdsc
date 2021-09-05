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
        <img src="../assets/dsc_icon.svg">
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
      index: 0
    }
  },
  computed: {
    currentIndex () {
      let active = this.index
      const tabs = document.getElementById('tabs')
      const children = tabs.children
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('active--exact')) {
          active = i + 1
          break
        }
      }
      return active
    }
  },
  mounted () {
    window.document.onscroll = () => {
      const navBar = document.getElementById('nav-wrap')
      const offset = navBar.offsetTop
      if (window.scrollY >= offset) {
        this.active = true
        document.body.style.paddingTop = navBar.offsetHeight + 'px'
      } else {
        this.active = false
        document.body.style.paddingTop = 0
      }
    }

    window.addEventListener('resize', () => {
      const navBar = document.getElementById('nav-wrap')
      const offset = navBar.offsetTop
      if (window.scrollY >= offset) {
        this.active = true
        document.body.style.paddingTop = navBar.offsetHeight + 'px'
      } else {
        this.active = false
        document.body.style.paddingTop = 0
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
      if (this.currentIndex !== next) {
        console.debug('run')
        const underlineOld = document.getElementById('tab-' + this.currentIndex)
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

</style>
