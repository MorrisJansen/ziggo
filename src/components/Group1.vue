<template>
  <div :class="[`group-1`, className || ``]">
    <div class="overlap-group-6">
      <div class="twv-1 diodrumcyrillic-regular-normal-white-16-7px">t.w.v.</div>
      <div class="text valign-text-bottom diodrumcyrillic-normal-white-33-9px">{{ text1 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group1",
  props: ["text1", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.group-1
  align-items: flex-start
  box-shadow: 0px 4px 40px #00000026
  display: flex
  height: 127px
  left: 920px
  min-width: 131px
  position: absolute
  top: 770px
  transform: rotate(-6.57deg)

.overlap-group-6
  background-color: $puerto-rico
  border-radius: 63.27px
  height: 127px
  position: relative
  width: 127px

.twv-1
  left: 46px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 34px
  white-space: nowrap

.text
  height: 41px
  left: 11px
  letter-spacing: 0
  line-height: normal
  position: absolute
  top: 49px

.group-1.group-2
  align-items: flex-end
  left: 1464px
  top: 805px
  transform: rotate(5.84deg)

.group-1.group-2 .overlap-group-6
  margin-bottom: 0

.group-1.group-1-1,
.group-1.group-1-3,
.group-1.group-1-4,
.group-1.group-1-5
  left: 1092px
  padding: 0 0.0px
  top: 650px

.group-1.group-2-1,
.group-1.group-2-3,
.group-1.group-2-4,
.group-1.group-2-5
  left: 1648px
  top: 916px
  transform: rotate(5.84deg)

.group-1.group-2-1 .overlap-group-6,
.group-1.group-2-2 .overlap-group-6,
.group-1.group-2-3 .overlap-group-6,
.group-1.group-2-4 .overlap-group-6,
.group-1.group-2-5 .overlap-group-6,
.group-1.group-3-1 .overlap-group-6,
.group-1.group-3-2 .overlap-group-6,
.group-1.group-3-3 .overlap-group-6,
.group-1.group-3-4 .overlap-group-6,
.group-1.group-3-5 .overlap-group-6
  margin-top: 0

.group-1.group-3-1,
.group-1.group-3-3,
.group-1.group-3-4,
.group-1.group-3-5
  left: 1478px
  top: 237px
  transform: rotate(4.44deg)

.group-1.group-1-2
  left: 1097px
  padding: 0 0.0px
  top: 650px

.group-1.group-2-2
  left: 1653px
  top: 916px
  transform: rotate(5.84deg)

.group-1.group-3-2
  left: 1483px
  top: 237px
  transform: rotate(4.44deg)
</style>
