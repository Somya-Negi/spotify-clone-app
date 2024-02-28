
export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    token: 'BQBa1zOH94ooToT3c9gRMWnAbXriKHEgI_5dKQRvhHgYHLTxQVL7YizMGastMSbMgozYRM1So9f65hS5Rd0tdWI__4u4cREM-6AnJHukokQQjUGHbzf7OtZsM8unVncxcC8EhMoAVbk3ZDF1tEU4ah1-CGYPRDLGLytnuPONQYyqK9aWAiveGTETqYDe3sMD2itFNJvYjZ24yo_jTtu-',
};

const reducer = (state, action) => {
    console.log(action);

// Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            };

        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS' :
            return{
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY' :
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
    default: 
     return state;
    }

}

export default reducer;