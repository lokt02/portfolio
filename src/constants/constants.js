export const projects = [
  {
    name: 'Crypto Kuznechik',
    description: "This project is a implementation of the proposed Russian block cipher standard, Kuznechik ('Grasshopper'). 128-bit block size. It created with TypeScript so there are mush less problems with types. This project might be useful for applications that need in reliable symmetric encryption.",
      image: '/images/1.png',
      tags: ['TypeScript', 'JavaScript', 'NPM', 'Node'],
    codelink: 'https://github.com/lokt02/CryptoKuznechik',
    sourcelink: 'https://www.npmjs.com/package/cryptokuznechik',
    id: 0,
  },
  {
    name: 'Cloud Evaluations with Homomorphic Encryption',
    description:"This is a research project that I was doing at my first year at University. I used Microsoft SEAL library to investigate how effective homomorphic encryption in cloud evaluations. I developed program that builds function graph but evaluating of function value happens on server. Before sending value to server it homomorphicly encrypts.",
    image: '/images/2.png',
    tags: ['C#', 'WPF'],
    codelink: 'https://github.com/lokt02/project_practice',
    sourcelink: 'https://ieeexplore.ieee.org/document/9396570',
    id: 1,
  },
];

export const games = [
  {
    name: 'Truck Finger Driver',
    description: "This game is about a child who plays with his truck. The purpose is to cross the finish line while avoiding obstacles. You have 3 lives and if you collide an obstacle you lose 1 live. If you lose all lives you lose, if reach the finish line, you win. The faster you cross the line the more scores you gain. If you've lost lives but cross finish line you gain less score, etc.",
      image: '/images/22.png',
      tags: ['Unity', 'C#', 'Game Development'],
    codelink: 'https://play.google.com/store/apps/details?id=com.BrushBurger.TruckFingerDriver',
    sourcelink: '',
    id: 0,
  },
  {
    name: "Brother's Castle Destroyer",
    description:"In this game we play as child who plays with toy cubes and truck. The purpose is to destroy castle that consists of toys. You have 3 attempts (you can buy more with scores). There is also shop. You can buy additional bonuses there. I've worked mostly on gameplay and level system.",
    image: '/images/21.png',
    tags: ['Unity', 'C#', 'Game Development'],
    codelink: 'https://play.google.com/store/apps/details?id=com.BrushBurger.BrothersCastleDestroyer',
    sourcelink: '',
    id: 1,
  },
];

export const Education = "NRNU MEPHI, Institute Of Cyber Iintelligenc Systems, second year bachelor student"

export const Age = 19;