export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/galleryItemText.json",
    "title": "Gallery Text Item",
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