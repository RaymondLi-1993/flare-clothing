module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: `fadeIn 2s`,
        fadeInSlow: `fadeIn 3s`,
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      fontFamily: {
        Nunito: [`Nunito`],
        openSans: [`Open`, `Sans`],
      },
      zIndex: {
        positive: 9999,
        negative: -9999,
      },
      inset: {
        "1/2": "50%",
      },
    },
  },
  variants: {},
  plugins: [],
};
