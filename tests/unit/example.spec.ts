import { shallowMount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
const HelloWorld = defineComponent({
  name: "HelloWord",
  props: {
    msg: {
      type: String
    }
  },
  setup() {
    return () => {
      return h("div", "hello world");
    };
  }
});

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "hello world";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
