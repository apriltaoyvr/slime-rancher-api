export const slimes = [
  {
    id: 'pink',
    name: 'Pink Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/6/6c/Pink_Slime_SP.png/revision/latest?cb=20170401125704',
    diet: 'all',
    favouriteToy: 'beachball',
    favouriteFood: null,
    type: 'docile',
    slimepedia: {
      slimeology:
        "Pink Slimes are the most common slime found on the Far, Far Range. They're cheerful, docile, and the easiest of all slimes to ranch. A pink slime will eat anything you put in front of it, though they have no favorite food, and their plorts are the least valuable of all slimes.",
      risks:
        "Not much to worry about with a pink slime. They're soft, squishy, very happy to be around a rancher, and found all over the Range. But because of this, a rancher won't go far without finding a few pink plorts, which can lead to largos, and then...",
      plortonomics:
        'Pink Plorts are an excellent "multipurpose generic substance" used to manufacture everything from food products to household cleaners. All over earth, people are eating burgers, sweetening their coffees or scrubbing their floors with pink plort products. That\'s some serious versatility!',
    },
    locations: ['reef', 'blanket', 'ruins', 'quarry', 'desert', 'wilds'],
  },
  {
    id: 'tabby',
    name: 'Tabby Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/94/Tabby_Slime_SP.png/revision/latest/scale-to-width-down/1000?cb=20170401125706',
    diet: 'meat',
    favouriteToy: 'yarn',
    favouriteFood: 'stonyhen',
    type: 'docile',
    slimepedia: {
      slimeology:
        "Tabby slimes share many curious similarities to domesticated house cats of Earth. With their perky ears, striped backs, and swaying tails, you'd almost mistake them for a true feline... if they weren't made entirely of gooey slime, of course.",
      risks:
        "A Tabby slime generally doesn't mean any harm to a rancher, but like their spiritual Earth cat cousins, often causes a great deal of chaos anyway. Tabby slimes love to steal things they don't eat, like fruits and veggies, resulting in lots of unintended largo transformations on the Range.",
      plortonomics:
        "Tabby plorts are a key ingredient in a variety of 'performance enhancing' products that grant the consumer a surge of the tabby slime's signature energy and exuberance. And while athletes the world over take them to gain an edge, prolonged use often results in 'uncontrollable butt wiggles', another (less desirable) signature of the tabby slime.",
    },
    properties: [
      'Steals Food when not hungry or that it cannot eat and attempts to place it elsewhere.',
      'Meows when picking up food.',
      'Can jump higher than most Slimes.',
      'Will occasionally follow the player.',
      'Occasionally attempts to pounce at the player, indicated by wiggling before making a jump in her direction.',
    ],
    locations: ['reef', 'blanket', 'ruins', 'desert'],
  },
  {
    id: 'phosphor',
    name: 'Phosphor Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/e/ee/Phosphor_Slime_SP.png/revision/latest?cb=20170401125705',
    diet: 'fruit',
    favouriteToy: 'nightlight',
    favouriteFood: 'cuberry',
    type: 'docile',
    slimepedia: {
      slimeology:
        "Phosphor slimes come out at night, flying about the moonlit range upon their translucent wings. Phosphor slimes have a luminescent slime core that pulses with a soft glow, making them easy to spot. It's for this reason ranchers sometimes refer to them as 'low stars'.",
      risks:
        "Phosphor slimes have special needs compared to your typical slime. A phosphor slime and its plorts will quickly vanish if exposed to sunlight, meaning a rancher could quickly lose an entire corral's worth of phosphor slimes if not careful. Ranchers must either vac them up before daybreak or keep phosphor slimes in a place that is perpetually dark, like a cave.",
      plortonomics:
        'The luminescent compound found within phosphor plorts can produce light for over 100 years, making it an incredibly eco-friendly form of illumination on Earth. Cities across the globe are slowly switching over to phosphor lights, saving trillions of gigawatts of energy daily. Plus if you rub the stuff in your hair, it glows and looks really cool.',
    },
    properties: [
      'Its wings enable it to fly.',
      'Disappears in prolonged exposure to sunlight.',
    ],
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
  },
  {
    id: 'honey',
    name: 'Honey Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/b/b6/Honey_Slime_SP.png/revision/latest?cb=20170401125706',
    diet: 'fruit',
    favouriteToy: 'bee',
    favouriteFood: 'mintmango',
    type: 'docile',
    slimepedia: {
      slimeology:
        'Honey slimes are an odd breed of slime composed of a hyper-sweet slime compound. Most slime scientists believe this to be the result of their slime cells replicating the natural sugars found in the fruits and floral nectars of the Far, Far Range. Most ranchers agree their plorts taste great on cereal.',
      risks:
        'The greatest danger a honey slime poses is found in their plorts. Honey plorts are the sweetest, most delicious plorts known on the Far, Far Range. Other slimes can detect them from much further away than a normal plort and will do everything in their means to get them. A rancher with honey slimes needs to be careful about unintended largos, or worse...',
      plortonomics:
        "Honey plorts are highly prized by food manufacturers. Though the plorts are naturally incredibly sweet, the discovery that they could be refined into an even sweeter substance made their demand soar. These refined honey plorts are said to score an unprecedented 867 on the Werner-Thompkins-Hong sacchrino scale, just a few points shy of 'not fit for human consumption.'",
    },
    properties: [
      'Its plorts attract Slimes from further distances than other plorts',
    ],
    locations: ['blanket'],
  },
  {
    id: 'puddle',
    name: 'Puddle Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/97/Puddle_Slime_SP.png/revision/latest?cb=20170401125707',
    diet: 'water',
    favouriteToy: 'ducky',
    favouriteFood: null,
    type: 'docile',
    slimepedia: {
      slimeology:
        "Puddle slimes are a rare species of slime that live in fresh water pools found on the range. These slimes don't eat fruits, veggies, or meat like most other slimes. Instead, puddle slimes absorb water into their bodies while they sit on the surface of a pool.\nPuddle slimes need fresh water to survive and will quickly evaporate if left on any other surface for too long.",
      risks:
        "Puddle slimes aren't risky to manage, they just require a fair bit of maintenance. A rancher needs a pool of fresh water, like a pond, available for a puddle slime and its plorts to sit in as they will evaporate if away from water.\nFinally, puddle slimes are exceptionally shy and will not produce plorts if they are in close proximity to more than 3 other slimes.\nOverall, a puddle slime is a better fit for a more experienced rancher, not one still wet behind the ears.",
      plortonomics:
        'Puddle plorts are made almost entirely from an incredible hydro compound known by chemists across the galaxy as H2Ohhhhh. This compound is used to create an absurdly expensive brand of bottled drinking water that is sought after by the elite back on Earth. While some people argue that there is little difference in taste between it and tap water, those people seriously are not getting it.',
    },
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert'],
  },
];
