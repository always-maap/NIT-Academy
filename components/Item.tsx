import clsx from "clsx";

type Variants = "green" | "blue" | "red" | "orange" | "white";

type Props = {
  children: any;
  variant: Variants;
  available: boolean;
};

export default function Item(props: Props) {
  const colorVariants = {
    green: "bg-[#336347]",
    blue: "bg-[#51adef]",
    red: "bg-[#ef5151]",
    orange: "bg-[#ffb343]",
    white: "bg-[#ecf3f9]",
  };

  const shadowVariants = {
    green: "shadow-[8px_0_0_0_#97c1a9]",
    blue: "shadow-[8px_0_0_0_#2c5776]",
    red: "shadow-[8px_0_0_0_#c62121]",
    orange: "shadow-[8px_0_0_0_#ff9800]",
    white: "shadow-[8px_0_0_0_#e5e5e5]",
  };

  return (
    <div className="h-[50px] w-full flex justify-between items-center mb-2 bg-[#000] pr-5 rounded-lg hover:-translate-y-0.5 transition">
      {props.children}
      <div
        className={clsx(
          "w-[30px] h-full rounded-l-lg mr-3",
          colorVariants[props.available ? props.variant : "white"],
          shadowVariants[props.variant]
        )}
      />
    </div>
  );
}
