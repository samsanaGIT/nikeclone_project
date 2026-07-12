# Nike Clone Project

Hi! This is my student project where I built a UI clone of the official Nike website to practice my frontend development skills.

**Original Website Cloned:** [https://www.nike.com/](https://www.nike.com/)

## What Was Cloned (Project Scope)
This project focuses strictly on 3 specific pages and their frontend UI layouts. Here is exactly what I built:
- **Landing Page**: Fully responsive homepage featuring the main Hero Carousel, Trending items, promotional banners (like ACG, KD, Jordan), and the Category Grid.
- **Men's Page**: Dedicated page for the Men's section featuring a custom Hero Carousel, Shop by Category grid, and Featured Footwear/Clothing.
- **Responsive Cushioning Page**: A specialized promotional page accessible by clicking the Responsive Cushioning banner on the Men's Page.
- **Authentic Icons**: Used the exact same brand icons (like the Swoosh, Jumpman, Converse) to accurately match the original site's look and feel.
- **Navigation & Footer**: Responsive top navigation bar (with mobile menu) and the global footer.
- **Basic Interactivity**: In-memory shopping bag (add/remove items) and wishlist functionality (no backend database).

## What Was NOT Cloned (Differences)
Since this is a frontend UI practice project, many backend and full-site features were deliberately left out:
- **No Backend / Database**: All products, prices, and images are hardcoded data. 
- **No Checkout / Payment**: You can add items to the bag, but you cannot actually buy them or check out.
- **No User Authentication**: There is no login, signup, or user profile system.
- **No Product Detail Pages**: Clicking on a shoe in the carousels does not take you to a dedicated product page.
- **Missing Pages**: I only focused on cloning the Main Landing page, the Men's page, and the Responsive Cushioning page. Other categories (Women, Kids, Sale, Custom) are completely ignored.

## What I Learned & Used
- **React**: For building the user interface and components.
- **Vite**: To run and build the project quickly.
- **Tailwind CSS**: To style everything and make it look like the real Nike site.
- **Responsive Design**: Making sure the site looks good on both phones and computer screens.

## How to Run This Project
1. Clone the repository:
   ```bash
   git clone https://git.clp.kr/anbschool/5th/atech/nikeclone_sana.git
   cd nikeclone_sana
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the local server:
   ```bash
   npm run dev
   ```

## Disclaimer
This is strictly a student learning project. All images, logos, and brand assets belong to Nike, Inc. This project is not affiliated with Nike in any way.
