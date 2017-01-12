export default {
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/galleryItemImage.json",
    "title": "Gallery Image Item",
    "type": "object",
    "properties": {
    "id": {
        "title": "ID",
            "type": "string"
    },
    "description": {
        "title": "Description",
            "type": "string"
    },
    "type": {
        "title": "Type",
            "type": "string",
            "enum": [ "image" ],
            "readonly": true
    },
    "value": {
        "title": "Value",
            "type": "object",
            "properties": {
            "caption": {
                "title": "Caption",
                    "type": "string"
            },
            "url": {
                "title": "URL",
                "type": "string"
            },
            "click_url": {
                "title": "Image Click URL",
                    "type": "string"
            },
            "subtitle": {
                "title": "Subtitle",
                    "type": "string"
            }
        },
        "required": [
            "caption",
            "url"
        ],
            "additionalProperties": false
    },
    "actions": {
        "$ref": "galleryItemActions.json"
    }
},
    "required": [
    "type",
    "value",
    "actions"
],
    "additionalProperties": false
}
}