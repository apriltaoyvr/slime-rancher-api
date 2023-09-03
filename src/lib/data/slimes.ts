import type { Slime } from '../graphql/sources';

export const slimes: Slime[] = [
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
    id: 'rock',
    name: 'Rock Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/90/Rock_Slime_SP.png/revision/latest/scale-to-width-down/1000?cb=20170401125705',
    diet: 'veggie',
    favouriteToy: 'rock',
    favouriteFood: 'beet',
    type: 'harmful',
    slimepedia: {
      slimeology:
        "Rock slimes earned their name from the rocky crown of sharp spikes atop their slimy bodies. But their affection for minerals doesn't end with their appearance: rock slimes are strict vegetarians, favoring the satisfying crunch of the heart beet most of all.",
      risks:
        "The dangers of a rock slime should be fairly obvious: their rocky crown is sharp enough to pierce straight through a rancher's boots. But it's not all about watching where you're stepping as these rocks are always rolling. When you see a rock slime revving up for a tumble, it's best to get out of the way.",
      plortonomics:
        "Rock plorts are prized for being a key component in the production of 'blue metal,' an amazing alloy that's stronger than titanium and lighter than plastic. Because of its amazing strength, blue metal is often a key component in the hulls of light-speed capable starships, synthetic appendages, and protective holophone cases.",
    },
    properties: [
      'Damages Beatrix LeBeau on contact.',
      'Can roll into a spiky ball and travel quickly in a straight line.',
      'Rolls more often when agitated',
    ],
    locations: ['reef', 'quarry', 'ruins', 'desert', 'wilds'],
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
    favouriteFood: 'mango',
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
  {
    id: 'boom',
    name: 'Boom Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/97/Puddle_Slime_SP.png/revision/latest?cb=20170401125707',
    diet: 'meat',
    favouriteToy: 'bomb',
    favouriteFood: 'briarhen',
    type: 'harmful',
    slimepedia: {
      slimeology:
        "Boom slimes are often heard before they're seen. The slime cells of a boom slime are constantly vibrating, causing their slime to increasingly crackle with energy before ultimately exploding. However, the boom slime always comes out unscathed, though always a little dazed.",
      risks:
        'Boom slimes are constantly building toward an inevitable explosion, making them quite hazardous to ranchers. In addition to those explosions causing bodily harm, they also have the capacity to send all nearby slimes flying into the air, making them a hard slime to corral.',
      plortonomics:
        "Highly volatile boom plorts have all sorts of applications, including powering rocket thrusters and demolitions. Military organizations value their highly destructive capabilities for 'medical technology and other research'. Imagine that!",
    },
    locations: ['blanket', 'desert', 'wilds'],
    properties: [
      'Explodes occasionally, telegraphed by the intensity of its core and veins, sending everything in its blast radius flying and stunning itself in the process. Explosions can be temporarily nullified with Water or Ancient Water.',
      'Explodes more often when agitated.',
    ],
  },
  {
    id: 'hunter',
    name: 'Hunter Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/97/Puddle_Slime_SP.png/revision/latest?cb=20170401125707',
    diet: 'fruit',
    favouriteToy: 'chicken',
    favouriteFood: 'roostro',
    type: 'docile',
    slimepedia: {
      slimeology:
        "The Hunter Slime is the wild cousin of the tabby slime. A much more capable creature than the playful tabbies, the hunter slime excels at stalking the chickens of the Far, Far Range.\nA hunter slime's slimological makeup allows for a natural cloaking ability that renders it almost completely invisible. Their only tell is in their giant, almond eyes, which can often be seen hovering in the dark. This effect is often described by unsuspecting ranchers as 'aaaahhhhHHH!'",
      risks:
        'A hunter slime has keen senses and can detect its prey from great distances. This makes finding a good location for their corrals challenging.\nAdditionally, the wild nature of the hunter is also passed on to any largos formed from its plorts. A newly created hunter largo will always be feral! A prepared rancher knows that breeding hunter largos should always be done slowly, with a few chickens on hand to calm them down.',
      plortonomics:
        'Amazingly, a serum can be made from hunter slime plorts that can actually render a person invisible! The effect only lasts for about a day, but this serum is nonetheless incredibly popular back on Earth as many people find its effects very soothing.\nSometimes you feel like you just want to disappear for a while. But then about a day goes by and you realize that not only did you miss being seen, but others missed seeing you too.',
    },
    locations: ['blanket', 'desert', 'wilds'],
    properties: [
      'Can detect Food from further distances than other Slimes',
      'Can occasionally attempt to pounce at the player, indicated by wiggling before making a jump in her direction. The Slime will turn invisible during its wiggle, leaving only its eyes and mouth visible',
      'Hunter Largo variants are always feral when created.',
      'Hunter Largos will go feral again if they are sufficiently agitated, either from hunger or other sources.',
      'Feral Hunter Largos can be calmed with Food or with the Taming Bell',
    ],
  },
  {
    id: 'rad',
    name: 'Rad Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/1/11/IconSlimeRadSR2.png/revision/latest?cb=20220929193455',
    diet: 'veggie',
    favouriteToy: 'cell',
    favouriteFood: 'oca',
    type: 'harmful',
    slimepedia: {
      slimeology:
        "It's unknown if rad slimes, sometimes called 'raddies,' came to be from external radiation sources or from something naturally occurring within the Far, Far Range. Regardless, rad slimes emit such a potent aura of radiation they glow in the dark!",
      risks:
        "A rad slime's radioactive aura can induce rad poisoning to a rancher if they remain within it for too long. Ranchers are advised to monitor their rad exposure levels when handling these green globs of gamma goo as extended exposure can cause serious bodily harm, or worse.",
      plortonomics:
        "Given that raddies are basically mobile batteries, it's no surprise that corporations value rad plorts for their incredible energy-producing capabilities. Most rad plorts get turned into 'plortonium' and everything from the latest holophone to a radwave microcook system runs on the stuff.",
    },
    locations: ['quarry', 'wilds'],
  },
  {
    id: 'crystal',
    name: 'Crystal Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/4/4a/Crystal_Slime_SP.png/revision/latest?cb=20170401125708',
    diet: 'veggie',
    favouriteToy: 'crystalball',
    favouriteFood: 'oca',
    type: 'harmful',
    slimepedia: {
      slimeology:
        'Believed to be a cousin of the rock slime, the crystal slime is covered in a crown of shimmering, crystal spikes. These spikes seem to form from the crystal slime generating a tremendous amount of internal heat and warping the minerals around them; a truly alien behavior',
      risks:
        "The sharp crystals adorned on the crystal slime's crown will cause a great deal of harm if touched. Worse still, the crystal slime routinely creates large patches of dangerous crystals in the environment around them. Thought to be a means of expelling internal heat, these crystal patches are ultra-hot and can be shattered if splashed with water.",
      plortonomics:
        "Though the crystals produced by a crystal slime are highly unstable, a crystal plort, like all plorts, is far more pure and can be used by slime scientists to engineer a variety of metals that are entirely transparent. This innovation has lead to metropolitan areas on Earth completely transforming visually, allowing more light to reach the streets and the space as a whole a chance to 'breathe.' Architects often describe these transparent metals as 'so totally cooler than normal, boring metals.'",
    },
    locations: ['quarry'],
    properties: [
      'Damages Beatrix on contact',
      'Can produce crystals on the floor as a hazard. When it does so, it leaps into the air rolling into a spikey ball.',
      'Produces crystals more frequently when agitated.',
      'Crystals can be destroyed and production of more can be temporarily nullified with Water or Ancient Water.',
    ],
  },
  {
    id: 'quantum',
    name: 'Quantum Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/9c/IconSlimeQuantumSR2.png/revision/latest?cb=20220929193454',
    diet: 'fruit',
    favouriteToy: 'puzzlecube',
    favouriteFood: 'lemon',
    type: 'docile',
    slimepedia: {
      slimeology:
        "Quantum Slimes appear to have resulted from some sort of event that took place in the Ancient Ruins long ago. At all times, the quantum slime is capable of emitting other possible realities of their being. Called 'ghosts', these other realities can come true, with the quantum slime aligning with the reality of the ghost, effectively teleporting",
      risks:
        'Quantum Slimes can be one of the most difficult slimes to manage, given their unique abilities. A rancher needs to learn to detect when quantum slimes are primed to take over the reality of a ghost, and act quickly, such as feeding them or splashing them with fresh water as a temporary measure.',
      plortonomics:
        "Quantum plorts are believed by many to hold the secret to infinite resources. Given the quantum slime's ability to change reality, it's theorized that unlocking the potential of quantum plorts would allow for a technology that converges the realities of other entities into our reality and- well basically we're talking about cloning stuff. Infinite energy, chickens, whatever. Probably no harmful side effects to this at all",
    },
    locations: ['ruins', 'desert'],
  },
  {
    id: 'dervish',
    name: 'Dervish Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/5/50/Dervish_Slime_SP.png/revision/latest?cb=20221221183332',
    diet: 'fruit',
    favouriteToy: 'gyro',
    favouriteFood: 'pear',
    type: 'docile',
    slimepedia: {
      slimeology:
        'A dervish slime is a swirling, whirling bundle of energy in slimy form. Dervish slimes are commonly found in the Glass Desert, cruising across its dusty dunes at high speed atop little whirlwinds.\nOne thing is for certain: wherever the dervish slime needs to go, it gets there in a hurry.',
      risks:
        "Dervish slimes can cause total chaos on a ranch if not cared for properly. In addition to frequently riding atop whirlwinds at high speed and collecting objects along the way, a highly agitated dervish slime can produce giant cyclones of air that vacuum up and toss about anything they touch.\nWhen cyclones are roaring across your ranch there's little you can do other than brace for the chaos that will soon follow!",
      plortonomics:
        'Dervish plorts are a fantastic source of clean energy that helps give turbines and generators an extra boost. They are in constant demand as curiously, there is a finite number of spins stored in every dervish plort.',
    },
    properties: [
      'Can create small cyclones underneath themselves, giving them some lift',
      'When agitated they can create large cyclones independant of the Slime, which reduces visibility and can sweep up Food, Slimes, and Plorts. Other Dervish Slimes, including Largos, are immune to these tornadoes.',
    ],
    locations: ['desert'],
  },
  {
    id: 'tangle',
    name: 'Tangle Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/d/d6/Tangle_Slime_SP.png/revision/latest?cb=20170612214513',
    diet: 'meat',
    favouriteToy: 'solmate',
    favouriteFood: 'paintedhen',
    type: 'docile',
    slimepedia: {
      slimeology:
        "Though the tangle slime may look innocent with its wide smile and colorful flower atop its head, it's actually a fearsome predator with a big appetite for tasty meat. The tangle slime earned its name from the twisting vines that it can produce to grab things in the environment.\nIt's unknown what caused the tangle slime to become such a fearsome predator in the barren wastes of the Glass Desert. However, if the land once resembled the lush greenery of the oases within, perhaps the tangle slime evolved in a much different environment than what you see today.",
      risks:
        "The tangle slime can be a handful on the ranch if they're not well-fed at all times. Not only can tangle slimes tunnel their vines underground to snatch food from outside their corrals, but the flowers on their head can produce a noxious pollen cloud that causes other slimes to go into sneezing fits.\nWhen slimes sneeze from the pollen their agitation rapidly increases, causing more boom slime explosions, crystal slime spikes, and all around jumpiness.",
      plortonomics:
        "Despite the troublesome nature of the slimes that create them, tangle plorts have incredibly beneficial agricultural applications. Fertilizers and growth formulas made from tangle plorts are used by farms all across Earth to greatly enhance crop production.\nIt's speculated that the unusually high nutrient count found within tangle plorts that now grow Earth's vegetables results from the tangle slime's incredible appetite for chickens, but that's super gruesome so let's just ignore that.",
    },
    properties: [
      'Can utilize vines to pick up Food and Plorts from a distance, including outside of their Corrals',
      'If agitated, they will release pollen that makes surrounding slimes sneeze, increasing their Agitation',
    ],
    locations: ['desert'],
  },
  {
    id: 'fire',
    name: 'Fire Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/5/58/Fire_Slime_SP.png/revision/latest?cb=20170613212118',
    diet: 'ash',
    favouriteToy: 'brick',
    favouriteFood: null,
    type: 'harmful',
    slimepedia: {
      slimeology:
        'Fire slimes are a rare breed of slime that lives on ash. Fire slimes will eat just about any food, but not without it being burned into ash first. The only way to feed a fire slime is to use an incinerator with an ash trough upgrade.\nFire slimes need ash to survive and will quickly snuff out if left on any other surface for too long. When keeping fire slimes in an ash trough, simply burn any food item to produce some ash and fill the trough.',
      risks:
        "A fire slime's naturally burning state makes them bad companions for other slimes as their fiery touch will send a slime flying. Additionally, fire slimes and their plorts need to be kept in an ash trough under an incinerator or they'll quickly snuff out. If you need to deal with fire slimes directly, a splash of fresh water will put out their fires for a short while.",
      plortonomics:
        "Fire plorts are used in the developing world on Earth to keep stoves and fireplaces burning. Thanks to fire plorts, warm hands and hot food is a possibility for millions of people who otherwise would not have access to such luxuries.\nA rancher won't get rich selling fire plorts, and certainly managing them can be a dangerous endeavor, but they should know that the sale of each helps those in need. Now and far into the future, the little noble actions of every individual help us move forward as a people. That much will never change.",
    },
    properties: [
      'Can only survive in an Ash trough of an Incinerator. If it is anywhere else for too long, it disappears',
      'Its fire can be temporarily extinguished by splashing it with Water or Ancient Water.',
      'Food and Chickadoos that touch a burning fire slime are destroyed. Slimes that touch a burning fire slime get agitated and knocked back.',
    ],
    locations: ['desert'],
  },
  {
    id: 'mosaic',
    name: 'Mosaic Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/6/69/Mosaic_Slime_SP.png/revision/latest?cb=20170612214624',
    diet: 'veggies',
    favouriteToy: 'disco',
    favouriteFood: 'parsnip',
    type: 'harmful',
    slimepedia: {
      slimeology:
        'The mosaic slime gets its name from the glittering array of glass tiles that cover its body. This glass produces a similar anomaly found in the desert itself, making the mosaic slime beautiful, but quite dangerous.',
      risks:
        "Mosaic slimes can be very dangerous for an unprepared rancher. Their glass tiles create a shimmering effect in daylight that attracts other slimes to them. It is unknown why slimes exhibit this behaviour exactly, but leading theories indicate that 'sparkly things are super cool.'\nEven more dangerous, the mosaic slime can produce glints in the space around them: ultra-hot solar anomalies that grow in intensity before drifting toward the ground and bursting into flames. Glints can be snuffed with a splash of water, but the best way to reduce their appearance is to ensure your mosaic slimes are well-fed and not agitated.",
      plortonomics:
        "Mosaic plorts are desired for researching the glass structures within the Glass Desert. Samples of this glass turn brittle when taken from the Far, Far Range, yet interestingly, mosaic plorts seem unaffected by this phenomenon.\nAlmost certainly, this glass is being studied because it's really pretty and not because it can cause devastating solar anomalies.",
    },
    properties: [
      'While under direct sunlight, other slimes are attracted towards Mosaic Slimes.',
      "Regularly produce glints of light that erupt into a ball of fire when they hit the ground. Glints appear regardless of the light level of the Mosaic Slime's environment.",
      'Glints can be destroyed and the ability to produce more temporarily nullified by splashing the Mosaic slime with Water or Ancient Water.',
      'Glints are removed when the Mosaic Slime is no longer present in the world.',
      'Glints are produced more frequently the more agitated the mosaic is.',
    ],
    locations: ['desert'],
  },
  {
    id: 'saber',
    name: 'Saber Slime',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/a/a6/Saber_Slime_SP.png/revision/latest?cb=20171018150733',
    diet: 'meat',
    favouriteToy: 'stegobuddy',
    favouriteFood: null,
    type: 'harmful',
    slimepedia: {
      slimeology:
        "The mosaic slime gets its name from the glittering array of glass tiles that cover its body. This glass produces a similar anomaly found in the desert itself, making the mosaic slime beautiful, but quite dangerous.\nThough saber slimes are carnivores, the largos in The Wilds display a curious habit of bundling the rare kookadoba fruit into bundles of sticks, mud, and slime that become rock-hard in time. Only Ogden's specially engineered kookacrackers are capable of breaking them",
      risks:
        "Most saber slime largos found in The Wilds are feral, looking to take a bite out of whatever they see. They're also incredibly agile for slimes, capable of powerful jumps that allow them to bound off other surfaces before targeting their prey\nIf you encounter a horde of feral saber slime largos, watch your back so you don't get flanked.",
      plortonomics:
        "Saber plorts are collected for their historical value, offering a window into the primitive past of the Far, Far Range. Some slime scientists have tried to extract the slime DNA from these plorts in order to recreate a true saber slime, but all have failed. And honestly, that's probably for the better, because as soon as that happens some charming billionaire would be talking about making a whole theme park to view them in captivity and then...",
    },
    properties: [
      'Only spawn as Largo Slimes.',
      'Can pick up Food similarly to the Tabby Slime.',
      'Capable of bouncing off walls in order to change direction in midair towards its intended target.',
      'Are found feral in The Wilds.',
    ],
    locations: ['wilds'],
  },
];
