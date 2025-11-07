import type { Diet } from './enums';

export interface Food {
  id: string;
  name: string;
  image: string;
  type: Diet;
  slimeId?: string;
  locations: string[];
  slimepedia: {
    about: string;
    ranch?: string;
  };
}

export const foods: Food[] = [
  {
    id: 'ranchers',
    name: 'Ranchers',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/beatrix.jpg',
    type: 'meat',
    slimeId: 'tarr',
    locations: [],
    slimepedia: {
      about: '',
      ranch: '',
    },
  },
  {
    id: 'roostro',
    name: 'Roostro',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/roostro.webp',
    type: 'meat',
    slimeId: 'hunter',
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        "Roostros are the alpha birds on the Far, Far Range and half of the equation required to breed chickens on the ranch. However, roostros are rarer than any hen making them a great find any time one is discovered.\nTo acquire a roostro, either find one out on the range or breed them on the ranch. Any type of chickadoo has a small chance of growing into a roostro. Some ranchers believe that these odds increase if you greet the Rooster King's crow at sunrise with an enthusiastic 'good morning!'",
      ranch:
        'All hens in close proximity to roostros will periodically lay eggs that produce chickadoos. However, keeping too many hens or roostros in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.',
    },
  },
  {
    id: 'elderroostro',
    name: 'Elder Roostro',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/elderroostro.webp',
    type: 'meat',

    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        "Elder roostros are the senior-aged roostros who have retired from the otherwise bustling life of their younger counterparts. 'Young roostros crow too much, they move too fast, and frankly have no respect for their elders,' an elder roostro might say of youths; as they make a gross, smacking sound with their lips. Though this is of course impossible, as roostros do not have lips.",
      ranch:
        'An elder roostro can no longer sire chickadoos and serves no other purpose than becoming a slightly tough chicken dinner.',
    },
  },
  {
    id: 'hen',
    name: 'Hen Hen',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/hen.webp',
    type: 'meat',

    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        'Hen Hens are a special breed of chicken bred to survive the climate of the Far, Far Range. While appearing more or less like a big chicken, these burly birds are much more adept at fending for themselves, making them ideal for ranchers who might otherwise be distracted by a few hundred hungry slimes.',
      ranch:
        'Hen Hens in close proximity to roostros will periodically lay eggs that produce chickadoos. However, keeping too many hens or roostros in close proximity makes them anxious and egg production will come to halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.',
    },
  },
  {
    id: 'elderhen',
    name: 'Elder Hen',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/elderhen.webp',

    type: 'meat',

    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        "Elder hens have lived a full-feathered life. They've met the roostro of their dreams, seen their little chickadoos grow up, and are ready to start the next chapter of their chicken lives. In all likelihood this will include getting the names of countless books, movies and actors wrong. But don't blame them for that. They're chickens for goodness sake.",
      ranch:
        'An elder hen can no longer lay eggs and serves no other purpose than becoming a slightly tough chicken dinner.',
    },
  },
  {
    id: 'stonyhen',
    name: 'Stony Hen',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/stonyhen.webp',
    type: 'meat',
    slimeId: 'tabby',
    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        'Stony hens are thought to have evolved from hen hens who once trekked deep into the mountains of the Far, Far Range. Perhaps these birds were seeking a clarity of mind that one can truly obtain through meditation amongst these lofty, barren crags. But most likely, they were just stupid and got lost.',
      ranch:
        'Stony hens in close proximity to roostros will periodically lay eggs that produce stony chickadoos. However, keeping too many hens or roostros in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.',
    },
  },
  {
    id: 'briarhen',
    name: 'Briar Hen',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/briarhen.webp',
    type: 'meat',
    slimeId: 'boom',
    locations: ['blanket'],
    slimepedia: {
      about:
        'Briar hens are a chicken variant born from the wild thickets of the Far, Far Range. They were first discovered long ago by an explorer who noted that they seemed to have a complex tribal structure, and a fascinating series of chicken customs. He even may have joined the briar tribe as an honorary chicken himself! His records end there however, and we know nothing else about him or his findings. Oh, but his name was Carl. We know that.',
      ranch:
        'Briar hens in close proximity to roostros will periodically lay eggs that produce briar chickadoos. However, keeping too many hens or roostros in close proximity makes them anxious and egg production will come to halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.',
    },
  },
  {
    id: 'paintedhen',
    name: 'Painted Hen',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/paintedhen.webp',
    type: 'meat',
    slimeId: 'tangle',
    locations: ['desert'],
    slimepedia: {
      about:
        "Painted Hens are the colorful chicken variants found in the Glass Desert. It is unknown what caused their rainbow-like plumage to occur. One theory suggests their colors are a biological mimicry of the prismatic glass found within the desert, while another theory states that their wild colors made them the dominant mates of Cluck Kingdoms and thus were banished to the desert by a coalition of jealous chickens who couldn't compete with these fashionable fouls.\nBut the latter theory is only believed by one strange person, so we're not sure why it would have been included here.",
      ranch:
        'Painted Hens in close proximity to roostros will periodically lay eggs that produce painted chickadoos. However, keeping too many hens or roostros in close proximity make them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.',
    },
  },
  {
    id: 'chickadoo',
    name: 'Chickadoo',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/chickadoo.webp',
    type: 'meat',

    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        "Chickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones.\nChickadoos are baby chickens that will eventually grow into a hen hen or more rarely, a roostro.",
      ranch:
        "Keep chickadoos in a safe place and they'll eventually grow into a Hen Hen or Roostro.",
    },
  },
  {
    id: 'stonychickadoo',
    name: 'Stony Chickadoo',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/stonychickadoo.webp',
    type: 'meat',

    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        "Stony chickadoos are baby chickens that will eventually grow into a stony hen or more rarely, a roostro.\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones.",
      ranch:
        "Keep Stony Chickadoos in a safe place and they'll eventually grow into a Stony Hen or a Roostro.",
    },
  },
  {
    id: 'briarchickadoo',
    name: 'Briar Chickadoo',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/briarchickadoo.webp',
    type: 'meat',

    locations: ['blanket'],
    slimepedia: {
      about:
        "Briar chickadoos are baby chickens that will eventually grow into a briar hen or more rarely, a roostro.\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones.",
      ranch:
        "Keep Briar Chickadoos in a safe place and they'll eventually grow into a Briar Hen or Roostro.",
    },
  },
  {
    id: 'paintedchickadoo',
    name: 'Painted Chickadoo',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/paintedchickadoo.webp',
    type: 'meat',

    locations: ['desert'],
    slimepedia: {
      about:
        "Painted chickadoos are baby chickens that will eventually grow into a painted hen or more rarely, a roostro.\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones.",
      ranch:
        "Keep Painted Chickadoos in a safe place and they'll eventually grow into a Painted Hen or Roostro.",
    },
  },
  {
    id: 'pogo',
    name: 'Pogo Fruit',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/pogo.webp',
    type: 'fruit',

    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        "Pogofruit are a common sight almost anywhere on the Far, Far Range. Tasting a bit like a peach, they're most notable for having their trademark spots both on and under the skin.",
      ranch:
        "Deposit a pogofruit into a garden's depositor and you'll grow a large pogofruit tree of your very own.",
    },
  },
  {
    id: 'carrot',
    name: 'Carrot',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/carrot.webp',
    type: 'veggie',

    locations: ['reef', 'blanket', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        "The humble carrot was brought to the Far, Far Range because they're easy to grow and nutritious. Most ranchers swear by them as they're a handy portable snack, promote good night vision, and when juiced are only second to coffee as the perfect morning beverage.",
      ranch:
        "Deposit a carrot into a garden's depositor and you'll have a large carrot crop of your own.",
    },
  },
  {
    id: 'beet',
    name: 'Heart Beet',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/beet.webp',
    type: 'veggie',
    slimeId: 'rock',
    locations: ['reef', 'quarry', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        "Heart beets get their name from their deep, red color and heart-like shape. Heart beets are also unusually juicy for a beet, making it the only veggie that's not for the squeamish in the kitchen.",
      ranch:
        "Deposit a heart beet into a garden's depositor and you'll have a large heart beet crop of your very own.",
    },
  },
  {
    id: 'cuberry',
    name: 'Cuberry',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/cuberry.webp',
    type: 'fruit',
    slimeId: 'phosphor',
    locations: ['reef', 'blanket', 'ruins', 'desert', 'wilds'],
    slimepedia: {
      about:
        'Due to their sweet taste and curious shape, cuberries were quick to become a favorite amongst the first ranchers on the range. They are often used in cakes and pies when celebrating special occasions, like birthdays or Plortapalooza.',
      ranch:
        "Deposit a cuberry into a garden's depositor and you'll grow a large cuberry tree of your own.",
    },
  },
  {
    id: 'mango',
    name: 'Mint Mango',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/mango.webp',
    type: 'fruit',
    slimeId: 'honey',
    locations: ['blanket', 'strand'],
    slimepedia: {
      about:
        "The mint mango is perhaps the sweetest fruit ever discovered. Its appearance is that of a mango, with a thicker, syrup-like juice, and a bright, minty aftertaste. It's no wonder Honey Slimes seek them out or that they have such amazingly fresh breath.",
      ranch:
        "Deposit a mint mango into a garden's depositor, and you'll grow a large mint mango tree of your very own.",
    },
  },
  {
    id: 'oca',
    name: 'Oca Oca',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/oca.webp',
    type: 'veggie',
    slimeId: 'rad',
    locations: ['quarry'],
    slimepedia: {
      about:
        "A staple of cooking on the range, the hearty Oca Oca is a naturally salty, soft spud. As the key ingredient to the always tasty 'rancher's hashbrowns', they have likely been the fuel for a great deal of slime wrangling since their discovery on the range.",
      ranch:
        "Deposit an Oca Oca into a garden's depositor and you'll have a large Oca Oca crop of your very own.",
    },
  },
  {
    id: 'onion',
    name: 'Odd Onion',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/onion.webp',
    type: 'veggie',
    slimeId: 'crystal',
    locations: ['quarry'],
    slimepedia: {
      about:
        'Odd Onions can only grow in the Indigo Quarry; however, you\'ll never encounter an Odd Onion patch. Instead, Odd Onions can be found randomly in other veggie patches. As the saying goes "Forage into the Indigo Quarry and you\'ll always find the Odd Onion in your haul."',
      ranch:
        "Deposit an Odd Onion into a garden's depositor and strangely, carrots will begin to grow. However, there is a good chance you'll get some odd onions in your crop as well.",
    },
  },
  {
    id: 'lemon',
    name: 'Quantum Lemon',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/lemon.webp',
    type: 'fruit',
    slimeId: 'quantum',
    locations: ['ruins'],
    slimepedia: {
      about:
        'A phase lemon comes from a different place and time. They are like an echo, reverberating through the halls of the Ancient Ruins, never staying in the same place for long.',
      ranch:
        "Deposit a phase lemon into a garden's depositor and you'll grow a large phase lemon tree of your very own",
    },
  },
  {
    id: 'pear',
    name: 'Prickle Pear',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/pear.webp',
    type: 'fruit',
    slimeId: 'dervish',
    locations: ['desert'],
    slimepedia: {
      about:
        "Prickle pears are as tough as the Glass Desert itself; having a thick, leathery, skin and covered in sharp barbs, they're an 'acquired taste' to be sure. But those who put forth the cautious effort will find one of the sweetest fruits in the known universe hiding within",
      ranch:
        "Deposit a prickle pear into a garden's depositor and you'll grow a large prickle pear tree of your very own",
    },
  },
  {
    id: 'parsnip',
    name: 'Silver Parsnip',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/parsnip.webp',
    type: 'veggie',
    slimeId: 'mosaic',
    locations: ['desert'],
    slimepedia: {
      about:
        'Despite their slightly metallic aftertaste, these shimmering root veggies are considered a delicacy by gourmands across the galaxy. On the Far, Far Range, ranchers often eat them during the holidays, to bring good fortune in the coming year',
      ranch:
        "Deposit a Silver Parsnip into a garden's depositor and you'll have a large Silver Parsnip crop of your very own",
    },
  },
  {
    id: 'ginger',
    name: 'Gilded Ginger',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/ginger.webp',
    type: 'veggie',
    slimeId: 'gold',
    locations: ['desert'],
    slimepedia: {
      about:
        'Curiously, gilded ginger cannot be replicated in a garden as its unusual biological properties prohibit it. However, there is perhaps another use for it...',
      ranch:
        'Said to be the holy grail of veggies, gilded ginger can very rarely be found growing in the Glass Desert. It is the only known food that a gold slime will eat, and the few that have seen it claim that doing so will greatly reward the lucky rancher',
    },
  },
  {
    id: 'kookadoba',
    name: 'Kookadoba',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/kookadoba.webp',
    type: 'fruit',

    locations: ['wilds'],
    slimepedia: {
      about:
        "Kookadoba are known as 'the king of fruit' by their enthusiasts, which include the jolly gourmand, Ogden Ortiz. However, harvesting them can be quite perilous as they only grow in the feral domain of The Wilds. Worse, the kookadoba smells and tastes horrible to most palates, with most who try it reporting it has the flavor of 'stinky cheese meets stinkier cheese'",
      ranch:
        "Kookadoba can only grow in the soils of The Wilds. A garden's replicator will reject it.",
    },
  },
  {
    id: 'lettuce',
    name: 'Water Lettuce',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/lettuce.webp',
    type: 'veggie',
    slimeId: 'cotton',
    locations: ['fields', 'strand', 'valley'],
    slimepedia: {
      about:
        "Like a desert bloom or a deep sea pearl, water lettuce is a small miracle. The dry season can be difficult for wildlife on the Far, Far Range. But through the humble water lettuce, nature has found a way to provide. The water stored inside the plant prevents its leaves from wilting under the sun's rays, and in turn the crisp leaves keep the water cool and protected, perfect for a thirsty critter in search of relief from the heat",
      ranch:
        "Deposit a water lettuce into a garden's depositor and you'll have a large water lettuce crop of your very own.",
    },
  },
  {
    id: 'moondewnectar',
    name: 'Moondew Nectar',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/moondewnectar.webp',
    type: 'nectar',
    slimeId: 'flutter',
    locations: ['strand'],
    slimepedia: {
      about:
        "This sweet syrup comes from Rainbow Island's most unusual plant, the moondew flower, which only blooms at night. Initially scientists thought the buds of this flower never opened. But that was just because they tended to call it quits around 5, maybe 4:45 if they were trying to beat traffic.",
    },
  },
  {
    id: 'pomegranite',
    name: 'Pomegranite',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/pomegranite.webp',
    type: 'fruit',
    slimeId: 'batty',
    locations: ['strand', 'valley'],
    slimepedia: {
      about:
        "The pomegranite is as mysterious as it is ancient. A fruit that grows only in the dark caves beneath the earth, it grows without sunlight, without warmth. It should not be, and yet, it is. A living paradox? Or a symbol of nature's resilience, of the ability for life to thrive even in the unlikeliest of spaces? Pretty deep stuff.",
      ranch:
        "Deposit a pomegranite into a garden's depositor and you'll grow a large pomegranite tree of your own.",
    },
  },
  {
    id: 'seahen',
    name: 'Sea Hen',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/seahen.webp',
    type: 'meat',
    slimeId: 'angler',
    locations: ['strand', 'valley'],
    slimepedia: {
      about:
        'Old sailors say that sea hens are actually demons in disguise, and that their vacant expressions are actually a diabolically calculated misdirect to hide evil intent. Plotting, waiting for their moment... to strike.',
      ranch:
        'Sea hens in close proximity to roostros will periodically lay eggs that produce sea chickadoos. However, keeping too many chickens in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance will monitor growth rates in their coops and reduce density when growth beings to slow.',
    },
  },
  {
    id: 'seachickadoo',
    name: 'Sea Chickadoo',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/seachickadoo.webp',
    type: 'meat',

    locations: ['strand', 'valley'],
    slimepedia: {
      about:
        "Chickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones.\nSea chickadoos are baby chickens that will eventually grow into a sea hen or more rarely, a roostro",
      ranch:
        "Keep sea chickadoos in a safe place and they'll eventually grow into a sea hen or roostro",
    },
  },
  {
    id: 'thundercluck',
    name: ' Thundercluck Hen',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/thundercluck.webp',
    type: 'meat',
    slimeId: 'saber',
    locations: ['bluffs'],
    slimepedia: {
      about:
        "Thought to be extinct for over a billion years, thunderclucks are a variety of prehistoric hen that ruled the roost during the Jellasic Period and absolute proof that dinosaurs were basically just giant chickens. Historians had long believed they were wiped out from a giant meteor, but seeing them now it's clear that the roostros were probably just super terrified of them and it just sort of took care of itself.",
      ranch:
        'Thunderclucks in close proximity to roostros will periodically lay eggs that produce Thunder Chickadoos. However, keeping too many chickens in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance will monitor growth rates in their coops and reduce density when growth begins to slow.',
    },
  },
  {
    id: 'thunderchickadoo',
    name: 'Thunder Chickadoo',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/thunderchickadoo.webp',
    type: 'meat',

    locations: ['bluffs'],
    slimepedia: {
      about:
        "Thunder chickadoos are baby chickens that will eventually grow into a thundercluck or more rarely, a roostro.\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones.",
      ranch:
        "Keep thunder chickadoos in a safe place and they'll eventually grow into a thundercluck or Roostro.",
    },
  },
  {
    id: 'candiedhen',
    name: 'Candied Hen',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/candiedhen.webp',
    type: 'meat',
    slimeId: 'sloomber',
    locations: ['labyrinth'],
    slimepedia: {
      about:
        'Candied hens are a mysterious breed of chicken found in the Grey Labyrinth. Their unusual sweetness is almost too perfect, as if pulled from the dreams of a hungry slime. How did such a hen come to be in the labyrinth?',
      ranch:
        'Candied hens in close proximity to roostros will periodically lay eggs that produce candied chickadoos. However, keeping too many chickens in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance will monitor growth rates in their coops and reduce density when growth begins to slow.',
    },
  },
  {
    id: 'candiedchickadoo',
    name: 'Candied Chickadoo',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/candiedchickadoo.webp',
    type: 'meat',
    locations: ['labyrinth'],
    slimepedia: {
      about:
        "Candied chickadoos are baby chickens that will eventually grow into a candied hen or more rarely, a roostro.\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones.",
      ranch:
        "Keep candied chickadoos in a safe place and they'll eventually grow into a candied hen or roostro.",
    },
  },
  {
    id: 'polaricherry',
    name: 'Polaricherry',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/polaricherry.webp',
    type: 'fruit',
    slimeId: 'twin',
    locations: ['labyrinth'],
    slimepedia: {
      about:
        "The polaricherry is somehow both the most sweet and the most sour fruit on Rainbow Island, depending on which side you're looking at when you take a bite. Is their flavor profile another strange effect of the labyrinth, or a natural variation?",
      ranch:
        "Deposit a polaricherry into a garden's depositor and you'll grow a large polaricherry tree of your own",
    },
  },
  {
    id: 'tater',
    name: 'Turbo Tater',
    image:
      'https://raw.githubusercontent.com/apriltaoyvr/slime-rancher-api/main/src/images/foods/tater.webp',
    type: 'veggie',
    slimeId: 'hyper',
    locations: ['labyrinth'],
    slimepedia: {
      about:
        'Turbo taters might seem unassuming at first, just another root veggie on the range. However, careful study reveals that, in fact, these spuds are constantly moving so fast that they only appear stationary. What effect might this have when consumed?',
      ranch:
        "Deposit a turbo tater into a garden's depositor and you'll have a large turbo tater crop of your very own.",
    },
  },
];
