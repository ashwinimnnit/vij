export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/shareAction.json",
    "title": "Share",
    "type": "object",
    "properties": {
    "type": {
        "title": "Type",
            "type": "string",
            "enum": [ "button" ],
            "readonly": true
    },
    "subtype": {
        "title": "Subtype",
            "type": "string",
            "enum": [ "share" ],
            "readonly": true
    },
    "description": {
        "title": "Description",
            "type": "string"
    }
},
    "required": [
    "type",
    "subtype"
],
    "additionalProperties": false
}
}