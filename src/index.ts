import Env from 'environment'
console.log(Env)

class a {
    say() {
        alert(1);
    }
}

// class b extends a {
//     work() {
//         console.log('---->')
//     }
// }

export default () => {
 
    return a;
}