import { EffectAvatar } from "@/components/features/effect-avatar";
import * as Icon from "@/components/icons";
import { tv } from "tailwind-variants";

const card = tv({
  base: [
    "max-w-[800px] flex flex-col md:flex-row justify-center w-full h-auto md:h-[400px] bg-white rounded-[40px]",
    "items-center md:items-start relative m-auto cs-shadow",
  ],
});

export default async function Home() {
  return (
    <div className={card()}>
      <EffectAvatar />
      <div className="md:ml-10 mt-4 text-center md:text-start mb-12 md:mb-0 md:mt-18 font-medium mx-0 md:mr-8">
        <p className="font-name text-4xl font-black tracking-[2px]">
          Yukibuchi Reina
        </p>
        <p className="text-[20px] mt-2 ml-0.5">
          Web Engineer / App Enginner 🌱
        </p>
        <div className="flex mt-8">
          <div className="flex flex-col space-y-2 items-center">
            <p className="font-bold text-[18px] mr-2">💻 Skills</p>
            <p>Next.js & Vercel 🚀</p>
            <p>React Native 🌱</p>
            <p>Google Cloud 🌱</p>
            <p>Angular 💤</p>
          </div>
          <div className="ml-8 md:ml-16 flex flex-col space-y-2 items-center">
            <p className="font-bold text-[18px]">🚀 Products</p>
            <a
              href="#"
              className="flex items-center hover:text-blue-700 duration-200 transition-colors"
            >
              xxxxxx xxxxxx
              <Icon.OpenInNew className="ml-0.5" />
            </a>
          </div>
        </div>
      </div>

      <button className="cursor-pointer">
        <Icon.Darkmode className="absolute right-8 bottom-8" />
      </button>

      <div className="absolute -left-4 top-12 space-y-2">
        <a
          href="https://github.com/Yukibuchi"
          className="bg-white block rounded-full cursor-pointer p-3.5 hover:bg-gray-50 shake group"
        >
          <Icon.Github className="transition-all duration-300 group-hover:scale-120" />
        </a>
        <button className="bg-white block rounded-full cursor-pointer p-3.5 hover:bg-gray-50 shake animate-shake group">
          <Icon.Notion className="transition-all duration-300 group-hover:scale-120" />
        </button>
        <button className="bg-white block rounded-full cursor-pointer p-3.5 hover:bg-gray-50 shake animate-shake group">
          <Icon.Spotify className="transition-all duration-300 group-hover:scale-120" />
        </button>
      </div>
    </div>
  );
}
