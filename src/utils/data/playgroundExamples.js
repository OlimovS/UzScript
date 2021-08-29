export const playgroundExamples = [
  {
    id: 1,
    code: `// UzScript-Play bilan dastur yasang!

deylik sariqvoy = yangi Mushuk('cat', {x: 0, y: 0});


funksiya maydonBoylabAylan() {
    sariqvoy.qadamTashla(3);      
    if(sariqvoy.chegaragaUrildimi)  {
        sariqvoy.burulOnTomonga()
    }      
}


oyingoh.bolganda('animatsiya', funksiya() {
    maydonBoylabAylan();
});`,
  },
  {
    id: 2,
    code: `// UzScript-Play bilan dastur yasang!

deylik sariqvoy = yangi Mushuk('cat', {x: 0, y: 0});
deylik sariqvoy2 = yangi Mushuk('cat', {x: 0, y: 0});


funksiya maydonBoylabAylan() {
    sariqvoy.qadamTashla(3);      
    if(sariqvoy.chegaragaUrildimi)  {
        sariqvoy.burulOnTomonga()
    }      
}

funksiya maydonBoylabAylan2() {
    sariqvoy2.qadamTashla(3);      
    if(sariqvoy2.chegaragaUrildimi)  {
        sariqvoy2.burulChapTomonga()
    }      
}

oyingoh.bolganda('animatsiya', funksiya() {
    maydonBoylabAylan();
    maydonBoylabAylan2();
});`,
  },

  {
    id: 3,
    code: `// UzScript-Play bilan dastur yasang!
// Sichkoncha bilan oyingoh ustiga bosing


deylik sariqvoy = yangi Mushuk('cat', {x: 0, y: 0});

deylik qadam = 3;

oyingoh.bolganda('sichqoncha-bos', funksiya() {
qadam = qadam + 3;
});

funksiya maydonBoylabAylan() {
    sariqvoy.qadamTashla(qadam);      
    if(sariqvoy.chegaragaUrildimi)  {
    sariqvoy.burulOnTomonga()
    }      
}

oyingoh.bolganda('animatsiya', maydonBoylabAylan);`,
  },
  {
    id: 4,
    code: `// UzScript-Play bilan dastur yasang!
// Sichkoncha bilan oyingoh ustiga bosing

deylik sariqvoy = yangi Mushuk('cat', {x: 0, y: 0});
deylik sariqvoy2 = yangi Mushuk('cat', oyingoh.center);

deylik qadam = 3;

oyingoh.bolganda('sichqoncha-bos', funksiya() {
    if(qadam < 20) {
        qadam = qadam + 3;
    }
});

funksiya maydonBoylabAylan() {
    sariqvoy.qadamTashla(qadam);      
    if(sariqvoy.chegaragaUrildimi)  {
        sariqvoy.burulOnTomonga()
    }      
    
    sariqvoy2.aylan(1)
}

oyingoh.bolganda('animatsiya', maydonBoylabAylan);`,
  },
];
