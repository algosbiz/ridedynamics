// Where the old website's pictures used to live.
//
// The old site named its pictures things like "k-tech.png", and Muse also
// generated resized copies such as "k-tech-crop-u2013.png". Those
// addresses are still in Google's index, so each one is redirected to the
// picture that replaced it. Every entry points at a file that really
// exists in public/images.
//
// The addresses are written exactly as they appear in a URL: spaces are
// %20, and brackets have a backslash in front so the router treats them
// as ordinary characters.
//
// Nothing new belongs here - this only covers the old 2018 website.

export type LegacyImageRedirect = {
  from: string;
  to: string;
};

export const legacyImageRedirects: LegacyImageRedirect[] = [
  { from: "/images/1.jpg", to: "/images/about/suspension-work-1.jpg" },
  { from: "/images/2.png", to: "/images/about/suspension-work-2.png" },
  { from: "/images/3.png", to: "/images/about/suspension-work-3.png" },
  { from: "/images/4.png", to: "/images/about/suspension-work-4.png" },
  { from: "/images/accossato-crop-u2005.png", to: "/images/home/category-brake-components.png" },
  { from: "/images/accossato-crop-u6446.jpg", to: "/images/brakes/accossato-logo.jpg" },
  { from: "/images/accossato-crop-u64462.jpg", to: "/images/brakes/accossato-logo.jpg" },
  { from: "/images/accossato.jpg", to: "/images/brakes/accossato-logo.jpg" },
  { from: "/images/accossato.png", to: "/images/home/category-brake-components.png" },
  { from: "/images/contact-details.png", to: "/images/common/contact-details.png" },
  { from: "/images/icon_menu-red.png", to: "/images/common/menu-icon-red.png" },
  { from: "/images/k-tech-crop-u2013.png", to: "/images/home/category-suspension-parts.png" },
  { from: "/images/k-tech.png", to: "/images/home/category-suspension-parts.png" },
  { from: "/images/k-tech2.png", to: "/images/suspension/k-tech-logo.png" },
  { from: "/images/moto%20cross.jpg", to: "/images/lubricants/rock-oil-motocross.jpg" },
  { from: "/images/moto%20cross165x135.jpg", to: "/images/lubricants/rock-oil-motocross.jpg" },
  { from: "/images/moto%20cross208x170.jpg", to: "/images/lubricants/rock-oil-motocross.jpg" },
  { from: "/images/moto.jpg", to: "/images/lubricants/rock-oil-road-bike.jpg" },
  { from: "/images/moto171x135.jpg", to: "/images/lubricants/rock-oil-road-bike.jpg" },
  { from: "/images/moto215x170.jpg", to: "/images/lubricants/rock-oil-road-bike.jpg" },
  { from: "/images/motor%20bclye%203-crop-u6485.jpg", to: "/images/brakes/accossato-brake-caliper.jpg" },
  { from: "/images/motor%20bclye%203.jpg", to: "/images/brakes/accossato-brake-caliper.jpg" },
  { from: "/images/motor%20bclye%204-crop-u6493.jpg", to: "/images/brakes/accossato-master-cylinder.jpg" },
  { from: "/images/motor%20bclye%204.jpg", to: "/images/brakes/accossato-master-cylinder.jpg" },
  { from: "/images/motor%20bclye%205-crop-u6500.jpg", to: "/images/brakes/accossato-controls.jpg" },
  { from: "/images/motor%20bclye%205.jpg", to: "/images/brakes/accossato-controls.jpg" },
  { from: "/images/motor%20bclye.jpg", to: "/images/brakes/accossato-street-bike.jpg" },
  { from: "/images/motorbecly.jpg", to: "/images/brakes/accossato-race-bike.jpg" },
  { from: "/images/motorbike%20suspension%20pic-crop-u8595.jpg", to: "/images/about/motorcycle-suspension.jpg" },
  { from: "/images/motorbike%20suspension%20pic-crop-u85952.jpg", to: "/images/about/motorcycle-suspension.jpg" },
  { from: "/images/motorbike%20suspension%20pic.jpg", to: "/images/about/motorcycle-suspension.jpg" },
  { from: "/images/motorbyclye.png", to: "/images/suspension/k-tech-road-racing.png" },
  { from: "/images/motorcrooss.png", to: "/images/suspension/k-tech-motocross.png" },
  { from: "/images/oil.png", to: "/images/lubricants/rock-oil-products.png" },
  { from: "/images/rd%20activiti.png", to: "/images/about/ride-dynamics-workshop.png" },
  { from: "/images/rd%20activiti285x218.png", to: "/images/about/ride-dynamics-workshop.png" },
  { from: "/images/rd-page-logo.png", to: "/images/about/ride-dynamics-emblem.png" },
  { from: "/images/rd-page-logo217x217.png", to: "/images/about/ride-dynamics-emblem.png" },
  { from: "/images/ride-dynamics-backdrop.jpg", to: "/images/common/site-backdrop.jpg" },
  { from: "/images/ride-dynamics-company-logo-small.png", to: "/images/logo/ride-dynamics-logo-small.png" },
  { from: "/images/ride-dynamics-company-logo.png", to: "/images/logo/ride-dynamics-logo.png" },
  { from: "/images/ride-dynamics-company-logo468x217.png", to: "/images/logo/ride-dynamics-logo.png" },
  { from: "/images/ride-dynamics-racing-suspension-gold-coast-picture.jpg", to: "/images/home/ride-dynamics-racing-suspension-gold-coast.jpg" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(01\\).png", to: "/images/services/services-photo-1.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(01\\)115x115.png", to: "/images/services/services-photo-1.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(01\\)138x138.png", to: "/images/services/services-photo-1.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(01\\)176x176.png", to: "/images/services/services-photo-1.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(02\\).png", to: "/images/services/services-photo-2.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(02\\)144x83.png", to: "/images/services/services-photo-2.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(02\\)181x104.png", to: "/images/services/services-photo-2.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(02\\)188x109.png", to: "/images/services/services-photo-2.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(03\\).png", to: "/images/services/services-photo-3.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(03\\)188x253.png", to: "/images/services/services-photo-3.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(03\\)62x83.png", to: "/images/services/services-photo-3.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(03\\)78x105.png", to: "/images/services/services-photo-3.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(04\\).png", to: "/images/services/services-photo-4.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(04\\)150x83.png", to: "/images/services/services-photo-4.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(04\\)188x104.png", to: "/images/services/services-photo-4.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(04\\)189x104.png", to: "/images/services/services-photo-4.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(05\\).png", to: "/images/services/services-photo-5.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(05\\)150x83.png", to: "/images/services/services-photo-5.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(05\\)188x104.png", to: "/images/services/services-photo-5.png" },
  { from: "/images/ridy%20dynamics%20-%20poster_picts%20\\(05\\)189x104.png", to: "/images/services/services-photo-5.png" },
  { from: "/images/rock-oil%20web-crop-u7620.png", to: "/images/lubricants/rock-oil-logo.png" },
  { from: "/images/rock-oil%20web-crop-u76202.png", to: "/images/lubricants/rock-oil-logo.png" },
  { from: "/images/rock-oil%20web.png", to: "/images/lubricants/rock-oil-logo.png" },
  { from: "/images/rock-oil%20web303x212.png", to: "/images/lubricants/rock-oil-logo.png" },
  { from: "/images/rock-oil-crop-u2033.png", to: "/images/home/category-lubricants.png" },
  { from: "/images/rock-oil.png", to: "/images/home/category-lubricants.png" },
  { from: "/images/sokbleker%202.jpg", to: "/images/suspension/k-tech-fork-internals.jpg" },
  { from: "/images/sokbleker%203.jpg", to: "/images/suspension/k-tech-cartridge.jpg" },
  { from: "/images/sokbleker.png", to: "/images/logo/ride-dynamics-mark.png" },
  { from: "/images/sokbleker1-crop-u7006.png", to: "/images/suspension/k-tech-shock-absorber.png" },
  { from: "/images/sokbleker1-crop-u70062.png", to: "/images/suspension/k-tech-shock-absorber.png" },
  { from: "/images/sokbleker1.png", to: "/images/suspension/k-tech-shock-absorber.png" },
  { from: "/images/sokbreker.png", to: "/images/common/suspension-unit.png" },
  { from: "/images/spring.jpg", to: "/images/suspension/k-tech-springs.jpg" },
];
