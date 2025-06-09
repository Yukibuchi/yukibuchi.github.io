"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import avatarImageRef from "@/assets/avatar.png";

export const EffectAvatar = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      className="relative mt-12 cursor-pointer"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-600  to-gray-200 p-1 animate-spin-slow opacity-80">
        <div className="w-full h-full rounded-full" />
      </div>
      <Image
        className="w-50 h-50 force-none object-cover rounded-full border-transparent border-4 relative"
        src={avatarImageRef}
        width={500}
        height={500}
        alt="avatar"
      />
    </Tilt>
  );
};
