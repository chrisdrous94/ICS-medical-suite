# ICan School patient information leaflets

## Preview

Unzip the download, keep the folder structure intact and open `index.html` in a browser. The local guides, search, logo, mascot and fonts work offline. NHS references and other external links require internet access.

Open a school guide and select **Print leaflet**. Choose **A4**, **Landscape**, and **Print on both sides** with **Flip on short edge**. Use **Actual size / 100%** and turn off browser headers and footers. The English leaflet prints on the front and the Russian leaflet prints on the back of one sheet. When saving as PDF, keep both pages and use the same settings when printing the PDF.

Staff can mark the care they gave under **What we did** and add the incident time and notes by hand. For an external NHS leaflet, use the NHS document viewer’s print controls.

For a web-server preview, open a terminal in this folder and run `python -m http.server 8000 --bind 127.0.0.1`. Open [the local preview](http://127.0.0.1:8000/) in your browser. Stop the server with Ctrl+C.

## Deployment

Ask a local clinician to review the school guides and confirm the emergency wording and school return advice before sharing the site with families. Use a private staging address for review. After sign-off, update the clinical-review wording in the HTML and decide whether search engines should index the site. The draft pages include a `noindex` tag, which does not provide access control.

Upload the contents of this folder to a static web host or a folder on the school’s web server, keeping `index.html`, `styles.css`, `app.js`, `leaflets/` and `assets/` together. No build step or database is required. Open the resulting HTTPS address and check a leaflet link, search, category filtering and the NHS references on desktop and mobile.

## Sources and branding

- The [Mid Yorkshire Teaching NHS Trust A&E leaflet directory](https://www.midyorks.nhs.uk/accident-and-emergency-patient-information-leaflets) informed the library’s structure and supplies the 48 external references. Its materials include UK service numbers and discharge advice. The original directory is linked in case individual URLs move.
- The 15 school guides are original, English-language drafts for families. Emergency instructions use 112, as listed by the [Cyprus Ambulance Service](https://www.shso.org.cy/en/plirofories-gia-asthenofora/).
- The logo, uploaded mascot, school palette and Jost typography follow [ICan School’s website](https://icanskill.com/school). Jost’s license is bundled in `assets/jost-OFL.txt`.
