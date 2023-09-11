export interface Toy {
  id: string;
  name: string;
  image: string;
  slime: string | null;
  description: string;
  price: number;
}

export const toys: Toy[] = [
  {
    id: 'beachball',
    name: 'Beach Ball',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/5/5e/Beach_ball.png',
    slime: 'pink',
    description:
      'Reduces agitation of nearby slimes, especially Pink Slimes who enjoy fun in the sun.',
    price: 400,
  },
  {
    id: 'yarn',
    name: 'Yarn Ball',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/c/c5/Yarn_Ball.png',
    slime: 'tabby',
    description:
      "Reduces agitation of nearby slimes, especially Tabby Slimes. Though, they still don't know how to knit anymore than other slimes.",
    price: 400,
  },
  {
    id: 'bigrock',
    name: 'Big Rock',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/6/6e/Big_Rock.png',
    slime: 'rock',
    description:
      "Reduces agitation of nearby slimes, especially Rock Slimes who obviously don't understand toys",
    price: 400,
  },
  {
    id: 'nightlight',
    name: 'Night Light',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/c/c5/Night_Light.png',
    slime: 'phosphor',
    description:
      'Reduces agitation of nearby slimes, especially Phosphor Slimes who are just as spooked by the dark as the rest of us.',
    price: 400,
  },
  {
    id: 'bee',
    name: 'Buzzy Bee',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/f/f6/Buzzy_Bee.png',
    slime: 'honey',
    description:
      'Reduces agitation of nearby slimes, especially Honey Slimes who are sweet on honeybees.',
    price: 500,
  },
  {
    id: 'ducky',
    name: 'Rubber Ducky',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/95/Rubber_Ducky.png',
    slime: 'puddle',
    description:
      'Reduces agitation of nearby slimes, especially Puddle Slimes who are less shy when a rubber ducky buddy is around.',
    price: 500,
  },
  {
    id: 'cell',
    name: 'Power Cell',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/9a/Power_Cell.png',
    slime: 'rad',
    description:
      'Reduces agitation of nearby slimes, especially Rad Slimes who like to live dangerously.',
    price: 500,
  },
  {
    id: 'octo',
    name: 'Octo Buddy',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/3/33/Octo_Buddy_Starless.png',
    slime: null,
    description:
      'Reduces agitation of nearby slimes, especially slimes dressed with a Scuba Fashion Pod.',
    price: 500,
  },
  {
    id: 'bomb',
    name: 'Bomb Ball',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/7/7e/Bomb_Ball.png',
    slime: 'bomb',
    description:
      'Reduces agitation of nearby slimes, especially Boom Slimes who probably think this sort of thing is funny.',
    price: 500,
  },
  {
    id: 'chicken',
    name: 'Stuffed Chicken',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/97/Stuffed_Chicken.png',
    slime: 'hunter',
    description:
      'Reduces agitation of nearby slimes, especially Hunter Slimes who love toys they can pretend to murder.',
    price: 600,
  },
  {
    id: 'crystalball',
    name: 'Crystal Ball',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/e/e2/Crystal_Ball.png',
    slime: 'crystal',
    description:
      'Reduces agitation of nearby slimes, especially Crystal Slimes who can use it to see the future but will never tell.',
    price: 600,
  },
  {
    id: 'puzzlecube',
    name: 'Puzzle Cube',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/f/fc/Puzzle_Cube.png',
    slime: 'quantum',
    description:
      'Reduces agitation of nearby slimes, especially Quantum Slimes who have solved it and not solved it before now.',
    price: 600,
  },
  {
    id: 'gyro',
    name: 'Gyro Top',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/4/43/Gyro_Top.png',
    slime: 'dervish',
    description:
      "Reduces agitation of nearby slimes, especially Dervish Slimes who didn't think spinning could be topped.",
    price: 700,
  },
  {
    id: 'brick',
    name: 'Charcoal Brick',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/9/9a/Charcoal_Brick.png',
    slime: 'fire',
    description:
      "Reduces agitation of nearby slimes, especially Fire Slimes who can bring the heat because they're literally on fire.",
    price: 700,
  },
  {
    id: 'solmate',
    name: 'Sol Mate',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/0/07/Sol_Mate.png',
    slime: 'tangle',
    description:
      'Reduces agitation of nearby slimes, especially Tangle Slimes who love a good reference to photosynthesis.',
    price: 700,
  },
  {
    id: 'disco',
    name: 'Disco Ball',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/4/40/Disco_Ball.png',
    slime: 'mosaic',
    description:
      'Reduces agitation of nearby slimes, especially Mosaic Slimes who dance the night away when no one is looking.',
    price: 700,
  },
  {
    id: 'stegobuddy',
    name: 'Stego Buddy',
    image:
      'https://static.wikia.nocookie.net/slimerancher/images/f/f0/StegoBuddySP.png',
    slime: 'saber',
    description:
      'Reduces agitation of nearby slimes, especially Saber Slimes who are the only slimes to have known stegos in-person.',
    price: 700,
  },
];
