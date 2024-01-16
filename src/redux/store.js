import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likeCount: 2, },
                { id: 2, message: "It`s my first post", likeCount: 5, },
                { id: 1, message: "Hi, how are you?", likeCount: 2, },
                { id: 2, message: "It`s my first post", likeCount: 5, }
            ],
            newPostText: 'send post...',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych', },
                { id: 2, name: 'Andrey', },
                { id: 3, name: 'Sveta', },
                { id: 4, name: 'Sasha', },
                { id: 5, name: 'Valera', },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' }
            ],
            newMessageBody: "",
            myMessages: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'Good' },
                { id: 3, message: 'And how are you doing?' }
            ],
            
        },
        sidebar: {
            friends: [
                { id: 1, name: "Dimych", avatar: "https://pixelbox.ru/wp-content/uploads/2022/08/avatars-viber-pixelbox.ru-33.jpg" },
                { id: 2, name: "Valera", avatar: "https://stream-promotion.ru/image/cache/catalog/banner/DbtrFLiX0AEnCwr.jpg%20large-1000x1000.jpg" },
                { id: 3, name: "Sveta", avatar: "https://sun9-51.userapi.com/s/v1/ig2/dd6StpNqC9oEpS6byX3mgEjFKIh9U3mZlCF3NiR22oMS3ZD9CLLVGPQpLhuKKpye6jmtYw6CO0N7nJr7HXqLkvNa.jpg?size=400x400&quality=95&crop=141,460,819,819&ava=1" },
                { id: 3, name: "Sasha", avatar: "https://avatars.mds.yandex.net/i?id=2a00000189fe5162291813a546b96dceb544-1643123-fast-images&n=13" },

            ]
        }

    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },


};
      
export default store;