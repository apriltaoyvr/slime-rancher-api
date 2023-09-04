export interface Location {
  id: string;
  image: string;
  name: string;
  slimepedia: string;
}
export const locations: Location[] = [
  {
    id: 'ranch',
    name: 'The Ranch',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/0/06/The_Ranch.png/revision/latest?cb=20170327115209',
    slimepedia:
      "Beatrix begins her life on a humble ranch in the middle of an area in the Far, Far Range known as the Dry Reef. Once the property of the legendary slime rancher and notorious old codger, Hobson Twillgers, the ranch has seen better days, as Hobson let it come into a state of disrepair shortly before disappearing completely.\nHobson's whereabouts are currently unknown.",
  },
  {
    id: 'grotto',
    name: 'The Grotto',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/b/bf/The_Grotto.png/revision/latest/scale-to-width-down/1000?cb=20170620170408',
    slimepedia:
      'The Grotto is an expansion to the ranch set inside a (slightly spooky) cave that allows a rancher to care for light-sensitive slimes without the need for a solar shield. Never has a phosphor slime felt so liberated.',
  },
  {
    id: 'overgrowth',
    name: 'The Overgrowth',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/3/3e/The_Overgrowth.png/revision/latest/scale-to-width-down/1000?cb=20170620171633',
    slimepedia:
      'The Overgrowth is an expansion to the ranch that is covered in moss and tall grasses. The thicket it creates allows for fruit and veggies to grow naturally and attracts the occasional wild chicken, making it an ideal space for a rancher that wants to let their slimes roam more freely.',
  },
  {
    id: 'docks',
    name: 'The Docks',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/3/39/The_Docks.png/revision/latest?cb=20170421174431',
    slimepedia:
      "The Docks is an expansion to the ranch that repurposes a cozy, little lookout along the waterfront. This expansion offers a few extra ranch patches flanked on several sides with fishing nets. The nets can be used to temporarily catch escaped slimes or as a means of creating physical collages of slimes because it's fun.\nIt also houses a natural wellspring, allowing you to fill your tank with unlimited fresh water, or for a few puddle slime that prefer a natural place to soak.",
  },
  {
    id: 'lab',
    name: 'The Lab',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/1/1d/The_Lab.png/revision/latest?cb=20170327115211',
    slimepedia:
      "The Lab is an expansion to the Ranch that houses a barn containing Hobson's old, Slime Science workshop. Once unlocked, the Lab will allow you to fabricate dozens of useful gadgets using Slime Science!\nIt is recommended that only more experienced ranchers unlock the Lab, as Slime Science requires a great many resources and lots of newbucks to fully master.",
  },
  {
    id: 'retreat',
    name: "Ogden's Retreat",
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/93/OgdensRetreatSP.png/revision/latest?cb=20171018200419',
    slimepedia:
      'Ogden built this little getaway as a place where he could take a break from his ranch and collect his thoughts. But soon it led to an obsession as he discovered the nearby Wilds, and the tasty kookadoba fruit within.',
  },
  {
    id: 'manor',
    name: "Mochi's Manor",
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/3/33/MochiManorSP.png/revision/latest?cb=20180314162433',
    slimepedia:
      "Mochi's Manor is one of several of its kind, (and this one isn't even the best one) owned by the great Mochi Miles. Her accomplishments are known throughout the galaxy, earning her the respect of every rancher on the Far, Far Range. Other ranchers can't even compete. They were even going to give an award to Mochi, but she said no thanks.\n[ERROR: THIS SLIMEPEDIA ENTRY HAS BEEN ALTERED BY AN EXTERNAL SOURCE]",
  },
  {
    id: 'workshop',
    name: "Viktor's Workshop",
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/7/7c/ViktorsWorkshopSP.png/revision/latest?cb=20190618225905',
    slimepedia:
      "Deep below the Slime Sea, Viktor's Workshop is one part laboratory, one part ranch that Viktor developed himself. The workshop houses his Slimeulation system that is currently filled with bugs and technical glitches and in need of further testing. Because of this, Viktor has moved on to an unknown, new project somewhere on the Far, Far Range while he seeks a partner to help troubleshoot the Slimeulation.\nThough the workshop's undersea nature provides a dramatic effect, it is an extremely practical decision in that the Slime Sea provides a natural cooling system for the tremendous amount of heat the Slimeulation generates. This unnatural warming effect on the Slime Sea is a top priority of Viktor's, and he has stated that if he cannot reduce Slimeulation heat output significantly in the near future, he will shut the entire project down for fear of harming the natural environment.",
  },
  {
    id: 'sea',
    name: 'The Slime Sea',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/e/ef/The_Slime_Sea.png/revision/latest/scale-to-width-down/1000?cb=20170327115208',
    slimepedia:
      "The Slime Sea that covers most of the Far, Far Range is something of a mystery. It is seemingly a mixture of water and slime that is believed to be the primordial pool where all slimes emerged, though its true purpose is entirely unknown by even the most esteemed slime scientists.\nWhat is known is that the liquid found within the Slime Sea is not fit for drinking, watering crops, or even swimming, as most things seem to quickly sink to the bottom. When a slime enters the Slime Sea it quickly vanishes but it is widely believed that this far from ends the slime's existence, for slimes that enter the sea can often be seen quickly returning back on land, happy as ever. In fact, many slime scientists believe that slimes use the sea as a means of transportation, moving swiftly below the surface and popping out on land wherever they see fit\nBut all theories aside, one fact remains very clear, most especially to ranchers: don't enter the Slime Sea!",
  },
  {
    id: 'reef',
    name: 'The Dry Reef',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/d/da/The_Dry_Reef.png/revision/latest/scale-to-width-down/1000?cb=20170327115212',
    slimepedia:
      "The environment surrounding the ranch is known as the Dry Reef and is an arid, wind-swept land covered in dusty crags and rocky cliffs shaped by the wind over the millennia.\nThe Dry Reef is primarily home to pink, tabby, and rock slimes though phosphor slimes will also come out from hiding when the sun sets. The Dry Reef's climate doesn't make for abundant of any particular resource, but there are plenty of carrots, pogofruit and hen hens, as well as some less common resources if you know where to look.",
  },
  {
    id: 'blanket',
    name: 'The Moss Blanket',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/c/c0/The_Moss_Blanket.png/revision/latest/scale-to-width-down/1000?cb=20170327115213',
    slimepedia:
      'The Moss Blanket is an island covered with a thick layer of moss where flora grows wild in great, tangling knots at every turn. The high walls of the cliffs surrounding the island and its great canopy of trees allow for sea mists to pass in and become trapped, creating a unique climate within the otherwise arid range.\nThe slimes primarily found within the Moss Blanket find its jungle-like conditions perfect: Tabby and Boom Slimes hunt their prey through the thickets with abandon, and Honey Slimes lounge in the flower beds, eating the great abundance of fruit that can be found at every turn.',
  },
  {
    id: 'quarry',
    name: 'The Indigo Quarry',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/6/60/Quarry2.png/revision/latest/scale-to-width-down/1000?cb=20170327115214',
    slimepedia:
      'The Indigo Quarry is a winding network of caves and cliffs, striated with deep purple hills from the rare minerals found within it. It was once the site of a mining project but went bust after the discovery that the rare ores it produces quickly break down in the atmospheres other than that of the Far, Far Range.\nIt was later discovered that the means to harness these metals was via rock slime plorts. Somehow, rock slime plorts preserve the minerals within, a process that eludes even the most prestigious slime scientists.\nThe Indigo Quarry is a natural home for rock slimes and the more elusive rad slime, and its naturally mineral-rich soil make it a great place to harvest most wild veggies.',
  },
  {
    id: 'ruins',
    name: 'The Ancient Ruins',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/1/1a/TheAncientRuins_SP.png/revision/latest?cb=20170327115215',
    slimepedia:
      'Hidden behind a vast mountain range, the Ancient Ruins stand as one of the few known unnatural structures on the Far, Far Range. Their origin remains a mystery, as do the strange occurrences that happen within.\nHome to quantum slimes that seem to express many other possible realities of their being, and phase lemon trees that do not remain in one place or time for very long, the Ancient Ruins defy logic and expectation.\nOnly one thing is certain in the Ancient Ruins: within its deepest chamber lies its greatest secret.',
  },
  {
    id: 'desert',
    name: 'The Glass Desert',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/c/c4/The_Glass_Desert.png/revision/latest?cb=20170805171615',
    slimepedia:
      "The Glass Desert is mostly uncharted territory within the Far, Far Range, located so far beyond the ranch it is only accessible via teleportation.\nThe Glass Desert gets its name from the monolithic glass structures that dot its landscape. Resembling prismatic, frozen flames, these glass structures are believed to have been created during a violent solar event, scorching the land and stone into glass. These glass structures are also believed to be the catalyst for the dangerous solar anomalies that regularly occur in the Glass Desert: firestorms that burst from the ground, as if intense heat is desperate to escape the ground below.\nBut the desert's barren, unforgiving, sometimes violent environment hides a secret: somewhere deep within it lies a memory of what once was, and a means of restoring parts of that memory.",
  },
  {
    id: 'wilds',
    name: 'The Wilds',
    image: 'https://static.wikia.nocookie.net/slimerancher/images/8/89/TheWildsSP.png/revision/latest?cb=20171018200308',
    slimepedia:
      'The Wilds are an ancient, untamed collection of islands that are home to an enormous population of feral slimes. All of these slimes are largo desecendants[sic] of saber slimes, one of the oldest known species of slimes.\nOgden Ortiz once explored The Wilds and discovered the rare kookadoba fruit growing within. Since then he has contracted out the dangerous task of collecting these fruits to anyone willing to take on the risk.',
  },
  {
    id: 'valley',
    name: 'Nimble Valley',
    image: 'https://static.wikia.nocookie.net/slimerancher/images/7/71/NimbleValleySP.png/revision/latest?cb=20180314161156',
    slimepedia:
      'The Nimble Valley is a wholly-owned property of Mochi Miles and the only known habitat of the exceedingly rare quicksilver slimes.\nMochi uses a complex system of proprietary electrical generators to call quicksilver slimes out from hiding and then a modified vacpack to feed them charges of electrical enegy. The Nimble Valley is also rigged with a series of warptech satellites that instantly transfer quicksilver plorts into a rancher\'s vac tank, because according to Mochi, having to vac up plorts manually "is for chumps."',
  },
  {
    id: 'slimeulation',
    name: 'The Slimeulation',
    image: 'https://static.wikia.nocookie.net/slimerancher/images/2/2b/TheSlimeulationSP.png/revision/latest?cb=20190619003205',
    slimepedia:
      'The Slimeulation is an in-development, virtual re-creation of the Far, Far Range created by Viktor Humphries. The goal of the Slimeulation is to predict slime behaviors and evolution, but unfortunately it is riddled with bugs in the codebase which have produced a curious anomally[sic] known as glitch slimes',
  },
];

export type LocationType = typeof locations;
