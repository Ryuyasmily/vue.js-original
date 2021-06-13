<template>
  <!-- ヘッダー部分 -->
  <div class="header">
    <div class="container">
      <div class="header-title">
        <img class="header-logo" src="@/assets/headerlogo.png" alt="logo" />
        <h2 class="header-title">GIF SEARCH</h2>
      </div>
      <div class="search-header">
        <input
          class="search"
          type="search"
          v-model="search"
          placeholder="検索"
        />
        <button class="search-btn" @click="searchClick">
          <i class="fas fa-search fa-lg"></i>
        </button>
      </div>
      <div class="left-icon">
        <i class="fas fa-sync-alt fa-lg" @click="trendClick"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
      isMinimum: window.innerWidth > 640 ? false : true,
    };
  },
  created() {
    window.addEventListener("resize", this.changeSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.changeSize);
  },
  methods: {
    searchClick() {
      this.$emit("searchAPI", this.search);
    },
    changeSize() {
      this.isMinimum = window.innerWidth > 720 ? false : true;
    },
    trendClick() {
      location.reload()
    },
  },
};
</script>

<style scoped>
/*ヘッダー部分*/
.header-title {
  width: 100px;
  margin: 0 20px 0 20px;
}

.header > .container {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
}

/*フォームヘッダー*/

.header-title {
  display: flex;
}

.header-logo {
  width: 42px;
  height: 42px;
}

.header-title {
  color: #ff00ff;
  white-space: nowrap;
  margin-top: 5px;
}

.header {
  background-color: #fff;
  width: 100%;
}

input {
  max-width: 600px;
  min-width: 200px;
  width: 40vw;
  height: 20px;
  padding: 15px 10px;
  border: 1px solid #ccc;
}

::placeholder {
  font-size: 16px;
}

.search-btn {
  height: 32px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid thin #ccc;
  cursor: pointer;
}
.search-btn:hover {
  height: 32px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid thin #ccc;
  color: #ff00ff;
  cursor: pointer;
}

.search-header {
  display: flex;
}

.left-icon > .fas {
  color: #ff00ff;
  margin-right: 20px;
  cursor: pointer;
}
</style>
