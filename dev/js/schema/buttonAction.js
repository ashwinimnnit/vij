export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/buttonAction.json",
    "title": "Button",
    "type": "object",
    "properties": {
    "type": {
        "title": "Type",
            "type": "string",
            "enum": [ "button" ],
            "readonly": true
    },
    "label": {
        "title": "Label",
            "type": "string"
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
    "label",
    "nextNodes"
],
    "additionalProperties": false
}
}