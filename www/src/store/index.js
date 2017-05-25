import axios from 'axios'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE 
let state = {
  boards: [{name: 'This is total rubbish'}],
  activeBoard: {},
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    login(user){
      axios.post('//localhost:3000/login', user).then(res =>{
        console.log(res)
        router.push('/boards')
        //needs to authenticate whether this person is legit and then if not reroute to register, 
        //or invalid username or password
      })
    },
    register(user){
      axios.post('//localhost:3000/register', user).then(res =>{
        console.log(res)
        router.push('/boards')
      })
      .catch(handleError)
    },
    getBoards() {
      api('boards')
        .then(res => {
          state.boards = res.data.data
        })
        .catch(handleError)
    },
    getBoard(id) {
      api('boards/' + id)
        .then(res => {
          state.activeBoard = res.data.data
        })
        .catch(handleError)
    },
    createBoard(board) {
      api.post('boards/',board)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    removeBoard(board) {
      api.delete('boards/'+board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    }
  }

}

