<template>
  <div :class="[`group-4-1-1`, className || ``]">
    <div class="overlap-group-1"><img class="x2" :src="src" alt="2." /></div>
  </div>
</template>

<script>
export default {
  name: "Group4",
  props: ["src", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.group-4-1-1
  height: 55.81px
  position: relative
  width: 57.81px

.overlap-group-1
  align-items: flex-end
  background-color: $puerto-rico
  border-radius: 27.9px
  display: flex
  height: 56px
  justify-content: flex-end
  min-width: 56px
  padding: 18.2px 17.1px

.x2
  height: 18px
  width: 18px

.group-4-1-1.group-4-1 .overlap-group-1
  padding: 18.2px 18.1px

.group-4-1-1.group-4-1 .x2
  width: 17px
</style>
