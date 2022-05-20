import {RootEngine} from 'flume'
import config from './config'

const resolvePorts = (portType: any, data: any)=>{
    switch (portType){
        case 'string':
            return data.string;
        case 'number':
            return data.number;
        case 'boolean':
            return data.boolean;
        default:
            return data
    }
}


const resolveNodes = (node: any, inputValues: any, nodeType: any, context: any)=>{
    switch (node.type){
        case 'string':
            return {string: inputValues.string}
        case 'boolean':
            return {boolean: inputValues.boolean}
        case 'number':
            return {number: inputValues.number}
        case 'user':
            return context.user
        case 'joinText':
            return {joinedText: inputValues.string1 + inputValues.string2}
        case 'reverseBoolean':
            return {boolean: !inputValues.boolean}
        case 'addTwo':
            return {sum: parseInt(inputValues.Number1) + parseInt(inputValues.Number2)}
    }
}

const engine = new RootEngine(config, resolvePorts, resolveNodes);
export default engine;