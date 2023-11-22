# Personal Portfolio

## Table of Contents

> -	[Overview](#overview)
> -	[Description](#description)
> -	[User Experience](#user-experience)
> -	[Features](#features)
> -	[Technologies Used](#technologies-used)
> -	[Testing](#testing)
> - [Deployment](#deployment)
> -	[Credits](#credits)
> - [Acknowledgements](#acknowledgements)

## Overview

This is my personal portfolio, designed to showcase work I've done and demonstrate my skills in web development. 

## Description

My portfolio is a one-page website to showcase my work and skills to recruiters and employers, as well as potential clients for freelance work. It shares relevant information about me and my background, displays examples of past work and has multiple methods of contact for anyone who wants to get in touch.

## Target Audience

The target audience for my personal portfolio is potential employers and recruiters, as well as potential clients, to enable them to see a summary of my skills, background and experience, and view examples of my work.

## Business Objectives

* To clearly demonstrate my skills and suitablility for job roles, as well as showcase my past work
* To attract employers and recruiters in order to gain offers of employment
* To attract potential clients for offers of freelance commission work
* To provide a personal online space to track and update my progress as a developer

## User Objectives

* To obtain a clear and concise personal background for a potential employee
* To accurately assess individual skills and capabilities, combined with relevant experience
* To view examples of previous work, projects and coding ability

## User Experience
## Structure

The website is one page, split into four main sections - home, about, portfolio and contact. The fixed navigation buttons allow the use to easily navigate the site. The Home section displays a prominent hero image which scales down on tablets and is hidden on mobiles, and a clear site message. The About section provides more detailed information, as well as listing appropriate skills. The Portfolio section is clean and simple, presenting examples of past work with links to both the source code and live deployed sites. The Contact page presents four ways of getting in touch - via email, phone, LinkedIn messaging or via the in-built contact form, which sends a direct email via the EmailJS API.

## Skeleton

### Home Section

The Home section is used to introduce the site with a prominent profile image and welcome message. The 'Download CV' button allows visitors to immediately access a copy of my full CV, while the nav buttons allow users to navigate to specific areas of the site. 

### About Section

The About section provides detailed informaton about me and my background, skills, education and experience. The skill progress bars give a visual representation of my proficiency in each area. The education section details my qualifications, and the experience section displays my relevant job roles. 

### Portfolio Section

The Portfolio section displays screenshots of each project on different devices, generated using [AmIResponsive?](https://ui.dev/amiresponsive) originally as part of the projects themselves. Each image has a hover effect to flip the image and display links to the relevant source code and live sites. 

### Contact Section

The Contact section contains three icons to allow users to contact me directly. The email icon is a "mailto" button that will open the users email client with my email address included as the recipient. The LinkedIn icon opens my LinkedIn profile in a new window, allowing users to message me. The phone icon displays my mobile phone number to allow users to call me. 

In addition, there is a built-in contact form which makes use of the EmailJS API in order to send an email directly to me from the portfolio site.

## Surface

### Images

Portfolio images generated using [AmIResponsive?](https://ui.dev/amiresponsive) as part of original project submissions. 

### Colours

Colours were largely chosen to present a clean, easily-navigated, professional site, with nods to previous work (I use blue a lot!). Night provides the main font colour. Onyx provides the 'dark mode' background color. French Grey is used as the progress bar background. Seasalt provides the main off-white 'light mode' background colour. White is used where appropriate for fonts, icons and background colour. Tufts Blue is the main accent colour used for buttons, highlight text, borders etc. Dark Cornflower Blue is used as a complimentary colour to the main brand blue, used for hover effects and occasional font colour.

![Image](static/images/portfolio-palette.png)

* Night (#14161A)
* Onyx (#343A40)
* French Grey (#C0C1CB)
* Seasalt (#F7F7F7)
* White (#FFFFFF)
* Tufts Blue (#228CDB)

### Typography

[Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin?query=Libre+Franklin) was chosen for the main content font, as it is easy to read and has plenty of styling options. [Clicker Script](https://fonts.google.com/specimen/Clicker+Script?query=Clicker+Script) was chosen to generate the cursive text effect. 

### Icons

Appropriate icons across the site were taken from [Font Awesome](https://fontawesome.com/). These add important visual cues for users, especially on mobile devices. 

## Features

* Fixed nav bar buttons to allow easy navigation of the site
* 'Dark Mode' button alongside the nav to switch between dark and light themes for the site
* Multiple 'Download CV' buttons to allow immediate and convenient access to my full CV for potential employers and recruiters
* Multiple methods of contact - email, phone and LinkedIn
* Contact form to allow users to send an immediate email without leaving the site or opening any other windows/tabs.

## Technologies Used

#### Languages:
* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

#### Libraries & Frameworks:
* [Balsamiq](https://balsamiq.com/) - Used for the creation of wireframes.
* [FontAwesome](https://fontawesome.com/) - Used for all site icons.
* [JQuery](https://jquery.com) - The project uses JQuery to simplify DOM manipulation.
* [GoogleFonts](https://fonts.google.com/) - 'Syncopate' and 'Raleway' fonts.

#### APIs:
* [EmailJS](https://www.emailjs.com/) - Allows the Contact Form to send emails directly to the site owner.

#### Version Control:
* [Github](https://github.com/) - Used to store the code 
* [Gitpod](https://gitpod.io/) - Used as the primary version control IDE for development to further push and commit code to GitHub.

#### Other:
* [Stack Overflow](https://stackoverflow.com/) - Used for general troubleshooting and examples.
* [ChromeDevTools](https://developers.google.com/web/tools/chrome-devtools) - Used frequently to detect any issues/bugs or layout differences.
* [Coolors](https://coolors.co/) - Used to help define the site colour scheme.
* [Clippy](https://bennettfeely.com/clippy/) - Used to create polygon clip path
* [Remove BG](https://www.remove.bg/upload) - Used to remove background from images
* [amiresponsive](https://ui.dev/amiresponsive) - Used to generate multi-device mockup image.

## Testing
## Deployment

* Go to [GitHub](https://github.com/) and sign in, or sign up for an account.
* Once a Github account was created, I opened a new repository by clicking the green button "new". To create this project, I used the Code Institute's student 
[template](https://github.com/Code-Institute-Org/gitpod-full-template).
- Click on the green "gitpod" button to open [Gitpod](https://gitpod.io/), a cloud-based version control software or IDE, which was used to write all code for this project.
- It was then pushed or saved in the terminal to Github where it is stored in a [repository](https://github.com/NickChapman1988/Personal-Portfolio)
- Under "Settings", select Pages from the sidebar menu 
- Under 'Build and Deployment' select "Deploy from a branch" in the Source section, and select the main branch under 'branch'
- Once this was selected, the project was pushed to Github pages and the URL is then displayed
- To access the code, it can be run locally by either selecting "clone" which provides a URL to use on a local machine or "download" to download the zip file on to a local machine.

<details>
<summary>Forking the GitHub Repository</summary>
Forking the GitHub repository creates a copy of the original repository on your own GitHub account to view and/or make changes without affecting the original repository; use the following steps to fork:

1. Log in to GitHub and locate the GitHub [repository](https://github.com/NickChapman1988/Personal-Portfolio)
2. At the top of the repository below the "Settings" button on the menu, locate the "Fork" button.
3. You should now have a copy of the repository in your own GitHub account.

For further information on *Forking* a [GitHub](https://github.com/) repository, 
see the [GitHub Documentation](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo).
</details>

<details>
<summary>Making a local Clone</summary>

* Go to the [Project Code Repository Location](https://github.com/NickChapman1988/Personal-Portfolio) on [GitHub](https://github.com/).
* Select the *Code* dropdown and choose *HTTPS* under *Clone*. This will give you a *URL* that may be copied into the clipboard. 
* Open the Git Bash command line interface in [Gitpod](https://www.Gitpod.io/).
* Change the current working directory to the location where you would like the cloned directory to reside.
* Type `git clone`, and then paste the *URL* copied earlier, eg:  
`$ git clone https://github.com/NickChapman1988/Personal-Portfolio`
* Press Enter to create the local clone.

For further information on *Cloning* a [GitHub](https://github.com/) repository, see the 
[GitHub Documentation](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
</details>


## Credits

* Navbar based on [Magic Navigation Menu Indicator](https://www.youtube.com/watch?v=ArTVfdHOB-M) by Online Tutorials 
* Inspiration and guidance provided by [Portfolio Website Tutorial](https://www.youtube.com/watch?v=xV7S8BhIeBo&list=PL7-d_tfTbgodGxSBkJ4G5gOgx8RnSFNG9&index=39&t=932s) by freeCodeCamp.org
* Additional influence from [this video](https://www.youtube.com/watch?v=zJE-ze4TfXc&list=PL7-d_tfTbgodGxSBkJ4G5gOgx8RnSFNG9&index=22&t=440s) by Cryptical Coder on YouTube

## Acknowledgements

* My family and friends for their feedback and help with testing.
* As ever, eternal thanks and love to my wife and sons for their endless patience, support and lending of devices for testing!