<template>
  <div>
    <div>
      <h3>基础饼图</h3>
      <json-pie :dataSource="data"></json-pie>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JsonPie from "../../packages/Pie";
export default defineComponent({
  components: {
    JsonPie
  },
  setup(props) {
    const data = [
      {
        label: "余杭人数",
        value: 200
      },
      {
        label: "西湖人数",
        value: 3421
      },
      {
        label: "下城人数",
        value: 2993
      },
      {
        label: "萧山人数",
        value: 3421
      }
    ];

    return {
      data
    };
  }
});
</script>
