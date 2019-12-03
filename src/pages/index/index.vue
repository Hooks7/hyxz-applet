<template>
  <div>
    <van-notice-bar
      left-icon="https://img.yzcdn.cn/1.png"
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
    />

    <mybr />
    <mybr />
    <van-notice-bar mode="closeable" text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" />

    <van-progress pivot-text="橙色" color="#f2826a" percentage="25" />

    <van-progress pivot-text="红色" color="#ee0a24" percentage="50" />

    <van-progress
      percentage="75"
      pivot-text="紫色"
      pivot-color="#7232dd"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
