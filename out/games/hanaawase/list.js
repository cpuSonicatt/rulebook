const cards = [
  {
    month: 'January',
    plant: 'Pine',
    cards: [ 'Light (Sun)', 'Slip (Poetry)', 'Chaff', 'Chaff' ],
    img: "jan"
    
  },
  {
    month: 'February',
    plant: 'Plum Blossom',
    cards: [ 'Slip (Poetry)', 'Animal (Bush warbler)', 'Chaff', 'Chaff' ],
    img: "feb"
  },
  {
    month: 'March',
    plant: 'Cherry Blossom',
    cards: [ 'Light (Curtain)', 'Slip (Poetry)', 'Chaff', 'Chaff' ],
    img: "mar"
  },
  {
    month: 'April',
    plant: 'Wisteria',
    cards: [ 'Slip (Red)', 'Animal (Cuckoo)', 'Chaff', 'Chaff' ],
    img: "apr"
  },
  {
    month: 'May',
    plant: 'Iris',
    cards: [ 'Slip (Red)', 'Animal (Eight-plank-bridge)', 'Chaff', 'Chaff' ],
    img: "may"
  },
  {
    month: 'June',
    plant: 'Peony',
    cards: [ 'Slip (Blue)', 'Animal (Butterflies)', 'Chaff', 'Chaff' ],
    img: "jun"
  },
  {
    month: 'July',
    plant: 'Bush Clover',
    cards: [ 'Slip (Red)', 'Animal (Boar)', 'Chaff', 'Chaff' ],
    img: "jul"
  },
  {
    month: 'August',
    plant: 'Susuki Grass',
    cards: [ 'Light (Moon)', 'Animal (Geese)', 'Chaff', 'Chaff' ],
    img: "aug"
  },
  {
    month: 'September',
    plant: 'Chrysanthemum',
    cards: [ 'Slip (Blue)', 'Animal/Chaff (Sake Cup)', 'Chaff', 'Chaff' ],
    img: "sep"
  },
  {
    month: 'October',
    plant: 'Maple',
    cards: [ 'Slip (Blue)', 'Animal (Deer)', 'Chaff', 'Chaff' ],
    img: "oct"
  },
  {
    month: 'November',
    plant: 'Willow',
    cards: [ 'Light (Rain Man)', 'Slip (Red)', 'Animal (Swallow)', 'Chaff' ],
    img: "nov"
  },
  {
    month: 'December',
    plant: 'Paulownia',
    cards: [ 'Light (Dragon)', 'Chaff', 'Chaff', 'Chaff' ],
    img: "dec"
  }
]


$("#cards").append(cards.map((suit) => `
    <p><b>${suit.month}</b><br>${suit.plant}</p>
    <div class="container">
        <img alt="" class="w-100 mb-3" src="./resources/list/${suit.img}.png">
    </div>
    <div class="container text-center">
      ${suit.cards.map((c) => 
        `<span>${c}</span>`
      ).join(" • ")}
    </div>
    <br>
  `
))