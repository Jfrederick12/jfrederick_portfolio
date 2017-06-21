const works = [
      { id: 1,
        name: 'Dental Laser Training',
        img: 'https://github.com/Jfrederick12/jfrederick_portfolio/blob/master/public/images/dentallasers.jpg?raw=true',
        thumbnail: 'https://github.com/Jfrederick12/jfrederick_portfolio/blob/master/public/images/dentallasers.jpg?raw=true',
        description: 'Client project for an online web store to sell clients Dental Laser Videos. Wireframed using Sketch, and built the project using ReactJS, Ruby on Rails and Stripe Payments.',
        link: 'https://dentallaservideos.herokuapp.com/'
      },
      { id: 2,
        name: 'ReactJS Contact App',
        img: 'https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/contactomatic.jpg?raw=true',
        thumbnail: 'https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/contactomatic.jpg?raw=true',
        description: 'Practical web application built using ReactJS & NodeJS to demonstrate a contact list that handles filtering, arranging by sort type, folder and search filter. All of the data is pulled from a JSON list and passed through React Components handling the state of the objects.',
        tech: 'ReactJS, NodeJS',
        link: 'https://react-contact-filter.herokuapp.com/'
      },
      { id: 3,
        name: 'ReactJS Fundraiser App',
        img: 'https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/react-fundraiser.jpg?raw=true',
        thumbnail: 'https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/react-fundraiser.jpg?raw=true',
        description: 'Mock fundraiser web application built using ReactJS & NodeJS.',
        tech: 'ReactJS, NodeJS',
        link: 'https://react-fundraiser.herokuapp.com/'
      },      
      { id: 4,
        name: "Seatd Mobile App",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/seatd.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/seatd.jpg?raw=true",
        description: "Client & business facing mobile app.",
        involvement: "Focused on building out the functionality with AngularJS as well as the UI/UX. Worked on algorithms for the search feature that allows users to find businesses by location and service type.",
        tech: "Angular, Ionic, Rails, SQL and Google Maps API.",
        link: "https://github.com/Jfrederick12/seatd",
        linkImg: ""
      },
      { id: 5,
        name: "Moonphase Ranch",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2648085/moonphase.jpg",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/moonphase_thumb.jpg?raw=true",
        description: "I spent a week on a ranch just outside of Austin, TX recording an upcoming record. Inspired by the acres of Texas hill country, a cozy air-stream trailer and free roaming cats, I created an illustration."
      },
      { id: 6,
        name: "CTA Illustration",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2616895/ctatrain.jpg",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/cta_thumb.jpg?raw=true",
        description: "Part of a series of illustrations commisioned by Chicago Red Eye featuring Chicago landmarks for their Social Media platform."
      },
      { id: 7,
        name: "Little Boy Jr",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2633812/lbjdetail.jpg",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/lbj_thumb.jpg?raw=true",
        description: "Album artwork for Chicago band Little Boy Jr. Released on vinyl, cd and for digital distribution."
      },
      { id: 8,
        name: "Music Box",
        img: "https://d13yacurqjgara.cloudfront.net/users/1110044/screenshots/2615073/music_box.jpg",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/music_box_thumb.jpg?raw=true",
        description: "Part of a series of illustrations commisioned by Chicago Red Eye featuring Chicago landmarks for their Social Media platform."
      },
      { id: 9,
        name: "Cool Runnings",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/cool_runnings.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/cool_runnings_thumb.jpg?raw=true",
        description: 'Cool Runnings, the bands flagship since 2010. Handling everything from hauling a trailer full of instruments, containing road worn dudes, and making pit stops across fast food chains around North America.'
      },
      { id: 16,
        name: "SoR Summer Festival",
        img: "https://github.com/Jfrederick12/jfrederick_portfolio/blob/master/public/images/Summer2016.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/jfrederick_portfolio/blob/master/public/images/Summer2016cover.jpg?raw=true",
        description: "Illustration for School of Rock's annual summer festival. Printed on posters and tshirts."
      },
      { id: 10,
        name: "Blonde Ventura",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/blonde_ventura_thumb.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/blonde_ventura_thumb.jpg?raw=true",
        description: 'Type treatment for Los Angeles based Disco Pop group "Blonde Ventura". The idea was to go for a disco/arcade vibe. Something you would see on your favorite pinball machine, or at your local roller rink.'
      },
      { id: 11,
        name: "Hobbit",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/hobbit.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/hobbit_thumb.jpg?raw=true",
        description: "Illustration inspired by the Hobbit. Bilbo and the Dwarves make their swift escape from Lonely Mountain while Smaug prepares to unleash a reign of fire on Laketown off in the distance."
      },
      { id: 12,
        name: "Hobbit Portraits",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/hobbit_portraits.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/hobbit_portraits_thumb.jpg?raw=true",
        description: "Illustrations inspired by The Hobbit. I wanted to depict the Dwarves in a series of portraits, closely referencing the films portrayal."
      },
      { id: 13,
        name: "SC Tour Poster",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/sc_canada.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/sc_canada_thumb.jpg?raw=true",
        description: "Canada Tour poster print for Chicago band Secret Colours"
      },
      { id: 14,
        name: "The Orwells NYE Poster",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/the_orwells.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/jfrederick_portfolio/blob/master/public/images/OrwellsNYE.jpg?raw=true",
        description: "Limited series of prints I was commisioned to illustrate for Atlantic Records artist, The Orwells at Lincoln Hall for NYE 2015"
      },
      { id: 15,
        name: "Logan Square",
        img: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/images/logan_square.jpg?raw=true",
        thumbnail: "https://github.com/Jfrederick12/React_Web_Portfolio/blob/master/public/thumbnails/logan_thumb.jpg?raw=true",
        description: "Part of a series of illustrations commisioned by Chicago Red Eye featuring Chicago landmarks for their Social Media platform."
      }
    ]

export default works;