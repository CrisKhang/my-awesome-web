"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Project = { slug: string; title: string; tag: string; image: string };
type Tab = { id: string; label: string };

type Props = {
  tabs: readonly Tab[];
  projects: Readonly<Record<string, readonly Project[]>>;
};

export function DesignLibraryTabs({ tabs, projects }: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? "");

  return (
    <>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === tab.id
                ? "border-[#0084c7] bg-[#0084c7] text-white"
                : "border-slate-300 text-slate-600 hover:border-[#0084c7]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects[active]?.map((item) => (
          <Link
            key={item.slug}
            href={`/thu-vien/${item.slug}`}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="25vw"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold text-[#0084c7]">{item.tag}</span>
              <p className="mt-1 text-sm font-semibold leading-snug text-slate-800 group-hover:text-[#0084c7]">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
