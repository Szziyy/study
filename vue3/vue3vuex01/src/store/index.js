import {reactive} from 'vue';

const store = {
    state:reactive({
        message:'helloWorld',
        resultList:[]
    }),
    setMessage(value){
        this.state.message = value;
    },
    setRes(res){
        this.state.resultList = res;
    }
}

export default store;