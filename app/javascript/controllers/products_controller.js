import { Controller } from "@hotwired/stimulus";
import { default as Paragon } from "@useparagon/connect/ConnectSDK";

const ConnectSDK = Paragon.default;

export default class extends Controller {
  async connect() {
    if (!document.querySelector("#paragon-connect-frame")) {
      window.paragon = new ConnectSDK();
    }

    // Do not attempt authenticate() if the page is a cached Turbo preview
    if (!document.documentElement.hasAttribute("data-turbo-preview")) {
      await paragon.authenticate(
        this.element.dataset.projectId,
        this.element.dataset.token
      );
    }

    const integrationsEl = document.createElement("div");
    integrationsEl.style = "display: flex; flex-wrap: wrap; gap: 10px;";

    paragon.getIntegrationMetadata().forEach((integration) => {
      const integrationTile = document.createElement("div");
      integrationTile.innerHTML = `<img src="${integration.icon}" width="20" /><p>${integration.name}</p>`;
      integrationTile.style =
        "display: flex; align-items: center; gap: 8px; margin-bottom: 10px; border: 1px solid #ccc; padding: 8px 24px; width: 200px; border-radius: 10px; font-family: sans-serif;";
      integrationTile.onclick = async () => {
        paragon.connect(integration.type);
      };
      integrationsEl.appendChild(integrationTile);
    });

    this.element.replaceChildren(integrationsEl);
  }
}
