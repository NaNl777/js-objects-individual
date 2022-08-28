let firstText = 'Вы можете купить купить машину в автосолоне.\n';
let secondText = 'После этого вами куплена машина пойдет в ваш гараж.\n';
let threeText = 'А также можете продать свою машину.\n';
let fourText = 'А после этого вашем в гараже машина пропадет(т.е исчесзнет=)).\n';
let fiveText = 'Открыть и посмотреть в гараже кол-е, и сколько было продано машинn.\n';

let autoSalon = {

    printAll: function () {
        console.log('В вашем гараже нету машин, если хотите приобрести машину то напишите команду .buyCar, а также укажите название машины, марку, и цену.')
        console.log(`Вот ваши возможности:\n ${firstText} ${secondText} ${threeText} ${fourText} ${fiveText}`)
    },

    //Количество машин в гараже.
    garage: [],
    //Проданные машины!
    sellCar: [],

    //Посмотреть в гараже сколько машин, а также название машины, марки и цены.
    startBuy: function () {
        for (let i = 0; i < this.garage.length; i++) {
            console.log(`Гараж:\n ${this.garage[i].name}: ${this.garage[i].stamp} - ${this.garage[i].price}`)
        }
    },


    buyCar: function (name, stamp, price) {
        //Добавляем купленную машину в наш гараж.
        this.garage.push({ name: name, stamp: stamp, price: price })
        //А вот сюда добавляем проданные, чтобы отслеживать сколько было продано.
        this.sellCar.push({ name: name, stamp: stamp, price: price })
    },

    //Ограничение на покупку машины, а точнее не сможете купить больше пяти машин, из-за того что в гараже толкьо пять мест. 
    blockCar: function () {
        if (this.garage.length <= 5) {
            console.log('Поздравляем с приобретением машины!');
        }
        else {
            console.log('УПС, в гараже нету мест=(')
        }
    },

    //Удаляем машину по индексу из гаража(т.е продаем=))
    removeCar: function (index) {
        
        if (this.garage.length > 0) {
            this.garage.splice(index, 1)
            console.log('Вы успешно продали свою машину')
        }
        else {
            console.log('К сожалению вы не можете продать машину, потому-что у вас его нету=)')
        }
    },

    //Посмотреть в гараже какие машины были проданы, а также узнать их название машины, марки и цены.
    showSellCar: function () {
        for (let i = 0; i < this.sellCar.length; i++) {
            console.log(`Гараж:\n ${this.sellCar[i].name}: ${this.sellCar[i].stamp} - ${this.sellCar[i].price}`)
        }
    },

}