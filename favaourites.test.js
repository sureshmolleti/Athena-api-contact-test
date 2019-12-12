const favourites = require('./app/services/favouriteService');
const mockingoose = require('mockingoose').default;
const favouriteSchema = require('./app/schemas/favoritesSchema');

const mockfavorites=[
{
    "_id" : "5df0bed65b57044960bb1934",
    "startDate" : "2019-12-11T09:58:04.475Z",
    "endDate" : "2019-12-11T10:03:21.827Z",
    "userId" : "1",
    "favouriteId" : "36873658732",
    "flag" : false
},
{
    "_id" : "5df0bef15b57044960bb1935",
    "startDate" : "2019-12-11T09:58:04.475Z",
    "endDate" : "2019-12-11T10:03:38.909Z",
    "userId" : "2",
    "favouriteId" : "36873658732",
    "flag" : false
}
,
{
    "_id" : "5df0befe5b57044960bb1936",
    "startDate" : "2019-12-11T09:58:04.475Z",
    "endDate" : null,
    "userId" : "3",
    "favouriteId" : "36873658732",
    "flag" : true
}
,
{
    "_id" : "5df0bf085b57044960bb1937",
    "startDate" : "2019-12-11T09:58:04.475Z",
    "endDate" : null,
    "userId" : "1",
    "favouriteId" : "36873638732",
    "flag" : true
},
{
    "_id" : "5df0bf135b57044960bb1938",
    "startDate" : "2019-12-11T09:58:04.475Z",
    "endDate" : "2019-12-11T10:04:12.025Z",
    "userId" : "1",
    "favouriteId" : "368736238732",
    "flag" : false
}
,
{
    "_id" : "5df0bf1f5b57044960bb1939",
    "startDate" : "2019-12-11T09:58:04.475Z",
    "endDate" : null,
    "userId" : "2",
    "favouriteId" : "368736238732",
    "flag" : true
}];
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
        mockingoose(favouriteSchema).toReturn(mockfavorites, 'find');
        favourites.getSavedContacts().then(d=>{
            console.log("===================data====>",d);
        })
    })
})