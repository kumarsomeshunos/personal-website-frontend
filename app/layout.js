import { Noto_Sans } from "next/font/google";
import "./globals.css";
import GlobalWrapper from "@/components/core/Wrappers/GlobalWrapper";
import { baseData } from "@/data";
import { cookies } from "next/headers";

const notosans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Somesh Kumar",
  description: "Somesh's Personal Website",
};

function themeingEngine() {
  let value = baseData["purewhite"];
  const cookieStore = cookies();
  const themeName = cookieStore.get("themeName")?.value;

  if (themeName) {
    value = baseData[themeName] || value;
  }

  return value;
}

export default function RootLayout({ children }) {
  const baseDataNew = themeingEngine();
  return (
    <html lang="en">
      <body className={notosans.className}>
        <GlobalWrapper
          backgroundMain={baseDataNew.backgroundMain}
          colorMain={baseDataNew.colorMain}
          backgroundWallpaper={baseDataNew.backgroundWallpaper}
          filterWallpaper={baseDataNew.filterWallpaper}
          linkBorderBottom={baseDataNew.linkBorderBottom}
          linkBackgroundColor={baseDataNew.linkBackgroundColor}
        >
          {children}
        </GlobalWrapper>
      </body>
    </html>
  );
}
