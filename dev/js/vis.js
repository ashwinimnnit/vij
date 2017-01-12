import {default as React, Component} from 'react';
const vis = require('vis');
const uuid = require('uuid');

class Graph extends Component {
    constructor(props) {
        super(props);
        const {identifier} = this.props;
        this.updateGraph = this.updateGraph.bind(this);
        this.state = {
            hierarchicalLayout: true,
            identifier : identifier ? identifier : uuid.v4()
        };
    }

    componentDidMount() {
        this.updateGraph();
    }

    componentDidUpdate() {
        this.updateGraph();
    }

    changeMode(event) {
        this.setState({hierarchicalLayout: !this.state.hierarchicalLayout});
        this.updateGraph();
    }

    updateGraph() {
        let container = document.getElementById(this.state.identifier);
        let options = {
            stabilize: false,
            smoothCurves: false,

            edges: {
                color: '#000000',
                width: 0.5,
                length: 1115,
                arrowScaleFactor: 0.5,
                style: 'arrow',
                label: {
                    enabled: true,
                    min: 14,
                    max: 30,
                    maxVisible: 30,
                    drawThreshold: 5
                },

            },
            nodes: {
                borderWidth: 1,
            },
            physics:{
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.3,
                    springLength: 95,
                    springConstant: 0.04,
                    damping: 0.09,
                    avoidOverlap: 1
                },
            }
        };



        new vis.Network(container, this.props.graph, options);
    }

    render() {
        //console.log(this.props);
        const {identifier} = this.state;
        const {style} = this.props;
        return React.createElement('div', {onDoubleClick: this.changeMode.bind(this), id: identifier, style}, identifier);
    }
}

Graph.defaultProps = {
    graph: {},
    style: {width: '1180px', height: '830px'}
};

export default Graph;