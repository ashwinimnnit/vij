export default {
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/imageMessage.json",
    "title": "Image Message",
    "type": "object",
    "properties": {
    "data": {
        "title": "Data",
            "type": "object",
            "properties": {
            "type": {
                "title": "Type",
                    "type": "string",
                    "enum": [ "image" ],
                    "readonly": true
            },
            "url": {
                "title": "Image URL",
                    "type": "string"
            },
            "caption": {
                "title": "Caption",
                    "type": "string"
            },
            "subtitle": {
                "title": "Subtitle",
                    "type": "string"
            }
        },
        "required": [
            "type",
            "url"
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