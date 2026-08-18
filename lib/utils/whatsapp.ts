export const WHATSAPP_NUMBER = "+97433680965";

export interface WhatsAppMessage {
  service?: string;
  page?: string;
  button?: string;
  customMessage?: string;
}

export function generateWhatsAppLink(message: WhatsAppMessage): string {
  const baseUrl = "https://wa.me";
  const number = WHATSAPP_NUMBER.replace(/\s/g, "");

  let text = "Hello! I'm interested in KESSAB SOLAR services.";

  if (message.service) {
    text += `\n\nService: ${message.service}`;
  }

  if (message.page) {
    text += `\n\nPage: ${message.page}`;
  }

  if (message.button) {
    text += `\n\nClicked: ${message.button}`;
  }

  if (message.customMessage) {
    text += `\n\n${message.customMessage}`;
  }

  text += "\n\nI would like to discuss this further.";

  const encodedText = encodeURIComponent(text);
  return `${baseUrl}/${number}?text=${encodedText}`;
}

// Predefined messages for different contexts
export const whatsappMessages = {
  contact: {
    service: "General Inquiry",
    page: "Contact Section",
    button: "Schedule Consultation",
    customMessage:
      "I would like to schedule a consultation to discuss solar energy solutions.",
  },
  dedicatedManagers: {
    service: "System Design",
    page: "Solar Design Service",
    button: "Get Consultation",
    customMessage:
      "I'm interested in getting a professional solar system design consultation for my property.",
  },
  customerCentric: {
    service: "Installation Support",
    page: "Installation Service",
    button: "Talk to Us",
    customMessage:
      "I would like to learn more about your professional installation services and system options.",
  },
  marketInsights: {
    service: "System Monitoring",
    page: "Monitoring Service",
    button: "Contact Our Team",
    customMessage:
      "I'm interested in learning about your 24/7 system monitoring and maintenance services.",
  },
  tradingPlatforms: {
    service: "Solar Products",
    page: "Solar Solutions",
    button: "Contact Support",
    customMessage:
      "I need assistance with solar system selection or have questions about available products.",
  },
  header: {
    service: "General Inquiry",
    page: "Header Navigation",
    button: "Contact",
    customMessage:
      "I would like to discuss solar energy solutions and learn more about KESSAB SOLAR services.",
  },
  footer: {
    service: "General Inquiry",
    page: "Footer",
    button: "Contact Information",
    customMessage:
      "I found your contact information in the footer and would like to discuss solar energy services.",
  },
};
