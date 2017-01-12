export default {
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/actions.json",
    "title": "Actions",
    "type": "array",
    "items": {
    "title": "Action",
        "oneOf": [
        {
            "$ref": "buttonAction.json"
        },
        {
            "$ref": "linkAction.json"
        },
        {
            "$ref": "quickTextAction.json"
        },
        {
            "$ref": "shareAction.json"
        }
    ]
},
    "minItems": 0
}
}