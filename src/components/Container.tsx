import { JSX } from "solid-js";
import cn from "classnames";

type Props = {
  children: any;
} & JSX.HTMLAttributes<HTMLDivElement>;

export default function Container(props: Props) {
  return (
    <div class={cn("container max-w-2xl mx-auto", props.class)}>
      {props.children}
    </div>
  );
}
