const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const onIncrease = () => ({ type: INCREASE});
export const onDecrease = () => ({ type: DECREASE});

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        default:
            return state;
    };
}

export default counter;