import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ListView,
  ScrollView,
  Dimensions,
  Image,
  Alert
} from 'react-native'
// import Janus from './node_modules/janus-gateway'
import Janus from './janus.mobile.js'

let janus

Janus.init({
  debug: "all", callback: function() {
    if(started)
        return
    started = true
}})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    this.janusStart()
  }

  janusStart() {
    janus = new Janus(
      {
        server: 'wss://192.168.65.3/janus',
        success: () => {
          console.log('success')
            // janus.attach(
            //     {
            //         plugin: "janus.plugin.videoroom",
            //         success: (pluginHandle) => {
            //           sfutest = pluginHandle
            //           let register = { "request": "join", "room": roomId, "ptype": "publisher", "display": myusername.toString() }
            //           sfutest.send({"message": register})
            //         },
            //         error: (error) => {
            //           Alert.alert("  -- Error attaching plugin...", error)
            //         },
            //         consentDialog: (on) => {
            //         },
            //         mediaState: (medium, on) => {
            //         },
            //         webrtcState: (on) => {
            //         },
            //         onmessage: (msg, jsep) => {
            //           // console.log(msg)
            //           var event = msg["videoroom"]
            //           if(event != undefined && event != null) {
            //               if(event === "joined") {
            //                   myid = msg["id"]
            //                   this.publishOwnFeed(true)
            //                   this.setState({visible: false}) 
            //                   if(msg["publishers"] !== undefined && msg["publishers"] !== null) {
            //                     var list = msg["publishers"]
            //                     for(var f in list) {
            //                       var id = list[f]["id"]
            //                       var display = list[f]["display"]
            //                       this.newRemoteFeed(id, display)
            //                     }
            //                   }
            //               } else if(event === "destroyed") {
            //               } else if(event === "event") {
            //                 if(msg["publishers"] !== undefined && msg["publishers"] !== null) {
            //                   var list = msg["publishers"]
            //                   for(var f in list) {
            //                     let id = list[f]["id"]
            //                     let display = list[f]["display"]
            //                     this.newRemoteFeed(id, display)
            //                   }  
            //                 } else if(msg["leaving"] !== undefined && msg["leaving"] !== null) {                                        
            //                   var leaving = msg["leaving"]
            //                   var remoteFeed = null
            //                   let numLeaving = parseInt(msg["leaving"])
            //                   if(this.state.remoteList.hasOwnProperty(numLeaving)){
            //                     delete this.state.remoteList.numLeaving
            //                     this.setState({remoteList: this.state.remoteList})
            //                     this.state.remoteListPluginHandle[numLeaving].detach()
            //                     delete this.state.remoteListPluginHandle.numLeaving
            //                   }
            //                 } else if(msg["unpublished"] !== undefined && msg["unpublished"] !== null) {
            //                   var unpublished = msg["unpublished"]
            //                   if(unpublished === 'ok') {
            //                     sfutest.hangup()
            //                     return
            //                   }
            //                   let numLeaving = parseInt(msg["unpublished"])
            //                   if(this.state.remoteList.hasOwnProperty(numLeaving)){
            //                     delete this.state.remoteList.numLeaving
            //                     this.setState({remoteList: this.state.remoteList})
            //                     this.state.remoteListPluginHandle[numLeaving].detach()
            //                     delete this.state.remoteListPluginHandle.numLeaving
            //                   }
            //                 } else if(msg["error"] !== undefined && msg["error"] !== null) {
            //                 }
            //               }
            //           }
            //           if(jsep !== undefined && jsep !== null) {
            //             sfutest.handleRemoteJsep({jsep: jsep})
            //           }
            //         },
            //         onlocalstream: (stream) => {
            //           this.setState({selfViewSrc: stream.toURL()})
            //           this.setState({selfViewSrcKey: Math.floor(Math.random() * 1000)})
            //           this.setState({status: 'ready', info: 'Please enter or create room ID'})
            //         },
            //         onremotestream: (stream) => {
            //         },
            //         oncleanup: () => {
            //           mystream = null
            //         }
            //     })
        },
        error: (error) => {
          Alert.alert("  Janus Error", error)
        },
        destroyed: () => {
          Alert.alert("  Success for End Call ")
        }
      })
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text>Live Streaming App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App