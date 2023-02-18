import { RxFile, RxVideo } from "react-icons/rx";

type Props = {
  title: string;
  type: "video" | "note";
};

export default function Source(props: Props) {
  return (
    <div className="h-[40px] gap-2 flex items-center pr-4 pl-2 py-6 border-b">
      <div>
        {props.type === "note" ? <RxFile size={22} /> : <RxVideo size={22} />}
      </div>
      <div className="grow truncate text-sm">{props.title}</div>
    </div>
  );
}
