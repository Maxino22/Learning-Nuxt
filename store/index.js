import Vuex from 'vuex'


const createStore = ()=>{
  return new Vuex.Store({
    state:{
      loadedPosts:[ {
        id:'1',
        title: 'Post 1',
        PostPreview: 'This is Post 1',
        thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id:'2',
        title: 'Post 2',
        PostPreview: 'This is Post 1',
        thumbnail: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=300'
      }]
    },
    mutations:{
      setPosts(state, posts){
        state.loadedPosts = posts
      }
    },
    actions:{
      setPosts(vuexContext, posts){
        vuexContext.commit('setPosts', posts)
      }
    },
    getters:{
      setPosts(state){
        return state.loadedPosts
      }
    }
  })
}


export default createStore