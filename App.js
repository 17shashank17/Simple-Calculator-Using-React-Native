/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { tsConstructorType } from '@babel/types';


//Calculator

class App extends Component{
  constructor(){
    super();
    this.state={}
    this.state.queries=""
    this.state.result=""
    this.state.prev=""
  }

  handleClick(text){
    if(text == "AC"){
      this.setState({queries:""})
      this.setState({result:""})
    }
    else if(text=="DEL"){
      this.setState({queries:this.state.queries.slice(0,-1)})
    }
    else if(text != "="){
      if((text =='+' || text=="-" || text=="*" || text=="/") && 
      (this.state.prev=="+" || this.state.prev=="-" || this.state.prev=="*" || this.state.prev=="/")){
        //do nothing
      }
      else{
        this.setState({queries:this.state.queries+text})
        this.setState({prev:text})
      }
    }
    
    else{
      text=this.state.queries
      if(text.slice(-1)=="+" || text.slice(-1)=="-" || text.slice(-1)=="*" || text.slice(-1)=="/" ){
        //do nothing
      }
      else{
        const expr=this.state.queries
        const ans=eval(expr)
        this.setState({result:ans})
      }
    }
  }

  render(){
    let nums=[["1","4","7"],["2","5","8"],["3","6","9"],[".","0","="]]
    let rows=[]
    for(let i=0;i<4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity onPress={this.handleClick.bind(this,nums[i][j])}><Text style={styles.btn}>{nums[i][j]}</Text></TouchableOpacity>)
      }
      rows.push(<View style={styles.number}>{row}</View>)
    }
    let symbol=["AC","DEL",'+',"-",'*','/']
    let symbols=[]
    for(let i=0;i<6;i++){
      symbols.push(<TouchableOpacity onPress={this.handleClick.bind(this,symbol[i])}><Text style={styles.btn}>{symbol[i]}</Text></TouchableOpacity>)    
    }
    return(
      <View style={styles.container}>
        <View style={styles.calc_screen}>
          <Text style={styles.query}>{this.state.queries}</Text>
        </View>
        <View style={styles.result_screen}>
          <Text style={styles.answer}>{this.state.result}</Text>
        </View>
        <View style={styles.button_screen}>
          <View style={styles.button_screen}>
            {rows}
          </View>
          <View style={styles.operator}>
            {symbols}
          </View>
        </View>        
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  query: {
    fontSize: 40
  },
  answer: {
    fontSize: 25,
    color: 'gray'
  },
  result_screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calc_screen: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  button_screen: {
    flex: 7,
    flexDirection: "row",
    backgroundColor: 'black',
    justifyContent: "space-around"
  },
  number: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: '#434343',
    justifyContent: "space-around",
    alignItems: "center"

  },
  operator: {
    flex: 2.5,
    backgroundColor: '#636363',
    justifyContent: "space-around",
    alignItems: "center"
  },
  btn : {
    fontSize: 50,
    color: 'white',
  }
})


//login UI

// class App extends Component{

//   constructor(){
//     super();
//     this.state={}
//     this.state.username=""
//     this.state.password=""
//   }

//   handleSubmit(){
//     this.setState({username: this._username._lastNativeText,password: this._password._lastNativeText})
//   }
  
//   render(){
//     return(
//       <View style={styles.container}>
//         <View style={styles.input}>
//           <Text>Username</Text>
//           <TextInput style={styles.text_input} 
//             ref={input => this._username=input}
//           />
//           <Text>Password</Text>
//           <TextInput style={styles.text_input} 
//             ref={input => this._password=input}
//           />
//           <Button style={styles.input} title="Submit" onPress={this.handleSubmit.bind(this)} />
//         </View>
//         <View>
//           <Text>You have Successfully Submitted the form: Username: {this.state.username} Password: {this.state.password}</Text>
//         </View>
//       </View>
//     )
//   }
// }

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'linen',
//     justifyContent: "center"
//   },
//   input: {
//     padding: 10,
//     margin: 10,
//   },
//   text_input: {
//     borderColor: 'black',
//     borderBottomWidth: 1,
//   }
// })





























//simple helloworld ,stylesheet,and flexbox


// class App extends Component{

//   constructor(){
//     super();
//     this.state={}
//     this.state.customStyles={
//       color: 'green',
//     }
//     this.state.text_input=""

//     setInterval(()=>{
//       if(this.state.customStyles.color==='green'){
//         this.setState({customStyles:{
//           color: 'blue'
//         }})
//       }
//       else{
//         this.setState({customStyles:{
//           color: 'green'
//         }})
//       }
//     },1000)
//   }

//   handleChangeText(input){
//     this.setState({
//       text_input:input
//     })
//   }

//   render(){
//   return (
//     <>
//     <View style={styles.container}>
//       <View style={styles.half1}>
//         <Text style={[styles.view,this.state.customStyles]}>Welcome 17shashank17!</Text>
//         <Text style={styles.text}>This is part 1</Text>
//         <TextInput style={styles.textinput}
//         defaultValue='edit me!'
//         onChangeText={this.handleChangeText.bind(this)}

//         />
//         <Text>You are writing {this.state.text_input}</Text>
//       </View>
//       <View style={styles.half2}>
//         <View style={styles.half21}>
//           <Text style={styles.text}>This is part 2</Text>
//         </View>
//         <View style={styles.half22}>
//           <Text style={styles.text}>This is part 3</Text>
//         </View>
//       </View>
//     </View>
//     </>
//   );
//   }
// };

// const styles=StyleSheet.create({
// container: {
//   flex: 1
// },
// half1: {
//   flex: 1,
//   backgroundColor: 'red',
//   alignItems: "center"
// },
// half2: {
//   flex: 1,
//   flexDirection: "row",
//   backgroundColor: 'blue'
// },
// view: {
//   textAlign: "center",
// },
// half21: {
//   flex: 1,
//   backgroundColor: 'blue',
//   justifyContent: "center",
//   alignContent: "center"
// },
// half22: {
//   flex: 1,
//   justifyContent: "center",
//   backgroundColor: 'green',
// },
// text: {
//   color: 'white',
//   fontSize: 30
// },
// textinput: {
//   borderBottomColor: 'black',
//   backgroundColor: 'indigo',
// }
// });


export default App;
