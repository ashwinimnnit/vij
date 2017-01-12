export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/textMessage.json",
    "title": "Text Message",
    "type": "object",
    "properties": {
    "data": {
        "title": "Data",
            "type": "object",
            "properties": {
            "type": {
                "title": "Type",
                    "type": "string",
                    "enum": [ "text" ],
                    "readonly": true
            },
            "value": {
                "title": "Main Text",
                    "type": "string"
            },
            "subtitle": {
                "title": "Subtitle",
                    "type": "string"
            }
        },
        "required": [
            "type",
            "value"
        ],
            "additionalProperties": false
    },
    "actions": {
        "$ref": "actions.json"
    },
    "description": {
        "title": "Description",
            "type": "string"
    },
    "notificationType": {
        "title": "Notification Type",
            "type": "string",
            "enum": [ "all", "silent", "none" ],
            "default": "all"
    }
},
    "required": [
    "data"
],
    "additionalProperties": false
}
}