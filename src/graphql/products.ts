const MENU = [
  {
    title: "Pizza do dia",
    data: [
      {
        id: "1",
        title: "Mussarela",
        price: 64.9,
        description:
          "Massa fina, molho de tomate artesanal, mussarela derretida, orégano e azeite extra virgem...",
        cover: require("@/assets/products/cover/1.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/1.png"), // http/https em graphql 
        ingredients: [
          "Massa fina;",
          "Molho de tomate artesanal;",
          "Mussarela derretida;",
          "Orégano;",
          "Azeite extra virgem;"
        ],
      },
    ],
  },
  {
    title: "Pizzas",
    data: [
      {
        id: "2",
        title: "Margherita",
        price: 74.9,
        description:
          "Molho de tomate, mussarela, tomate fresco, manjericão e azeite de oliva",
        cover: require("@/assets/products/cover/2.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/2.png"), // http/https em graphql 
        ingredients: [
          "Molho de tomate;",
          "Mussarela;",
          "Tomate fresco;",
          "Manjericão;",
          "Azeite de oliva;"
        ],
      },
      {
        id: "3",
        title: "Calabresa",
        price: 54.9,
        description:
          "Molho de tomate, mussarela, calabresa fatiada, cebola e orégano.",
        cover: require("@/assets/products/cover/3.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/3.png"), // http/https em graphql 
        ingredients: [
          "Molho de tomate;",
          "Mussarela;",
          "Calabresa fatiada;",
          "Cebola;",
          "Orégano;"
        ],
      },
      {
        id: "4",
        title: "Frango com Catupiry",
        price: 72.7,
        description:
          "Molho de tomate, frango desfiado, catupiry e milho.",
        cover: require("@/assets/products/cover/4.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/4.png"), // http/https em graphql 
        ingredients: [
          "Molho de tomate;",
          "Frango desfiado;",
          "Catupiry;",
          "Milho;"
        ],
      },
      {
        id: "5",
        title: "Pepperoni",
        price: 89.9,
        description:
          "Molho de tomate, mussarela e fatias de pepperoni.",
        cover: require("@/assets/products/cover/5.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/5.png"), // http/https em graphql 
        ingredients: [
          "Molho de tomate;",
          "Mussarela;",
          "Fatias de pepperoni;"
        ],
      },
    ],
  },
  {
    title: "Lanches",
    data: [
      {
        id: "6",
        title: "Hambúrguer Tradicional",
        price: 24.9,
        description:
          "Clássico hambúrguer com ingredientes frescos e suculento.",
        cover: require("@/assets/products/cover/12.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/12.png"), // http/https em graphql 
        ingredients: [
          "Pão de hambúrguer;",
          "Hambúrguer de carne bovina;",
          "Queijo cheddar;",
          "Alface;",
          "Tomate;",
          "Cebola roxa;",
          "Picles;",
          "Maionese;",
          "Mostarda;"
        ],
      },
      {
        id: "7",
        title: "Frango Grelhado",
        price: 34.9,
        description:
          "Sanduíche saudável e saboroso com frango grelhado.",
        cover: require("@/assets/products/cover/13.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/13.png"), // http/https em graphql 
        ingredients: [
          "Pão de sanduíche integral;",
          "Peito de frango grelhado;",
          "Queijo prato;",
          "Alface;",
          "Tomate;",
          "Cebola;",
          "Maionese de ervas;"
        ],
      },
      {
        id: "8",
        title: "Carne Assada",
        price: 42.7,
        description:
          "Sanduíche robusto com carne assada suculenta.",
        cover: require("@/assets/products/cover/14.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/14.png"), // http/https em graphql 
        ingredients: [
          "Pão ciabatta;",
          "Carne assada fatiada;",
          "Queijo provolone;",
          "Rúcula;",
          "Tomate seco;",
          "Maionese de alho;"
        ],
      },
      {
        id: "9",
        title: "Wrap Vegetariano",
        price: 53.9,
        description:
          "Opção leve e vegetariana com ingredientes frescos.",
        cover: require("@/assets/products/cover/15.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/15.png"), // http/https em graphql 
        ingredients: [
          "Tortilha de trigo integral;",
          "Hummus;",
          "Alface;",
          "Tomate;",
          "Pepino;",
          "Cenoura ralada;",
          "Queijo cottage;"
        ],
      },
    ],
  },
  {
    title: "Sobremesa",
    data: [
      {
        id: "10",
        title: "Sorvete com Brownie",
        price: 18.9,
        description:
          "Uma sobremesa deliciosa para saborear. Escolha o sorvete e a calda que desejar...",
        cover: require("@/assets/products/cover/6.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/6.png"), // http/https em graphql 
        ingredients: [
          "1x Brownie;",
          "1x Bola de sorvete a sua escolha",
          "Escolha sua calda;",
        ],
      },
      {
        id: "11",
        title: "Cupcake",
        price: 22.9,
        description:
          "Um delicioso Cupcake para adoçar. Escolha o sabor que você gosta...",
        cover: require("@/assets/products/cover/7.png"), // http/https em graphql 
        thumbnail: require("@/assets/products/thumbnail/7.png"), // http/https em graphql 
        ingredients: ["Escolha o sabor;", "Chantilly;"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "12",
        title: "Coca-cola",
        price: 6.9,
        thumbnail: require("@/assets/products/thumbnail/8.png"), // http/https em graphql 
        cover: require("@/assets/products/cover/8.png"), // http/https em graphql 
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
      {
        id: "13",
        title: "Coca-zero",
        price: 6.9,
        thumbnail: require("@/assets/products/thumbnail/9.png"), // http/https em graphql 
        cover: require("@/assets/products/cover/9.png"), // http/https em graphql 
        description:
          "Uma coca zero açucar com muito sabor!",
        ingredients: [],
      },
      {
        id: "14",
        title: "Fanta laranja",
        price: 6.9,
        thumbnail: require("@/assets/products/thumbnail/10.png"), // http/https em graphql 
        cover: require("@/assets/products/cover/10.png"), // http/https em graphql 
        description:
          "Uma fanta super gelada extremamente refrescante",
        ingredients: [],
      },
      {
        id: "15",
        title: "Suco de Morango",
        price: 7.9,
        thumbnail: require("@/assets/products/thumbnail/11.png"), // http/https em graphql 
        cover: require("@/assets/products/cover/11.png"), // http/https em graphql 
        description:
          "Suco de morango delicioso e refrescante!",
        ingredients: [],
      },
    ],
  },
]

const PRODUCTS = MENU.map((item) => item.data).flat()

const CATEGORIES = MENU.map((item) => item.title)

type ProductProps = (typeof PRODUCTS)[0]

export { MENU, PRODUCTS, CATEGORIES, ProductProps }
