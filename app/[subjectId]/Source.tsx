import { RxCube } from "react-icons/rx";
import { ImFileText2, ImFileVideo } from "react-icons/im";

type Props = {
  title: string;
  type: "video" | "note" | "etc";
};

export default function Source(props: Props) {
  return (
    <div className="h-[40px] gap-2 flex items-center pr-4 pl-2 py-6 border-b">
      <div>
        {props.type === "etc" ? (
          <RxCube size={20} />
        ) : props.type === "note" ? (
          <ImFileText2 size={18} />
        ) : (
          <ImFileVideo size={18} />
        )}
      </div>
      <div className="grow truncate text-sm">{props.title}</div>
    </div>
  );
}
