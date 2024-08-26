<template>
  <div :class="[`frame-1000004784`, className || ``]">
    <img
      class="mv-logo-1-1"
      src="https://cdn.animaapp.com/projects/668fabe1a9b7d2ad0686601a/releases/66b60546a796126d7b57a6f8/img/mv-logo-1-4.svg"
      alt="MV logo 1"
    />
    <div class="frame-1000004783">
      <img class="group" :src="group" alt="Group" />
      <div class="frame-1000004782">
        <div class="frame-7682">
          <group116046944 />
          <group116046944 />
          <group116046944 />
          <group116046944 />
          <group116046944 :className="group116046944Props.className" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group116046944 from "./Group116046944";
export default {
  name: "Frame1000004784",
  components: {
    Group116046944,
  },
  props: ["group", "className", "group116046944Props"],
};
</script>

<style lang="sass">
.frame-1000004784
  align-items: flex-end
  display: inline-flex
  gap: 20px
  left: 146px
  position: absolute
  top: 31px

.mv-logo-1-1
  height: 76.38px
  position: relative
  width: 203px

.frame-1000004783
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 13.17px
  position: relative

.group
  height: 27.39px
  position: relative
  width: 111.58px

.frame-1000004782
  align-items: center
  display: inline-flex
  flex: 0 0 auto
  flex-direction: column
  gap: 12.47px
  position: relative

.frame-7682
  align-items: flex-start
  display: inline-flex
  flex: 0 0 auto
  gap: 2.16px
  position: relative

.frame-1000004784.frame-1000004784-2
  left: 151px
</style>
