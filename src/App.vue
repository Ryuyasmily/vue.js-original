<template>
  <div id="app">
    <!-- @searchAPI | @trendAPI -> 子コンポーネントにメソッドを送る -->
    <Header @searchAPI="searchAPI" @trendAPI="trendAPI" />
    <div class="main-layout">
      <SideMenu />
      <Body>
        <router-view :gifImageList="gifImageList" />
      </Body>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SideMenu from "./components/SideMenu.vue";
import Body from "./components/Body.vue";
export default {
  name: "App",
  components: {
    Header,
    SideMenu,
    Body,
  },
  data() {
    return {
      gifImageList: {},
      isLoading: true,
    };
  },
  watch: {
    $route() {
      this.isLoading = true;
      this.searchAPI(this.$route.query.category);
    },
  },
  methods: {
    // Giphyで検索をかける
    searchAPI(text) {
      this.isLoading = true;
      this.$gf
        .search(text, {
          sort: "relevant",
          lang: "es",
          limit: 30,
          type: "stickers",
        })
        .then((d) => {
          // gif data を格納
          this.gifImageList = d;
          this.isLoading = false;
        });
    },
    // Giphyで検索をかける
    trendAPI() {
      this.isLoading = true;
      this.$gf.trending({ limit: 30 }).then((d) => {
        this.gifImageList = d;
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.trendAPI();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-layout {
  display: flex;
  height: calc(100vh - 60px);
  width: 100%;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-track {
  border-radius: 8px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 50, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
}
.main::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

a {
  text-decoration: none;
  color: #000;
}

ul {
  list-style: none;
}
</style>
