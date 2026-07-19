export const books = [
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

export const borrows = [
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

export const users = [
    {
        id: 1,
        username: "zipi_dev",
        email: "zipi@example.com",
        password: "password123",
        borrowedBooks: [1, 3] // קודי ספרים שהיא השאילה
    },
    {
        id: 2,
        username: "yossi_coder",
        email: "yossi@example.com",
        password: "mysecretpassword",
        borrowedBooks: [2]
    },
    {
        id: 3,
        username: "dani_reader",
        email: "dani@example.com",
        password: "dani12345",
        borrowedBooks: [] // לא השאיל ספרים כרגע
    },
    {
        id: 4,
        username: "sarah_books",
        email: "sarah@example.com",
        password: "sarahpassword",
        borrowedBooks: [1, 2, 3]
    }
];