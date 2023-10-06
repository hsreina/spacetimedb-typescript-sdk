// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import {
  __SPACETIMEDB__,
  AlgebraicType,
  ProductType,
  BuiltinType,
  ProductTypeElement,
  SumType,
  SumTypeVariant,
  IDatabaseTable,
  AlgebraicValue,
  ReducerEvent,
  Identity,
} from "../../src/index";

export class User extends IDatabaseTable {
  public static tableName = "User";
  public identity: Identity;
  public username: string;

  public static primaryKey: string | undefined = "identity";

  constructor(identity: Identity, username: string) {
    super();
    this.identity = identity;
    this.username = username;
  }

  public static serialize(value: User): object {
    return [Array.from(value.identity.toUint8Array()), value.username];
  }

  public static getAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
      new ProductTypeElement(
        "identity",
        AlgebraicType.createProductType([
          new ProductTypeElement(
            "__identity_bytes",
            AlgebraicType.createArrayType(
              AlgebraicType.createPrimitiveType(BuiltinType.Type.U8)
            )
          ),
        ])
      ),
      new ProductTypeElement(
        "username",
        AlgebraicType.createPrimitiveType(BuiltinType.Type.String)
      ),
    ]);
  }

  public static fromValue(value: AlgebraicValue): User {
    let productValue = value.asProductValue();
    let __identity = new Identity(
      productValue.elements[0].asProductValue().elements[0].asBytes()
    );
    let __username = productValue.elements[1].asString();
    return new this(__identity, __username);
  }

  public static count(): number {
    return __SPACETIMEDB__.clientDB.getTable("User").count();
  }

  public static all(): User[] {
    return __SPACETIMEDB__.clientDB
      .getTable("User")
      .getInstances() as unknown as User[];
  }

  public static filterByIdentity(value: Identity): User | null {
    for (let instance of __SPACETIMEDB__.clientDB
      .getTable("User")
      .getInstances()) {
      if (instance.identity.isEqual(value)) {
        return instance;
      }
    }
    return null;
  }

  public static filterByUsername(value: string): User[] {
    let result: User[] = [];
    for (let instance of __SPACETIMEDB__.clientDB
      .getTable("User")
      .getInstances()) {
      if (instance.username === value) {
        result.push(instance);
      }
    }
    return result;
  }

  public static onInsert(
    callback: (value: User, reducerEvent: ReducerEvent | undefined) => void
  ) {
    __SPACETIMEDB__.clientDB.getTable("User").onInsert(callback);
  }

  public static onUpdate(
    callback: (
      oldValue: User,
      newValue: User,
      reducerEvent: ReducerEvent | undefined
    ) => void
  ) {
    __SPACETIMEDB__.clientDB.getTable("User").onUpdate(callback);
  }

  public static onDelete(
    callback: (value: User, reducerEvent: ReducerEvent | undefined) => void
  ) {
    __SPACETIMEDB__.clientDB.getTable("User").onDelete(callback);
  }

  public static removeOnInsert(
    callback: (value: User, reducerEvent: ReducerEvent | undefined) => void
  ) {
    __SPACETIMEDB__.clientDB.getTable("User").removeOnInsert(callback);
  }

  public static removeOnUpdate(
    callback: (
      oldValue: User,
      newValue: User,
      reducerEvent: ReducerEvent | undefined
    ) => void
  ) {
    __SPACETIMEDB__.clientDB.getTable("User").removeOnUpdate(callback);
  }

  public static removeOnDelete(
    callback: (value: User, reducerEvent: ReducerEvent | undefined) => void
  ) {
    __SPACETIMEDB__.clientDB.getTable("User").removeOnDelete(callback);
  }
}

export default User;

__SPACETIMEDB__.registerComponent("User", User);