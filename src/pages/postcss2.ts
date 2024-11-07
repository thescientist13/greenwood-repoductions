import { html } from "lit";

export const isolation = true;
export async function getBody() {
  return html`
    <body>
      <p class="spectrum-Body spectrum-Body--sizeXL">
        If you inspect these elements, you will see the specturm styles have not
        successfully imported.
      </p>
      ---
      <p class="spectrum-Body spectrum-Body--sizeM">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p class="spectrum-Detail spectrum-Detail--sizeXL">
        Sed id justo vel nisi interdum lobortis at tempus odio.
      </p>
      <code class="spectrum-Code spectrum-Code--sizeS"
        >Duis ornare justo in dolor placerat, ut molestie est vestibulum.</code
      >
    </body>
  `;
}
export async function getFrontmatter() {
  return {
    title: "Postcss with bareword imports",
    layout: "postcss2",
  };
}
export default { getFrontmatter, getBody };