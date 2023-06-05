import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Callout(props: any) {
  return (
    <div className="flex items-center mt-6 rounded-lg border py-2 border-yellow-200/30 bg-yellow-700/30 text-yellow-200">
      <div className="select-none pr-3 pl-2">
        <AiOutlineInfoCircle size={22} />
      </div>
      <div className="w-full min-w-0 leading-7">{props.children}</div>
    </div>
  );
}
