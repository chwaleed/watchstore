import { AbsoluteCenter, Image } from "@chakra-ui/react";
import React from "react";

function FadeInImageBox({
  src,
  alt,
  actionBtn = "",
}: {
  src?: string;
  alt?: string;
  actionBtn?: React.ReactNode;
}) {
  return (
    <div className="group  relative  overflow-hidden">
      <Image
        alt={alt ?? "Image"}
        className=" transition-transform duration-500 group-hover:scale-110"
        src={
          src ||
          "https://louris.wpbingosite.com/wp-content/uploads/2025/04/instagram.jpg"
        }
      />
      {actionBtn && <AbsoluteCenter axis="both">{actionBtn}</AbsoluteCenter>}
    </div>
  );
}

export default FadeInImageBox;
