"use client";

import { PullDown } from "./components/PullDown";
import { methodData } from "./dummyData";
import { useState } from "react";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("");

  // 言語を変更した時
  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    setSelectedFramework("");
    setSelectedVersion("");
  };
  // フレームワークを変更した時
  const handleFrameworkChange = (value: string) => {
    setSelectedFramework(value);
    setSelectedVersion("");
  };
  // バージョンを変更した時
  const handleVersionChange = (value: string) => {
    setSelectedVersion(value);
  };

  return (
    <main>
      <h1>連動するプルダウンのサンプル</h1>
      <div>
        <PullDown
          options={[
            { value: "", label: "言語を選択してください" },
            ...methodData.map((data) => ({
              value: data.language,
              label: data.label,
            })),
          ]}
          onChange={(e) => handleLanguageChange(e.currentTarget.value)}
        />
        <PullDown
          options={[
            { value: "", label: "フレームワークを選択してください。" },
            ...(
              (selectedLanguage &&
                methodData.find((data) => data.language === selectedLanguage)
                  ?.frameworks) ||
              []
            ).map((data) => ({
              value: data.name,
              label: data.label,
            })),
          ]}
          onChange={(e) => handleFrameworkChange(e.currentTarget.value)}
        />
        <PullDown
          options={[
            { value: "", label: "バージョンを選択してください。" },
            ...(
              (selectedFramework &&
                methodData
                  .find((data) => data.language === selectedLanguage)
                  ?.frameworks.find((fw) => fw.name === selectedFramework)
                  ?.versions) ||
              []
            ).map((version) => ({
              value: version,
              label: version,
            })),
          ]}
          onChange={(e) => handleVersionChange(e.currentTarget.value)}
        />
      </div>
    </main>
  );
}
