# Muskan Khanum — Portfolio

A responsive, multi-page personal portfolio for Muskan Khanum, an Information Science student. The site presents her education, Generative AI internship, interests, skills and five project overviews using semantic HTML, shared CSS and vanilla JavaScript.

## Features

- Five linked pages: Home, About, Skills, Projects and Contact.
- Responsive layouts and a keyboard-operable mobile navigation menu.
- Accessible contact form with required field and email format validation.
- Consistent visual identity, project cards, and reduced-motion support.
- No invented project metrics, awards, deployment links or contact details.

## Technologies

- HTML5 for semantic page structure and content.
- CSS3 for layout, responsive styles, focus states and reduced-motion support.
- Vanilla JavaScript for the mobile menu and frontend form validation.
- Google Fonts (DM Sans and Manrope) are requested from Google Fonts; system fonts are fallbacks.

## Folder structure

```text
Thiranex-portfolio/
├── index.html
├── about.html
├── skills.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/     (reserved for a supplied profile image)
│   └── icons/      (reserved for future icon assets)
└── README.md
```

## Run locally

Open `index.html` in a modern browser. For a local HTTP server, from this directory run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. No build or package installation is needed.

## Test

- Navigate each page from the header and footer.
- Use Tab and Shift+Tab to inspect keyboard order; activate the skip link, menu and form controls with the keyboard.
- At a narrow viewport, open and close the navigation menu, including with Escape.
- On Contact, submit an empty form, an invalid email and a complete valid form to check inline messages and status feedback.
- Inspect at mobile, tablet and desktop widths. External HTML validation and Lighthouse audits were not run as part of this build.

## Accessibility

Each page has a skip link, one main landmark, a labeled navigation, a page-specific title and description, visible focus indicators, readable heading structure, and responsive layouts. The mobile menu exposes its expanded state. The contact fields have explicit labels, described errors, required validation, and a live status message. Reduced-motion preferences are respected. No profile photo was supplied, so the home page uses a CSS illustration with a descriptive accessible label.

## SEO

Every page has a unique title and meta description, UTF-8 encoding, viewport metadata and a descriptive page heading. No canonical URL, sitemap or robots file is included because no deployed website URL was provided.

## Limitations

- The contact form only validates in the browser. It does not send or store messages; backend or email service integration is required.
- No personal photograph, public email address or project links were supplied. The profile visual is an illustration placeholder.
- No external validator or Lighthouse scores are claimed. Google Fonts require network access; fallback fonts remain available.
