import axios from 'axios'

export const getPacientes = ({ commit }) => {
    axios.get('https://randomuser.me/api/', { params: { results: 50 } })
    .then(response => {
        commit('GET_PACIENTES', response.data.results)
    })
}