// const API_URL = "";

import { Movie } from "@/app/interfaces/SimulationApiRequest";

// Simulating an API REQUEST
const fetchData = (): Movie[] => {
  return [
    {
      _id: 868759,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
      genres: ["Action & Adventure", "Comedy", "Romance"],
      original_title: "Ghosted",
      overview:
        "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
      poster_path:
        "https://image.tmdb.org/t/p/original/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
      release_date: "2023-04-18",
      title: "Ghosted",
      contentType: "movie",
    },
    {
      _id: 1102776,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/zh614Bixv2ePaHK8gzcUpUmcvYv.jpg",
      genres: ["Thriller", "Action & Adventure", "Crime"],
      original_title: "AKA",
      overview:
        "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
      poster_path:
        "https://image.tmdb.org/t/p/original/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
      release_date: "2023-04-28",
      title: "AKA",
      contentType: "movie",
    },
    {
      _id: 934433,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
      genres: ["Horror", "Mystery", "Thriller"],
      original_title: "Scream VI",
      overview:
        "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
      poster_path:
        "https://image.tmdb.org/t/p/original/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
      release_date: "2023-03-08",
      title: "Scream VI",
      contentType: "movie",
    },
    {
      _id: 948713,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/xwA90BwZXTh8ke3CVsQlj8EOkFr.jpg",
      genres: [
        "Action & Adventure",
        "Action & Adventure",
        "History",
        "Drama",
        "War",
      ],
      original_title: "The Last Kingdom: Seven Kings Must Die",
      overview:
        "In the wake of King Edward's death, Uhtred of Bebbanburg and his comrades adventure across a fractured kingdom in the hopes of uniting England at last.",
      poster_path:
        "https://image.tmdb.org/t/p/original/7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg",
      release_date: "2023-04-14",
      title: "The Last Kingdom: Seven Kings Must Die",
      contentType: "movie",
    },
    {
      _id: 420808,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/8HfjrSxfTVKmjNh8cJjbu5eXzcX.jpg",
      genres: [
        "Family",
        "Sci-Fi & Fantasy",
        "Action & Adventure",
        "Action & Adventure",
      ],
      original_title: "Peter Pan & Wendy",
      overview:
        "Wendy Darling, a young girl afraid to leave her childhood home behind, meets Peter Pan, a boy who refuses to grow up. Alongside her brothers and a tiny fairy, Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling adventure that will change her life forever.",
      poster_path:
        "https://image.tmdb.org/t/p/original/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg",
      release_date: "2023-04-20",
      title: "Peter Pan & Wendy",
      contentType: "movie",
    },
    {
      _id: 493529,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/20uHjZ4yCPD2x0ndcxZaxM7hLIy.jpg",
      genres: ["Action & Adventure", "Sci-Fi & Fantasy", "Comedy"],
      original_title: "Dungeons & Dragons: Honor Among Thieves",
      overview:
        "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
      poster_path:
        "https://image.tmdb.org/t/p/original/v7UF7ypAqjsFZFdjksjQ7IUpXdn.jpg",
      release_date: "2023-03-23",
      title: "Dungeons & Dragons: Honor Among Thieves",
      contentType: "movie",
    },
    {
      _id: 315162,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
      genres: [
        "Animation",
        "Family",
        "Sci-Fi & Fantasy",
        "Action & Adventure",
        "Comedy",
      ],
      original_title: "Puss in Boots: The Last Wish",
      overview:
        "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      poster_path:
        "https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      release_date: "2022-12-07",
      title: "Puss in Boots: The Last Wish",
      contentType: "movie",
    },
    {
      _id: 638974,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
      genres: ["Comedy", "Crime"],
      original_title: "Murder Mystery 2",
      overview:
        "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
      poster_path:
        "https://image.tmdb.org/t/p/original/s1VzVhXlqsevi8zeCMG9A16nEUf.jpg",
      release_date: "2023-03-28",
      title: "Murder Mystery 2",
      contentType: "movie",
    },
    {
      _id: 860425,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/1Txzm4bY5ZDqvgMl7MmHeBMl7HH.jpg",
      genres: ["Crime", "Drama", "Thriller"],
      original_title: "Sinaliento",
      overview:
        "In the DR, hardened cop Manolo tries to take down an infamous drug cartel; meanwhile, his daughter has fallen in love with Lorenzo, a construction worker who's unwittingly gotten embroiled in the drug cartel's dealings.",
      poster_path:
        "https://image.tmdb.org/t/p/original/oxNoVgbu2v9ETL93Kri1pw8osYf.jpg",
      release_date: "2021-08-11",
      title: "Breathless",
      contentType: "movie",
    },
    {
      _id: 804150,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
      genres: ["Thriller", "Comedy", "Crime"],
      original_title: "Cocaine Bear",
      overview:
        "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
      poster_path:
        "https://image.tmdb.org/t/p/original/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
      release_date: "2023-02-22",
      title: "Cocaine Bear",
      contentType: "movie",
    },
    {
      _id: 920143,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/svVppV4UOQw1fVi1Dt6z7n2UlyG.jpg",
      genres: ["Comedy"],
      original_title: "El paseo 6",
      overview:
        "The last year High School excursion is the walk where anything can happen, but the last year High School excursion with the parents, that is the last straw. And since Álvaro Castaño knows that security is better than the police, he decides to travel with his family to watch over his daughter Sarita, however, his mother-in-law, Raquel, is not willing to allow it and also embarks in the plan . On the paradisiacal beaches of San Andrés, Álvaro Castaño will become Sara's nightmare and the sensation for the excursion, while his sexy mother-in-law of him will be the one to steal the show. El Paseo 6, the last yeat High School excursion, because the luck of the grandmother, the High School girls wish it.",
      poster_path:
        "https://image.tmdb.org/t/p/original/5vSFW0rxMDZg8j5cr0JICBDSrGM.jpg",
      release_date: "2021-12-25",
      title: "The Trip 6",
      contentType: "movie",
    },
    {
      _id: 505642,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      genres: ["Action & Adventure", "Action & Adventure", "Sci-Fi & Fantasy"],
      original_title: "Black Panther: Wakanda Forever",
      overview:
        "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      poster_path:
        "https://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      release_date: "2022-11-09",
      title: "Black Panther: Wakanda Forever",
      contentType: "movie",
    },
    {
      _id: 1114905,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/a20Z41sNEqhBOf6addlSBTTQJkg.jpg",
      genres: ["Thriller", "Mystery", "Drama", "Horror"],
      original_title: "Uno para morir",
      overview:
        "Seven strangers wake up in a mansion in the middle of nowhere to discover they are part of a twisted game. They will have 60 minutes to choose one person to die; otherwise, all of them will be murdered. As the clock ticks down, the most lurid secrets will come to light, and they’ll discover they are all connected by a dark past.",
      poster_path:
        "https://image.tmdb.org/t/p/original/yMeKoe3ui4Pad8FUOJwCby3SOWe.jpg",
      release_date: "2023-05-05",
      title: "Death's Roulette",
      contentType: "movie",
    },
    {
      _id: 436270,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      genres: [
        "Action & Adventure",
        "Action & Adventure",
        "Sci-Fi & Fantasy",
        "Sci-Fi & Fantasy",
      ],
      original_title: "Black Adam",
      overview:
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      poster_path:
        "https://image.tmdb.org/t/p/original/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      release_date: "2022-10-19",
      title: "Black Adam",
      contentType: "movie",
    },
    {
      _id: 283995,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
      genres: ["Action & Adventure", "Action & Adventure", "Sci-Fi & Fantasy"],
      original_title: "Guardians of the Galaxy Vol. 2",
      overview:
        "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
      poster_path:
        "https://image.tmdb.org/t/p/original/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      release_date: "2017-04-19",
      title: "Guardians of the Galaxy Vol. 2",
      contentType: "movie",
    },
    {
      _id: 736790,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/aityu1Gma509jInlspHstEt8Jg0.jpg",
      genres: ["Action & Adventure", "Sci-Fi & Fantasy", "Family"],
      original_title: "Chupa",
      overview:
        "While visiting family in Mexico, a lonely boy befriends a mythical creature hiding on his grandfather's ranch and embarks on the adventure of a lifetime.",
      poster_path:
        "https://image.tmdb.org/t/p/original/ra3xm8KFAkwK0CdbPRkfYADJYTB.jpg",
      release_date: "2023-04-07",
      title: "Chupa",
      contentType: "movie",
    },
    {
      _id: 849869,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/tYcmm8XtzRdcT6kliCbHuWwLCwB.jpg",
      genres: ["Action & Adventure", "Crime", "Thriller"],
      original_title: "길복순",
      overview:
        "At work, she's a renowned assassin. At home, she's a single mom to a teenage daughter. Killing? That's easy. It's parenting that's the hard part.",
      poster_path:
        "https://image.tmdb.org/t/p/original/taYgn3RRpCGlTGdaGQvnSIOzXFy.jpg",
      release_date: "2023-02-17",
      title: "Kill Boksoon",
      contentType: "movie",
    },
    {
      _id: 998771,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/4EoQnShuyQl2YawXlQmQXn4CalG.jpg",
      genres: ["Comedy"],
      original_title: "Si Saben Como me pongo Pa Que Me Invitan? 2",
      overview:
        "The El Encanto resort once again hosts a retreat for four couples -- including a liar, a sex addict and a thief -- seeking to fix their relationships.",
      poster_path:
        "https://image.tmdb.org/t/p/original/bFRxPAiyA7dhTLrEcitAjLL02BJ.jpg",
      release_date: "2022-07-13",
      title: "Si Saben Como me pongo Pa Que Me Invitan? 2",
      contentType: "movie",
    },
    {
      _id: 736526,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
      genres: [
        "Sci-Fi & Fantasy",
        "Action & Adventure",
        "Action & Adventure",
        "Thriller",
      ],
      original_title: "Troll",
      overview:
        "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
      poster_path:
        "https://image.tmdb.org/t/p/original/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
      release_date: "2022-12-01",
      title: "Troll",
      contentType: "movie",
    },
    {
      _id: 631842,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/aHcWyh0n4YbBy9gxYCDlgsNVS3M.jpg",
      genres: ["Horror"],
      original_title: "Knock at the Cabin",
      overview:
        "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
      poster_path:
        "https://image.tmdb.org/t/p/original/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
      release_date: "2023-02-01",
      title: "Knock at the Cabin",
      contentType: "movie",
    },
    {
      _id: 1023803,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/3t0DcVPuW9JRtc1CWnh1ktCKrrO.jpg",
      genres: ["Music"],
      original_title: "The Hip Hop Nutcracker",
      overview:
        "Features Rev Run as he brings audiences on a hip-hop reimagining of The Nutcracker ballet set in NYC.",
      poster_path:
        "https://image.tmdb.org/t/p/original/iqOGxcKViTtU7pwC24xUb1bDslw.jpg",
      release_date: "2022-11-25",
      title: "The Hip Hop Nutcracker",
      contentType: "movie",
    },
    {
      _id: 928769,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/AfWtIzrdB0HMQ0Swequza4Jo1Kh.jpg",
      genres: ["Comedy", "Romance", "Sci-Fi & Fantasy"],
      original_title: "เอไอหัวใจโอเวอร์โหลด",
      overview:
        "A modern love story set in the near future where an AI building is powered by human feelings. Due to a software glitch, it falls in love with a real girl, escapes the building into the body of a real man, and tries to win her affections.",
      poster_path:
        "https://image.tmdb.org/t/p/original/sBiJOvHCSWORnFpc4yItflIkdTi.jpg",
      release_date: "2022-02-15",
      title: "AI Love You",
      contentType: "movie",
    },
    {
      _id: 869626,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/1PRWW60yQparK1I8Soyy9Evf7Dv.jpg",
      genres: ["Animation", "Comedy", "Family", "Drama", "Action & Adventure"],
      original_title: "Marcel the Shell with Shoes On",
      overview:
        "Marcel is an adorable one-inch-tall shell who ekes out a colorful existence with his grandmother Connie and their pet lint, Alan. Once part of a sprawling community of shells, they now live alone as the sole survivors of a mysterious tragedy. But when a documentary filmmaker discovers them amongst the clutter of his Airbnb, the short film he posts online brings Marcel millions of passionate fans, as well as unprecedented dangers and a new hope at finding his long-lost family.",
      poster_path:
        "https://image.tmdb.org/t/p/original/jaYmP4Ct8YLnxWAW2oYkUjeXtzm.jpg",
      release_date: "2022-06-24",
      title: "Marcel the Shell with Shoes On",
      contentType: "movie",
    },
    {
      _id: 265712,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/1aABIiqBY7yoQESE8qWvR0w9bJZ.jpg",
      genres: ["Animation", "Family", "Sci-Fi & Fantasy", "Sci-Fi & Fantasy"],
      original_title: "STAND BY ME ドラえもん",
      overview:
        "Sewashi and Doraemon find themselves way back in time and meet Nobita. It is up to Doraemon to take care of Nobita or else he will not return to the present.",
      poster_path:
        "https://image.tmdb.org/t/p/original/wc7XQbfx6EIQqCuvmBMt3aisb2Y.jpg",
      release_date: "2014-08-08",
      title: "Stand by Me Doraemon",
      contentType: "movie",
    },
    {
      _id: 985939,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/hlxduUs8y9icWGMzYCDLcYHEQ2u.jpg",
      genres: ["Thriller"],
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
      poster_path:
        "https://image.tmdb.org/t/p/original/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      contentType: "movie",
    },
    {
      _id: 616037,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
      genres: ["Sci-Fi & Fantasy", "Action & Adventure", "Comedy"],
      original_title: "Thor: Love and Thunder",
      overview:
        "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      poster_path:
        "https://image.tmdb.org/t/p/original/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      release_date: "2022-07-06",
      title: "Thor: Love and Thunder",
      contentType: "movie",
    },
    {
      _id: 868985,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/3uHDuQCoJQ6DhRlI3frd7p9WSE2.jpg",
      genres: ["Drama", "Comedy"],
      original_title: "¡Que Viva México!",
      overview:
        "After his grandfather's death, a man travels with his wife and kids to his hometown, where chaos ensues with his relatives over the inheritance.",
      poster_path:
        "https://image.tmdb.org/t/p/original/ieyUpr5ES9QEz1cn4clCnBf9XJl.jpg",
      release_date: "2023-03-23",
      title: "¡Que Viva México!",
      contentType: "movie",
    },
    {
      _id: 634649,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
      genres: ["Action & Adventure", "Action & Adventure", "Sci-Fi & Fantasy"],
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      poster_path:
        "https://image.tmdb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      contentType: "movie",
    },
    {
      _id: 899294,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/eyiSLRh44SKKWIJ6bxWq8z1sscB.jpg",
      genres: ["Thriller", "Horror", "Crime"],
      original_title: "Frank and Penelope",
      overview:
        "A tale of love and violence when a man on his emotional last legs finds a savior seductively dancing in a run-down strip club. And a life most certainly headed off a cliff suddenly becomes redirected - as everything is now worth dying for.",
      poster_path:
        "https://image.tmdb.org/t/p/original/5NpXoAi3nEQkEgLO09nmotPfyNa.jpg",
      release_date: "2022-06-03",
      title: "Frank and Penelope",
      contentType: "movie",
    },
    {
      _id: 361743,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
      genres: ["Action & Adventure", "Drama"],
      original_title: "Top Gun: Maverick",
      overview:
        "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
      poster_path:
        "https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      release_date: "2022-05-24",
      title: "Top Gun: Maverick",
      contentType: "movie",
    },
    {
      _id: 118340,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg",
      genres: ["Action & Adventure", "Sci-Fi & Fantasy", "Action & Adventure"],
      original_title: "Guardians of the Galaxy",
      overview:
        "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
      poster_path:
        "https://image.tmdb.org/t/p/original/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      release_date: "2014-07-30",
      title: "Guardians of the Galaxy",
      contentType: "movie",
    },
    {
      _id: 774752,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/nJbWAc8wakV3BncyF4643SyFWPr.jpg",
      genres: ["Comedy", "Sci-Fi & Fantasy", "Action & Adventure"],
      original_title: "The Guardians of the Galaxy Holiday Special",
      overview:
        "On a mission to make Christmas unforgettable for Quill, the Guardians head to Earth in search of the perfect present.",
      poster_path:
        "https://image.tmdb.org/t/p/original/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg",
      release_date: "2022-11-25",
      title: "The Guardians of the Galaxy Holiday Special",
      contentType: "movie",
    },
    {
      _id: 873256,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/m0mLjT3TkTXYU2e1XP3wmYDlIml.jpg",
      genres: ["Romance", "Comedy"],
      original_title: "Gorzko, gorzko!",
      overview:
        "Convinced he can charm any woman, a tenacious flirt sets his sights on a headstrong bride-to-be engaged to the son of an ambitious politician.",
      poster_path:
        "https://image.tmdb.org/t/p/original/kqltY4yywn4ex1Cht6f4lercrW4.jpg",
      release_date: "2023-04-26",
      title: "Kiss, Kiss!",
      contentType: "movie",
    },
    {
      _id: 1013860,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
      genres: ["Action & Adventure", "Comedy", "Sci-Fi & Fantasy", "Crime"],
      original_title: "R.I.P.D. 2: Rise of the Damned",
      overview:
        "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
      poster_path:
        "https://image.tmdb.org/t/p/original/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
      release_date: "2022-11-15",
      title: "R.I.P.D. 2: Rise of the Damned",
      contentType: "movie",
    },
    {
      _id: 453395,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/iKUwhA4DUxMcNKu5lLSbDFwwilk.jpg",
      genres: ["Sci-Fi & Fantasy", "Action & Adventure", "Action & Adventure"],
      original_title: "Doctor Strange in the Multiverse of Madness",
      overview:
        "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
      poster_path:
        "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      release_date: "2022-05-04",
      title: "Doctor Strange in the Multiverse of Madness",
      contentType: "movie",
    },
    {
      _id: 829560,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/6cpRpfD3isvluFwXDGSiDVyibPJ.jpg",
      genres: ["Romance", "Drama"],
      original_title: "Kolejne 365 dni",
      overview:
        "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
      poster_path:
        "https://image.tmdb.org/t/p/original/6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg",
      release_date: "2022-08-19",
      title: "The Next 365 Days",
      contentType: "movie",
    },
    {
      _id: 635302,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
      genres: [
        "Animation",
        "Action & Adventure",
        "Action & Adventure",
        "Sci-Fi & Fantasy",
        "Thriller",
      ],
      original_title: "劇場版「鬼滅の刃」無限列車編",
      overview:
        "Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      poster_path:
        "https://image.tmdb.org/t/p/original/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      release_date: "2020-10-16",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      contentType: "movie",
    },
    {
      _id: 675353,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/yEQqrW61rwNuVRHTjgHOAU4dXNE.jpg",
      genres: ["Action & Adventure", "Action & Adventure", "Family", "Comedy"],
      original_title: "Sonic the Hedgehog 2",
      overview:
        "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
      poster_path:
        "https://image.tmdb.org/t/p/original/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
      release_date: "2022-04-08",
      title: "Sonic the Hedgehog 2",
      contentType: "movie",
    },
    {
      _id: 768744,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/faek7NPiZqTZhstTfLQG1saw08D.jpg",
      genres: [
        "Animation",
        "Action & Adventure",
        "Action & Adventure",
        "Sci-Fi & Fantasy",
      ],
      original_title:
        "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
      overview:
        "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-class selected hero team. It’s up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
      poster_path:
        "https://image.tmdb.org/t/p/original/AsTlA7dj2ySGY1pzGSD0MoHFhEF.jpg",
      release_date: "2021-08-06",
      title: "My Hero Academia: World Heroes' Mission",
      contentType: "movie",
    },
    {
      _id: 299536,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
      genres: ["Action & Adventure", "Action & Adventure", "Sci-Fi & Fantasy"],
      original_title: "Avengers: Infinity War",
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      poster_path:
        "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      release_date: "2018-04-25",
      title: "Avengers: Infinity War",
      contentType: "movie",
    },
    {
      _id: 619930,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
      genres: ["War", "Drama", "History", "Action & Adventure"],
      original_title: "Kampen om Narvik",
      overview:
        "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
      poster_path:
        "https://image.tmdb.org/t/p/original/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
      release_date: "2022-12-25",
      title: "Narvik",
      contentType: "movie",
    },
    {
      _id: 843794,
      backdrop_path:
        "https://image.tmdb.org/t/p/original/afsYFdid9pnnRd6tTrHFUbHgXJn.jpg",
      genres: ["Sci-Fi & Fantasy"],
      original_title: "정이",
      overview:
        "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
      poster_path:
        "https://image.tmdb.org/t/p/original/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
      release_date: "2023-01-20",
      title: "JUNG_E",
      contentType: "movie",
    },
  ];
};

export default fetchData;
