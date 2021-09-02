# Texas Tech GDSC Website

Here you can watch and even participate in the development on the TTU GDSC Website. Eventually, it'll be the single point of contact for the club. A one stop shop for our events, team, and projects.

_To avoid unnecessary pain, we recommend reading up a bit or watching a bit on Vuejs and Gridsome._

For a breakdown on what we're shooting for, check out our [project page](https://www.figma.com/file/uEBOlD2GGmVO0sCAKTowAh/Lo-fi-Wireframe-Kit-Launchpad-for-Website-Wireframe) and our [discussion page](https://github.com/ttugdsc/ttugdsc/discussions).

### 1. Install yarn package manager if you don't have it yet

You can find it [here](https://yarnpkg.com/getting-started).

### 2. Install Gridsome CLI tool after installing yarn

`yarn global add @gridsome/cli`

### 3. Build Setup

```bash
# clone the repository
git clone {insert-url-to-your-fork-here-without-curlies}

# install dependencies
$ cd ttugdsc
$ yarn

# start local dev server at `http://localhost:8080`
$ gridsome develop
```

For detailed explanation on how things work, check out the [documentation](https://gridsome.org/docs/).

## Special Directories

You can create the following extra directories, some of which have special behaviors.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://gridsome.org/docs/directory-structure/#recommendation).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://gridsome.org/docs/directory-structure/#shared-or-global-components).

### `layouts`

Create components in this directory if you want to share one or more layouts for your pages or templates.

More information about the usage of this directory in [the documentation](https://gridsome.org/docs/layouts/).

### `pages`

All components in this directory become the pages for your website. Each page will get its path based on the location of its `.vue` file. `src/pages/Index.vue` will become the homepage for your website, while `src/pages/AboutUs.vue` will be `example.com/about-us`.

More information about the usage of this directory in [the documentation](https://gridsome.org/docs/pages/).

## 4. Happy coding 🎉🙌
