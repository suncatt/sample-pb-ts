/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: phonebook/v1/emergencycontactdetails.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace phonebook.v1 {
    export class EmergencyContactDetails extends pb_1.Message {
        #one_of_decls: number[][] = [[2]];
        constructor(data?: any[] | ({
            relationship?: EmergencyContactDetails.Relationships;
        } & (({
            customLabel?: string;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("relationship" in data && data.relationship != undefined) {
                    this.relationship = data.relationship;
                }
                if ("customLabel" in data && data.customLabel != undefined) {
                    this.customLabel = data.customLabel;
                }
            }
        }
        get relationship() {
            return pb_1.Message.getFieldWithDefault(this, 1, EmergencyContactDetails.Relationships.BROTHER) as EmergencyContactDetails.Relationships;
        }
        set relationship(value: EmergencyContactDetails.Relationships) {
            pb_1.Message.setField(this, 1, value);
        }
        get customLabel() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set customLabel(value: string) {
            pb_1.Message.setOneofField(this, 2, this.#one_of_decls[0], value);
        }
        get hasCustomLabel() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get _custom_label() {
            const cases: {
                [index: number]: "none" | "customLabel";
            } = {
                0: "none",
                2: "customLabel"
            };
            return cases[pb_1.Message.computeOneofCase(this, [2])];
        }
        static fromObject(data: {
            relationship?: EmergencyContactDetails.Relationships;
            customLabel?: string;
        }): EmergencyContactDetails {
            const message = new EmergencyContactDetails({});
            if (data.relationship != null) {
                message.relationship = data.relationship;
            }
            if (data.customLabel != null) {
                message.customLabel = data.customLabel;
            }
            return message;
        }
        toObject() {
            const data: {
                relationship?: EmergencyContactDetails.Relationships;
                customLabel?: string;
            } = {};
            if (this.relationship != null) {
                data.relationship = this.relationship;
            }
            if (this.customLabel != null) {
                data.customLabel = this.customLabel;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.relationship != EmergencyContactDetails.Relationships.BROTHER)
                writer.writeEnum(1, this.relationship);
            if (this.hasCustomLabel)
                writer.writeString(2, this.customLabel);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EmergencyContactDetails {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EmergencyContactDetails();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.relationship = reader.readEnum();
                        break;
                    case 2:
                        message.customLabel = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EmergencyContactDetails {
            return EmergencyContactDetails.deserialize(bytes);
        }
    }
    export namespace EmergencyContactDetails {
        export enum Relationships {
            BROTHER = 0,
            MOTHER = 1,
            SISTER = 2,
            FATHER = 3,
            FRIEND = 4,
            COUSIN = 5
        }
    }
}
