const books = [
  {
    code: 1001,
    name: 'The Hobbit',
    category: 'Fantasy',
    price: 45,
    isBorrowed: false
  },
  {
    code: 1002,
    name: '1984',
    category: 'Dystopian',
    price: 38,
    isBorrowed: true
  },
  {
    code: 1003,
    name: 'Atomic Habits',
    category: 'Self-Help',
    price: 55,
    isBorrowed: false
  },
  {
    code: 1004,
    name: 'The Alchemist',
    category: 'Adventure',
    price: 42,
    isBorrowed: true
  },
  {
    code: 1005,
    name: 'Clean Code',
    category: 'Programming',
    price: 60,
    isBorrowed: false
  }
];

const borrows = [
  {
    borrowDate: '2026-07-10',
    customerCode: 2001
  },
  {
    borrowDate: '2026-07-12',
    customerCode: 2002
  },
  {
    borrowDate: '2026-07-13',
    customerCode: 2003
  }
];

module.exports = {
  books,
  borrows
};
