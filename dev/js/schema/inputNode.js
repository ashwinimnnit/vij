export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/inputNode.json",
    "type": "object",
    "title": "Input Node",
    "properties": {
    "type": {
        "title": "Type",
            "type": "string",
            "enum": [ "input" ],
            "readonly": true
    },
    "label": {
        "title": "Input Variable",
            "type": "string"
    },
    "onEntryPlugins": {
        "title": "Plugins",
            "$ref": "plugin.json"
    },
    "messages": {
        "title": "Messages",
            "$ref": "messages.json"
    },
    "nextNodes": {
        "title": "Next Node(s)",
            "type": "array",
            "items": {
            "title": "Next Node",
                "type": "string"
        },
        "minItems": 1
    },
    "description": {
        "title": "Description",
            "type": "string"
    }
},
    "required": [
    "type",
    "messages",
    "nextNodes"
],
    "additionalProperties": false
}
}