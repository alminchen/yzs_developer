<template>
  <header class="nav-bar">
    <router-link :to="link" class="navbar-item">
      <img src="../../assets/images/backsel.png" alt>
    </router-link>
    <div class="navbar-center">
      <span class="navbar-title">{{title}}</span>
    </div>
    <router-link to class="navbar-item">
      <slot></slot>
    </router-link>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    console.log(this.a);
  }
};
</script>
<style lang='less' scoped>
.nav-bar {
  width: 100%;
  height: 0.88rem;
  position: relative;
  display: flex;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  .navbar-item {
    height: 0.9rem;
    min-width: 25%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    color: #5c5c5c;
    img {
      width: 0.18rem;
      height: 0.2rem;
      transform: rotateY(-180deg);
    }
    &:first-child {
      order: 1;
      margin-right: -25%;
      -webkit-box-ordinal-group: 2;
    }
    &:last-child {
      -webkit-box-ordinal-group: 4;
      order: 3;
      justify-content: flex-end;
    }
  }
  .navbar-center {
    -webkit-box-ordinal-group: 3;
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.9rem;
    width: 50%;
    margin-left: 25%;
  }
  .navbar-title {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    font-size: 0.32rem;
    color: #5c5c5c;
  }
}
</style>