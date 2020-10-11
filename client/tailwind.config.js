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
      fontFamily: {
        roboto: [`Roboto`],
      },
      height: {
        l: `22rem`,
        xl: `28rem`,
        xxl: `38rem`,
        xxxl: `43rem`,
      },
      zIndex: {
        negative: -1,
      },
      inset: {
        "1/2": "50%",
      },
    },
  },
  variants: {},
  plugins: [],
};
