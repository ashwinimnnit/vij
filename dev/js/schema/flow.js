export default{
  schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/flow.json",
    "title": "Flow",
    "type": "object",
    "properties": {
    "botId": {
        "title": "Bot Id",
            "type": "string"
    },
    "description": {
        "title": "Description",
            "type": "string"
    },
    "version": {
        "title": "Version",
            "type": "string"
    },
    "initialNode": {
        "title": "Initial Node",
            "type": "string",
            "default": "INITIAL_NODE",
            "readonly": true
    },
    "persistentMenu": {
        "title": "Persistent Menu",
            "type": "string",
            "default": "PERSISTENT_MENU",
            "readonly": true
    },
    "getStarted": {
        "title": "Get Started",
            "type": "string",
            "default": "GET_STARTED",
            "readonly": true
    },
    "greetingText": {
        "title": "Greeting Text",
            "type": "string",
            "default": "GREETING_TEXT",
            "readonly": true
    },
    "fallbackOptions": {
        "title": "Fallback Options",
            "type": "array",
            "items": {
            "title": "Fallback Option",
                "type": "string",
                "enum": [
                "none",
                "resend_last_node",
                "resend_last_actions",
                "send_fallback_nodes"
            ]
        }
    },
    "fallbackNodes": {
        "title": "Fallback Nodes",
            "type": "array",
            "items": {
            "title": "Fallback Node",
                "type": "string"
        }
    },
    "keywords": {
        "title": "Keywords",
            "type": "object",
            "additionalProperties": {
            "type": "array",
                "items": {
                "title": "Keyword",
                    "oneOf": [
                    {
                        "title": "Simple Keyword",
                        "type": "string"
                    },
                    {
                        "title": "Complex Keyword",
                        "type": "object",
                        "properties": {
                            "matchType": {
                                "title": "Match Type",
                                "type": "string",
                                "enum": [
                                    "exact",
                                    "substring",
                                    "word",
                                    "regex"
                                ]
                            },
                            "value": {
                                "title": "Match Value",
                                "type": "string"
                            },
                            "enabledDuringChat": {
                                "title": "Enabled During Chat",
                                "type": "boolean"
                            }
                        },
                        "required": [
                            "matchType",
                            "value"
                        ],
                        "additionalProperties": false
                    }
                ]
            }
        }
    },
    "nodes": {
        "title": "Nodes",
            "type": "object",
            "properties": {
            "PERSISTENT_MENU": {
                "$ref": "persistentMenuNode.json"
            },
            "GET_STARTED": {
                "$ref": "getStartedNode.json"
            },
            "GREETING_TEXT": {
                "$ref": "greetingTextNode.json"
            },
            "INITIAL_NODE": {
                "$ref": "initialNode.json"
            }
        },
        "required": [
            "PERSISTENT_MENU",
            "GET_STARTED",
            "GREETING_TEXT",
            "INITIAL_NODE"
        ],
            "additionalProperties": {
            "oneOf": [
                {
                    "$ref": "basicNode.json"
                },
                {
                    "$ref": "inputNode.json"
                }
            ]
        }
    }
},
    "required": [
    "description",
    "initialNode",
    "persistentMenu",
    "getStarted",
    "greetingText",
    "keywords",
    "nodes"
],
    "additionalProperties": false
}
}