export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  brands?: string[];
}

export const services: Service[] = [
  {
    id: "software-installation",
    title: "Software Installation & Setup",
    shortDescription:
      "Full installation of OEM diagnostic and fleet-management software for all supported brands.",
    fullDescription:
      "We handle end-to-end software installation including licence activation, firmware flashing, and post-install verification. Our technicians ensure your workshop tools are configured correctly the first time.",
    icon: "Download",
    features: [
      "OEM software installation",
      "Licence activation & registration",
      "Firmware & patch updates",
      "Remote or on-site service",
      "Post-install testing",
    ],
    brands: ["Mercedes-Benz", "Volvo", "Scania", "Renault", "MAN", "Hino", "Iveco"],
  },
  {
    id: "os-upgrade",
    title: "OS Upgrades & Configuration",
    shortDescription:
      "Windows 10/11 upgrades, migration, and system optimisation for diagnostic workstations.",
    fullDescription:
      "Diagnostic tools demand specific OS environments. We perform clean Windows installations, migrate existing configurations, harden security settings, and tune performance so your workshop PC runs flawlessly.",
    icon: "Monitor",
    features: [
      "Windows 10 / 11 upgrade",
      "Clean install & data migration",
      "Driver installation",
      "Performance tuning",
      "Security hardening",
    ],
  },
  {
    id: "diagnostics",
    title: "Brand-Specific Diagnostics",
    shortDescription:
      "Deep-level fault reading, coding, and ECU programming for trucks, construction equipment & cars.",
    fullDescription:
      "Using genuine OEM tools, we perform full fault-code reading, actuation tests, ECU programming, and variant coding for cars, trucks, and heavy construction equipment across all supported brands.",
    icon: "Cpu",
    features: [
      "Full DTC reading & clearing",
      "Live data & actuator tests",
      "ECU & TCU programming",
      "Variant coding",
      "Software version updates",
    ],
    brands: ["Benz", "Volvo", "Scania", "Renault", "MAN", "Hino", "Hyundai", "JCB", "Caterpillar"],
  },
  {
    id: "tecdoc",
    title: "TecDoc Catalogue Setup",
    shortDescription:
      "Installation, licence management, and configuration of the TecDoc parts catalogue.",
    fullDescription:
      "The TecDoc catalogue is essential for fast, accurate parts identification. We install and configure TecDoc on single or networked workstations, manage subscriptions, and train your staff on efficient use.",
    icon: "BookOpen",
    features: [
      "TecDoc installation & activation",
      "Network / multi-seat setup",
      "Subscription management",
      "Data updates & syncing",
      "User training",
    ],
  },
  {
    id: "iveco-easy",
    title: "Iveco EASY Diagnostic Tool",
    shortDescription:
      "Official Iveco EASY software installation, configuration and training for Iveco vehicles.",
    fullDescription:
      "Iveco EASY is the factory diagnostic platform for all Iveco commercial vehicles. We provide complete setup, VCI interface configuration, and remote/on-site support for workshops in the UAE.",
    icon: "Wrench",
    features: [
      "Iveco EASY installation",
      "VCI interface setup",
      "ECU read/write support",
      "Remote assistance",
      "Troubleshooting",
    ],
    brands: ["Iveco"],
  },
  {
    id: "printer-software",
    title: "Printer Software & Support",
    shortDescription:
      "Driver installation, network printing setup, and troubleshooting for all major printer brands.",
    fullDescription:
      "From standalone laser printers to enterprise multi-function devices, we handle driver installation, network printing configuration, scan-to-email setup, and ongoing troubleshooting.",
    icon: "Printer",
    features: [
      "Driver installation & update",
      "Network printer configuration",
      "Scan-to-email / folder setup",
      "Print queue management",
      "Remote diagnostics",
    ],
  },
  {
    id: "outlook-setup",
    title: "Outlook & Email Configuration",
    shortDescription:
      "Microsoft Outlook and Exchange / Microsoft 365 account setup, migration, and support.",
    fullDescription:
      "We configure Microsoft Outlook for Exchange, Microsoft 365, IMAP, and POP3 accounts. Services include new account setup, mailbox migration, signature creation, and calendar/contacts synchronisation.",
    icon: "Mail",
    features: [
      "New account configuration",
      "Microsoft 365 / Exchange setup",
      "Mailbox migration",
      "Signature & rule creation",
      "Calendar & contacts sync",
    ],
  },
];
