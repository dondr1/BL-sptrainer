SCHEMAS = {
    'trainee': {
        '$jsonSchema': {
            'bsonType': 'object',
            'required': ['real_name', 'uname', 'phone_no', 
                        'hash_pwd', 'age', 'org_name'],
            'properties': {
                'real_name': {'bsonType': 'string', 'maxLength': 50},
                'uname': {'bsonType': 'string', 'maxLength': 50},
                'phone_no': {'bsonType': 'string'},
                'hash_pwd': {'bsonType': 'string'},
                'age': {'bsonType': 'int'},
                'org_name': {'bsonType': 'string'},
            }
        }
    },
    'ChatSessions': {
        '$jsonSchema': {
            'bsonType': 'object',
            'required': ['trainee'],
            'properties': {
                'trainee': {'bsonType': 'objectId'},
                'chats': {
                    'bsonType': 'array',
                    'items': {
                        'bsonType': 'object',
                        'required': ['sender', 'message_content', 'timestamp'],
                        'properties': {
                            'sender': {'bsonType': 'string'},
                            'message_content': {'bsonType': 'string', 'maxLength': 256},
                            'timestamp': {'bsonType': 'date'}
                        }
                    }
                },
                'created_at': {'bsonType': 'date'}
            }
        }
    },
    'SessionScores': {
        '$jsonSchema': {
        'bsonType': 'object',
        'required': ['user_id', 'session_id', 'rapport_building', 
                    'risk_assess', 'safety_planning', 'crisis_descalation', 
                    'resource_ref'],
        'properties': {
            'user_id': {'bsonType': 'objectId'},
            'session_id': {'bsonType': 'objectId'},
            'rapport_building': {'bsonType': 'number'},
            'risk_assess': {'bsonType': 'number'},
            'safety_planning': {'bsonType': 'number'},
            'crisis_descalation': {'bsonType': 'number'},
            'resource_ref': {'bsonType': 'number'}
        }
    }
    }

}
