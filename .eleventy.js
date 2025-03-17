const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Add Markdown filter
  let markdownLibrary = markdownIt({ html: true });
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addFilter("markdown", (content) => {
    return markdownLibrary.renderInline(content);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};