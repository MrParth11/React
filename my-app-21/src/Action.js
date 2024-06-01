export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = (id) => ({
    type: INCREMENT,
    playload : id
})

export const decrement = (id) => ({
    type: DECREMENT,
    playload : id
})