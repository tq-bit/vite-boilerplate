<template>
  <div id="app">
    <q-navbar
      :navbarLeft="navbarLeft"
      :navbarRight="navbarRightActive"
      @toggleSidebar="showSidebar = !showSidebar"
      @logout="logout"
    />
    <transition appear name="sidebar-slide">
      <q-sidebar
        v-if="showSidebar"
        :sidebarTop="navbarLeft"
        :sidebarBottom="navbarRightActive"
        @toggleSidebar="showSidebar = !showSidebar"
      ></q-sidebar>
    </transition>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade-move" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import QNavbar from "./components/UI/Navigation/QNavbar.vue";
import QSidebar from "./components/UI/Navigation/QSidebar.vue";

export default {
  async mounted() {},
  data() {
    return {
      showSidebar: false,
      navbarLeft: [
        {
          path: "/",
          name: "Home",
        },
      ],
      //
      /**
       * Register paths you want to show in the navbar
       * with their respective path OR action here
       *
       * Example:
       *
       * {
       *   name: "Logout",
       *   loginRequired: true,
       *   // path: "/",
       *   action: () => {
       *     this.$router.push({ path: "/" });
       *     this.logout();
       *     this.alert({ message: "You have successfully logged out" });
       *   },
       * }
       **/
      navbarRight: [],
    };
  },
  components: {
    QNavbar,
    QSidebar,
  },
  computed: {
    navbarRightActive() {
      const userIsLoggedin = this.activeToken ? true : false;
      return this.navbarRight.filter((el) => {
        return el.loginRequired === userIsLoggedin;
      });
    },
  },
  methods: {},
};
</script>

<style>
@import "./assets/styles/util.css";
@import "./assets/styles/animations.css";

:root.dark-theme {
  /* Background colors */
  --background-color-primary: #1e1e1e;
  --background-color-tartiary: #2d2d30;
  --background-color-secondary: #252526;

  /* Text colors */
  --text-color-primary: #ddd;
  --text-color-secondary: #eee;

  /* Accent colors */
  --success-color: #00a300;
  --error-color: #b91d47;
  --grey-color: #3f3f3f;
}

:root {
  /* Background colors */
  --background-color-primary: #eee;
  --background-color-secondary: #f5f5f5;
  --background-color-tartiary: #fefefe;

  /* Accent colors */
  --accent-color-primary: rgb(227, 157, 58);
  --accent-color-secondary: rgb(46, 84, 204);
  --accent-color-blur-primary: rgba(227, 157, 58, 0.7);
  --accent-color-blur-secondary: rgba(46, 84, 204, 0.7);

  /* Text colors */
  --text-color-primary: #222;
  --text-color-secondary: #333;

  --black-color: #29201a;
  --grey-color: #cacaca;
  --white-color: #f2f2f2;
  --success-color: #00a300;
  --error-color: #b91d47;
  --duration-quickest: 0.25s;
  --duration-quick: 0.5s;
  --duration-semi: 0.75s;
  --duration-slow: 1s;
  --el-size-xxs: 2.5rem;
  --el-size-xs: 4rem;
  --el-size-sm: 7.5rem;
  --el-size-md: 10rem;
  --el-size-l: 15rem;
  --el-size-xl: 20rem;
  --gap-tiny: 0.1rem;
  --gap-xxs: 0.125rem;
  --gap-xs: 0.25rem;
  --gap-sm: 0.5rem;
  --gap-md: 0.75rem;
  --gap-lg: 1rem;
  --gap-xl: 1.25rem;
  --gap-xxl: 1.5rem;
  --gap-max: 1.75rem;
  --text-size-sm: 0.9rem;
  --text-size-md: 1.05rem;
  --text-size-lg: 1.15rem;
  --text-size-xl: 1.35rem;
  --text-size-xxl: 1.65rem;
}

* {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: 0.1s;
}

body {
  min-height: 100vh;
  background-color: var(--background-color-primary);
}

li {
  color: var(--text-color-primary);
  padding: var(--gap-xs) var(--gap-md);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--text-color-primary);
  margin: var(--gap-xl) 0;
}

table {
  width: 100%;
  text-align: center;
  margin: var(--gap-md) 0;
  border-collapse: collapse;
  color: var(--text-color-primary);
}

th {
  padding: var(--gap-md);
  border: none;
  border-bottom: 1.25px solid var(--grey-color);
}

tr {
  border: none;
}

td {
  background-color: var(--background-color-primary);
  padding: var(--gap-md);
  border: none;
  border-bottom: 1px solid var(--grey-color);
}

p {
  color: var(--text-color-secondary);
  margin: var(--gap-md) 0;
  font-size: var(--text-size-md);
  line-height: var(--gap-max);
}

a {
  color: var(--accent-color-primary);
  font-weight: 600;
  text-decoration: none;
  position: relative;
}

hr {
  border: 0.1px solid var(--grey-color);
  border-style: dotted;
  margin: var(--gap-lg) auto;
  width: 90%;
}

textarea {
  resize: none;
}

a:before {
  transition: var(--duration-quick);
  position: absolute;
  top: var(--text-size-lg);
  left: 50%;
  content: "";
  width: 0;
  height: var(--gap-xxs);
  background-color: var(--accent-color-primary);
}
</style>
