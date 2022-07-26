/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";
export const content = [];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Sansita", ..._fontFamily.sans],
      display: ["Lalezar"],
      hand: ["Rancho"],
      head: ["Anton"],
      lighten: ["Gruppo"],
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      whiteTrans: "#ffffffae",
      orange: "#fb923c",
      orangeLo: "#f78d36",
      greyLo: "#f1f5f9",
      greyMid: "#cbd5e1",
      greyHi: "#64748b",
      bluesky: "#4ac1ce",
      blueskyLo: "#32bac9",
      red: "#b91c1c",
    },
    spacing: {
      68: "17rem",
      84: "21.5rem",
      88: "22rem",
      112: "28rem",
      128: "32rem",
    },
  },
};
export const plugins = [];
