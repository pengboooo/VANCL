// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px2rem-exclude": {
      remUnit: 75,		// 750的 设计稿    window.devicePoxelRatio  像素比
      exclude: /node_modules/
    }
  }
}
