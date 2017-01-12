export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/linkAction.json",
    "title": "Link",
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
    "url": {
        "title": "Link URL",
            "type": "string"
    },
    "description": {
        "title": "Description",
            "type": "string"
    }
},
    "required": [
    "type",
    "label",
    "url"
],
    "additionalProperties": false
}
}