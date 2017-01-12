export default{
  schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/plugin.json",
    "title": "Plugins",
    "type": "array",
    "items": {
    "title": "Plugin",
        "type": "object",
        "properties": {
        "name": {
            "title": "Name",
                "type": "string"
        },
        "method": {
            "title": "Method",
                "type": "string"
        },
        "params": {
            "title": "Params",
            "type": "object"
        }
    },
    "required": [
        "name"
    ],
        "additionalProperties": false
}
}
}