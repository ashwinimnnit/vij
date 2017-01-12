export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/greetingTextNode.json",
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
                        "properties": {
                        "type": {
                            "type": "string",
                                "default": "text",
                                "readonly": true
                        },
                        "value": {
                            "type": "string",
                                "default": "Get started messaging with this bot."
                        }
                    },
                    "required": [
                        "type",
                        "value"
                    ],
                        "additionalProperties": false
                },
                "actions": {
                    "title": "Actions",
                        "type": "array",
                        "items": {
                        "title": "Action",
                            "type": "object",
                            "properties": {
                            "type": {
                                "title": "Type",
                                    "type": "string",
                                    "default": "button",
                                    "readonly": true
                            },
                            "label": {
                                "title": "Label",
                                    "type": "string",
                                    "default": "Get Started",
                                    "readonly": true
                            },
                            "nextNodes": {
                                "title": "Next Node(s)",
                                    "type": "array",
                                    "items": {
                                    "title": "Next Node",
                                        "type": "string",
                                        "default": "INITIAL_NODE",
                                        "readonly": true
                                },
                                "minItems": 1,
                                    "maxItems": 1
                            }
                        },
                        "required": [
                            "type",
                            "label",
                            "nextNodes"
                        ],
                            "additionalProperties": false
                    },
                    "minItems": 1,
                        "maxItems": 1
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