import {Realm} from '@realm/react';

// To use a class as a Realm object type in Typescript with the `@realm/babel-plugin` plugin,
// simply define the properties on the class with the correct type and the plugin will convert
// it to a Realm schema automatically.
export class Equipment extends Realm.Object {
  _v!: number;
  _id!: Realm.BSON.ObjectId;
  account!: string;
  bow!: string;
  images!: string[];
  installationDate!: number;
  isDeleted!: boolean;
  model!: string;
  name!: string;
  serial!:string;

  // static schema = {
  //   name: 'equipment',
  //   properties: {
  //     __v: "int",
  //     _id: "objectId",
  //     account: "string",
  //     bow: "string",
  //     images: "array",
  //     installationDate: "double",
  //     isDeleted: "bool",
  //     model: "string",
  //     name: "string",
  //     serial: "string"
  //   }
  // }
}