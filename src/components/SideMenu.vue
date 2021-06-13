<template>
  <!--サイドバー部分-->
  <div class="aside" :style="menuSize">
    <div class="aside2nd">
      <div class="menu-box" @click="menuWindowChange()">
        <a class="menu-btn">
          <i class="fas fa-bars fa-lg"></i>
        </a>
      </div>
      <ul class="side-bar">
        <li
          class="introduction"
          v-for="(category, idx) in categories"
          :key="idx"
        >
          <router-link :to="'?category=' + category.name">
            <a>
              <i :class="category.icon"></i>
              <p class="side-text">{{ isMinimum ? "" : category.name }}</p>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
    <footer>
      <p class="reserved">©ryuya portfolio</p>
      <p class="reserved">All Right Reserved</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMinimum: window.innerWidth > 640 ? false : true,
      categories: [
        {
          name: "Trend",
          icon: "far fa-star fa-fw fa-lg",
        },
        {
          name: "Sports",
          icon: "fas fa-volleyball-ball fa-fw fa-lg",
        },
        {
          name: "Game",
          icon: "fas fa-gamepad fa-fw fa-lg",
        },
        {
          name: "News",
          icon: "far fa-newspaper fa-fw fa-lg",
        },
        {
          name: "Art",
          icon: "fas fa-palette fa-fw fa-lg",
        },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.changeSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.changeSize);
  },
  computed: {
    menuSize() {
      return {
        width: this.isMinimum ? "64px" : "200px",
      };
    },
  },
  methods: {
    menuWindowChange() {
      this.isMinimum = !this.isMinimum;
    },
    changeSize() {
      this.isMinimum = window.innerWidth > 640 ? false : true;
    },
  },
};
</script>
<style scoped>
/*サイド部分*/
.aside {
  width: 240px;
  height: calc(100vh - 60px);
  padding: 0 0 0 10px;
  background: #fff;
}

.menu-box {
  width: 240px;
  display: flex;
  justify-content: flex-end;
  padding: 0 12px;
}

.menu-btn {
  display: block;
  cursor: pointer;
  font-size: 24px;
  padding: 12px;
  color: #9400d3;
}

.side-list:hover {
  background-color: #d3d3d3;
}

.side-list a {
  padding: 10px 0 10px 10px;
}

.introduction a {
  display: flex;
  cursor: pointer;
  align-items: center;
  color: #9400d3;
}

.introduction:hover {
  background-color: #f5f5f5;
}

.side-text {
  margin-left: 10px;
}

.fa-search,
.fa-heart {
  color: #606060;
}

#top {
  background-color: #d3d3d3;
}

#top:hover {
  background-color: #a9a9a9;
}

.side-list p {
  font-size: 14px;
  color: #030303;
}

.reserved {
  font-size: 12px;
  color: #909090;
}
</style>
