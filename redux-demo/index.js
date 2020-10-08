const redux = require("redux");
// middleWare
const applyMiddleware = redux.applyMiddleware;
// redux logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// ActionCreator
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake(){
    return {
        type: BUY_CAKE,
        info: "First redux action",
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: "Second redux action",
    }
}

// Reducer -> (prevState, action) => newState
const combineReducers = redux.combineReducers;
const initialCakeState = {
    numOfCakes:10
}

const initialIceCreamState = {
    numOfIceCreams:20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    IceCream: iceCreamReducer
});

// Store with middleWare
const createStore = redux.createStore;

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State:", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();






