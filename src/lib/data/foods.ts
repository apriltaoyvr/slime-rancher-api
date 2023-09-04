import type { Diet } from './enums';

export interface Food {
  id: string;
  name: string;
  image: string;
  type: Diet;
  slime: string | null;
  locations: string[];
  slimepedia: {
    about: string;
    ranch: string;
  };
}

export const foods: Food[] = [
  {
    id: 'roostro',
    name: 'Roostro',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/b/ba/Roostro.png/revision/latest/scale-to-width-down/1000?cb=20191024180716',
    type: 'meat',
    slime: 'hunter',
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
      'https://static.wikia.nocookie.net/slimerancher/images/8/83/Elder_roostro.png/revision/latest/scale-to-width-down/1000?cb=20170406171429',
    type: 'meat',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/e/e9/Hen_hen.png/revision/latest/scale-to-width-down/1000?cb=20170406171026',
    type: 'meat',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/5/55/Elder_hen.png/revision/latest?cb=20170406171151',

    type: 'meat',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/d/d0/Stony_hen.png/revision/latest/scale-to-width-down/1000?cb=20170406170944',
    type: 'meat',
    slime: 'tabby',
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
      'https://static.wikia.nocookie.net/slimerancher/images/e/ec/Briar_hen.png/revision/latest/scale-to-width-down/1000?cb=20170406171056',
    type: 'meat',
    slime: 'boom',
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
      'https://static.wikia.nocookie.net/slimerancher/images/7/73/Painted_hen.png/revision/latest?cb=20170613003606',
    type: 'meat',
    slime: 'tangle',
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
      'https://static.wikia.nocookie.net/slimerancher/images/7/71/Chickadoo.png/revision/latest/scale-to-width-down/1000?cb=20170406171506',
    type: 'meat',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/b/b8/Stony_Chickadoo.png/revision/latest/scale-to-width-down/1000?cb=20170406171540',
    type: 'meat',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/0/0d/Briar_chickadoo.png/revision/latest/scale-to-width-down/1000?cb=20170406171612',
    type: 'meat',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/2/2f/Painted_Chickadoo.png/revision/latest?cb=20170701234223',
    type: 'meat',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/0/07/Pogo_fruit.png/revision/latest/scale-to-width-down/1000?cb=20170406164718',
    type: 'fruit',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/0/07/Pogo_fruit.png/revision/latest/scale-to-width-down/1000?cb=20170406164718',
    type: 'veggie',
    slime: null,
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
      'https://static.wikia.nocookie.net/slimerancher/images/1/15/Heart_Beet.png/revision/latest/scale-to-width-down/1000?cb=20170406165726',
    type: 'veggie',
    slime: 'rock',
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
      'https://static.wikia.nocookie.net/slimerancher/images/b/b9/Cuberry.png/revision/latest/scale-to-width-down/1000?cb=20170406164647',
    type: 'fruit',
    slime: 'phosphor',
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
      'https://static.wikia.nocookie.net/slimerancher/images/c/c9/Mint_mango.png/revision/latest/scale-to-width-down/1000?cb=20170406164559',
    type: 'fruit',
    slime: 'honey',
    locations: ['blanket'],
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
      'https://static.wikia.nocookie.net/slimerancher/images/7/72/Oca_Oca.png/revision/latest/scale-to-width-down/1000?cb=20170406170049',
    type: 'veggie',
    slime: 'rad',
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
      'https://static.wikia.nocookie.net/slimerancher/images/2/24/OddOnion_SP.png/revision/latest?cb=20170406170302',
    type: 'veggie',
    slime: 'crystal',
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
      'https://static.wikia.nocookie.net/slimerancher/images/0/0b/PhaseLemon_SP.png/revision/latest?cb=20170307145023',
    type: 'fruit',
    slime: 'quantum',
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
      'https://static.wikia.nocookie.net/slimerancher/images/5/56/Prickle_Pear.png/revision/latest/scale-to-width-down/1000?cb=20170406164523',
    type: 'fruit',
    slime: 'dervish',
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
      'https://static.wikia.nocookie.net/slimerancher/images/6/65/Silver_Parsnip.png/revision/latest/scale-to-width-down/1000?cb=20170406170330',
    type: 'veggie',
    slime: 'mosaic',
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
      'https://static.wikia.nocookie.net/slimerancher/images/4/4c/GildedGinger_SP.png/revision/latest?cb=20170807214700',
    type: 'veggie',
    slime: 'golden',
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
      'https://static.wikia.nocookie.net/slimerancher/images/5/56/KookadobaSP.png/revision/latest?cb=20171018195508',
    type: 'fruit',
    slime: null,
    locations: ['wilds'],
    slimepedia: {
      about:
        "Kookadoba are known as 'the king of fruit' by their enthusiasts, which include the jolly gourmand, Ogden Ortiz. However, harvesting them can be quite perilous as they only grow in the feral domain of The Wilds. Worse, the kookadoba smells and tastes horrible to most palates, with most who try it reporting it has the flavor of 'stinky cheese meets stinkier cheese'",
      ranch:
        "Kookadoba can only grow in the soils of The Wilds. A garden's replicator will reject it.",
    },
  },
];
