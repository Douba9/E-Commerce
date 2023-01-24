import { v4 as uuid } from 'uuid'

let inventory = [
  {
    categories: ['pc portable'], name: 'ASUS republic of gamer G17', price: '1789.99', image: '/products/G17.jpeg', description: 'Play where you go.', brand: 'DoubaCorp', currentInventory: 15
  },  
  {
    categories: ['new arrivals','pc portable'], name: 'ASUS republic of gamer G531', price: '1489.99', image: '/products/G531.jpeg', description: 'Play where you go.', brand: 'DoubaCorp', currentInventory: 15
  },
  {
    categories: ['ecran'], name: 'ASUS SCREEN 22"', price: '220.50', image: '/products/asus_screen.jpeg', description: 'Large screen, recommanded for gaming.', brand: 'DoubaCorp', currentInventory: 15
  },
  {
    categories: ['ecran'], name: 'LG 42" CURVE', price: '1500', image: '/products/LG.jpeg', description: 'Large screen CURVE, recommanded for gaming and devellopement.', brand: 'DoubaCorp', currentInventory: 10
  },
  {
    categories: ['new arrivals', 'carte graphique'], name: 'Nvidia 1070 8GB', price: '800', image: '/products/gpu.jpeg', description: 'graphique cart, hight capacity and performances.', brand: 'DoubaCorp', currentInventory: 19
  },
  {
    categories: ['processeur'], name: 'Nvidia GPU', price: '1200', image: '/products/nvidia-cpu.jpeg', description: 'Latest version of th ebest processor in the public sells.', brand: 'DoubaCorp', currentInventory: 7
  },
  {
    categories: ['best sale', 'processeur'], name: 'I9 11emeG', price: '980', image: '/products/i9.jpeg', description: 'Last version of your favorite processor intel .', brand: 'DoubaCorp', currentInventory: 12
  },
  
  {
    categories: ['new arrivals','clavier'], name: 'RGB MECA', price: '199.89', image: '/products/rgb-keyboard.jpeg', description: 'Keyboard mechanic, is a plaisure to use it.', brand: 'DoubaCorp', currentInventory: 20
  },
  {
    categories: ['best sale','accesoire'], name: 'Ledger nano X', price: '170', image: '/products/ledger.jpeg', description: 'Crypto wallet, the best of the secure .', brand: 'DoubaCorp', currentInventory: 40
  },
  {
    categories: ['accesoire'], name: 'Casque razer Kraken', price: '100', image: '/products/kraken.jpeg', description: 'Hear natural song of your games .', brand: 'DoubaCorp', currentInventory: 12
  },
  {
    categories: ['carte graphique'], name: 'RTX 3080', price: '950', image: '/products/rtx3080.jpeg', description: 'Best of the hight quality.', brand: 'DoubaCorp', currentInventory: 12
  },
  {
    categories: ['carte graphique'], name: 'MSI 3060', price: '450', image: '/products/msi3060.jpeg', description: 'live your game dreams.', brand: 'DoubaCorp', currentInventory: 4
  },
  {
    categories: ['carte graphique'], name: 'RTX 480', price: '550', image: '/products/rtx480.jpeg', description: 'play like your dreams.', brand: 'DoubaCorp', currentInventory: 4
  },
  {
    categories: ['souris'], name: 'Razer TARTARUS', price: '150', image: '/products/tartarus.jpeg', description: 'Many caps, craft your own combo.', brand: 'DoubaCorp', currentInventory: 4
  },
  {
    categories: ['ecran'], name: 'Samsung G5 34"', price: '220.50', image: '/products/samsungG5.jpeg', description: 'Best quality best song live your awsome dream.', brand: 'DoubaCorp', currentInventory: 6
  },
  {
    categories: ['new arrivals','ecran'], name: 'Samsung ARK 55"', price: '3249,49', image: '/products/ark.jpeg', description: 'Best quality best song live your awsome dream.', brand: 'DoubaCorp', currentInventory: 4
  },
  {
    categories: ['new arrivals','souris'], name: 'Meteor', price: '149.99', image: '/products/meteor.jpeg', description: 'Play with agility.', brand: 'DoubaCorp', currentInventory: 15
  },

  //
  
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory