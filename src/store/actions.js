import axios from 'axios'

export const getPacientes = ({ commit }, gender) => {
    axios.get('https://randomuser.me/api/', { 
        params: { 
            results: 50,
            gender: gender
        } 

    })
    .then(response => {
        commit('GET_PACIENTES', response.data.results)
    })
}

