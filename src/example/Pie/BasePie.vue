<template>
  <div>
    <div>
      <h3>基础饼图</h3>
      <json-pie ref="jsonPieRef" :dataSource="data"></json-pie>
      <button @click="resizeHandle">点击执行resize</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from "vue";
import JsonPie from "../../packages/Pie";
console.log("JsonPie", JsonPie);
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
    const jsonPieRef = ref(null);
    onMounted(() => {
      console.log("jsonPieRef", jsonPieRef);
    });
    const resizeHandle = () => {
      (jsonPieRef.value as any).resize();
    };
    return {
      data,
      jsonPieRef,
      resizeHandle
    };
  }
});

/**
 * MzI3NXwzMjc3LDMyNzl8MzI4MSwzMjgzfDMyODUsMzI4N3wzMjg5LDMyOTF8MzI5MywzMjk1fDMyOTcsMzI5OXwzMzAyLDMzMDR8MzMwNSwzMzA4fDMzMDksMzMxM3wzMzE0LDMzMTd8MzMxOCwzMzIwfDMzMjEsMzMyNXwzMzI2LDMzMjh8MzMyOSwzMzMyfDMzMzMsNiw0LDUsNSw2LDQsNSw2Miw1LDUsNSw1LDUsNSw1LDQ5LDUsNCw0LDUsNSw1LDUsNjIsNyw2LDcsNiw2LDYsNiw3NSw2LDYsNiw2LDYsNiw3LDcwLDMzNzZ8MzM3NywzMzgwfDMzNzgsMzM4M3wzMzgyLDMzODV8MzM4NiwzMzg5fDMzODgsMzM5MXwzMzkyLDMzOTV8MzM5MywzMzk4fDMzOTYsMzQwMXwzNDAwLDM0MDN8MzQwNCwzNDA2fDM0MDcsMzQxMHwzNDA4LDM0MTR8MzQxM3wzNDExfDM0MTI=
 */
</script>
