import clsx from "clsx";
import type { HTMLAttributes } from "react";

type Props = {
  children: any;
} & HTMLAttributes<HTMLDivElement>;

export default function Container(props: Props) {
  return (
    <main className={clsx("container max-w-l mx-auto px-3", props.className)}>
      {props.children}
    </main>
  );
}
