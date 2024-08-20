import * as React from "react";
import data from "../../public/static/isaacs-custom-colors.json";
import type { HeadFC, PageProps } from "gatsby";

type Color = {
  name: string;
  hex: string;
};

export default function IndexPage() {
  const colors: Color[] = data;
  console.log(colors, "<- colors");

  const colorRows = colors.map((c) => {
    return (
      <tr>
        <td>{c.name}</td>
        <td>{c.hex}</td>
      </tr>
    );
  });

  return (
    <main className="flex justify-center bg-blue-700">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>{colorRows}</tbody>
      </table>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
