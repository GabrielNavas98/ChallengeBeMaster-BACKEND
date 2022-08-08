const bulkMovies = [
    {
        "title": "Rambo",
        "released": "25 Jan 2008",
        "category": [
            "Action", 
            "Adventure", 
            "Thriller"
        ],
        "description": "Vietnam veteran John Rambo has survived many harrowing ordeals in his lifetime and has since withdrawn into a simple and secluded existence in Thailand, where he spends his time capturing snakes for local entertainers, and chauffeuring locals in his old PT boat. Even though he is looking to avoid trouble, trouble has a way of finding him: a group of Christian human rights missionaries, led by Michael Burnett and Sarah Miller, approach Rambo with the desire to rent his boat to travel up the river to Burma. For over fifty years, Burma has been a war zone. The Karen people of the region, who consist of peasants and farmers, have endured brutally oppressive rule from the murderous Burmese military and have been struggling for survival every single day. After some inner contemplation, Rambo accepts the offer and takes Michael, Sarah, and the rest of the missionaries up the river. When the missionaries finally arrive at the Karen village, they find themselves part of a raid by the sadistic Major Pa Tee Tint and a slew of Burmese army men. A portion of the villagers and missionaries are tortured and viciously murdered, while Tint and his men hold the remainder captive. Concerned by their disappearance, the minister in charge of the mission gathers a group of mercenaries and pleas Rambo transport them with his boat, since he knows their last exact location. But Rambo can't stay behind: he joins the team where he belongs, to liberate the survivors from the clutches of Major Tint in what may be one of his deadliest missions ever",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
        "imdbRating": "7.0",
    },
    {
        "title": "Harry Potter and the Deathly Hallows: Part 2",
        "released": "15 Jul 2011",
        "category": [
            "Adventure",
            "Mystery",
            "Fantasy"
        ],
        "description": "Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione (Emma Watson) continue their quest of finding and destroying Voldemort's (Ralph Fiennes') three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins, and life as they know it will never be the same again.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "imdbRating": "8.1",
    },
    {
        "title": "The Avengers",
        "released": "04 May 2012",
        "category": ["Action","Adventure", "Sci-Fi"],
        "description": "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to description the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
        "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "imdbRating": "8.0",
    },
    {
        "title": "Batman",
        "released": "23 Jun 1989",
        "category": ["Action", "Adventure"],
        "description": "Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there's a new crime fighter in town - Batman (Michael Keaton). Grissom's right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman's everyday persona, billionaire Bruce Wayne.",
        "poster": "https://m.media-amazon.com/images/M/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_SX300.jpg",
        "imdbRating": "7.5",
    },
    {
        "title": "Homecoming",
        "released": "02 Nov 2018",
        "category": ["Drama", "Mystery", "Thriller"],
        "description": "Good intentions. Erratic bosses. Mounting paranoia. Unforeseen consequences spiraling out of control. Heidi (Julia Roberts) works at Homecoming, a facility helping soldiers transition to civilian life. Years later she has started a new life, when the Department of Defense questions why she left Homecoming. Heidi realizes there's a whole other story behind the one she's been telling herself.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMDc5OTgyMDYtZjk2YS00YzVkLWE5N2ItNjU4MzQ1OTgyMWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "imdbRating": "7.4",
    },
    {
        "title": "Hulk",
        "released": "20 Jun 2003",
        "category": ["Action", "Sci-Fi"],
        "description": "Bruce is an ordinary Gamma expert who one day gets blasted with radiation and somehow survives. But in the process a monster was born. Now whenever he gets angry he grows bigger and stronger until he is no longer Bruce Banner. He becomes The Hulk",
        "poster": "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg",
        "imdbRating": "5.6",
    },
    {
        "title": "Bee Movie",
        "released": "02 Nov 2007",
        "category": ["Animation", "Adventure", "Comedy"],
        "description": "When the bee Barry B. Benson (Jerry Seinfeld) graduates from college, he finds that he will have only one job for his entire life, and absolutely disappointed, he joins the team responsible for bringing the honey and pollination of the flowers to visit the world outside the hive. Once in Manhattan, he is saved by florist Vanessa Bloome (Renée Zellweger) and he breaks the bee law to thank Vanessa. They become friends and Barry discovers that humans exploit bees to sell the honey they produce. Barry decides to sue the human race, with destructive consequences to nature.",
       
        "poster": "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg",
        "imdbRating": "6.1",
    },
    {
        "title": "Titanic",
        "released": "19 Dec 1997",
        "category": ["Drama", "Romance"],
        "description": "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "imdbRating": "7.9",
    },
    {
        "title": "Fast & Furious 6",
        "released": "24 May 2013",
        "category": ["Action", "Adventure", "Crime"],
        "description": "Since Dom (Diesel) and Brian's (Walker) Rio heist toppled a kingpin's empire and left their crew with $100 million, our heroes have scattered across the globe. But their inability to return home and living forever on the lam have left their lives incomplete. Meanwhile, Hobbs (Johnson) has been tracking an organization of lethally skilled mercenary drivers across 12 countries, whose mastermind (Evans) is aided by a ruthless second-in-command revealed to be the love Dom thought was dead, Letty (Rodriguez). The only way to stop the criminal outfit is to outmatch them at street level, so Hobbs asks Dom to assemble his elite team in London. Payment? Full pardons for all of them so they can return home and make their families whole again.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
        "imdbRating": "7.0",
    }
];

module.exports = { bulkMovies };