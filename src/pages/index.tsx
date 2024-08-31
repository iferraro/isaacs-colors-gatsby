import * as React from "react";
import data from "../../public/static/isaacs-custom-colors.json";
import type { HeadFC, PageProps } from "gatsby";

type Color = {
  id: string;
  name: string;
  hex: string;
};

export default function IndexPage() {
  const colors: Color[] = data;
  console.log(colors, "<- colors");

  const colorRows = colors.map((c) => {
    return (
      <tr className="border-2 border-white text-white">
        <td className="p-4 pr-2">
          <div className="w-12 h-6" style={{ background: c.hex }} />
        </td>
        <td className="p-4 pl-2">{c.name}</td>
        <td className="p-4">{c.hex}</td>
      </tr>
    );
  });

  return (
    <main className="flex justify-center items-center bg-black">
      <section className="flex flex-col justify-center max-w-96 bg-black">
        <h1 className="text-white">Isaac's Custom Colors</h1>
        <table className="border-2 border-white">
          <thead>
            <tr className="text-white">
              <th>Box</th>
              <th>Name</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>{colorRows}</tbody>
        </table>
      </section>
    </main>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
