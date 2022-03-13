import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import {
  presetUno,
  presetIcons,
  presetAttributify,
  presetWebFonts,
} from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      theme: {
        colors: {
          woodsmoke: {
            50: "#f4f4f4",
            100: "#e8e8e8",
            200: "#c6c6c6",
            300: "#a3a3a3",
            400: "#5f5f5f",
            500: "#1A1A1A",
            600: "#171717",
            700: "#141414",
            800: "#101010",
            900: "#0d0d0d",
          },
          fuscousgray: {
            50: "#f6f6f6",
            100: "#eeeeee",
            200: "#d4d4d4",
            300: "#b9b9b9",
            400: "#858585",
            500: "#515151",
            600: "#494949",
            700: "#3d3d3d",
            800: "#313131",
            900: "#282828",
          },
          concrete: {
            50: "#fefefe",
            100: "#fefefe",
            200: "#fcfcfc",
            300: "#fafafa",
            400: "#f6f6f6",
            500: "#F2F2F2",
            600: "#dadada",
            700: "#b6b6b6",
            800: "#919191",
            900: "#777777",
          },
          persianred: {
            50: "#fcf5f4",
            100: "#f9eaea",
            200: "#f0cbca",
            300: "#e7acaa",
            400: "#d66e6b",
            500: "#C4302B",
            600: "#b02b27",
            700: "#932420",
            800: "#761d1a",
            900: "#601815",
          },
          apple: {
            50: "#f4fcf6",
            100: "#e8f8ee",
            200: "#c7eed4",
            300: "#a5e3bb",
            400: "#61ce87",
            500: "#1DB954",
            600: "#1aa74c",
            700: "#168b3f",
            800: "#116f32",
            900: "#0e5b29",
          },
          havelockblue: {
            50: "#f4fafe",
            100: "#e8f6fe",
            200: "#c7e8fc",
            300: "#a5d9fa",
            400: "#61bdf6",
            500: "#1DA1F2",
            600: "#1a91da",
            700: "#1679b6",
            800: "#116191",
            900: "#0e4f77",
          },
          selectiveyellow: {
            50: "#fffbf3",
            100: "#fff8e7",
            200: "#ffedc4",
            300: "#ffe3a0",
            400: "#fecd58",
            500: "#FEB811",
            600: "#e5a60f",
            700: "#bf8a0d",
            800: "#986e0a",
            900: "#7c5a08",
          },
          purpleheart: {
            50: "#f9f6fd",
            100: "#f2edfc",
            200: "#dfd1f7",
            300: "#ccb5f1",
            400: "#a57ee7",
            500: "#7F47DD",
            600: "#7240c7",
            700: "#5f35a6",
            800: "#4c2b85",
            900: "#3e236c",
          },
        },
      },
      presets: [
        presetUno(),
        presetIcons(),
        presetAttributify(),
        presetWebFonts(),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
