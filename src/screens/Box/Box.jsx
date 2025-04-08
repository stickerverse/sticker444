import React from "react";
import { AspectRatio } from "../../components/ui/aspect-ratio";

export const Box = () => {
  return (
    <main className="w-full h-full overflow-auto">
      <AspectRatio ratio={1913 / 4555} className="w-full h-full">
        <img
          className="w-full h-full object-contain"
          alt="Sticker Junkie website preview"
          src="https://c.animaapp.com/UvvTHcB1/img/https---www-stickerjunkie-com--by-html-to-design----free-version.png"
        />
      </AspectRatio>
    </main>
  );
};
