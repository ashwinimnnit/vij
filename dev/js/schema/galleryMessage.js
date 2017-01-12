export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/galleryMessage.json",
    "title": "Gallery Message",
    "type": "object",
    "properties": {
    "data": {
        "title": "Data",
            "type": "object",
            "properties": {
            "type": {
                "title": "Type",
                    "type": "string",
                    "enum": [ "gallery" ],
                    "readonly": true
            },
            "value": {
                "title": "Value",
                    "type": "object",
                    "properties": {
                    "items": {
                        "title": "Gallery Items",
                            "type": "array",
                            "items": {
                            "title": "Gallery Item",
                                "oneOf": [
                                {
                                    "$ref": "galleryItemImage.json"
                                },
                                {
                                    "$ref": "galleryItemText.json"
                                }
                            ]
                        },
                        "minItems": 1,
                            "maxItems": 10
                    }
                },
                "required": [
                    "items"
                ],
                    "additionalProperties": false
            }
        },
        "required": [
            "type",
            "value"
        ],
            "additionalProperties": false
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