export const challenges = [
  {
    id: 1,
    type: "challenge",
    title: "Ikki sonni bir biriga qo'shing",
    content: "Ikki sonni bir-biriga qo'shuvchi dastur tuzing",
    difficulty: "oson",
    status: false,
    acceptance: 96,
    examples: [
      {
        input: "12, 34",
        output: "46",
        description: "12 ga 34 ni qo'shsak 12+34=46 bo'ladi",
      },
      {
        input: "8888, 3854",
        output: "12742",
        description: "8888 ga 3854 ni qo'shsak 8888+3854=12742 bo'ladi",
      },
    ],
    solutionSection: {
      functionName: "sonlarniQosh",
      inputConfig: {
        prefix: "son",
        count: 2,
      },
      tests: [
        {
          inputs: [12, 34],
          output: "46",
        },
        {
          inputs: [8888, 3854],
          output: 12742,
        },
        {
          inputs: [-123, -245],
          output: -368,
        },
      ],
    },
  },
  {
    id: 2,
    type: "challenge",
    title: "Ikki sonni ko'paytirish",
    content: "Ikki sonni bir-biriga ko'paytiruvchi dastur tuzing",
    difficulty: "oson",
    status: false,
    acceptance: 94,
  },
];
