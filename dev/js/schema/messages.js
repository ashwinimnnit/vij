export default{
    schema: {
    "$schema": "http://json-schema.org/schema#",
    "id": "http://botworx.s3.amazonaws.com/schema/messages.json",
    "title": "Messages",
    "type": "array",
    "items": {
    "title": "Message",
        "oneOf": [
        {
            "$ref": "textMessage.json"
        },
        {
            "$ref": "imageMessage.json"
        },
        {
            "$ref": "galleryMessage.json"
        }
    ]
},
    "minItems": 1,
    "maxItems": 5
}
}