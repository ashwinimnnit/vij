export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/quickTextAction.json",
    "title": "Quick Text",
    "type": "object",
    "properties": {
    "id": {
        "title": "ID",
            "type": "string"
    },
    "type": {
        "title": "Type",
            "type": "string",
            "enum": [ "quicktext" ],
            "readonly": true
    },
    "label": {
        "title": "Quick Text Options",
            "type": "array",
            "items": {
            "title": "Label",
                "type": "string"
        },
        "minItems": 1
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