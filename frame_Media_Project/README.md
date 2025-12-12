# Frame Media Photography

A professional photography portfolio website showcasing wedding, portrait, event, and family photography services based in Canberra, Australia.

## Overview

Frame Media Photography is a modern, responsive photography portfolio website featuring an elegant design with interactive galleries, service showcases, and an integrated contact form. The site is optimized for both desktop and mobile devices, providing a seamless user experience.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Hero Section**: Eye-catching landing page with call-to-action
- **Service Carousel**: Swiper.js powered slider showcasing photography services
- **Dynamic Gallery**: Interactive photo gallery with lightbox functionality
- **Photo Grid**: Additional static photo grid display
- **About Section**: Personal introduction with photographer bio
- **Contact Form**: Integrated Web3Forms for easy client inquiries
- **Social Media Integration**: Direct links to Facebook and Instagram
- **SEO Optimized**: Meta tags and Schema.org structured data included

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with modern CSS features
- **JavaScript**: Interactive functionality
- **[Swiper.js](https://swiperjs.com/)**: Touch slider for services and gallery
- **[Lightbox2](https://lokeshdhakar.com/projects/lightbox2/)**: Image lightbox for gallery viewing
- **[Font Awesome](https://fontawesome.com/)**: Icon library for social media links
- **[Google Fonts](https://fonts.google.com/)**: Playfair Display and Poppins fonts
- **[Web3Forms](https://web3forms.com/)**: Form handling service

## File Structure

```
frame_Media_Project/
│
├── frameMedia.html       # Main HTML file
├── style.css            # Stylesheet
├── frameMedia.js        # JavaScript functionality
├── about.html          # About page (if separate)
├── contact.html        # Contact page (if separate)
├── README.md           # Project documentation
│
├── favicons/
│   ├── favicon.png     # 32x32 favicon
│   └── favicon.ico     # Standard favicon
│
└── images/             # Photography portfolio images
    ├── prateek.jpg     # Photographer photo
    ├── event.jpg
    ├── prego.jpg
    └── ... (additional photos)
```

## Installation & Setup

1. **Clone or download** the project files to your local machine

2. **Open the project** in your preferred code editor

3. **Configure Web3Forms**:
   - Sign up at [Web3Forms](https://web3forms.com/)
   - Replace the `access_key` value in the enquiry form with your own key
   - Located at line 322 in `frameMedia.html`

4. **Update Content**:
   - Replace placeholder images in the `images/` folder with your own photos
   - Update contact information (email, phone)
   - Modify social media links to your profiles

5. **Run the website**:
   - Simply open `frameMedia.html` in a web browser
   - Or use a local server (e.g., Live Server extension in VS Code)

## Configuration

### Contact Form
The contact form uses Web3Forms API. To set it up:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
```

### Social Media Links
Update the following in the contact section:
- Facebook: `https://www.facebook.com/photographyACT`
- Instagram: `https://www.instagram.com/framemediaphotography/`

### Schema.org Data
Update the structured data in the `<head>` section with your actual:
- Website URL
- Logo URL
- Social media profiles
- Contact information

## Services Offered

- **Event Photography**: Special events captured with elegance and creativity
- **Birthday Parties**: Memorable moments from birthday celebrations
- **Portraits**: Professional portrait sessions tailored to individual style
- **Family Photos**: Beautiful family portraits to cherish for generations
- **Wedding Photography**: Capturing special day moments with artistic elegance

## Contact Information

- **Email**: framemediaphotography@gmail.com
- **Phone**: 0424919975
- **Location**: Canberra, Australia
- **Facebook**: [photographyACT](https://www.facebook.com/photographyACT)
- **Instagram**: [@framemediaphotography](https://www.instagram.com/framemediaphotography/)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add blog section for photography tips
- [ ] Implement booking calendar system
- [ ] Add client testimonials section
- [ ] Create pricing packages page
- [ ] Add video portfolio section
- [ ] Implement dark mode toggle

## Credits

- **Developer**: Swati Sharma
- **Photography**: Frame Media Photography
- **Photographer**: Prateek

## License

© 2026 Frame Media Photography. All rights reserved.

---

**Note**: This is a portfolio website for professional photography services. All images are property of Frame Media Photography.
