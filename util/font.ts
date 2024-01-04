import { Noto_Sans_KR, Roboto } from "next/font/google";

export const notosans = Noto_Sans_KR({ subsets: ["latin"], weight: "400" });
export const notosans_bold = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "700",
});

export const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const robotoBold = Roboto({
  subsets: ["latin"],
  weight: "700",
});
export const robotoExtraBold = Roboto({
  subsets: ["latin"],
  weight: "900",
});

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xl2: 36,
  xl3: 48,
  xl4: 65,
  logo: 20,
};
