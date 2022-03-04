import axios from 'axios'

export const getPacientes = ({ commit }, page, gender) => {
    axios.get('https://randomuser.me/api/', { 
        params: {
            page: page, 
            results: 20,
            gender: gender,
            seed: 'abc'
        } 

    })
    .then(response => {
        commit('GET_PACIENTES', response.data.results)
    })
}

