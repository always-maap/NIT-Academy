import Container from "@/components/Container";
import { basic } from "@/db/course-list/basic";
import { general } from "@/db/course-list/general";
import { main } from "@/db/course-list/main";
import { specialized } from "@/db/course-list/specialized";

const tHead = ["", "درس", "ویدئو", "جزوه و کتاب"];
const generalTHead = ["", "درس", "جزوه و کتاب"];

const BASIC = [
  ["❌", "❌"],
  ["🔄", "🔄"],
  ["❌", "❌"],
  ["✅", "❌"],
  ["❌", "❌"],
  ["✅", "🔄"],
  ["✅", "❌"],
  ["❌", "❌"],
];

const GENERAL = [
  ["✅"],
  ["✅"],
  ["✅"],
  ["✅"],
  ["✅"],
  ["❌"],
  ["❌"],
  ["❌"],
  ["❌"],
  ["❌"],
  ["❌"],
  ["❌"],
  ["❌"],
  ["✅"],
  ["✅"],
  ["✅"],
  ["❌"],
  ["✅"],
  ["✅"],
];

const SPECIALIZED = [
  ["❌", "❌"],
  ["❌", "❌"],
  ["✅", "❌"],
  ["  ", "❌"],
  ["  ", "❌"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["  ", "🔄"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["🔄", "🔄"],
];

const MAIN = [
  ["❌", "❌"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["✅", "🔄"],
  ["✅", "🔄"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["🔄", "🔄"],
  ["  ", "🔄"],
  ["❌", "❌"],
  ["🔄", "🔄"],
  ["❌", "❌"],
  ["❌", "❌"],
  ["  ", "✅"],
  ["  ", "❌"],
  ["🔄", "🔄"],
  ["✅", "🔄"],
  ["🔄", "🔄"],
  ["✅", "🔄"],
  ["✅", "🔄"],
  ["  ", "❌"],
];

export default function Track() {
  return (
    <main>
      <Container>
        <div className="flex flex-wrap justify-center gap-8 pb-6">
          <CourseTable
            tHead={tHead}
            title={basic.title}
            status={BASIC}
            subjects={basic.subjects.map((s) => s.title)}
          />
          <CourseTable
            tHead={tHead}
            title={specialized.title}
            status={SPECIALIZED}
            subjects={specialized.subjects.map((s) => s.title)}
          />
          <CourseTable
            tHead={tHead}
            title={main.title}
            status={MAIN}
            subjects={main.subjects.map((s) => s.title)}
          />
          <CourseTable
            tHead={generalTHead}
            title={general.title}
            status={GENERAL}
            subjects={general.subjects.map((s) => s.title)}
          />
        </div>
      </Container>
    </main>
  );
}

type CourseTableProps = {
  tHead: string[];
  title: string;
  status: string[][];
  subjects: string[];
};

function CourseTable(props: CourseTableProps) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold my-4">{props.title}</h2>
      <table className="">
        <thead>
          <tr>
            {props.tHead.map((t) => (
              <th key={t} className="border border-slate-600 px-4 py-2">
                {t}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.subjects.map((s, i) => (
            <tr key={`${s}-${i}`}>
              <td className="border border-slate-600 px-4 py-2">{i + 1}</td>
              <td className="border border-slate-600 px-4 py-2">{s}</td>
              {props.status[0].map((_, j) => (
                <td className="border border-slate-600 px-4 py-2 text-center">
                  {props.status[i][j]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
