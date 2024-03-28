import { phonebook } from "./generated/phonebook/v1/phonebook"


let pbbook = phonebook.v1.PhoneBook.fromObject({contact: [{
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.d@mymail.com",
    phoneNumber: "213-999-0876",
    socialPlatforms: [
        {
            platform: 2,
            profile: "2139990876",
            profileUrl: "https://api.whatsapp.com/+12139990876"
        }
    ],
    emergencyContact: {
        relationship: 1,
    },
    isBlocked: false,
    isFavorite: true,
    createdAt: {seconds: 0, nanos: 0},
    updatedAt: undefined
}
]})

const serializedPhoneBook = pbbook.serializeBinary()

const deserializedPhoneBook = phonebook.v1.PhoneBook.deserializeBinary(serializedPhoneBook)

console.log("\n Serialized Bytes of object: ", serializedPhoneBook)

console.log("\n Deserialized object: ", JSON.stringify(deserializedPhoneBook.toObject()))


