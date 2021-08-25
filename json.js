const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const strinDefined = JSON.stringify(user);
// const { id, name, job } = user;
// console.log(user);
// console.log(strinDefined);
const shop = {
    name: 'Alia Store',
    address: 'Ranvir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor',
    },
    isExpensive: false,
}
const shopStringFied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringFied);
const converted = JSON.parse(shopStringFied);
console.log(converted);