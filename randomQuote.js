// based on https://gist.github.com/ScottKillen/ec858f6f7014fc41451b71e805413794

const url = "https://api.quotable.io/random";
const title = "Daily quote";

async function randomQuote() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
  /* Admonition color
   * This generates the RGB components for a random color.
   * Each component is generated in the 129 to 255 range to look better
   * in dark themes. Remove '128 + ' from each component below for light
   * themes.
   */
      const red = Math.floor(128 + Math.random() * 128);
      const green = Math.floor(128 + Math.random() * 128);
      const blue = Math.floor(128 + Math.random() * 128);
  /* Output
   * This uses a template literal (https://www.javatpoint.com/es6-template-literals) to format the output
   * for the obsidian note. Note that new lines are honored.
   *
   * This outputs a code block that will be formatted by the Admonition (https://github.com/valentine195/obsidian-admonition)
   * plugin.
   */
      const output = `\`\`\`ad-quote
title: ${title}
color: ${red}, ${green}, ${blue}

${data.content}

— <cite>${data.author}</cite>
\`\`\``;

      return output;
    } else {
      return `An error occurred. See {data}`;
    }
  } catch (error) {
    return `An error occurred: ${error.message}`;
  }
}

module.exports = randomQuote;
