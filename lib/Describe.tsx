import { defineComponent, PropType } from "vue";
import { DescribeProps } from "./types";
type directionProp = "center" | "right" | "left";

export default defineComponent({
  name: "Describe",
  props: {
    direction: {
      //方向
      type: String as PropType<directionProp>
    },
    title: {
      type: Object as PropType<DescribeProps>
    },
    description: {
      type: Object as PropType<DescribeProps>
    }
  },

  setup(props) {
    return () => {
      const { title, description, direction } = props;
      const Title = title?.visible && <h4 class="title">{title.text}</h4>;
      const Description = description?.visible && (
        <span class="description">{description.text}</span>
      );
      const style =
        (direction && {
          textAlign: direction
        }) ||
        {};

      return (
        <div class="chart-describe" style={style}>
          {Title}
          {Description}
        </div>
      );
    };
  }
});
