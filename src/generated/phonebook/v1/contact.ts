/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: phonebook/v1/contact.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./..\\..\\google\\protobuf\\timestamp";
import * as dependency_2 from "./socialplatform";
import * as dependency_3 from "./emergencycontactdetails";
import * as dependency_4 from "./address";
import * as pb_1 from "google-protobuf";
export namespace phonebook.v1 {
    export class Contact extends pb_1.Message {
        #one_of_decls: number[][] = [[3], [4], [6], [7], [12]];
        constructor(data?: any[] | ({
            firstName?: string;
            lastName?: string;
            socialPlatforms?: dependency_2.phonebook.v1.SocialPlatform[];
            isBlocked?: boolean;
            isFavorite?: boolean;
            createdAt?: dependency_1.google.protobuf.Timestamp;
            updatedAt?: dependency_1.google.protobuf.Timestamp;
        } & (({
            email?: string;
        }) | ({
            phoneNumber?: string;
        }) | ({
            emergencyContact?: dependency_3.phonebook.v1.EmergencyContactDetails;
        }) | ({
            address?: dependency_4.phonebook.v1.Address;
        }) | ({
            deletedAt?: dependency_1.google.protobuf.Timestamp;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("firstName" in data && data.firstName != undefined) {
                    this.firstName = data.firstName;
                }
                if ("lastName" in data && data.lastName != undefined) {
                    this.lastName = data.lastName;
                }
                if ("email" in data && data.email != undefined) {
                    this.email = data.email;
                }
                if ("phoneNumber" in data && data.phoneNumber != undefined) {
                    this.phoneNumber = data.phoneNumber;
                }
                if ("socialPlatforms" in data && data.socialPlatforms != undefined) {
                    this.socialPlatforms = data.socialPlatforms;
                }
                if ("emergencyContact" in data && data.emergencyContact != undefined) {
                    this.emergencyContact = data.emergencyContact;
                }
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("isBlocked" in data && data.isBlocked != undefined) {
                    this.isBlocked = data.isBlocked;
                }
                if ("isFavorite" in data && data.isFavorite != undefined) {
                    this.isFavorite = data.isFavorite;
                }
                if ("createdAt" in data && data.createdAt != undefined) {
                    this.createdAt = data.createdAt;
                }
                if ("updatedAt" in data && data.updatedAt != undefined) {
                    this.updatedAt = data.updatedAt;
                }
                if ("deletedAt" in data && data.deletedAt != undefined) {
                    this.deletedAt = data.deletedAt;
                }
            }
        }
        get firstName() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set firstName(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get lastName() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set lastName(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get email() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set email(value: string) {
            pb_1.Message.setOneofField(this, 3, this.#one_of_decls[0], value);
        }
        get hasEmail() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get phoneNumber() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set phoneNumber(value: string) {
            pb_1.Message.setOneofField(this, 4, this.#one_of_decls[1], value);
        }
        get hasPhoneNumber() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get socialPlatforms() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.phonebook.v1.SocialPlatform, 5) as dependency_2.phonebook.v1.SocialPlatform[];
        }
        set socialPlatforms(value: dependency_2.phonebook.v1.SocialPlatform[]) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
        }
        get emergencyContact() {
            return pb_1.Message.getWrapperField(this, dependency_3.phonebook.v1.EmergencyContactDetails, 6) as dependency_3.phonebook.v1.EmergencyContactDetails;
        }
        set emergencyContact(value: dependency_3.phonebook.v1.EmergencyContactDetails) {
            pb_1.Message.setOneofWrapperField(this, 6, this.#one_of_decls[2], value);
        }
        get hasEmergencyContact() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get address() {
            return pb_1.Message.getWrapperField(this, dependency_4.phonebook.v1.Address, 7) as dependency_4.phonebook.v1.Address;
        }
        set address(value: dependency_4.phonebook.v1.Address) {
            pb_1.Message.setOneofWrapperField(this, 7, this.#one_of_decls[3], value);
        }
        get hasAddress() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get isBlocked() {
            return pb_1.Message.getFieldWithDefault(this, 8, false) as boolean;
        }
        set isBlocked(value: boolean) {
            pb_1.Message.setField(this, 8, value);
        }
        get isFavorite() {
            return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
        }
        set isFavorite(value: boolean) {
            pb_1.Message.setField(this, 9, value);
        }
        get createdAt() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 10) as dependency_1.google.protobuf.Timestamp;
        }
        set createdAt(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 10, value);
        }
        get hasCreatedAt() {
            return pb_1.Message.getField(this, 10) != null;
        }
        get updatedAt() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 11) as dependency_1.google.protobuf.Timestamp;
        }
        set updatedAt(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 11, value);
        }
        get hasUpdatedAt() {
            return pb_1.Message.getField(this, 11) != null;
        }
        get deletedAt() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 12) as dependency_1.google.protobuf.Timestamp;
        }
        set deletedAt(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setOneofWrapperField(this, 12, this.#one_of_decls[4], value);
        }
        get hasDeletedAt() {
            return pb_1.Message.getField(this, 12) != null;
        }
        get _email() {
            const cases: {
                [index: number]: "none" | "email";
            } = {
                0: "none",
                3: "email"
            };
            return cases[pb_1.Message.computeOneofCase(this, [3])];
        }
        get _phone_number() {
            const cases: {
                [index: number]: "none" | "phoneNumber";
            } = {
                0: "none",
                4: "phoneNumber"
            };
            return cases[pb_1.Message.computeOneofCase(this, [4])];
        }
        get _emergency_contact() {
            const cases: {
                [index: number]: "none" | "emergencyContact";
            } = {
                0: "none",
                6: "emergencyContact"
            };
            return cases[pb_1.Message.computeOneofCase(this, [6])];
        }
        get _address() {
            const cases: {
                [index: number]: "none" | "address";
            } = {
                0: "none",
                7: "address"
            };
            return cases[pb_1.Message.computeOneofCase(this, [7])];
        }
        get _deleted_at() {
            const cases: {
                [index: number]: "none" | "deletedAt";
            } = {
                0: "none",
                12: "deletedAt"
            };
            return cases[pb_1.Message.computeOneofCase(this, [12])];
        }
        static fromObject(data: {
            firstName?: string;
            lastName?: string;
            email?: string;
            phoneNumber?: string;
            socialPlatforms?: ReturnType<typeof dependency_2.phonebook.v1.SocialPlatform.prototype.toObject>[];
            emergencyContact?: ReturnType<typeof dependency_3.phonebook.v1.EmergencyContactDetails.prototype.toObject>;
            address?: ReturnType<typeof dependency_4.phonebook.v1.Address.prototype.toObject>;
            isBlocked?: boolean;
            isFavorite?: boolean;
            createdAt?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            updatedAt?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            deletedAt?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
        }): Contact {
            const message = new Contact({});
            if (data.firstName != null) {
                message.firstName = data.firstName;
            }
            if (data.lastName != null) {
                message.lastName = data.lastName;
            }
            if (data.email != null) {
                message.email = data.email;
            }
            if (data.phoneNumber != null) {
                message.phoneNumber = data.phoneNumber;
            }
            if (data.socialPlatforms != null) {
                message.socialPlatforms = data.socialPlatforms.map(item => dependency_2.phonebook.v1.SocialPlatform.fromObject(item));
            }
            if (data.emergencyContact != null) {
                message.emergencyContact = dependency_3.phonebook.v1.EmergencyContactDetails.fromObject(data.emergencyContact);
            }
            if (data.address != null) {
                message.address = dependency_4.phonebook.v1.Address.fromObject(data.address);
            }
            if (data.isBlocked != null) {
                message.isBlocked = data.isBlocked;
            }
            if (data.isFavorite != null) {
                message.isFavorite = data.isFavorite;
            }
            if (data.createdAt != null) {
                message.createdAt = dependency_1.google.protobuf.Timestamp.fromObject(data.createdAt);
            }
            if (data.updatedAt != null) {
                message.updatedAt = dependency_1.google.protobuf.Timestamp.fromObject(data.updatedAt);
            }
            if (data.deletedAt != null) {
                message.deletedAt = dependency_1.google.protobuf.Timestamp.fromObject(data.deletedAt);
            }
            return message;
        }
        toObject() {
            const data: {
                firstName?: string;
                lastName?: string;
                email?: string;
                phoneNumber?: string;
                socialPlatforms?: ReturnType<typeof dependency_2.phonebook.v1.SocialPlatform.prototype.toObject>[];
                emergencyContact?: ReturnType<typeof dependency_3.phonebook.v1.EmergencyContactDetails.prototype.toObject>;
                address?: ReturnType<typeof dependency_4.phonebook.v1.Address.prototype.toObject>;
                isBlocked?: boolean;
                isFavorite?: boolean;
                createdAt?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
                updatedAt?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
                deletedAt?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.firstName != null) {
                data.firstName = this.firstName;
            }
            if (this.lastName != null) {
                data.lastName = this.lastName;
            }
            if (this.email != null) {
                data.email = this.email;
            }
            if (this.phoneNumber != null) {
                data.phoneNumber = this.phoneNumber;
            }
            if (this.socialPlatforms != null) {
                data.socialPlatforms = this.socialPlatforms.map((item: dependency_2.phonebook.v1.SocialPlatform) => item.toObject());
            }
            if (this.emergencyContact != null) {
                data.emergencyContact = this.emergencyContact.toObject();
            }
            if (this.address != null) {
                data.address = this.address.toObject();
            }
            if (this.isBlocked != null) {
                data.isBlocked = this.isBlocked;
            }
            if (this.isFavorite != null) {
                data.isFavorite = this.isFavorite;
            }
            if (this.createdAt != null) {
                data.createdAt = this.createdAt.toObject();
            }
            if (this.updatedAt != null) {
                data.updatedAt = this.updatedAt.toObject();
            }
            if (this.deletedAt != null) {
                data.deletedAt = this.deletedAt.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.firstName.length)
                writer.writeString(1, this.firstName);
            if (this.lastName.length)
                writer.writeString(2, this.lastName);
            if (this.hasEmail)
                writer.writeString(3, this.email);
            if (this.hasPhoneNumber)
                writer.writeString(4, this.phoneNumber);
            if (this.socialPlatforms.length)
                writer.writeRepeatedMessage(5, this.socialPlatforms, (item: dependency_2.phonebook.v1.SocialPlatform) => item.serialize(writer));
            if (this.hasEmergencyContact)
                writer.writeMessage(6, this.emergencyContact, () => this.emergencyContact.serialize(writer));
            if (this.hasAddress)
                writer.writeMessage(7, this.address, () => this.address.serialize(writer));
            if (this.isBlocked != false)
                writer.writeBool(8, this.isBlocked);
            if (this.isFavorite != false)
                writer.writeBool(9, this.isFavorite);
            if (this.hasCreatedAt)
                writer.writeMessage(10, this.createdAt, () => this.createdAt.serialize(writer));
            if (this.hasUpdatedAt)
                writer.writeMessage(11, this.updatedAt, () => this.updatedAt.serialize(writer));
            if (this.hasDeletedAt)
                writer.writeMessage(12, this.deletedAt, () => this.deletedAt.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Contact {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Contact();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.firstName = reader.readString();
                        break;
                    case 2:
                        message.lastName = reader.readString();
                        break;
                    case 3:
                        message.email = reader.readString();
                        break;
                    case 4:
                        message.phoneNumber = reader.readString();
                        break;
                    case 5:
                        reader.readMessage(message.socialPlatforms, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_2.phonebook.v1.SocialPlatform.deserialize(reader), dependency_2.phonebook.v1.SocialPlatform));
                        break;
                    case 6:
                        reader.readMessage(message.emergencyContact, () => message.emergencyContact = dependency_3.phonebook.v1.EmergencyContactDetails.deserialize(reader));
                        break;
                    case 7:
                        reader.readMessage(message.address, () => message.address = dependency_4.phonebook.v1.Address.deserialize(reader));
                        break;
                    case 8:
                        message.isBlocked = reader.readBool();
                        break;
                    case 9:
                        message.isFavorite = reader.readBool();
                        break;
                    case 10:
                        reader.readMessage(message.createdAt, () => message.createdAt = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 11:
                        reader.readMessage(message.updatedAt, () => message.updatedAt = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 12:
                        reader.readMessage(message.deletedAt, () => message.deletedAt = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Contact {
            return Contact.deserialize(bytes);
        }
    }
}
