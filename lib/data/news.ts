export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readingTime: string;
  author: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: "scania-sdp3-update-2026",
    title: "New Scania SDP3 v2.52 Update — What's New",
    excerpt:
      "Scania has released SDP3 version 2.52 with enhanced ECU coverage for the new Super engine and improved guided diagnostics workflows.",
    content: `
Scania recently released SDP3 version 2.52, bringing significant improvements to the diagnostic experience for Scania trucks and buses.

## Key Updates in v2.52

- **Super Engine Coverage**: Full ECU support for the Scania Super 13-litre engine, including injector coding and after-treatment system calibration.
- **Guided Diagnostics**: New step-by-step guided diagnostic routines for common fault codes, reducing workshop time.
- **Improved CAN Logging**: Enhanced real-time data logging with export to CSV for off-board analysis.
- **PTT Integration**: Seamless workflow with the updated Scania Programmer 3 (PTT) for parameter programming.

## How to Update

If you are an existing SDP3 customer, the update is available through the Scania Online portal. Our team can assist with the update and ensure your VCI adapter firmware is also current.

**Contact us today** to schedule your SDP3 update or book a remote assistance session.
    `,
    date: "2026-02-15",
    category: "Software Update",
    readingTime: "3 min read",
    author: "AutoDiag Team",
  },
  {
    slug: "volvo-ptt-3-new-features",
    title: "Volvo PTT 3.x — Remote Programming & Cloud Features",
    excerpt:
      "Volvo's latest Premium Tech Tool 3 introduces cloud-based ECU updates and remote programming capabilities for authorised workshops.",
    content: `
Volvo Trucks has updated its Premium Tech Tool (PTT) to version 3.x, adding cloud connectivity and remote programming features that modernise how workshops interact with Volvo vehicles.

## What's New in PTT 3.x

- **Cloud ECU Updates**: Download and apply ECU software updates directly from Volvo's cloud without manual file management.
- **Remote Programming**: With customer consent, Volvo technicians can remotely programme ECUs, reducing vehicle downtime.
- **Connected Workshop**: Live vehicle data streaming to Volvo ASIST (customer support system) for real-time guidance.
- **Expanded Bus Coverage**: New routines for Volvo 9700 and BZL electric bus platforms.

## Impact for Workshops

Workshops with PTT 3.x licences will see significant reductions in programming time. Our team offers installation, licence renewal, and user training for PTT in the Chennai region.
    `,
    date: "2026-01-28",
    category: "Product News",
    readingTime: "4 min read",
    author: "AutoDiag Team",
  },
  {
    slug: "tecdoc-2026-catalog-launch",
    title: "TecDoc 2026 Catalogue: Expanded EV & Hybrid Parts Coverage",
    excerpt:
      "TecDoc's 2026 catalogue release doubles its electric and hybrid vehicle parts data, covering over 2 million new part numbers from 600+ suppliers.",
    content: `
TecDoc has released its 2026 parts catalogue update, representing the largest single expansion in the catalogue's history — driven by the rapid growth of EV and hybrid vehicle fleets.

## 2026 Highlights

- **EV & Hybrid Expansion**: Over 2 million new part numbers covering batteries, inverters, on-board chargers, and high-voltage wiring harnesses.
- **Indian Market OEMs**: Enhanced coverage for Tata, Mahindra, and Force Motors — important for South Asian workshops.
- **Improved Search Speed**: TecDoc's new SOLR-based search engine delivers results up to 5× faster.
- **Mobile App**: The TecDoc app now supports offline catalogue access for field technicians.

## Upgrading Your TecDoc Licence

Contact us to upgrade your TecDoc subscription to the 2026 catalogue. We can assist with data refresh, server-side hosting, and multi-user configurations.
    `,
    date: "2026-01-10",
    category: "Industry News",
    readingTime: "3 min read",
    author: "AutoDiag Team",
  },
];
