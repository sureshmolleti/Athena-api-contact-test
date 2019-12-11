const favourites = require('./app/services/favouriteService');
const mockingoose = require('mockingoose').default;
const favouriteSchema = require('./app/schemas/favoritesSchema');


// test('deleteSavedContact 4', async () => {
//     const resObjV={ error: 'favourite not available in database', statusCode: 400, success: false };

//     mockingoose(FavoritesSchema).toReturn(null, 'findOneAndUpdate');
//     const params={contactId:'315691056644233',userId:'suresh.molleti@ibm.com'}
//     const result = await contactsService.deleteSavedContact(params).then((success) => {
//                 console.log("success========>", success);
//                 expect(success).toStrictEqual(resObjV);
//             }).catch((error) => {
//                 expect(error).toStrictEqual(resObjV);
//             });
// });
describe('test getFavourites', () => {
    
    test('favourites', async () => {
        mockingoose(favouriteSchema).toReturn(null, 'find');
        favourites.getSavedContacts().then(d=>{
            console.log("===================data====>",d);
        })
    })
})