// All the business contact details in one place.
// The header, the footer and the contact page all read from here,
// so a phone number or address only ever needs changing once.
export const contactInfo = {
  phone: "0433 571 482",
  // Australian mobile in international form, used for the tap-to-call link.
  phoneHref: "tel:+61433571482",
  address: ["22/55 Commerce Circuit", "Yatala", "Queensland 4207", "Australia"],
  emails: ["Contact@ridedynamics.com.au", "Admin@ridedynamics.com.au"],
  abn: "85 164 273 876",
};

// The four words listed beside the logo in the footer.
export const footerServices = ["Suspension", "Servicing", "Installation", "Tuning"];

// The credit line in the red bar at the very bottom of every page.
// The year is worked out automatically, so it never needs editing.
export const footerCredit = {
  // Shown on every page.
  business: "Ride Dynamics",
  // Shown on the homepage only, after the copyright. Only the agency
  // name is a link - the words in front of it stay as plain text.
  homepageCreditPrefix: "Optimized by ",
  homepageCreditLink: "SEO Boost Australia",
  homepageCreditHref: "https://seoboost.au",
};
