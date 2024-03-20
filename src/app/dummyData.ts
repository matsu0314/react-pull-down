// フレームワーク型
interface Framework {
  name: string;
  label: string;
  versions: string[];
}
// 言語型
interface MethodData {
  language: string;
  label: string;
  frameworks: Framework[];
}

export const methodData: MethodData[] = [
  {
    language: "Language1",
    label: "言語1",
    frameworks: [
      {
        name: "Framework1",
        label: "言語1-フレームワーク1",
        versions: ["1.0", "1.1", "2.0"],
      },
      {
        name: "Framework2",
        label: "言語1-フレームワーク2",
        versions: ["2.0", "2.1"],
      },
    ],
  },
  {
    language: "Language2",
    label: "言語2",
    frameworks: [
      {
        name: "Framework3",
        label: "言語2-フレームワーク3",
        versions: ["3.0", "3.1"],
      },
    ],
  },
  {
    language: "Language3",
    label: "言語3",
    frameworks: [
      {
        name: "Framework4",
        label: "言語3-フレームワーク4",
        versions: ["4.0", "4.1"],
      },
    ],
  },
];
