import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import Graph from './vis'
//import Flow from "./flow"
import FlowDemo from "./flow-demo"

console.log(FlowDemo)

var nodeList = []
var nodeEdges = []
for(var key in FlowDemo.schema.nodes){
    nodeList.push({"id":key, "label": key, "color": "#2ecc71" })
}

/*for (var key in FlowDemo.schema.nodes) {

 if (FlowDemo.schema.nodes[key].messages.data.type == "text"){

 if (FlowDemo.schema.nodes[key].messages.hasOwnProperty("actions")){
 var temp = FlowDemo.schema.nodes[key].messages.actions[0]
 nodeEdges.push({
 "from": key,
 "label": temp.label,
 "to": temp.nextNodes[0]
 })

 }

 }

 }*/


for (var keys in FlowDemo.schema.nodes) {
    var nodeName=FlowDemo.schema.nodes[keys];
    if(nodeName.messages.data.type=="text")
    {
        var actionList=nodeName.messages.actions
        for(var textActions in actionList){
            for(var nextNode in actionList[textActions].nextNodes)
            {
                nodeList.push({
                    "id": keys+actionList[textActions].label+actionList[textActions].nextNodes[nextNode],
                    "label":actionList[textActions].label,
                    "shape": "box",
                    "color": "#3498db"
                })
                if (actionList[textActions].nextNodes.length > 1) {
                    nodeEdges.push({
                        "from": keys,
                        "to": keys + actionList[textActions].label + actionList[textActions].nextNodes[nextNode],
                        "label": actionList[textActions].nextNodes.indexOf(actionList[textActions].nextNodes[nextNode] ) + 1
                    })
                }

                nodeEdges.push({
                        "from": keys,
                        "to": keys + actionList[textActions].label + actionList[textActions].nextNodes[nextNode]
                    },
                    {
                        "from": keys + actionList[textActions].label + actionList[textActions].nextNodes[nextNode],
                        "to": actionList[textActions].nextNodes[nextNode]
                    }
                )
            }
        }
    }
}


console.log(nodeList)

var data = {
    nodes: nodeList,
    edges: nodeEdges

};


ReactDOM.render(

    <div><Graph graph={data }/></div>,
    document.getElementById('root')
);