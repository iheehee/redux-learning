import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwich = () => ({ type: TOGGLE_SWITCH});
const increase = difference => ({ type: INCREASE,difference });
const decrease = () => ({ type: DECEASE });

const initialState = {
    toggle: false,
    counter: 0
};

function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함.
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
        }
    }

const store = createStore(reducer);

const render = () => {
    const state = store.getState(); // 현재 상태 불러오기
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    //카운터 처리
    counter.innerText = state.counter;
};

const listener = () => {
    console.log('상태가 업데이트됨');
}
const unsubscribe = store.subscribe(listener);
unsubscribe();

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwich());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};