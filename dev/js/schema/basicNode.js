export default {
    schema:{
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/basicNode.json",
    "type": "object",
    "title": "Basic Node",
    "properties": {
    "type": {
        "title": "Type",
            "type": "string",
            "enum": [ "basic" ],
            "readonly": true
    },
    "onEntryPlugins": {
        "title": "Plugins",
            "$ref": "plugin.json"
    },
    "messages": {
        "title": "Messages",
            "$ref": "messages.json"
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