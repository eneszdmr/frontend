const books = [
  {
    id: 1,
    name: "Too Late",
    author: "J.D. Salinger",
    page: 224,
    description: "A classic novel about the struggles of adolescence.",
    rating: 4.5,
    uploadDate: "2023-01-15",
    url: "https://m.media-amazon.com/images/I/91z95oGWdtL._SL1500_.jpg",
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    page: 281,
    description:
      "A powerful story addressing racial injustice in the American South.",
    rating: 4.8,
    uploadDate: "2023-02-20",
    url: "https://m.media-amazon.com/images/I/71SKgnTxoEL._SL1500_.jpg",
  },
  {
    id: 3,
    name: "1984",
    author: "George Orwell",
    page: 328,
    description:
      "A dystopian novel depicting a totalitarian society and government surveillance.",
    rating: 4.9,
    uploadDate: "2023-03-10",
    url: "https://m.media-amazon.com/images/I/81A7HMHH3jL._SL1500_.jpg",
  },
  {
    id: 4,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    page: 180,
    description:
      "A novel exploring the American Dream and the Roaring Twenties.",
    rating: 4.7,
    uploadDate: "2023-04-05",
    url: "https://m.media-amazon.com/images/I/81f2axXm7+L._SL1500_.jpg",
  },
  {
    id: 5,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    page: 279,
    description: "A classic novel exploring themes of love and social class.",
    rating: 7.6,
    uploadDate: "2023-05-12",
    url: "https://m.media-amazon.com/images/I/91llOxQlscL._SL1500_.jpg",
  },
  {
    id: 6,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    page: 310,
    description:
      "A fantasy novel about a hobbit's adventure to reclaim treasure guarded by a dragon.",
    rating: 4.8,
    uploadDate: "2023-06-20",
    url: "https://m.media-amazon.com/images/I/81ROAu52sJL._SL1500_.jpg",
  },
  {
    id: 7,
    name: "The Hunger Games",
    author: "Suzanne Collins",
    page: 374,
    description:
      "A dystopian novel set in a post-apocalyptic world where teenagers fight to the death.",
    rating: 3.4,
    uploadDate: "2023-07-08",
    url: "https://m.media-amazon.com/images/I/81JK51UWPpL._SL1500_.jpg",
  },
  {
    id: 8,
    name: "The Alchemist",
    author: "Paulo Coelho",
    page: 197,
    description:
      "A philosophical novel about a young shepherd's journey to find his personal legend.",
    rating: 8.6,
    uploadDate: "2023-08-15",
    url: "https://m.media-amazon.com/images/I/81+Td7RnIpL._SL1500_.jpg",
  },
  {
    id: 9,
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    page: 309,
    description:
      "The first book in the Harry Potter series, introducing the wizarding world.",
    rating: 3.9,
    uploadDate: "2023-09-30",
    url: "https://m.media-amazon.com/images/I/71ODaT072wL._SL1500_.jpg",
  },
  {
    id: 10,
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    page: 1178,
    description:
      "An epic fantasy trilogy about the quest to destroy a powerful ring.",
    rating: 4.9,
    uploadDate: "2023-10-25",
    url: "https://m.media-amazon.com/images/I/81A2VSjscsL._SL1500_.jpg",
  },
  {
    id: 11,
    name: "Frankenstein",
    author: "Mary Shelley",
    page: 280,
    description:
      "A Gothic novel by Mary Shelley, exploring themes of creation and morality.",
    rating: 4.4,
    uploadDate: "2024-02-01",
    url: "https://m.media-amazon.com/images/I/71o9iq2ZwDL._SL1500_.jpg",
  },
  {
    id: 12,
    name: "Moby-Dick",
    author: "Herman Melville",
    page: 624,
    description:
      "A novel by Herman Melville, telling the story of Captain Ahab's quest for the white whale.",
    rating: 4.1,
    uploadDate: "2024-02-16",
    url: "https://m.media-amazon.com/images/I/71kQhaOwN8L._SL1500_.jpg",
  },
  {
    id: 13,
    name: "The Odyssey",
    author: "Homer",
    page: 541,
    description:
      "An ancient Greek epic poem attributed to Homer, narrating Odysseus' journey home.",
    rating: 4.3,
    uploadDate: "2024-03-02",
    url: "https://m.media-amazon.com/images/I/81cGtCajG0L._SL1500_.jpg",
  },
  {
    id: 14,
    name: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    page: 417,
    description:
      "A landmark novel by Gabriel Garcia Marquez, blending magical realism and history.",
    rating: 4.6,
    uploadDate: "2024-03-17",
    url: "https://m.media-amazon.com/images/I/71snEYIEU6L._SL1500_.jpg",
  },
  {
    id: 15,
    name: "Brave New World",
    author: "Aldous Huxley",
    page: 288,
    description:
      "A dystopian novel by Aldous Huxley, exploring a futuristic society and its challenges.",
    rating: 4.2,
    uploadDate: "2024-04-01",
    url: "https://m.media-amazon.com/images/I/81S8-gJfjeL._SL1500_.jpg",
  },
  {
    id: 16,
    name: "The Road",
    author: "Cormac McCarthy",
    page: 287,
    description:
      "A post-apocalyptic novel by Cormac McCarthy, following a father and son's journey.",
    rating: 4.4,
    uploadDate: "2024-04-16",
    url: "https://m.media-amazon.com/images/I/81WBPB-8ZmL._SL1500_.jpg",
  },
  {
    id: 16,
    name: "İnce Mehmed",
    author: "Yaşar Kemal",
    page: 224,
    description: "Yaşar Kemal'in kaleminden çıkan bir roman, İnce Mehmed'in serüvenini anlatır.",
    rating: 4.2,
    uploadDate: "2024-06-01",
    url: "https://m.media-amazon.com/images/I/81Q+Dx71auS._SL1500_.jpg"
  },
  {
    id: 17,
    name: "İstanbul Hatırası",
    author: "Ahmet Ümit",
    page: 368,
    description: "Ahmet Ümit'in polisiye romanı, eski İstanbul'u ve tarihi olayları konu alır.",
    rating: 4.5,
    uploadDate: "2024-06-16",
    url: "https://m.media-amazon.com/images/I/91b2WljnjAS._SL1500_.jpg"
  },
  {
    id: 18,
    name: "Beyaz Gemi",
    author: "Cengiz Aytmatov",
    page: 176,
    description: "Cengiz Aytmatov'un eseri, Kırgız yazarın özgün anlatımıyla öne çıkan bir hikayeyi sunar.",
    rating: 4.6,
    uploadDate: "2024-07-01",
    url: "https://m.media-amazon.com/images/I/61sYVDBfhsL._SL1500_.jpg"
  },
  {
    id: 19,
    name: "Serenad",
    author: "Zülfü Livaneli",
    page: 432,
    description: "Zülfü Livaneli'nin müzikle örülü bir romandır, aşk ve mücadele dolu bir hikaye sunar.",
    rating: 4.3,
    uploadDate: "2024-07-16",
    url: "https://m.media-amazon.com/images/I/71U0JKSTD2L._SL1500_.jpg"
  },
  {
    id: 20,
    name: "İnsan Neyle Yaşar?",
    author: "Hüseyin Rahmi Gürpınar",
    page: 208,
    description: "Hüseyin Rahmi Gürpınar'ın eseri, toplumsal konuları mizahi bir dille ele alan bir romanı içerir.",
    rating: 4.0,
    uploadDate: "2024-08-01",
    url: "https://m.media-amazon.com/images/I/61ialm+EQ2L._SL1500_.jpg"
  },
  {
    id: 21,
    name: "Kürk Mantolu Madonna",
    author: "Sabahattin Ali",
    page: 240,
    description: "Sabahattin Ali'nin unutulmaz eseri, aşk ve tutkulu bir ilişkiyi anlatır.",
    rating: 4.7,
    uploadDate: "2024-08-16",
    url: "https://m.media-amazon.com/images/I/61-r4Z1SwsL._SL1500_.jpg"
  },
  {
    id: 22,
    name: "Prens",
    author: "Machievelli",
    page: 112,
    description: "Machiavelli'nin düşünce tarihinin klasiklerinden biri olan 'Prens', siyaset ve güç üzerine odaklanır.",
    rating: 4.4,
    uploadDate: "2024-09-01",
    url: "https://m.media-amazon.com/images/I/61pKQV-oNCL._SL1500_.jpg"
  },
  {
    id: 23,
    name: "Bir Delinin Hatıra Defteri",
    author: "Haldun Taner",
    page: 144,
    description: "Haldun Taner'in eseri, mizah dolu bir hatıra defteri olarak okuyuculara sunulur.",
    rating: 4.1,
    uploadDate: "2024-09-16",
    url: "https://m.media-amazon.com/images/I/71LzzwDH4eL._SL1500_.jpg"
  },
  {
    id: 24,
    name: "Sevda Sözleri",
    author: "Cahit Zarifoğlu",
    page: 160,
    description: "Cahit Zarifoğlu'nun şiir kitabı, aşk ve duygusal temaları işler.",
    rating: 4.8,
    uploadDate: "2024-10-01",
    url: "https://m.media-amazon.com/images/I/71cDMzjxQpS._SL1500_.jpg"
  },
  {
    id: 25,
    name: "Bir Gün Tek Başına",
    author: "Ahmet Haşim",
    page: 176,
    description: "Ahmet Haşim'in özgün şiirlerini içeren bir koleksiyon.",
    rating: 4.5,
    uploadDate: "2024-10-16",
    url: "https://m.media-amazon.com/images/I/81g-bqtoehS._SL1500_.jpg"
  },
  {
    id: 26,
    name: "Han Duvarları",
    author: "Necip Fazıl Kısakürek",
    page: 240,
    description: "Necip Fazıl Kısakürek'in eseri, insanın varoluşunu ve toplumsal meseleleri ele alır.",
    rating: 4.3,
    uploadDate: "2024-11-01",
    url: "https://m.media-amazon.com/images/I/51YRbrU5ykL._SL1000_.jpg"
  },
  {
    id: 27,
    name: "Kardeşimin Hikayesi",
    author: "Zülfü Livaneli",
    page: 352,
    description: "Zülfü Livaneli'nin duygusal bir hikayeyi müzikle harmanlayan bir romanı.",
    rating: 4.6,
    uploadDate: "2024-11-16",
    url: "https://m.media-amazon.com/images/I/71Yln00hX8L._SL1500_.jpg"
  },
  {
    id: 28,
    name: "Tutunamayanlar",
    author: "Oğuz Atay",
    page: 480,
    description: "Oğuz Atay'ın modern Türk edebiyatının önemli eserlerinden biridir, varoluşsal temaları işler.",
    rating: 4.4,
    uploadDate: "2024-12-01",
    url: "https://m.media-amazon.com/images/I/81kV6vJi5-L._SL1500_.jpg"
  },
  {
    id: 29,
    name: "Aylak Adam",
    author: "Yusuf Atılgan",
    page: 224,
    description: "Yusuf Atılgan'ın klasikleşmiş eseri, Aylak Adam'ın içsel yolculuğunu anlatır.",
    rating: 4.2,
    uploadDate: "2024-12-16",
    url: "https://m.media-amazon.com/images/I/61X0q8YHqiL._SL1500_.jpg"
  },
  {
    id: 30,
    name: "Kuyucaklı Yusuf",
    author: "Sabahattin Ali",
    page: 240,
    description: "Sabahattin Ali'nin Türk edebiyatına damgasını vuran eserlerinden biri, aşk ve dram içerir.",
    rating: 4.1,
    uploadDate: "2025-01-01",
    url: "https://m.media-amazon.com/images/I/81yt2Y1FHKL._SL1359_.jpg"
  }
];

export default books;
