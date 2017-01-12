export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/persistentMenuNode.json",
    "type": "object",
    "properties": {
    "type": {
        "title": "Type",
            "type": "string",
            "default": "basic",
            "readonly": true
    },
    "messages": {
        "title": "Messages",
            "type": "array",
            "items": {
            "title": "Message",
                "type": "object",
                "properties": {
                "data": {
                    "title": "Data",
                        "type": "object",
                        "properties": {},
                    "additionalProperties": false
                },
                "actions": {
                    "title": "Actions",
                        "type": "array",
                        "items": {
                        "title": "Action",
                            "oneOf": [
                            {
                                "$ref": "buttonAction.json"
                            },
                            {
                                "$ref": "linkAction.json"
                            }
                        ]
                    },
                    "minItems": 1,
                        "maxItems": 5
                }
            },
            "required": [
                "data",
                "actions"
            ],
                "additionalProperties": false
        },
        "minItems": 1,
            "maxItems": 1
    },
    "description": {
        "title": "Description",
            "type": "string"
    }
},
    "required": [
    "type",
    "messages"
],
    "additionalProperties": false
}
}