import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './vis';
import Flow from './flow-demo'

var nodeList=[];
var nodeEdges=[];
//console.log(Flow.schema.nodes)
for (var key in Flow.schema.nodes) {
    nodeList.push({"id":key, "label": key,shape:"box"});
}
for (var keys in Flow.schema.nodes) {
    var nodeName=Flow.schema.nodes[keys];
    if(nodeName.messages.data.type=="text")
    {
        var actionList=nodeName.messages.actions
        for(var textActions in actionList){
            var actionNodeId;
            //console.log(actionList[textActions].nextNodes[0])
            if(actionList[textActions].nextNodes.length>1) {
                actionNodeId=keys+actionList[textActions].label
                nodeList.push({"id":actionNodeId,
                    "label":actionList[textActions].label,
                    "shape":"circle",
                    color: {background: '#54D454'}})
                //console.log("from":keys,"to":actionNodeId)
                nodeEdges.push({"from":keys,"to":actionNodeId})
                console.log(keys,actionNodeId)
                var weight=1;
                for(var nextNode in actionList[textActions].nextNodes)
                {
                    nodeEdges.push({"from":actionNodeId,"to":actionList[textActions].nextNodes[nextNode],label: weight})
                    weight++;
                }
                weight=1;
                break;
            }
            if(actionList[textActions].nextNodes.length==1) {
                actionNodeId = keys + actionList[textActions].label + actionList[textActions].nextNodes[0]
                nodeList.push({
                    "id": actionNodeId,
                    "label": actionList[textActions].label,
                    "shape": "circle",
                    color: {background: '#54D454'}
                })
                nodeEdges.push({"from": keys, "to": actionNodeId}, {
                    "from": actionNodeId,
                    "to": actionList[textActions].nextNodes[0]
                })
            }   }
    }
}
//console.log(nodeList)

var data = {
    nodes: nodeList,
    edges: nodeEdges
};
ReactDOM.render(
    <div><Graph graph={data}/></div>,
    document.getElementById('root')
);