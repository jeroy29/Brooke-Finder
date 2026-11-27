
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Block
 * 
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>
/**
 * Model LotType
 * 
 */
export type LotType = $Result.DefaultSelection<Prisma.$LotTypePayload>
/**
 * Model Lot
 * 
 */
export type Lot = $Result.DefaultSelection<Prisma.$LotPayload>
/**
 * Model Homeowner
 * 
 */
export type Homeowner = $Result.DefaultSelection<Prisma.$HomeownerPayload>
/**
 * Model PaymentTerm
 * 
 */
export type PaymentTerm = $Result.DefaultSelection<Prisma.$PaymentTermPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const LotStatus: {
  AVAILABLE: 'AVAILABLE',
  RESERVED: 'RESERVED',
  SOLD: 'SOLD',
  HOLD: 'HOLD',
  CLOSED: 'CLOSED'
};

export type LotStatus = (typeof LotStatus)[keyof typeof LotStatus]


export const PaymentType: {
  RESERVATION: 'RESERVATION',
  DOWN_PAYMENT: 'DOWN_PAYMENT',
  AMORTIZATION: 'AMORTIZATION'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type LotStatus = $Enums.LotStatus

export const LotStatus: typeof $Enums.LotStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Blocks
 * const blocks = await prisma.block.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Blocks
   * const blocks = await prisma.block.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lotType`: Exposes CRUD operations for the **LotType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LotTypes
    * const lotTypes = await prisma.lotType.findMany()
    * ```
    */
  get lotType(): Prisma.LotTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lot`: Exposes CRUD operations for the **Lot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lots
    * const lots = await prisma.lot.findMany()
    * ```
    */
  get lot(): Prisma.LotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homeowner`: Exposes CRUD operations for the **Homeowner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Homeowners
    * const homeowners = await prisma.homeowner.findMany()
    * ```
    */
  get homeowner(): Prisma.HomeownerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentTerm`: Exposes CRUD operations for the **PaymentTerm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTerms
    * const paymentTerms = await prisma.paymentTerm.findMany()
    * ```
    */
  get paymentTerm(): Prisma.PaymentTermDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Block: 'Block',
    LotType: 'LotType',
    Lot: 'Lot',
    Homeowner: 'Homeowner',
    PaymentTerm: 'PaymentTerm',
    Contract: 'Contract',
    Payment: 'Payment',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "block" | "lotType" | "lot" | "homeowner" | "paymentTerm" | "contract" | "payment" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
      LotType: {
        payload: Prisma.$LotTypePayload<ExtArgs>
        fields: Prisma.LotTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LotTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LotTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>
          }
          findFirst: {
            args: Prisma.LotTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LotTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>
          }
          findMany: {
            args: Prisma.LotTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>[]
          }
          create: {
            args: Prisma.LotTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>
          }
          createMany: {
            args: Prisma.LotTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LotTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>[]
          }
          delete: {
            args: Prisma.LotTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>
          }
          update: {
            args: Prisma.LotTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>
          }
          deleteMany: {
            args: Prisma.LotTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LotTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LotTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>[]
          }
          upsert: {
            args: Prisma.LotTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotTypePayload>
          }
          aggregate: {
            args: Prisma.LotTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLotType>
          }
          groupBy: {
            args: Prisma.LotTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LotTypeCountArgs<ExtArgs>
            result: $Utils.Optional<LotTypeCountAggregateOutputType> | number
          }
        }
      }
      Lot: {
        payload: Prisma.$LotPayload<ExtArgs>
        fields: Prisma.LotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          findFirst: {
            args: Prisma.LotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          findMany: {
            args: Prisma.LotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          create: {
            args: Prisma.LotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          createMany: {
            args: Prisma.LotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          delete: {
            args: Prisma.LotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          update: {
            args: Prisma.LotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          deleteMany: {
            args: Prisma.LotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>[]
          }
          upsert: {
            args: Prisma.LotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotPayload>
          }
          aggregate: {
            args: Prisma.LotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLot>
          }
          groupBy: {
            args: Prisma.LotGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotGroupByOutputType>[]
          }
          count: {
            args: Prisma.LotCountArgs<ExtArgs>
            result: $Utils.Optional<LotCountAggregateOutputType> | number
          }
        }
      }
      Homeowner: {
        payload: Prisma.$HomeownerPayload<ExtArgs>
        fields: Prisma.HomeownerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeownerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeownerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>
          }
          findFirst: {
            args: Prisma.HomeownerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeownerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>
          }
          findMany: {
            args: Prisma.HomeownerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>[]
          }
          create: {
            args: Prisma.HomeownerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>
          }
          createMany: {
            args: Prisma.HomeownerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeownerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>[]
          }
          delete: {
            args: Prisma.HomeownerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>
          }
          update: {
            args: Prisma.HomeownerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>
          }
          deleteMany: {
            args: Prisma.HomeownerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeownerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeownerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>[]
          }
          upsert: {
            args: Prisma.HomeownerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeownerPayload>
          }
          aggregate: {
            args: Prisma.HomeownerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomeowner>
          }
          groupBy: {
            args: Prisma.HomeownerGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeownerGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeownerCountArgs<ExtArgs>
            result: $Utils.Optional<HomeownerCountAggregateOutputType> | number
          }
        }
      }
      PaymentTerm: {
        payload: Prisma.$PaymentTermPayload<ExtArgs>
        fields: Prisma.PaymentTermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentTermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentTermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>
          }
          findFirst: {
            args: Prisma.PaymentTermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentTermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>
          }
          findMany: {
            args: Prisma.PaymentTermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>[]
          }
          create: {
            args: Prisma.PaymentTermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>
          }
          createMany: {
            args: Prisma.PaymentTermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentTermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>[]
          }
          delete: {
            args: Prisma.PaymentTermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>
          }
          update: {
            args: Prisma.PaymentTermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>
          }
          deleteMany: {
            args: Prisma.PaymentTermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentTermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentTermUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>[]
          }
          upsert: {
            args: Prisma.PaymentTermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTermPayload>
          }
          aggregate: {
            args: Prisma.PaymentTermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentTerm>
          }
          groupBy: {
            args: Prisma.PaymentTermGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentTermGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentTermCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentTermCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    block?: BlockOmit
    lotType?: LotTypeOmit
    lot?: LotOmit
    homeowner?: HomeownerOmit
    paymentTerm?: PaymentTermOmit
    contract?: ContractOmit
    payment?: PaymentOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BlockCountOutputType
   */

  export type BlockCountOutputType = {
    lots: number
  }

  export type BlockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lots?: boolean | BlockCountOutputTypeCountLotsArgs
  }

  // Custom InputTypes
  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCountOutputType
     */
    select?: BlockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlockCountOutputType without action
   */
  export type BlockCountOutputTypeCountLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
  }


  /**
   * Count Type LotTypeCountOutputType
   */

  export type LotTypeCountOutputType = {
    lots: number
  }

  export type LotTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lots?: boolean | LotTypeCountOutputTypeCountLotsArgs
  }

  // Custom InputTypes
  /**
   * LotTypeCountOutputType without action
   */
  export type LotTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotTypeCountOutputType
     */
    select?: LotTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LotTypeCountOutputType without action
   */
  export type LotTypeCountOutputTypeCountLotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
  }


  /**
   * Count Type HomeownerCountOutputType
   */

  export type HomeownerCountOutputType = {
    contracts: number
  }

  export type HomeownerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | HomeownerCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * HomeownerCountOutputType without action
   */
  export type HomeownerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeownerCountOutputType
     */
    select?: HomeownerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HomeownerCountOutputType without action
   */
  export type HomeownerCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type PaymentTermCountOutputType
   */

  export type PaymentTermCountOutputType = {
    contracts: number
  }

  export type PaymentTermCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | PaymentTermCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * PaymentTermCountOutputType without action
   */
  export type PaymentTermCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTermCountOutputType
     */
    select?: PaymentTermCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentTermCountOutputType without action
   */
  export type PaymentTermCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    payments: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | ContractCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    id: number | null
    blockNo: number | null
  }

  export type BlockSumAggregateOutputType = {
    id: number | null
    blockNo: number | null
  }

  export type BlockMinAggregateOutputType = {
    id: number | null
    blockNo: number | null
  }

  export type BlockMaxAggregateOutputType = {
    id: number | null
    blockNo: number | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    blockNo: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    id?: true
    blockNo?: true
  }

  export type BlockSumAggregateInputType = {
    id?: true
    blockNo?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    blockNo?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    blockNo?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    blockNo?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: number
    blockNo: number
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockNo?: boolean
    lots?: boolean | Block$lotsArgs<ExtArgs>
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["block"]>

  export type BlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockNo?: boolean
  }, ExtArgs["result"]["block"]>

  export type BlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockNo?: boolean
  }, ExtArgs["result"]["block"]>

  export type BlockSelectScalar = {
    id?: boolean
    blockNo?: boolean
  }

  export type BlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockNo", ExtArgs["result"]["block"]>
  export type BlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lots?: boolean | Block$lotsArgs<ExtArgs>
    _count?: boolean | BlockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {
      lots: Prisma.$LotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blockNo: number
    }, ExtArgs["result"]["block"]>
    composites: {}
  }

  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockFindUniqueArgs>(args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Block that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockFindFirstArgs>(args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockFindManyArgs>(args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
     */
    create<T extends BlockCreateArgs>(args: SelectSubset<T, BlockCreateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockCreateManyArgs>(args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {BlockCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const block = await prisma.block.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
     */
    delete<T extends BlockDeleteArgs>(args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockUpdateArgs>(args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockDeleteManyArgs>(args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockUpdateManyArgs>(args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks and returns the data updated in the database.
     * @param {BlockUpdateManyAndReturnArgs} args - Arguments to update many Blocks.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blocks and only return the `id`
     * const blockWithIdOnly = await prisma.block.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
     */
    upsert<T extends BlockUpsertArgs>(args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lots<T extends Block$lotsArgs<ExtArgs> = {}>(args?: Subset<T, Block$lotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Block model
   */
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'Int'>
    readonly blockNo: FieldRef<"Block", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }

  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }

  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block createManyAndReturn
   */
  export type BlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block updateManyAndReturn
   */
  export type BlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }

  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }

  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Block.lots
   */
  export type Block$lotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    where?: LotWhereInput
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    cursor?: LotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Block
     */
    omit?: BlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockInclude<ExtArgs> | null
  }


  /**
   * Model LotType
   */

  export type AggregateLotType = {
    _count: LotTypeCountAggregateOutputType | null
    _avg: LotTypeAvgAggregateOutputType | null
    _sum: LotTypeSumAggregateOutputType | null
    _min: LotTypeMinAggregateOutputType | null
    _max: LotTypeMaxAggregateOutputType | null
  }

  export type LotTypeAvgAggregateOutputType = {
    id: number | null
    pricePerSqm: Decimal | null
  }

  export type LotTypeSumAggregateOutputType = {
    id: number | null
    pricePerSqm: Decimal | null
  }

  export type LotTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    pricePerSqm: Decimal | null
  }

  export type LotTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    pricePerSqm: Decimal | null
  }

  export type LotTypeCountAggregateOutputType = {
    id: number
    name: number
    pricePerSqm: number
    _all: number
  }


  export type LotTypeAvgAggregateInputType = {
    id?: true
    pricePerSqm?: true
  }

  export type LotTypeSumAggregateInputType = {
    id?: true
    pricePerSqm?: true
  }

  export type LotTypeMinAggregateInputType = {
    id?: true
    name?: true
    pricePerSqm?: true
  }

  export type LotTypeMaxAggregateInputType = {
    id?: true
    name?: true
    pricePerSqm?: true
  }

  export type LotTypeCountAggregateInputType = {
    id?: true
    name?: true
    pricePerSqm?: true
    _all?: true
  }

  export type LotTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LotType to aggregate.
     */
    where?: LotTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotTypes to fetch.
     */
    orderBy?: LotTypeOrderByWithRelationInput | LotTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LotTypes
    **/
    _count?: true | LotTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotTypeMaxAggregateInputType
  }

  export type GetLotTypeAggregateType<T extends LotTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateLotType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLotType[P]>
      : GetScalarType<T[P], AggregateLotType[P]>
  }




  export type LotTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotTypeWhereInput
    orderBy?: LotTypeOrderByWithAggregationInput | LotTypeOrderByWithAggregationInput[]
    by: LotTypeScalarFieldEnum[] | LotTypeScalarFieldEnum
    having?: LotTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotTypeCountAggregateInputType | true
    _avg?: LotTypeAvgAggregateInputType
    _sum?: LotTypeSumAggregateInputType
    _min?: LotTypeMinAggregateInputType
    _max?: LotTypeMaxAggregateInputType
  }

  export type LotTypeGroupByOutputType = {
    id: number
    name: string
    pricePerSqm: Decimal
    _count: LotTypeCountAggregateOutputType | null
    _avg: LotTypeAvgAggregateOutputType | null
    _sum: LotTypeSumAggregateOutputType | null
    _min: LotTypeMinAggregateOutputType | null
    _max: LotTypeMaxAggregateOutputType | null
  }

  type GetLotTypeGroupByPayload<T extends LotTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotTypeGroupByOutputType[P]>
            : GetScalarType<T[P], LotTypeGroupByOutputType[P]>
        }
      >
    >


  export type LotTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pricePerSqm?: boolean
    lots?: boolean | LotType$lotsArgs<ExtArgs>
    _count?: boolean | LotTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lotType"]>

  export type LotTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pricePerSqm?: boolean
  }, ExtArgs["result"]["lotType"]>

  export type LotTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pricePerSqm?: boolean
  }, ExtArgs["result"]["lotType"]>

  export type LotTypeSelectScalar = {
    id?: boolean
    name?: boolean
    pricePerSqm?: boolean
  }

  export type LotTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "pricePerSqm", ExtArgs["result"]["lotType"]>
  export type LotTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lots?: boolean | LotType$lotsArgs<ExtArgs>
    _count?: boolean | LotTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LotTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LotTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LotTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LotType"
    objects: {
      lots: Prisma.$LotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      pricePerSqm: Prisma.Decimal
    }, ExtArgs["result"]["lotType"]>
    composites: {}
  }

  type LotTypeGetPayload<S extends boolean | null | undefined | LotTypeDefaultArgs> = $Result.GetResult<Prisma.$LotTypePayload, S>

  type LotTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LotTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotTypeCountAggregateInputType | true
    }

  export interface LotTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LotType'], meta: { name: 'LotType' } }
    /**
     * Find zero or one LotType that matches the filter.
     * @param {LotTypeFindUniqueArgs} args - Arguments to find a LotType
     * @example
     * // Get one LotType
     * const lotType = await prisma.lotType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LotTypeFindUniqueArgs>(args: SelectSubset<T, LotTypeFindUniqueArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LotType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LotTypeFindUniqueOrThrowArgs} args - Arguments to find a LotType
     * @example
     * // Get one LotType
     * const lotType = await prisma.lotType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LotTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, LotTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LotType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotTypeFindFirstArgs} args - Arguments to find a LotType
     * @example
     * // Get one LotType
     * const lotType = await prisma.lotType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LotTypeFindFirstArgs>(args?: SelectSubset<T, LotTypeFindFirstArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LotType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotTypeFindFirstOrThrowArgs} args - Arguments to find a LotType
     * @example
     * // Get one LotType
     * const lotType = await prisma.lotType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LotTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, LotTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LotTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LotTypes
     * const lotTypes = await prisma.lotType.findMany()
     * 
     * // Get first 10 LotTypes
     * const lotTypes = await prisma.lotType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotTypeWithIdOnly = await prisma.lotType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LotTypeFindManyArgs>(args?: SelectSubset<T, LotTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LotType.
     * @param {LotTypeCreateArgs} args - Arguments to create a LotType.
     * @example
     * // Create one LotType
     * const LotType = await prisma.lotType.create({
     *   data: {
     *     // ... data to create a LotType
     *   }
     * })
     * 
     */
    create<T extends LotTypeCreateArgs>(args: SelectSubset<T, LotTypeCreateArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LotTypes.
     * @param {LotTypeCreateManyArgs} args - Arguments to create many LotTypes.
     * @example
     * // Create many LotTypes
     * const lotType = await prisma.lotType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LotTypeCreateManyArgs>(args?: SelectSubset<T, LotTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LotTypes and returns the data saved in the database.
     * @param {LotTypeCreateManyAndReturnArgs} args - Arguments to create many LotTypes.
     * @example
     * // Create many LotTypes
     * const lotType = await prisma.lotType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LotTypes and only return the `id`
     * const lotTypeWithIdOnly = await prisma.lotType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LotTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, LotTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LotType.
     * @param {LotTypeDeleteArgs} args - Arguments to delete one LotType.
     * @example
     * // Delete one LotType
     * const LotType = await prisma.lotType.delete({
     *   where: {
     *     // ... filter to delete one LotType
     *   }
     * })
     * 
     */
    delete<T extends LotTypeDeleteArgs>(args: SelectSubset<T, LotTypeDeleteArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LotType.
     * @param {LotTypeUpdateArgs} args - Arguments to update one LotType.
     * @example
     * // Update one LotType
     * const lotType = await prisma.lotType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LotTypeUpdateArgs>(args: SelectSubset<T, LotTypeUpdateArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LotTypes.
     * @param {LotTypeDeleteManyArgs} args - Arguments to filter LotTypes to delete.
     * @example
     * // Delete a few LotTypes
     * const { count } = await prisma.lotType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LotTypeDeleteManyArgs>(args?: SelectSubset<T, LotTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LotTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LotTypes
     * const lotType = await prisma.lotType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LotTypeUpdateManyArgs>(args: SelectSubset<T, LotTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LotTypes and returns the data updated in the database.
     * @param {LotTypeUpdateManyAndReturnArgs} args - Arguments to update many LotTypes.
     * @example
     * // Update many LotTypes
     * const lotType = await prisma.lotType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LotTypes and only return the `id`
     * const lotTypeWithIdOnly = await prisma.lotType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LotTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, LotTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LotType.
     * @param {LotTypeUpsertArgs} args - Arguments to update or create a LotType.
     * @example
     * // Update or create a LotType
     * const lotType = await prisma.lotType.upsert({
     *   create: {
     *     // ... data to create a LotType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LotType we want to update
     *   }
     * })
     */
    upsert<T extends LotTypeUpsertArgs>(args: SelectSubset<T, LotTypeUpsertArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LotTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotTypeCountArgs} args - Arguments to filter LotTypes to count.
     * @example
     * // Count the number of LotTypes
     * const count = await prisma.lotType.count({
     *   where: {
     *     // ... the filter for the LotTypes we want to count
     *   }
     * })
    **/
    count<T extends LotTypeCountArgs>(
      args?: Subset<T, LotTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LotType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LotTypeAggregateArgs>(args: Subset<T, LotTypeAggregateArgs>): Prisma.PrismaPromise<GetLotTypeAggregateType<T>>

    /**
     * Group by LotType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LotTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotTypeGroupByArgs['orderBy'] }
        : { orderBy?: LotTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LotTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LotType model
   */
  readonly fields: LotTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LotType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LotTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lots<T extends LotType$lotsArgs<ExtArgs> = {}>(args?: Subset<T, LotType$lotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LotType model
   */
  interface LotTypeFieldRefs {
    readonly id: FieldRef<"LotType", 'Int'>
    readonly name: FieldRef<"LotType", 'String'>
    readonly pricePerSqm: FieldRef<"LotType", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * LotType findUnique
   */
  export type LotTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * Filter, which LotType to fetch.
     */
    where: LotTypeWhereUniqueInput
  }

  /**
   * LotType findUniqueOrThrow
   */
  export type LotTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * Filter, which LotType to fetch.
     */
    where: LotTypeWhereUniqueInput
  }

  /**
   * LotType findFirst
   */
  export type LotTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * Filter, which LotType to fetch.
     */
    where?: LotTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotTypes to fetch.
     */
    orderBy?: LotTypeOrderByWithRelationInput | LotTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LotTypes.
     */
    cursor?: LotTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LotTypes.
     */
    distinct?: LotTypeScalarFieldEnum | LotTypeScalarFieldEnum[]
  }

  /**
   * LotType findFirstOrThrow
   */
  export type LotTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * Filter, which LotType to fetch.
     */
    where?: LotTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotTypes to fetch.
     */
    orderBy?: LotTypeOrderByWithRelationInput | LotTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LotTypes.
     */
    cursor?: LotTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LotTypes.
     */
    distinct?: LotTypeScalarFieldEnum | LotTypeScalarFieldEnum[]
  }

  /**
   * LotType findMany
   */
  export type LotTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * Filter, which LotTypes to fetch.
     */
    where?: LotTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotTypes to fetch.
     */
    orderBy?: LotTypeOrderByWithRelationInput | LotTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LotTypes.
     */
    cursor?: LotTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LotTypes.
     */
    distinct?: LotTypeScalarFieldEnum | LotTypeScalarFieldEnum[]
  }

  /**
   * LotType create
   */
  export type LotTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a LotType.
     */
    data: XOR<LotTypeCreateInput, LotTypeUncheckedCreateInput>
  }

  /**
   * LotType createMany
   */
  export type LotTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LotTypes.
     */
    data: LotTypeCreateManyInput | LotTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LotType createManyAndReturn
   */
  export type LotTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * The data used to create many LotTypes.
     */
    data: LotTypeCreateManyInput | LotTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LotType update
   */
  export type LotTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a LotType.
     */
    data: XOR<LotTypeUpdateInput, LotTypeUncheckedUpdateInput>
    /**
     * Choose, which LotType to update.
     */
    where: LotTypeWhereUniqueInput
  }

  /**
   * LotType updateMany
   */
  export type LotTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LotTypes.
     */
    data: XOR<LotTypeUpdateManyMutationInput, LotTypeUncheckedUpdateManyInput>
    /**
     * Filter which LotTypes to update
     */
    where?: LotTypeWhereInput
    /**
     * Limit how many LotTypes to update.
     */
    limit?: number
  }

  /**
   * LotType updateManyAndReturn
   */
  export type LotTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * The data used to update LotTypes.
     */
    data: XOR<LotTypeUpdateManyMutationInput, LotTypeUncheckedUpdateManyInput>
    /**
     * Filter which LotTypes to update
     */
    where?: LotTypeWhereInput
    /**
     * Limit how many LotTypes to update.
     */
    limit?: number
  }

  /**
   * LotType upsert
   */
  export type LotTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the LotType to update in case it exists.
     */
    where: LotTypeWhereUniqueInput
    /**
     * In case the LotType found by the `where` argument doesn't exist, create a new LotType with this data.
     */
    create: XOR<LotTypeCreateInput, LotTypeUncheckedCreateInput>
    /**
     * In case the LotType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotTypeUpdateInput, LotTypeUncheckedUpdateInput>
  }

  /**
   * LotType delete
   */
  export type LotTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
    /**
     * Filter which LotType to delete.
     */
    where: LotTypeWhereUniqueInput
  }

  /**
   * LotType deleteMany
   */
  export type LotTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LotTypes to delete
     */
    where?: LotTypeWhereInput
    /**
     * Limit how many LotTypes to delete.
     */
    limit?: number
  }

  /**
   * LotType.lots
   */
  export type LotType$lotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    where?: LotWhereInput
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    cursor?: LotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * LotType without action
   */
  export type LotTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotType
     */
    select?: LotTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotType
     */
    omit?: LotTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotTypeInclude<ExtArgs> | null
  }


  /**
   * Model Lot
   */

  export type AggregateLot = {
    _count: LotCountAggregateOutputType | null
    _avg: LotAvgAggregateOutputType | null
    _sum: LotSumAggregateOutputType | null
    _min: LotMinAggregateOutputType | null
    _max: LotMaxAggregateOutputType | null
  }

  export type LotAvgAggregateOutputType = {
    blockId: number | null
    lotNo: number | null
    lotTypeId: number | null
    sqm: Decimal | null
  }

  export type LotSumAggregateOutputType = {
    blockId: number | null
    lotNo: number | null
    lotTypeId: number | null
    sqm: Decimal | null
  }

  export type LotMinAggregateOutputType = {
    id: string | null
    blockId: number | null
    lotNo: number | null
    lotTypeId: number | null
    sqm: Decimal | null
    status: $Enums.LotStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LotMaxAggregateOutputType = {
    id: string | null
    blockId: number | null
    lotNo: number | null
    lotTypeId: number | null
    sqm: Decimal | null
    status: $Enums.LotStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LotCountAggregateOutputType = {
    id: number
    blockId: number
    lotNo: number
    lotTypeId: number
    sqm: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LotAvgAggregateInputType = {
    blockId?: true
    lotNo?: true
    lotTypeId?: true
    sqm?: true
  }

  export type LotSumAggregateInputType = {
    blockId?: true
    lotNo?: true
    lotTypeId?: true
    sqm?: true
  }

  export type LotMinAggregateInputType = {
    id?: true
    blockId?: true
    lotNo?: true
    lotTypeId?: true
    sqm?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LotMaxAggregateInputType = {
    id?: true
    blockId?: true
    lotNo?: true
    lotTypeId?: true
    sqm?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LotCountAggregateInputType = {
    id?: true
    blockId?: true
    lotNo?: true
    lotTypeId?: true
    sqm?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lot to aggregate.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lots
    **/
    _count?: true | LotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotMaxAggregateInputType
  }

  export type GetLotAggregateType<T extends LotAggregateArgs> = {
        [P in keyof T & keyof AggregateLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLot[P]>
      : GetScalarType<T[P], AggregateLot[P]>
  }




  export type LotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotWhereInput
    orderBy?: LotOrderByWithAggregationInput | LotOrderByWithAggregationInput[]
    by: LotScalarFieldEnum[] | LotScalarFieldEnum
    having?: LotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotCountAggregateInputType | true
    _avg?: LotAvgAggregateInputType
    _sum?: LotSumAggregateInputType
    _min?: LotMinAggregateInputType
    _max?: LotMaxAggregateInputType
  }

  export type LotGroupByOutputType = {
    id: string
    blockId: number
    lotNo: number
    lotTypeId: number
    sqm: Decimal
    status: $Enums.LotStatus
    createdAt: Date
    updatedAt: Date
    _count: LotCountAggregateOutputType | null
    _avg: LotAvgAggregateOutputType | null
    _sum: LotSumAggregateOutputType | null
    _min: LotMinAggregateOutputType | null
    _max: LotMaxAggregateOutputType | null
  }

  type GetLotGroupByPayload<T extends LotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotGroupByOutputType[P]>
            : GetScalarType<T[P], LotGroupByOutputType[P]>
        }
      >
    >


  export type LotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockId?: boolean
    lotNo?: boolean
    lotTypeId?: boolean
    sqm?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    block?: boolean | BlockDefaultArgs<ExtArgs>
    lotType?: boolean | LotTypeDefaultArgs<ExtArgs>
    contract?: boolean | Lot$contractArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockId?: boolean
    lotNo?: boolean
    lotTypeId?: boolean
    sqm?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    block?: boolean | BlockDefaultArgs<ExtArgs>
    lotType?: boolean | LotTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockId?: boolean
    lotNo?: boolean
    lotTypeId?: boolean
    sqm?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    block?: boolean | BlockDefaultArgs<ExtArgs>
    lotType?: boolean | LotTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lot"]>

  export type LotSelectScalar = {
    id?: boolean
    blockId?: boolean
    lotNo?: boolean
    lotTypeId?: boolean
    sqm?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockId" | "lotNo" | "lotTypeId" | "sqm" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["lot"]>
  export type LotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlockDefaultArgs<ExtArgs>
    lotType?: boolean | LotTypeDefaultArgs<ExtArgs>
    contract?: boolean | Lot$contractArgs<ExtArgs>
  }
  export type LotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlockDefaultArgs<ExtArgs>
    lotType?: boolean | LotTypeDefaultArgs<ExtArgs>
  }
  export type LotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlockDefaultArgs<ExtArgs>
    lotType?: boolean | LotTypeDefaultArgs<ExtArgs>
  }

  export type $LotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lot"
    objects: {
      block: Prisma.$BlockPayload<ExtArgs>
      lotType: Prisma.$LotTypePayload<ExtArgs>
      contract: Prisma.$ContractPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blockId: number
      lotNo: number
      lotTypeId: number
      sqm: Prisma.Decimal
      status: $Enums.LotStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lot"]>
    composites: {}
  }

  type LotGetPayload<S extends boolean | null | undefined | LotDefaultArgs> = $Result.GetResult<Prisma.$LotPayload, S>

  type LotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotCountAggregateInputType | true
    }

  export interface LotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lot'], meta: { name: 'Lot' } }
    /**
     * Find zero or one Lot that matches the filter.
     * @param {LotFindUniqueArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LotFindUniqueArgs>(args: SelectSubset<T, LotFindUniqueArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LotFindUniqueOrThrowArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LotFindUniqueOrThrowArgs>(args: SelectSubset<T, LotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindFirstArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LotFindFirstArgs>(args?: SelectSubset<T, LotFindFirstArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindFirstOrThrowArgs} args - Arguments to find a Lot
     * @example
     * // Get one Lot
     * const lot = await prisma.lot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LotFindFirstOrThrowArgs>(args?: SelectSubset<T, LotFindFirstOrThrowArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lots
     * const lots = await prisma.lot.findMany()
     * 
     * // Get first 10 Lots
     * const lots = await prisma.lot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotWithIdOnly = await prisma.lot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LotFindManyArgs>(args?: SelectSubset<T, LotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lot.
     * @param {LotCreateArgs} args - Arguments to create a Lot.
     * @example
     * // Create one Lot
     * const Lot = await prisma.lot.create({
     *   data: {
     *     // ... data to create a Lot
     *   }
     * })
     * 
     */
    create<T extends LotCreateArgs>(args: SelectSubset<T, LotCreateArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lots.
     * @param {LotCreateManyArgs} args - Arguments to create many Lots.
     * @example
     * // Create many Lots
     * const lot = await prisma.lot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LotCreateManyArgs>(args?: SelectSubset<T, LotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lots and returns the data saved in the database.
     * @param {LotCreateManyAndReturnArgs} args - Arguments to create many Lots.
     * @example
     * // Create many Lots
     * const lot = await prisma.lot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lots and only return the `id`
     * const lotWithIdOnly = await prisma.lot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LotCreateManyAndReturnArgs>(args?: SelectSubset<T, LotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lot.
     * @param {LotDeleteArgs} args - Arguments to delete one Lot.
     * @example
     * // Delete one Lot
     * const Lot = await prisma.lot.delete({
     *   where: {
     *     // ... filter to delete one Lot
     *   }
     * })
     * 
     */
    delete<T extends LotDeleteArgs>(args: SelectSubset<T, LotDeleteArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lot.
     * @param {LotUpdateArgs} args - Arguments to update one Lot.
     * @example
     * // Update one Lot
     * const lot = await prisma.lot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LotUpdateArgs>(args: SelectSubset<T, LotUpdateArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lots.
     * @param {LotDeleteManyArgs} args - Arguments to filter Lots to delete.
     * @example
     * // Delete a few Lots
     * const { count } = await prisma.lot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LotDeleteManyArgs>(args?: SelectSubset<T, LotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lots
     * const lot = await prisma.lot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LotUpdateManyArgs>(args: SelectSubset<T, LotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lots and returns the data updated in the database.
     * @param {LotUpdateManyAndReturnArgs} args - Arguments to update many Lots.
     * @example
     * // Update many Lots
     * const lot = await prisma.lot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lots and only return the `id`
     * const lotWithIdOnly = await prisma.lot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LotUpdateManyAndReturnArgs>(args: SelectSubset<T, LotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lot.
     * @param {LotUpsertArgs} args - Arguments to update or create a Lot.
     * @example
     * // Update or create a Lot
     * const lot = await prisma.lot.upsert({
     *   create: {
     *     // ... data to create a Lot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lot we want to update
     *   }
     * })
     */
    upsert<T extends LotUpsertArgs>(args: SelectSubset<T, LotUpsertArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotCountArgs} args - Arguments to filter Lots to count.
     * @example
     * // Count the number of Lots
     * const count = await prisma.lot.count({
     *   where: {
     *     // ... the filter for the Lots we want to count
     *   }
     * })
    **/
    count<T extends LotCountArgs>(
      args?: Subset<T, LotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LotAggregateArgs>(args: Subset<T, LotAggregateArgs>): Prisma.PrismaPromise<GetLotAggregateType<T>>

    /**
     * Group by Lot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotGroupByArgs['orderBy'] }
        : { orderBy?: LotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lot model
   */
  readonly fields: LotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    block<T extends BlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlockDefaultArgs<ExtArgs>>): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lotType<T extends LotTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotTypeDefaultArgs<ExtArgs>>): Prisma__LotTypeClient<$Result.GetResult<Prisma.$LotTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contract<T extends Lot$contractArgs<ExtArgs> = {}>(args?: Subset<T, Lot$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lot model
   */
  interface LotFieldRefs {
    readonly id: FieldRef<"Lot", 'String'>
    readonly blockId: FieldRef<"Lot", 'Int'>
    readonly lotNo: FieldRef<"Lot", 'Int'>
    readonly lotTypeId: FieldRef<"Lot", 'Int'>
    readonly sqm: FieldRef<"Lot", 'Decimal'>
    readonly status: FieldRef<"Lot", 'LotStatus'>
    readonly createdAt: FieldRef<"Lot", 'DateTime'>
    readonly updatedAt: FieldRef<"Lot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lot findUnique
   */
  export type LotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot findUniqueOrThrow
   */
  export type LotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot findFirst
   */
  export type LotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot findFirstOrThrow
   */
  export type LotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lot to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot findMany
   */
  export type LotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter, which Lots to fetch.
     */
    where?: LotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lots to fetch.
     */
    orderBy?: LotOrderByWithRelationInput | LotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lots.
     */
    cursor?: LotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lots.
     */
    distinct?: LotScalarFieldEnum | LotScalarFieldEnum[]
  }

  /**
   * Lot create
   */
  export type LotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The data needed to create a Lot.
     */
    data: XOR<LotCreateInput, LotUncheckedCreateInput>
  }

  /**
   * Lot createMany
   */
  export type LotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lots.
     */
    data: LotCreateManyInput | LotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lot createManyAndReturn
   */
  export type LotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * The data used to create many Lots.
     */
    data: LotCreateManyInput | LotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lot update
   */
  export type LotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The data needed to update a Lot.
     */
    data: XOR<LotUpdateInput, LotUncheckedUpdateInput>
    /**
     * Choose, which Lot to update.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot updateMany
   */
  export type LotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lots.
     */
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyInput>
    /**
     * Filter which Lots to update
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to update.
     */
    limit?: number
  }

  /**
   * Lot updateManyAndReturn
   */
  export type LotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * The data used to update Lots.
     */
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyInput>
    /**
     * Filter which Lots to update
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lot upsert
   */
  export type LotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * The filter to search for the Lot to update in case it exists.
     */
    where: LotWhereUniqueInput
    /**
     * In case the Lot found by the `where` argument doesn't exist, create a new Lot with this data.
     */
    create: XOR<LotCreateInput, LotUncheckedCreateInput>
    /**
     * In case the Lot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotUpdateInput, LotUncheckedUpdateInput>
  }

  /**
   * Lot delete
   */
  export type LotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
    /**
     * Filter which Lot to delete.
     */
    where: LotWhereUniqueInput
  }

  /**
   * Lot deleteMany
   */
  export type LotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lots to delete
     */
    where?: LotWhereInput
    /**
     * Limit how many Lots to delete.
     */
    limit?: number
  }

  /**
   * Lot.contract
   */
  export type Lot$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * Lot without action
   */
  export type LotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lot
     */
    select?: LotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lot
     */
    omit?: LotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotInclude<ExtArgs> | null
  }


  /**
   * Model Homeowner
   */

  export type AggregateHomeowner = {
    _count: HomeownerCountAggregateOutputType | null
    _min: HomeownerMinAggregateOutputType | null
    _max: HomeownerMaxAggregateOutputType | null
  }

  export type HomeownerMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeownerMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeownerCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomeownerMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeownerMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeownerCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomeownerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homeowner to aggregate.
     */
    where?: HomeownerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homeowners to fetch.
     */
    orderBy?: HomeownerOrderByWithRelationInput | HomeownerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeownerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homeowners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homeowners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Homeowners
    **/
    _count?: true | HomeownerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeownerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeownerMaxAggregateInputType
  }

  export type GetHomeownerAggregateType<T extends HomeownerAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeowner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeowner[P]>
      : GetScalarType<T[P], AggregateHomeowner[P]>
  }




  export type HomeownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeownerWhereInput
    orderBy?: HomeownerOrderByWithAggregationInput | HomeownerOrderByWithAggregationInput[]
    by: HomeownerScalarFieldEnum[] | HomeownerScalarFieldEnum
    having?: HomeownerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeownerCountAggregateInputType | true
    _min?: HomeownerMinAggregateInputType
    _max?: HomeownerMaxAggregateInputType
  }

  export type HomeownerGroupByOutputType = {
    id: string
    fullName: string
    phone: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: HomeownerCountAggregateOutputType | null
    _min: HomeownerMinAggregateOutputType | null
    _max: HomeownerMaxAggregateOutputType | null
  }

  type GetHomeownerGroupByPayload<T extends HomeownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeownerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeownerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeownerGroupByOutputType[P]>
            : GetScalarType<T[P], HomeownerGroupByOutputType[P]>
        }
      >
    >


  export type HomeownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contracts?: boolean | Homeowner$contractsArgs<ExtArgs>
    _count?: boolean | HomeownerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["homeowner"]>

  export type HomeownerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeowner"]>

  export type HomeownerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeowner"]>

  export type HomeownerSelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomeownerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["homeowner"]>
  export type HomeownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | Homeowner$contractsArgs<ExtArgs>
    _count?: boolean | HomeownerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HomeownerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HomeownerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HomeownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Homeowner"
    objects: {
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      phone: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homeowner"]>
    composites: {}
  }

  type HomeownerGetPayload<S extends boolean | null | undefined | HomeownerDefaultArgs> = $Result.GetResult<Prisma.$HomeownerPayload, S>

  type HomeownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeownerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeownerCountAggregateInputType | true
    }

  export interface HomeownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Homeowner'], meta: { name: 'Homeowner' } }
    /**
     * Find zero or one Homeowner that matches the filter.
     * @param {HomeownerFindUniqueArgs} args - Arguments to find a Homeowner
     * @example
     * // Get one Homeowner
     * const homeowner = await prisma.homeowner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeownerFindUniqueArgs>(args: SelectSubset<T, HomeownerFindUniqueArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Homeowner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeownerFindUniqueOrThrowArgs} args - Arguments to find a Homeowner
     * @example
     * // Get one Homeowner
     * const homeowner = await prisma.homeowner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeownerFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeownerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homeowner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeownerFindFirstArgs} args - Arguments to find a Homeowner
     * @example
     * // Get one Homeowner
     * const homeowner = await prisma.homeowner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeownerFindFirstArgs>(args?: SelectSubset<T, HomeownerFindFirstArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homeowner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeownerFindFirstOrThrowArgs} args - Arguments to find a Homeowner
     * @example
     * // Get one Homeowner
     * const homeowner = await prisma.homeowner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeownerFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeownerFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Homeowners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeownerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homeowners
     * const homeowners = await prisma.homeowner.findMany()
     * 
     * // Get first 10 Homeowners
     * const homeowners = await prisma.homeowner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeownerWithIdOnly = await prisma.homeowner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeownerFindManyArgs>(args?: SelectSubset<T, HomeownerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Homeowner.
     * @param {HomeownerCreateArgs} args - Arguments to create a Homeowner.
     * @example
     * // Create one Homeowner
     * const Homeowner = await prisma.homeowner.create({
     *   data: {
     *     // ... data to create a Homeowner
     *   }
     * })
     * 
     */
    create<T extends HomeownerCreateArgs>(args: SelectSubset<T, HomeownerCreateArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Homeowners.
     * @param {HomeownerCreateManyArgs} args - Arguments to create many Homeowners.
     * @example
     * // Create many Homeowners
     * const homeowner = await prisma.homeowner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeownerCreateManyArgs>(args?: SelectSubset<T, HomeownerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Homeowners and returns the data saved in the database.
     * @param {HomeownerCreateManyAndReturnArgs} args - Arguments to create many Homeowners.
     * @example
     * // Create many Homeowners
     * const homeowner = await prisma.homeowner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Homeowners and only return the `id`
     * const homeownerWithIdOnly = await prisma.homeowner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeownerCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeownerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Homeowner.
     * @param {HomeownerDeleteArgs} args - Arguments to delete one Homeowner.
     * @example
     * // Delete one Homeowner
     * const Homeowner = await prisma.homeowner.delete({
     *   where: {
     *     // ... filter to delete one Homeowner
     *   }
     * })
     * 
     */
    delete<T extends HomeownerDeleteArgs>(args: SelectSubset<T, HomeownerDeleteArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Homeowner.
     * @param {HomeownerUpdateArgs} args - Arguments to update one Homeowner.
     * @example
     * // Update one Homeowner
     * const homeowner = await prisma.homeowner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeownerUpdateArgs>(args: SelectSubset<T, HomeownerUpdateArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Homeowners.
     * @param {HomeownerDeleteManyArgs} args - Arguments to filter Homeowners to delete.
     * @example
     * // Delete a few Homeowners
     * const { count } = await prisma.homeowner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeownerDeleteManyArgs>(args?: SelectSubset<T, HomeownerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homeowners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homeowners
     * const homeowner = await prisma.homeowner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeownerUpdateManyArgs>(args: SelectSubset<T, HomeownerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homeowners and returns the data updated in the database.
     * @param {HomeownerUpdateManyAndReturnArgs} args - Arguments to update many Homeowners.
     * @example
     * // Update many Homeowners
     * const homeowner = await prisma.homeowner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Homeowners and only return the `id`
     * const homeownerWithIdOnly = await prisma.homeowner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HomeownerUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeownerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Homeowner.
     * @param {HomeownerUpsertArgs} args - Arguments to update or create a Homeowner.
     * @example
     * // Update or create a Homeowner
     * const homeowner = await prisma.homeowner.upsert({
     *   create: {
     *     // ... data to create a Homeowner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Homeowner we want to update
     *   }
     * })
     */
    upsert<T extends HomeownerUpsertArgs>(args: SelectSubset<T, HomeownerUpsertArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Homeowners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeownerCountArgs} args - Arguments to filter Homeowners to count.
     * @example
     * // Count the number of Homeowners
     * const count = await prisma.homeowner.count({
     *   where: {
     *     // ... the filter for the Homeowners we want to count
     *   }
     * })
    **/
    count<T extends HomeownerCountArgs>(
      args?: Subset<T, HomeownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeownerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Homeowner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeownerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeownerAggregateArgs>(args: Subset<T, HomeownerAggregateArgs>): Prisma.PrismaPromise<GetHomeownerAggregateType<T>>

    /**
     * Group by Homeowner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeownerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeownerGroupByArgs['orderBy'] }
        : { orderBy?: HomeownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeownerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeownerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Homeowner model
   */
  readonly fields: HomeownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Homeowner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeownerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contracts<T extends Homeowner$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Homeowner$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Homeowner model
   */
  interface HomeownerFieldRefs {
    readonly id: FieldRef<"Homeowner", 'String'>
    readonly fullName: FieldRef<"Homeowner", 'String'>
    readonly phone: FieldRef<"Homeowner", 'String'>
    readonly email: FieldRef<"Homeowner", 'String'>
    readonly createdAt: FieldRef<"Homeowner", 'DateTime'>
    readonly updatedAt: FieldRef<"Homeowner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Homeowner findUnique
   */
  export type HomeownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * Filter, which Homeowner to fetch.
     */
    where: HomeownerWhereUniqueInput
  }

  /**
   * Homeowner findUniqueOrThrow
   */
  export type HomeownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * Filter, which Homeowner to fetch.
     */
    where: HomeownerWhereUniqueInput
  }

  /**
   * Homeowner findFirst
   */
  export type HomeownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * Filter, which Homeowner to fetch.
     */
    where?: HomeownerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homeowners to fetch.
     */
    orderBy?: HomeownerOrderByWithRelationInput | HomeownerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homeowners.
     */
    cursor?: HomeownerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homeowners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homeowners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homeowners.
     */
    distinct?: HomeownerScalarFieldEnum | HomeownerScalarFieldEnum[]
  }

  /**
   * Homeowner findFirstOrThrow
   */
  export type HomeownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * Filter, which Homeowner to fetch.
     */
    where?: HomeownerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homeowners to fetch.
     */
    orderBy?: HomeownerOrderByWithRelationInput | HomeownerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homeowners.
     */
    cursor?: HomeownerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homeowners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homeowners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homeowners.
     */
    distinct?: HomeownerScalarFieldEnum | HomeownerScalarFieldEnum[]
  }

  /**
   * Homeowner findMany
   */
  export type HomeownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * Filter, which Homeowners to fetch.
     */
    where?: HomeownerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homeowners to fetch.
     */
    orderBy?: HomeownerOrderByWithRelationInput | HomeownerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Homeowners.
     */
    cursor?: HomeownerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homeowners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homeowners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homeowners.
     */
    distinct?: HomeownerScalarFieldEnum | HomeownerScalarFieldEnum[]
  }

  /**
   * Homeowner create
   */
  export type HomeownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * The data needed to create a Homeowner.
     */
    data: XOR<HomeownerCreateInput, HomeownerUncheckedCreateInput>
  }

  /**
   * Homeowner createMany
   */
  export type HomeownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Homeowners.
     */
    data: HomeownerCreateManyInput | HomeownerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Homeowner createManyAndReturn
   */
  export type HomeownerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * The data used to create many Homeowners.
     */
    data: HomeownerCreateManyInput | HomeownerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Homeowner update
   */
  export type HomeownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * The data needed to update a Homeowner.
     */
    data: XOR<HomeownerUpdateInput, HomeownerUncheckedUpdateInput>
    /**
     * Choose, which Homeowner to update.
     */
    where: HomeownerWhereUniqueInput
  }

  /**
   * Homeowner updateMany
   */
  export type HomeownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Homeowners.
     */
    data: XOR<HomeownerUpdateManyMutationInput, HomeownerUncheckedUpdateManyInput>
    /**
     * Filter which Homeowners to update
     */
    where?: HomeownerWhereInput
    /**
     * Limit how many Homeowners to update.
     */
    limit?: number
  }

  /**
   * Homeowner updateManyAndReturn
   */
  export type HomeownerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * The data used to update Homeowners.
     */
    data: XOR<HomeownerUpdateManyMutationInput, HomeownerUncheckedUpdateManyInput>
    /**
     * Filter which Homeowners to update
     */
    where?: HomeownerWhereInput
    /**
     * Limit how many Homeowners to update.
     */
    limit?: number
  }

  /**
   * Homeowner upsert
   */
  export type HomeownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * The filter to search for the Homeowner to update in case it exists.
     */
    where: HomeownerWhereUniqueInput
    /**
     * In case the Homeowner found by the `where` argument doesn't exist, create a new Homeowner with this data.
     */
    create: XOR<HomeownerCreateInput, HomeownerUncheckedCreateInput>
    /**
     * In case the Homeowner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeownerUpdateInput, HomeownerUncheckedUpdateInput>
  }

  /**
   * Homeowner delete
   */
  export type HomeownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
    /**
     * Filter which Homeowner to delete.
     */
    where: HomeownerWhereUniqueInput
  }

  /**
   * Homeowner deleteMany
   */
  export type HomeownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homeowners to delete
     */
    where?: HomeownerWhereInput
    /**
     * Limit how many Homeowners to delete.
     */
    limit?: number
  }

  /**
   * Homeowner.contracts
   */
  export type Homeowner$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Homeowner without action
   */
  export type HomeownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homeowner
     */
    select?: HomeownerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homeowner
     */
    omit?: HomeownerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeownerInclude<ExtArgs> | null
  }


  /**
   * Model PaymentTerm
   */

  export type AggregatePaymentTerm = {
    _count: PaymentTermCountAggregateOutputType | null
    _avg: PaymentTermAvgAggregateOutputType | null
    _sum: PaymentTermSumAggregateOutputType | null
    _min: PaymentTermMinAggregateOutputType | null
    _max: PaymentTermMaxAggregateOutputType | null
  }

  export type PaymentTermAvgAggregateOutputType = {
    termMonths: number | null
    interestRate: Decimal | null
  }

  export type PaymentTermSumAggregateOutputType = {
    termMonths: number | null
    interestRate: Decimal | null
  }

  export type PaymentTermMinAggregateOutputType = {
    termMonths: number | null
    interestRate: Decimal | null
  }

  export type PaymentTermMaxAggregateOutputType = {
    termMonths: number | null
    interestRate: Decimal | null
  }

  export type PaymentTermCountAggregateOutputType = {
    termMonths: number
    interestRate: number
    _all: number
  }


  export type PaymentTermAvgAggregateInputType = {
    termMonths?: true
    interestRate?: true
  }

  export type PaymentTermSumAggregateInputType = {
    termMonths?: true
    interestRate?: true
  }

  export type PaymentTermMinAggregateInputType = {
    termMonths?: true
    interestRate?: true
  }

  export type PaymentTermMaxAggregateInputType = {
    termMonths?: true
    interestRate?: true
  }

  export type PaymentTermCountAggregateInputType = {
    termMonths?: true
    interestRate?: true
    _all?: true
  }

  export type PaymentTermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTerm to aggregate.
     */
    where?: PaymentTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTerms to fetch.
     */
    orderBy?: PaymentTermOrderByWithRelationInput | PaymentTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTerms
    **/
    _count?: true | PaymentTermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTermAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTermSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTermMaxAggregateInputType
  }

  export type GetPaymentTermAggregateType<T extends PaymentTermAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentTerm[P]>
      : GetScalarType<T[P], AggregatePaymentTerm[P]>
  }




  export type PaymentTermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTermWhereInput
    orderBy?: PaymentTermOrderByWithAggregationInput | PaymentTermOrderByWithAggregationInput[]
    by: PaymentTermScalarFieldEnum[] | PaymentTermScalarFieldEnum
    having?: PaymentTermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTermCountAggregateInputType | true
    _avg?: PaymentTermAvgAggregateInputType
    _sum?: PaymentTermSumAggregateInputType
    _min?: PaymentTermMinAggregateInputType
    _max?: PaymentTermMaxAggregateInputType
  }

  export type PaymentTermGroupByOutputType = {
    termMonths: number
    interestRate: Decimal
    _count: PaymentTermCountAggregateOutputType | null
    _avg: PaymentTermAvgAggregateOutputType | null
    _sum: PaymentTermSumAggregateOutputType | null
    _min: PaymentTermMinAggregateOutputType | null
    _max: PaymentTermMaxAggregateOutputType | null
  }

  type GetPaymentTermGroupByPayload<T extends PaymentTermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentTermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTermGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTermGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    termMonths?: boolean
    interestRate?: boolean
    contracts?: boolean | PaymentTerm$contractsArgs<ExtArgs>
    _count?: boolean | PaymentTermCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTerm"]>

  export type PaymentTermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    termMonths?: boolean
    interestRate?: boolean
  }, ExtArgs["result"]["paymentTerm"]>

  export type PaymentTermSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    termMonths?: boolean
    interestRate?: boolean
  }, ExtArgs["result"]["paymentTerm"]>

  export type PaymentTermSelectScalar = {
    termMonths?: boolean
    interestRate?: boolean
  }

  export type PaymentTermOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"termMonths" | "interestRate", ExtArgs["result"]["paymentTerm"]>
  export type PaymentTermInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | PaymentTerm$contractsArgs<ExtArgs>
    _count?: boolean | PaymentTermCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentTermIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaymentTermIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaymentTermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentTerm"
    objects: {
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      termMonths: number
      interestRate: Prisma.Decimal
    }, ExtArgs["result"]["paymentTerm"]>
    composites: {}
  }

  type PaymentTermGetPayload<S extends boolean | null | undefined | PaymentTermDefaultArgs> = $Result.GetResult<Prisma.$PaymentTermPayload, S>

  type PaymentTermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentTermFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentTermCountAggregateInputType | true
    }

  export interface PaymentTermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentTerm'], meta: { name: 'PaymentTerm' } }
    /**
     * Find zero or one PaymentTerm that matches the filter.
     * @param {PaymentTermFindUniqueArgs} args - Arguments to find a PaymentTerm
     * @example
     * // Get one PaymentTerm
     * const paymentTerm = await prisma.paymentTerm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentTermFindUniqueArgs>(args: SelectSubset<T, PaymentTermFindUniqueArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentTerm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentTermFindUniqueOrThrowArgs} args - Arguments to find a PaymentTerm
     * @example
     * // Get one PaymentTerm
     * const paymentTerm = await prisma.paymentTerm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentTermFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentTermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTerm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTermFindFirstArgs} args - Arguments to find a PaymentTerm
     * @example
     * // Get one PaymentTerm
     * const paymentTerm = await prisma.paymentTerm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentTermFindFirstArgs>(args?: SelectSubset<T, PaymentTermFindFirstArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTerm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTermFindFirstOrThrowArgs} args - Arguments to find a PaymentTerm
     * @example
     * // Get one PaymentTerm
     * const paymentTerm = await prisma.paymentTerm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentTermFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentTermFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentTerms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTerms
     * const paymentTerms = await prisma.paymentTerm.findMany()
     * 
     * // Get first 10 PaymentTerms
     * const paymentTerms = await prisma.paymentTerm.findMany({ take: 10 })
     * 
     * // Only select the `termMonths`
     * const paymentTermWithTermMonthsOnly = await prisma.paymentTerm.findMany({ select: { termMonths: true } })
     * 
     */
    findMany<T extends PaymentTermFindManyArgs>(args?: SelectSubset<T, PaymentTermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentTerm.
     * @param {PaymentTermCreateArgs} args - Arguments to create a PaymentTerm.
     * @example
     * // Create one PaymentTerm
     * const PaymentTerm = await prisma.paymentTerm.create({
     *   data: {
     *     // ... data to create a PaymentTerm
     *   }
     * })
     * 
     */
    create<T extends PaymentTermCreateArgs>(args: SelectSubset<T, PaymentTermCreateArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentTerms.
     * @param {PaymentTermCreateManyArgs} args - Arguments to create many PaymentTerms.
     * @example
     * // Create many PaymentTerms
     * const paymentTerm = await prisma.paymentTerm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentTermCreateManyArgs>(args?: SelectSubset<T, PaymentTermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentTerms and returns the data saved in the database.
     * @param {PaymentTermCreateManyAndReturnArgs} args - Arguments to create many PaymentTerms.
     * @example
     * // Create many PaymentTerms
     * const paymentTerm = await prisma.paymentTerm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentTerms and only return the `termMonths`
     * const paymentTermWithTermMonthsOnly = await prisma.paymentTerm.createManyAndReturn({
     *   select: { termMonths: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentTermCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentTermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentTerm.
     * @param {PaymentTermDeleteArgs} args - Arguments to delete one PaymentTerm.
     * @example
     * // Delete one PaymentTerm
     * const PaymentTerm = await prisma.paymentTerm.delete({
     *   where: {
     *     // ... filter to delete one PaymentTerm
     *   }
     * })
     * 
     */
    delete<T extends PaymentTermDeleteArgs>(args: SelectSubset<T, PaymentTermDeleteArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentTerm.
     * @param {PaymentTermUpdateArgs} args - Arguments to update one PaymentTerm.
     * @example
     * // Update one PaymentTerm
     * const paymentTerm = await prisma.paymentTerm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentTermUpdateArgs>(args: SelectSubset<T, PaymentTermUpdateArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentTerms.
     * @param {PaymentTermDeleteManyArgs} args - Arguments to filter PaymentTerms to delete.
     * @example
     * // Delete a few PaymentTerms
     * const { count } = await prisma.paymentTerm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentTermDeleteManyArgs>(args?: SelectSubset<T, PaymentTermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTerms
     * const paymentTerm = await prisma.paymentTerm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentTermUpdateManyArgs>(args: SelectSubset<T, PaymentTermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTerms and returns the data updated in the database.
     * @param {PaymentTermUpdateManyAndReturnArgs} args - Arguments to update many PaymentTerms.
     * @example
     * // Update many PaymentTerms
     * const paymentTerm = await prisma.paymentTerm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentTerms and only return the `termMonths`
     * const paymentTermWithTermMonthsOnly = await prisma.paymentTerm.updateManyAndReturn({
     *   select: { termMonths: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentTermUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentTermUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentTerm.
     * @param {PaymentTermUpsertArgs} args - Arguments to update or create a PaymentTerm.
     * @example
     * // Update or create a PaymentTerm
     * const paymentTerm = await prisma.paymentTerm.upsert({
     *   create: {
     *     // ... data to create a PaymentTerm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentTerm we want to update
     *   }
     * })
     */
    upsert<T extends PaymentTermUpsertArgs>(args: SelectSubset<T, PaymentTermUpsertArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentTerms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTermCountArgs} args - Arguments to filter PaymentTerms to count.
     * @example
     * // Count the number of PaymentTerms
     * const count = await prisma.paymentTerm.count({
     *   where: {
     *     // ... the filter for the PaymentTerms we want to count
     *   }
     * })
    **/
    count<T extends PaymentTermCountArgs>(
      args?: Subset<T, PaymentTermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentTermAggregateArgs>(args: Subset<T, PaymentTermAggregateArgs>): Prisma.PrismaPromise<GetPaymentTermAggregateType<T>>

    /**
     * Group by PaymentTerm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTermGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentTermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTermGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTermGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentTermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentTerm model
   */
  readonly fields: PaymentTermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentTerm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentTermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contracts<T extends PaymentTerm$contractsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentTerm$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentTerm model
   */
  interface PaymentTermFieldRefs {
    readonly termMonths: FieldRef<"PaymentTerm", 'Int'>
    readonly interestRate: FieldRef<"PaymentTerm", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PaymentTerm findUnique
   */
  export type PaymentTermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTerm to fetch.
     */
    where: PaymentTermWhereUniqueInput
  }

  /**
   * PaymentTerm findUniqueOrThrow
   */
  export type PaymentTermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTerm to fetch.
     */
    where: PaymentTermWhereUniqueInput
  }

  /**
   * PaymentTerm findFirst
   */
  export type PaymentTermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTerm to fetch.
     */
    where?: PaymentTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTerms to fetch.
     */
    orderBy?: PaymentTermOrderByWithRelationInput | PaymentTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTerms.
     */
    cursor?: PaymentTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTerms.
     */
    distinct?: PaymentTermScalarFieldEnum | PaymentTermScalarFieldEnum[]
  }

  /**
   * PaymentTerm findFirstOrThrow
   */
  export type PaymentTermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTerm to fetch.
     */
    where?: PaymentTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTerms to fetch.
     */
    orderBy?: PaymentTermOrderByWithRelationInput | PaymentTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTerms.
     */
    cursor?: PaymentTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTerms.
     */
    distinct?: PaymentTermScalarFieldEnum | PaymentTermScalarFieldEnum[]
  }

  /**
   * PaymentTerm findMany
   */
  export type PaymentTermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTerms to fetch.
     */
    where?: PaymentTermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTerms to fetch.
     */
    orderBy?: PaymentTermOrderByWithRelationInput | PaymentTermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTerms.
     */
    cursor?: PaymentTermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTerms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTerms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTerms.
     */
    distinct?: PaymentTermScalarFieldEnum | PaymentTermScalarFieldEnum[]
  }

  /**
   * PaymentTerm create
   */
  export type PaymentTermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentTerm.
     */
    data: XOR<PaymentTermCreateInput, PaymentTermUncheckedCreateInput>
  }

  /**
   * PaymentTerm createMany
   */
  export type PaymentTermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentTerms.
     */
    data: PaymentTermCreateManyInput | PaymentTermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentTerm createManyAndReturn
   */
  export type PaymentTermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentTerms.
     */
    data: PaymentTermCreateManyInput | PaymentTermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentTerm update
   */
  export type PaymentTermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentTerm.
     */
    data: XOR<PaymentTermUpdateInput, PaymentTermUncheckedUpdateInput>
    /**
     * Choose, which PaymentTerm to update.
     */
    where: PaymentTermWhereUniqueInput
  }

  /**
   * PaymentTerm updateMany
   */
  export type PaymentTermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentTerms.
     */
    data: XOR<PaymentTermUpdateManyMutationInput, PaymentTermUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTerms to update
     */
    where?: PaymentTermWhereInput
    /**
     * Limit how many PaymentTerms to update.
     */
    limit?: number
  }

  /**
   * PaymentTerm updateManyAndReturn
   */
  export type PaymentTermUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * The data used to update PaymentTerms.
     */
    data: XOR<PaymentTermUpdateManyMutationInput, PaymentTermUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTerms to update
     */
    where?: PaymentTermWhereInput
    /**
     * Limit how many PaymentTerms to update.
     */
    limit?: number
  }

  /**
   * PaymentTerm upsert
   */
  export type PaymentTermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentTerm to update in case it exists.
     */
    where: PaymentTermWhereUniqueInput
    /**
     * In case the PaymentTerm found by the `where` argument doesn't exist, create a new PaymentTerm with this data.
     */
    create: XOR<PaymentTermCreateInput, PaymentTermUncheckedCreateInput>
    /**
     * In case the PaymentTerm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentTermUpdateInput, PaymentTermUncheckedUpdateInput>
  }

  /**
   * PaymentTerm delete
   */
  export type PaymentTermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
    /**
     * Filter which PaymentTerm to delete.
     */
    where: PaymentTermWhereUniqueInput
  }

  /**
   * PaymentTerm deleteMany
   */
  export type PaymentTermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTerms to delete
     */
    where?: PaymentTermWhereInput
    /**
     * Limit how many PaymentTerms to delete.
     */
    limit?: number
  }

  /**
   * PaymentTerm.contracts
   */
  export type PaymentTerm$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * PaymentTerm without action
   */
  export type PaymentTermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTerm
     */
    select?: PaymentTermSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTerm
     */
    omit?: PaymentTermOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTermInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    termMonths: number | null
    reservationFee: Decimal | null
    origTcp: Decimal | null
    dpAmount: Decimal | null
    dpMonthly: Decimal | null
    balanceAmount: Decimal | null
    monthlyAmort: Decimal | null
    totalTcp: Decimal | null
  }

  export type ContractSumAggregateOutputType = {
    termMonths: number | null
    reservationFee: Decimal | null
    origTcp: Decimal | null
    dpAmount: Decimal | null
    dpMonthly: Decimal | null
    balanceAmount: Decimal | null
    monthlyAmort: Decimal | null
    totalTcp: Decimal | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    lotId: string | null
    homeownerId: string | null
    termMonths: number | null
    reservationFee: Decimal | null
    origTcp: Decimal | null
    dpAmount: Decimal | null
    dpMonthly: Decimal | null
    balanceAmount: Decimal | null
    monthlyAmort: Decimal | null
    totalTcp: Decimal | null
    startDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    lotId: string | null
    homeownerId: string | null
    termMonths: number | null
    reservationFee: Decimal | null
    origTcp: Decimal | null
    dpAmount: Decimal | null
    dpMonthly: Decimal | null
    balanceAmount: Decimal | null
    monthlyAmort: Decimal | null
    totalTcp: Decimal | null
    startDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    lotId: number
    homeownerId: number
    termMonths: number
    reservationFee: number
    origTcp: number
    dpAmount: number
    dpMonthly: number
    balanceAmount: number
    monthlyAmort: number
    totalTcp: number
    startDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    termMonths?: true
    reservationFee?: true
    origTcp?: true
    dpAmount?: true
    dpMonthly?: true
    balanceAmount?: true
    monthlyAmort?: true
    totalTcp?: true
  }

  export type ContractSumAggregateInputType = {
    termMonths?: true
    reservationFee?: true
    origTcp?: true
    dpAmount?: true
    dpMonthly?: true
    balanceAmount?: true
    monthlyAmort?: true
    totalTcp?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    lotId?: true
    homeownerId?: true
    termMonths?: true
    reservationFee?: true
    origTcp?: true
    dpAmount?: true
    dpMonthly?: true
    balanceAmount?: true
    monthlyAmort?: true
    totalTcp?: true
    startDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    lotId?: true
    homeownerId?: true
    termMonths?: true
    reservationFee?: true
    origTcp?: true
    dpAmount?: true
    dpMonthly?: true
    balanceAmount?: true
    monthlyAmort?: true
    totalTcp?: true
    startDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    lotId?: true
    homeownerId?: true
    termMonths?: true
    reservationFee?: true
    origTcp?: true
    dpAmount?: true
    dpMonthly?: true
    balanceAmount?: true
    monthlyAmort?: true
    totalTcp?: true
    startDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    lotId: string
    homeownerId: string
    termMonths: number
    reservationFee: Decimal
    origTcp: Decimal
    dpAmount: Decimal
    dpMonthly: Decimal
    balanceAmount: Decimal
    monthlyAmort: Decimal
    totalTcp: Decimal
    startDate: Date
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lotId?: boolean
    homeownerId?: boolean
    termMonths?: boolean
    reservationFee?: boolean
    origTcp?: boolean
    dpAmount?: boolean
    dpMonthly?: boolean
    balanceAmount?: boolean
    monthlyAmort?: boolean
    totalTcp?: boolean
    startDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    homeowner?: boolean | HomeownerDefaultArgs<ExtArgs>
    term?: boolean | PaymentTermDefaultArgs<ExtArgs>
    payments?: boolean | Contract$paymentsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lotId?: boolean
    homeownerId?: boolean
    termMonths?: boolean
    reservationFee?: boolean
    origTcp?: boolean
    dpAmount?: boolean
    dpMonthly?: boolean
    balanceAmount?: boolean
    monthlyAmort?: boolean
    totalTcp?: boolean
    startDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    homeowner?: boolean | HomeownerDefaultArgs<ExtArgs>
    term?: boolean | PaymentTermDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lotId?: boolean
    homeownerId?: boolean
    termMonths?: boolean
    reservationFee?: boolean
    origTcp?: boolean
    dpAmount?: boolean
    dpMonthly?: boolean
    balanceAmount?: boolean
    monthlyAmort?: boolean
    totalTcp?: boolean
    startDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lot?: boolean | LotDefaultArgs<ExtArgs>
    homeowner?: boolean | HomeownerDefaultArgs<ExtArgs>
    term?: boolean | PaymentTermDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    lotId?: boolean
    homeownerId?: boolean
    termMonths?: boolean
    reservationFee?: boolean
    origTcp?: boolean
    dpAmount?: boolean
    dpMonthly?: boolean
    balanceAmount?: boolean
    monthlyAmort?: boolean
    totalTcp?: boolean
    startDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lotId" | "homeownerId" | "termMonths" | "reservationFee" | "origTcp" | "dpAmount" | "dpMonthly" | "balanceAmount" | "monthlyAmort" | "totalTcp" | "startDate" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    homeowner?: boolean | HomeownerDefaultArgs<ExtArgs>
    term?: boolean | PaymentTermDefaultArgs<ExtArgs>
    payments?: boolean | Contract$paymentsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    homeowner?: boolean | HomeownerDefaultArgs<ExtArgs>
    term?: boolean | PaymentTermDefaultArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lot?: boolean | LotDefaultArgs<ExtArgs>
    homeowner?: boolean | HomeownerDefaultArgs<ExtArgs>
    term?: boolean | PaymentTermDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      lot: Prisma.$LotPayload<ExtArgs>
      homeowner: Prisma.$HomeownerPayload<ExtArgs>
      term: Prisma.$PaymentTermPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lotId: string
      homeownerId: string
      termMonths: number
      reservationFee: Prisma.Decimal
      origTcp: Prisma.Decimal
      dpAmount: Prisma.Decimal
      dpMonthly: Prisma.Decimal
      balanceAmount: Prisma.Decimal
      monthlyAmort: Prisma.Decimal
      totalTcp: Prisma.Decimal
      startDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lot<T extends LotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotDefaultArgs<ExtArgs>>): Prisma__LotClient<$Result.GetResult<Prisma.$LotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    homeowner<T extends HomeownerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HomeownerDefaultArgs<ExtArgs>>): Prisma__HomeownerClient<$Result.GetResult<Prisma.$HomeownerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    term<T extends PaymentTermDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentTermDefaultArgs<ExtArgs>>): Prisma__PaymentTermClient<$Result.GetResult<Prisma.$PaymentTermPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Contract$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly lotId: FieldRef<"Contract", 'String'>
    readonly homeownerId: FieldRef<"Contract", 'String'>
    readonly termMonths: FieldRef<"Contract", 'Int'>
    readonly reservationFee: FieldRef<"Contract", 'Decimal'>
    readonly origTcp: FieldRef<"Contract", 'Decimal'>
    readonly dpAmount: FieldRef<"Contract", 'Decimal'>
    readonly dpMonthly: FieldRef<"Contract", 'Decimal'>
    readonly balanceAmount: FieldRef<"Contract", 'Decimal'>
    readonly monthlyAmort: FieldRef<"Contract", 'Decimal'>
    readonly totalTcp: FieldRef<"Contract", 'Decimal'>
    readonly startDate: FieldRef<"Contract", 'DateTime'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.payments
   */
  export type Contract$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    recordedBy: string | null
    amount: Decimal | null
    paidOn: Date | null
    paymentType: $Enums.PaymentType | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    recordedBy: string | null
    amount: Decimal | null
    paidOn: Date | null
    paymentType: $Enums.PaymentType | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    contractId: number
    recordedBy: number
    amount: number
    paidOn: number
    paymentType: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    contractId?: true
    recordedBy?: true
    amount?: true
    paidOn?: true
    paymentType?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    contractId?: true
    recordedBy?: true
    amount?: true
    paidOn?: true
    paymentType?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    contractId?: true
    recordedBy?: true
    amount?: true
    paidOn?: true
    paymentType?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    contractId: string
    recordedBy: string
    amount: Decimal
    paidOn: Date
    paymentType: $Enums.PaymentType
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    recordedBy?: boolean
    amount?: boolean
    paidOn?: boolean
    paymentType?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    recorder?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    recordedBy?: boolean
    amount?: boolean
    paidOn?: boolean
    paymentType?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    recorder?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    recordedBy?: boolean
    amount?: boolean
    paidOn?: boolean
    paymentType?: boolean
    createdAt?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    recorder?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    contractId?: boolean
    recordedBy?: boolean
    amount?: boolean
    paidOn?: boolean
    paymentType?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "recordedBy" | "amount" | "paidOn" | "paymentType" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    recorder?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    recorder?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
    recorder?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
      recorder: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      recordedBy: string
      amount: Prisma.Decimal
      paidOn: Date
      paymentType: $Enums.PaymentType
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recorder<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly contractId: FieldRef<"Payment", 'String'>
    readonly recordedBy: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paidOn: FieldRef<"Payment", 'DateTime'>
    readonly paymentType: FieldRef<"Payment", 'PaymentType'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    imageUrl: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    imageUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    imageUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    imageUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    name: string | null
    imageUrl: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "name" | "imageUrl" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      name: string | null
      imageUrl: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BlockScalarFieldEnum: {
    id: 'id',
    blockNo: 'blockNo'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const LotTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    pricePerSqm: 'pricePerSqm'
  };

  export type LotTypeScalarFieldEnum = (typeof LotTypeScalarFieldEnum)[keyof typeof LotTypeScalarFieldEnum]


  export const LotScalarFieldEnum: {
    id: 'id',
    blockId: 'blockId',
    lotNo: 'lotNo',
    lotTypeId: 'lotTypeId',
    sqm: 'sqm',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LotScalarFieldEnum = (typeof LotScalarFieldEnum)[keyof typeof LotScalarFieldEnum]


  export const HomeownerScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomeownerScalarFieldEnum = (typeof HomeownerScalarFieldEnum)[keyof typeof HomeownerScalarFieldEnum]


  export const PaymentTermScalarFieldEnum: {
    termMonths: 'termMonths',
    interestRate: 'interestRate'
  };

  export type PaymentTermScalarFieldEnum = (typeof PaymentTermScalarFieldEnum)[keyof typeof PaymentTermScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    lotId: 'lotId',
    homeownerId: 'homeownerId',
    termMonths: 'termMonths',
    reservationFee: 'reservationFee',
    origTcp: 'origTcp',
    dpAmount: 'dpAmount',
    dpMonthly: 'dpMonthly',
    balanceAmount: 'balanceAmount',
    monthlyAmort: 'monthlyAmort',
    totalTcp: 'totalTcp',
    startDate: 'startDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    recordedBy: 'recordedBy',
    amount: 'amount',
    paidOn: 'paidOn',
    paymentType: 'paymentType',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'LotStatus'
   */
  export type EnumLotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LotStatus'>
    


  /**
   * Reference to a field of type 'LotStatus[]'
   */
  export type ListEnumLotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LotStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: IntFilter<"Block"> | number
    blockNo?: IntFilter<"Block"> | number
    lots?: LotListRelationFilter
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    blockNo?: SortOrder
    lots?: LotOrderByRelationAggregateInput
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    blockNo?: number
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    lots?: LotListRelationFilter
  }, "id" | "blockNo">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    blockNo?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _avg?: BlockAvgOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
    _sum?: BlockSumOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Block"> | number
    blockNo?: IntWithAggregatesFilter<"Block"> | number
  }

  export type LotTypeWhereInput = {
    AND?: LotTypeWhereInput | LotTypeWhereInput[]
    OR?: LotTypeWhereInput[]
    NOT?: LotTypeWhereInput | LotTypeWhereInput[]
    id?: IntFilter<"LotType"> | number
    name?: StringFilter<"LotType"> | string
    pricePerSqm?: DecimalFilter<"LotType"> | Decimal | DecimalJsLike | number | string
    lots?: LotListRelationFilter
  }

  export type LotTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerSqm?: SortOrder
    lots?: LotOrderByRelationAggregateInput
  }

  export type LotTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LotTypeWhereInput | LotTypeWhereInput[]
    OR?: LotTypeWhereInput[]
    NOT?: LotTypeWhereInput | LotTypeWhereInput[]
    pricePerSqm?: DecimalFilter<"LotType"> | Decimal | DecimalJsLike | number | string
    lots?: LotListRelationFilter
  }, "id" | "name">

  export type LotTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerSqm?: SortOrder
    _count?: LotTypeCountOrderByAggregateInput
    _avg?: LotTypeAvgOrderByAggregateInput
    _max?: LotTypeMaxOrderByAggregateInput
    _min?: LotTypeMinOrderByAggregateInput
    _sum?: LotTypeSumOrderByAggregateInput
  }

  export type LotTypeScalarWhereWithAggregatesInput = {
    AND?: LotTypeScalarWhereWithAggregatesInput | LotTypeScalarWhereWithAggregatesInput[]
    OR?: LotTypeScalarWhereWithAggregatesInput[]
    NOT?: LotTypeScalarWhereWithAggregatesInput | LotTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LotType"> | number
    name?: StringWithAggregatesFilter<"LotType"> | string
    pricePerSqm?: DecimalWithAggregatesFilter<"LotType"> | Decimal | DecimalJsLike | number | string
  }

  export type LotWhereInput = {
    AND?: LotWhereInput | LotWhereInput[]
    OR?: LotWhereInput[]
    NOT?: LotWhereInput | LotWhereInput[]
    id?: UuidFilter<"Lot"> | string
    blockId?: IntFilter<"Lot"> | number
    lotNo?: IntFilter<"Lot"> | number
    lotTypeId?: IntFilter<"Lot"> | number
    sqm?: DecimalFilter<"Lot"> | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFilter<"Lot"> | $Enums.LotStatus
    createdAt?: DateTimeFilter<"Lot"> | Date | string
    updatedAt?: DateTimeFilter<"Lot"> | Date | string
    block?: XOR<BlockScalarRelationFilter, BlockWhereInput>
    lotType?: XOR<LotTypeScalarRelationFilter, LotTypeWhereInput>
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
  }

  export type LotOrderByWithRelationInput = {
    id?: SortOrder
    blockId?: SortOrder
    lotNo?: SortOrder
    lotTypeId?: SortOrder
    sqm?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    block?: BlockOrderByWithRelationInput
    lotType?: LotTypeOrderByWithRelationInput
    contract?: ContractOrderByWithRelationInput
  }

  export type LotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    blockId_lotNo?: LotBlockIdLotNoCompoundUniqueInput
    AND?: LotWhereInput | LotWhereInput[]
    OR?: LotWhereInput[]
    NOT?: LotWhereInput | LotWhereInput[]
    blockId?: IntFilter<"Lot"> | number
    lotNo?: IntFilter<"Lot"> | number
    lotTypeId?: IntFilter<"Lot"> | number
    sqm?: DecimalFilter<"Lot"> | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFilter<"Lot"> | $Enums.LotStatus
    createdAt?: DateTimeFilter<"Lot"> | Date | string
    updatedAt?: DateTimeFilter<"Lot"> | Date | string
    block?: XOR<BlockScalarRelationFilter, BlockWhereInput>
    lotType?: XOR<LotTypeScalarRelationFilter, LotTypeWhereInput>
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
  }, "id" | "blockId_lotNo">

  export type LotOrderByWithAggregationInput = {
    id?: SortOrder
    blockId?: SortOrder
    lotNo?: SortOrder
    lotTypeId?: SortOrder
    sqm?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LotCountOrderByAggregateInput
    _avg?: LotAvgOrderByAggregateInput
    _max?: LotMaxOrderByAggregateInput
    _min?: LotMinOrderByAggregateInput
    _sum?: LotSumOrderByAggregateInput
  }

  export type LotScalarWhereWithAggregatesInput = {
    AND?: LotScalarWhereWithAggregatesInput | LotScalarWhereWithAggregatesInput[]
    OR?: LotScalarWhereWithAggregatesInput[]
    NOT?: LotScalarWhereWithAggregatesInput | LotScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Lot"> | string
    blockId?: IntWithAggregatesFilter<"Lot"> | number
    lotNo?: IntWithAggregatesFilter<"Lot"> | number
    lotTypeId?: IntWithAggregatesFilter<"Lot"> | number
    sqm?: DecimalWithAggregatesFilter<"Lot"> | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusWithAggregatesFilter<"Lot"> | $Enums.LotStatus
    createdAt?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lot"> | Date | string
  }

  export type HomeownerWhereInput = {
    AND?: HomeownerWhereInput | HomeownerWhereInput[]
    OR?: HomeownerWhereInput[]
    NOT?: HomeownerWhereInput | HomeownerWhereInput[]
    id?: UuidFilter<"Homeowner"> | string
    fullName?: StringFilter<"Homeowner"> | string
    phone?: StringNullableFilter<"Homeowner"> | string | null
    email?: StringNullableFilter<"Homeowner"> | string | null
    createdAt?: DateTimeFilter<"Homeowner"> | Date | string
    updatedAt?: DateTimeFilter<"Homeowner"> | Date | string
    contracts?: ContractListRelationFilter
  }

  export type HomeownerOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type HomeownerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomeownerWhereInput | HomeownerWhereInput[]
    OR?: HomeownerWhereInput[]
    NOT?: HomeownerWhereInput | HomeownerWhereInput[]
    fullName?: StringFilter<"Homeowner"> | string
    phone?: StringNullableFilter<"Homeowner"> | string | null
    email?: StringNullableFilter<"Homeowner"> | string | null
    createdAt?: DateTimeFilter<"Homeowner"> | Date | string
    updatedAt?: DateTimeFilter<"Homeowner"> | Date | string
    contracts?: ContractListRelationFilter
  }, "id">

  export type HomeownerOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomeownerCountOrderByAggregateInput
    _max?: HomeownerMaxOrderByAggregateInput
    _min?: HomeownerMinOrderByAggregateInput
  }

  export type HomeownerScalarWhereWithAggregatesInput = {
    AND?: HomeownerScalarWhereWithAggregatesInput | HomeownerScalarWhereWithAggregatesInput[]
    OR?: HomeownerScalarWhereWithAggregatesInput[]
    NOT?: HomeownerScalarWhereWithAggregatesInput | HomeownerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Homeowner"> | string
    fullName?: StringWithAggregatesFilter<"Homeowner"> | string
    phone?: StringNullableWithAggregatesFilter<"Homeowner"> | string | null
    email?: StringNullableWithAggregatesFilter<"Homeowner"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Homeowner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Homeowner"> | Date | string
  }

  export type PaymentTermWhereInput = {
    AND?: PaymentTermWhereInput | PaymentTermWhereInput[]
    OR?: PaymentTermWhereInput[]
    NOT?: PaymentTermWhereInput | PaymentTermWhereInput[]
    termMonths?: IntFilter<"PaymentTerm"> | number
    interestRate?: DecimalFilter<"PaymentTerm"> | Decimal | DecimalJsLike | number | string
    contracts?: ContractListRelationFilter
  }

  export type PaymentTermOrderByWithRelationInput = {
    termMonths?: SortOrder
    interestRate?: SortOrder
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type PaymentTermWhereUniqueInput = Prisma.AtLeast<{
    termMonths?: number
    AND?: PaymentTermWhereInput | PaymentTermWhereInput[]
    OR?: PaymentTermWhereInput[]
    NOT?: PaymentTermWhereInput | PaymentTermWhereInput[]
    interestRate?: DecimalFilter<"PaymentTerm"> | Decimal | DecimalJsLike | number | string
    contracts?: ContractListRelationFilter
  }, "termMonths">

  export type PaymentTermOrderByWithAggregationInput = {
    termMonths?: SortOrder
    interestRate?: SortOrder
    _count?: PaymentTermCountOrderByAggregateInput
    _avg?: PaymentTermAvgOrderByAggregateInput
    _max?: PaymentTermMaxOrderByAggregateInput
    _min?: PaymentTermMinOrderByAggregateInput
    _sum?: PaymentTermSumOrderByAggregateInput
  }

  export type PaymentTermScalarWhereWithAggregatesInput = {
    AND?: PaymentTermScalarWhereWithAggregatesInput | PaymentTermScalarWhereWithAggregatesInput[]
    OR?: PaymentTermScalarWhereWithAggregatesInput[]
    NOT?: PaymentTermScalarWhereWithAggregatesInput | PaymentTermScalarWhereWithAggregatesInput[]
    termMonths?: IntWithAggregatesFilter<"PaymentTerm"> | number
    interestRate?: DecimalWithAggregatesFilter<"PaymentTerm"> | Decimal | DecimalJsLike | number | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: UuidFilter<"Contract"> | string
    lotId?: UuidFilter<"Contract"> | string
    homeownerId?: UuidFilter<"Contract"> | string
    termMonths?: IntFilter<"Contract"> | number
    reservationFee?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Contract"> | Date | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
    homeowner?: XOR<HomeownerScalarRelationFilter, HomeownerWhereInput>
    term?: XOR<PaymentTermScalarRelationFilter, PaymentTermWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    lotId?: SortOrder
    homeownerId?: SortOrder
    termMonths?: SortOrder
    reservationFee?: SortOrder
    origTcp?: SortOrder
    dpAmount?: SortOrder
    dpMonthly?: SortOrder
    balanceAmount?: SortOrder
    monthlyAmort?: SortOrder
    totalTcp?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lot?: LotOrderByWithRelationInput
    homeowner?: HomeownerOrderByWithRelationInput
    term?: PaymentTermOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lotId?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    homeownerId?: UuidFilter<"Contract"> | string
    termMonths?: IntFilter<"Contract"> | number
    reservationFee?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Contract"> | Date | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    lot?: XOR<LotScalarRelationFilter, LotWhereInput>
    homeowner?: XOR<HomeownerScalarRelationFilter, HomeownerWhereInput>
    term?: XOR<PaymentTermScalarRelationFilter, PaymentTermWhereInput>
    payments?: PaymentListRelationFilter
  }, "id" | "lotId">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    lotId?: SortOrder
    homeownerId?: SortOrder
    termMonths?: SortOrder
    reservationFee?: SortOrder
    origTcp?: SortOrder
    dpAmount?: SortOrder
    dpMonthly?: SortOrder
    balanceAmount?: SortOrder
    monthlyAmort?: SortOrder
    totalTcp?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Contract"> | string
    lotId?: UuidWithAggregatesFilter<"Contract"> | string
    homeownerId?: UuidWithAggregatesFilter<"Contract"> | string
    termMonths?: IntWithAggregatesFilter<"Contract"> | number
    reservationFee?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: UuidFilter<"Payment"> | string
    contractId?: UuidFilter<"Payment"> | string
    recordedBy?: UuidFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFilter<"Payment"> | Date | string
    paymentType?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    recorder?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    recordedBy?: SortOrder
    amount?: SortOrder
    paidOn?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    contract?: ContractOrderByWithRelationInput
    recorder?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    contractId?: UuidFilter<"Payment"> | string
    recordedBy?: UuidFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFilter<"Payment"> | Date | string
    paymentType?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
    recorder?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    recordedBy?: SortOrder
    amount?: SortOrder
    paidOn?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Payment"> | string
    contractId?: UuidWithAggregatesFilter<"Payment"> | string
    recordedBy?: UuidWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentType?: EnumPaymentTypeWithAggregatesFilter<"Payment"> | $Enums.PaymentType
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    payments?: PaymentListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BlockCreateInput = {
    blockNo: number
    lots?: LotCreateNestedManyWithoutBlockInput
  }

  export type BlockUncheckedCreateInput = {
    id?: number
    blockNo: number
    lots?: LotUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlockUpdateInput = {
    blockNo?: IntFieldUpdateOperationsInput | number
    lots?: LotUpdateManyWithoutBlockNestedInput
  }

  export type BlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockNo?: IntFieldUpdateOperationsInput | number
    lots?: LotUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type BlockCreateManyInput = {
    id?: number
    blockNo: number
  }

  export type BlockUpdateManyMutationInput = {
    blockNo?: IntFieldUpdateOperationsInput | number
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockNo?: IntFieldUpdateOperationsInput | number
  }

  export type LotTypeCreateInput = {
    name: string
    pricePerSqm: Decimal | DecimalJsLike | number | string
    lots?: LotCreateNestedManyWithoutLotTypeInput
  }

  export type LotTypeUncheckedCreateInput = {
    id?: number
    name: string
    pricePerSqm: Decimal | DecimalJsLike | number | string
    lots?: LotUncheckedCreateNestedManyWithoutLotTypeInput
  }

  export type LotTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pricePerSqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lots?: LotUpdateManyWithoutLotTypeNestedInput
  }

  export type LotTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pricePerSqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lots?: LotUncheckedUpdateManyWithoutLotTypeNestedInput
  }

  export type LotTypeCreateManyInput = {
    id?: number
    name: string
    pricePerSqm: Decimal | DecimalJsLike | number | string
  }

  export type LotTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    pricePerSqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LotTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pricePerSqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LotCreateInput = {
    id?: string
    lotNo: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    block: BlockCreateNestedOneWithoutLotsInput
    lotType: LotTypeCreateNestedOneWithoutLotsInput
    contract?: ContractCreateNestedOneWithoutLotInput
  }

  export type LotUncheckedCreateInput = {
    id?: string
    blockId: number
    lotNo: number
    lotTypeId: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedOneWithoutLotInput
  }

  export type LotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNo?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BlockUpdateOneRequiredWithoutLotsNestedInput
    lotType?: LotTypeUpdateOneRequiredWithoutLotsNestedInput
    contract?: ContractUpdateOneWithoutLotNestedInput
  }

  export type LotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
    lotNo?: IntFieldUpdateOperationsInput | number
    lotTypeId?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateOneWithoutLotNestedInput
  }

  export type LotCreateManyInput = {
    id?: string
    blockId: number
    lotNo: number
    lotTypeId: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNo?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
    lotNo?: IntFieldUpdateOperationsInput | number
    lotTypeId?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeownerCreateInput = {
    id?: string
    fullName: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractCreateNestedManyWithoutHomeownerInput
  }

  export type HomeownerUncheckedCreateInput = {
    id?: string
    fullName: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contracts?: ContractUncheckedCreateNestedManyWithoutHomeownerInput
  }

  export type HomeownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUpdateManyWithoutHomeownerNestedInput
  }

  export type HomeownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contracts?: ContractUncheckedUpdateManyWithoutHomeownerNestedInput
  }

  export type HomeownerCreateManyInput = {
    id?: string
    fullName: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTermCreateInput = {
    termMonths: number
    interestRate: Decimal | DecimalJsLike | number | string
    contracts?: ContractCreateNestedManyWithoutTermInput
  }

  export type PaymentTermUncheckedCreateInput = {
    termMonths: number
    interestRate: Decimal | DecimalJsLike | number | string
    contracts?: ContractUncheckedCreateNestedManyWithoutTermInput
  }

  export type PaymentTermUpdateInput = {
    termMonths?: IntFieldUpdateOperationsInput | number
    interestRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    contracts?: ContractUpdateManyWithoutTermNestedInput
  }

  export type PaymentTermUncheckedUpdateInput = {
    termMonths?: IntFieldUpdateOperationsInput | number
    interestRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    contracts?: ContractUncheckedUpdateManyWithoutTermNestedInput
  }

  export type PaymentTermCreateManyInput = {
    termMonths: number
    interestRate: Decimal | DecimalJsLike | number | string
  }

  export type PaymentTermUpdateManyMutationInput = {
    termMonths?: IntFieldUpdateOperationsInput | number
    interestRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentTermUncheckedUpdateManyInput = {
    termMonths?: IntFieldUpdateOperationsInput | number
    interestRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ContractCreateInput = {
    id?: string
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lot: LotCreateNestedOneWithoutContractInput
    homeowner: HomeownerCreateNestedOneWithoutContractsInput
    term: PaymentTermCreateNestedOneWithoutContractsInput
    payments?: PaymentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    lotId: string
    homeownerId: string
    termMonths: number
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: LotUpdateOneRequiredWithoutContractNestedInput
    homeowner?: HomeownerUpdateOneRequiredWithoutContractsNestedInput
    term?: PaymentTermUpdateOneRequiredWithoutContractsNestedInput
    payments?: PaymentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    homeownerId?: StringFieldUpdateOperationsInput | string
    termMonths?: IntFieldUpdateOperationsInput | number
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: string
    lotId: string
    homeownerId: string
    termMonths: number
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    homeownerId?: StringFieldUpdateOperationsInput | string
    termMonths?: IntFieldUpdateOperationsInput | number
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutPaymentsInput
    recorder: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    contractId: string
    recordedBy: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutPaymentsNestedInput
    recorder?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    contractId: string
    recordedBy: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutRecorderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutRecorderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutRecorderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutRecorderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LotListRelationFilter = {
    every?: LotWhereInput
    some?: LotWhereInput
    none?: LotWhereInput
  }

  export type LotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    blockNo?: SortOrder
  }

  export type BlockAvgOrderByAggregateInput = {
    id?: SortOrder
    blockNo?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    blockNo?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    blockNo?: SortOrder
  }

  export type BlockSumOrderByAggregateInput = {
    id?: SortOrder
    blockNo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type LotTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerSqm?: SortOrder
  }

  export type LotTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    pricePerSqm?: SortOrder
  }

  export type LotTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerSqm?: SortOrder
  }

  export type LotTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pricePerSqm?: SortOrder
  }

  export type LotTypeSumOrderByAggregateInput = {
    id?: SortOrder
    pricePerSqm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumLotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LotStatus | EnumLotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LotStatus[] | ListEnumLotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LotStatus[] | ListEnumLotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLotStatusFilter<$PrismaModel> | $Enums.LotStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BlockScalarRelationFilter = {
    is?: BlockWhereInput
    isNot?: BlockWhereInput
  }

  export type LotTypeScalarRelationFilter = {
    is?: LotTypeWhereInput
    isNot?: LotTypeWhereInput
  }

  export type ContractNullableScalarRelationFilter = {
    is?: ContractWhereInput | null
    isNot?: ContractWhereInput | null
  }

  export type LotBlockIdLotNoCompoundUniqueInput = {
    blockId: number
    lotNo: number
  }

  export type LotCountOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    lotNo?: SortOrder
    lotTypeId?: SortOrder
    sqm?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LotAvgOrderByAggregateInput = {
    blockId?: SortOrder
    lotNo?: SortOrder
    lotTypeId?: SortOrder
    sqm?: SortOrder
  }

  export type LotMaxOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    lotNo?: SortOrder
    lotTypeId?: SortOrder
    sqm?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LotMinOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
    lotNo?: SortOrder
    lotTypeId?: SortOrder
    sqm?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LotSumOrderByAggregateInput = {
    blockId?: SortOrder
    lotNo?: SortOrder
    lotTypeId?: SortOrder
    sqm?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumLotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LotStatus | EnumLotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LotStatus[] | ListEnumLotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LotStatus[] | ListEnumLotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLotStatusWithAggregatesFilter<$PrismaModel> | $Enums.LotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLotStatusFilter<$PrismaModel>
    _max?: NestedEnumLotStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HomeownerCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeownerMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeownerMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PaymentTermCountOrderByAggregateInput = {
    termMonths?: SortOrder
    interestRate?: SortOrder
  }

  export type PaymentTermAvgOrderByAggregateInput = {
    termMonths?: SortOrder
    interestRate?: SortOrder
  }

  export type PaymentTermMaxOrderByAggregateInput = {
    termMonths?: SortOrder
    interestRate?: SortOrder
  }

  export type PaymentTermMinOrderByAggregateInput = {
    termMonths?: SortOrder
    interestRate?: SortOrder
  }

  export type PaymentTermSumOrderByAggregateInput = {
    termMonths?: SortOrder
    interestRate?: SortOrder
  }

  export type LotScalarRelationFilter = {
    is?: LotWhereInput
    isNot?: LotWhereInput
  }

  export type HomeownerScalarRelationFilter = {
    is?: HomeownerWhereInput
    isNot?: HomeownerWhereInput
  }

  export type PaymentTermScalarRelationFilter = {
    is?: PaymentTermWhereInput
    isNot?: PaymentTermWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    lotId?: SortOrder
    homeownerId?: SortOrder
    termMonths?: SortOrder
    reservationFee?: SortOrder
    origTcp?: SortOrder
    dpAmount?: SortOrder
    dpMonthly?: SortOrder
    balanceAmount?: SortOrder
    monthlyAmort?: SortOrder
    totalTcp?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    termMonths?: SortOrder
    reservationFee?: SortOrder
    origTcp?: SortOrder
    dpAmount?: SortOrder
    dpMonthly?: SortOrder
    balanceAmount?: SortOrder
    monthlyAmort?: SortOrder
    totalTcp?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    lotId?: SortOrder
    homeownerId?: SortOrder
    termMonths?: SortOrder
    reservationFee?: SortOrder
    origTcp?: SortOrder
    dpAmount?: SortOrder
    dpMonthly?: SortOrder
    balanceAmount?: SortOrder
    monthlyAmort?: SortOrder
    totalTcp?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    lotId?: SortOrder
    homeownerId?: SortOrder
    termMonths?: SortOrder
    reservationFee?: SortOrder
    origTcp?: SortOrder
    dpAmount?: SortOrder
    dpMonthly?: SortOrder
    balanceAmount?: SortOrder
    monthlyAmort?: SortOrder
    totalTcp?: SortOrder
    startDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    termMonths?: SortOrder
    reservationFee?: SortOrder
    origTcp?: SortOrder
    dpAmount?: SortOrder
    dpMonthly?: SortOrder
    balanceAmount?: SortOrder
    monthlyAmort?: SortOrder
    totalTcp?: SortOrder
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    recordedBy?: SortOrder
    amount?: SortOrder
    paidOn?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    recordedBy?: SortOrder
    amount?: SortOrder
    paidOn?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    recordedBy?: SortOrder
    amount?: SortOrder
    paidOn?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type LotCreateNestedManyWithoutBlockInput = {
    create?: XOR<LotCreateWithoutBlockInput, LotUncheckedCreateWithoutBlockInput> | LotCreateWithoutBlockInput[] | LotUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: LotCreateOrConnectWithoutBlockInput | LotCreateOrConnectWithoutBlockInput[]
    createMany?: LotCreateManyBlockInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type LotUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<LotCreateWithoutBlockInput, LotUncheckedCreateWithoutBlockInput> | LotCreateWithoutBlockInput[] | LotUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: LotCreateOrConnectWithoutBlockInput | LotCreateOrConnectWithoutBlockInput[]
    createMany?: LotCreateManyBlockInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LotUpdateManyWithoutBlockNestedInput = {
    create?: XOR<LotCreateWithoutBlockInput, LotUncheckedCreateWithoutBlockInput> | LotCreateWithoutBlockInput[] | LotUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: LotCreateOrConnectWithoutBlockInput | LotCreateOrConnectWithoutBlockInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutBlockInput | LotUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: LotCreateManyBlockInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutBlockInput | LotUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: LotUpdateManyWithWhereWithoutBlockInput | LotUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type LotUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<LotCreateWithoutBlockInput, LotUncheckedCreateWithoutBlockInput> | LotCreateWithoutBlockInput[] | LotUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: LotCreateOrConnectWithoutBlockInput | LotCreateOrConnectWithoutBlockInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutBlockInput | LotUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: LotCreateManyBlockInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutBlockInput | LotUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: LotUpdateManyWithWhereWithoutBlockInput | LotUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type LotCreateNestedManyWithoutLotTypeInput = {
    create?: XOR<LotCreateWithoutLotTypeInput, LotUncheckedCreateWithoutLotTypeInput> | LotCreateWithoutLotTypeInput[] | LotUncheckedCreateWithoutLotTypeInput[]
    connectOrCreate?: LotCreateOrConnectWithoutLotTypeInput | LotCreateOrConnectWithoutLotTypeInput[]
    createMany?: LotCreateManyLotTypeInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type LotUncheckedCreateNestedManyWithoutLotTypeInput = {
    create?: XOR<LotCreateWithoutLotTypeInput, LotUncheckedCreateWithoutLotTypeInput> | LotCreateWithoutLotTypeInput[] | LotUncheckedCreateWithoutLotTypeInput[]
    connectOrCreate?: LotCreateOrConnectWithoutLotTypeInput | LotCreateOrConnectWithoutLotTypeInput[]
    createMany?: LotCreateManyLotTypeInputEnvelope
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type LotUpdateManyWithoutLotTypeNestedInput = {
    create?: XOR<LotCreateWithoutLotTypeInput, LotUncheckedCreateWithoutLotTypeInput> | LotCreateWithoutLotTypeInput[] | LotUncheckedCreateWithoutLotTypeInput[]
    connectOrCreate?: LotCreateOrConnectWithoutLotTypeInput | LotCreateOrConnectWithoutLotTypeInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutLotTypeInput | LotUpsertWithWhereUniqueWithoutLotTypeInput[]
    createMany?: LotCreateManyLotTypeInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutLotTypeInput | LotUpdateWithWhereUniqueWithoutLotTypeInput[]
    updateMany?: LotUpdateManyWithWhereWithoutLotTypeInput | LotUpdateManyWithWhereWithoutLotTypeInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type LotUncheckedUpdateManyWithoutLotTypeNestedInput = {
    create?: XOR<LotCreateWithoutLotTypeInput, LotUncheckedCreateWithoutLotTypeInput> | LotCreateWithoutLotTypeInput[] | LotUncheckedCreateWithoutLotTypeInput[]
    connectOrCreate?: LotCreateOrConnectWithoutLotTypeInput | LotCreateOrConnectWithoutLotTypeInput[]
    upsert?: LotUpsertWithWhereUniqueWithoutLotTypeInput | LotUpsertWithWhereUniqueWithoutLotTypeInput[]
    createMany?: LotCreateManyLotTypeInputEnvelope
    set?: LotWhereUniqueInput | LotWhereUniqueInput[]
    disconnect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    delete?: LotWhereUniqueInput | LotWhereUniqueInput[]
    connect?: LotWhereUniqueInput | LotWhereUniqueInput[]
    update?: LotUpdateWithWhereUniqueWithoutLotTypeInput | LotUpdateWithWhereUniqueWithoutLotTypeInput[]
    updateMany?: LotUpdateManyWithWhereWithoutLotTypeInput | LotUpdateManyWithWhereWithoutLotTypeInput[]
    deleteMany?: LotScalarWhereInput | LotScalarWhereInput[]
  }

  export type BlockCreateNestedOneWithoutLotsInput = {
    create?: XOR<BlockCreateWithoutLotsInput, BlockUncheckedCreateWithoutLotsInput>
    connectOrCreate?: BlockCreateOrConnectWithoutLotsInput
    connect?: BlockWhereUniqueInput
  }

  export type LotTypeCreateNestedOneWithoutLotsInput = {
    create?: XOR<LotTypeCreateWithoutLotsInput, LotTypeUncheckedCreateWithoutLotsInput>
    connectOrCreate?: LotTypeCreateOrConnectWithoutLotsInput
    connect?: LotTypeWhereUniqueInput
  }

  export type ContractCreateNestedOneWithoutLotInput = {
    create?: XOR<ContractCreateWithoutLotInput, ContractUncheckedCreateWithoutLotInput>
    connectOrCreate?: ContractCreateOrConnectWithoutLotInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUncheckedCreateNestedOneWithoutLotInput = {
    create?: XOR<ContractCreateWithoutLotInput, ContractUncheckedCreateWithoutLotInput>
    connectOrCreate?: ContractCreateOrConnectWithoutLotInput
    connect?: ContractWhereUniqueInput
  }

  export type EnumLotStatusFieldUpdateOperationsInput = {
    set?: $Enums.LotStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlockUpdateOneRequiredWithoutLotsNestedInput = {
    create?: XOR<BlockCreateWithoutLotsInput, BlockUncheckedCreateWithoutLotsInput>
    connectOrCreate?: BlockCreateOrConnectWithoutLotsInput
    upsert?: BlockUpsertWithoutLotsInput
    connect?: BlockWhereUniqueInput
    update?: XOR<XOR<BlockUpdateToOneWithWhereWithoutLotsInput, BlockUpdateWithoutLotsInput>, BlockUncheckedUpdateWithoutLotsInput>
  }

  export type LotTypeUpdateOneRequiredWithoutLotsNestedInput = {
    create?: XOR<LotTypeCreateWithoutLotsInput, LotTypeUncheckedCreateWithoutLotsInput>
    connectOrCreate?: LotTypeCreateOrConnectWithoutLotsInput
    upsert?: LotTypeUpsertWithoutLotsInput
    connect?: LotTypeWhereUniqueInput
    update?: XOR<XOR<LotTypeUpdateToOneWithWhereWithoutLotsInput, LotTypeUpdateWithoutLotsInput>, LotTypeUncheckedUpdateWithoutLotsInput>
  }

  export type ContractUpdateOneWithoutLotNestedInput = {
    create?: XOR<ContractCreateWithoutLotInput, ContractUncheckedCreateWithoutLotInput>
    connectOrCreate?: ContractCreateOrConnectWithoutLotInput
    upsert?: ContractUpsertWithoutLotInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutLotInput, ContractUpdateWithoutLotInput>, ContractUncheckedUpdateWithoutLotInput>
  }

  export type ContractUncheckedUpdateOneWithoutLotNestedInput = {
    create?: XOR<ContractCreateWithoutLotInput, ContractUncheckedCreateWithoutLotInput>
    connectOrCreate?: ContractCreateOrConnectWithoutLotInput
    upsert?: ContractUpsertWithoutLotInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutLotInput, ContractUpdateWithoutLotInput>, ContractUncheckedUpdateWithoutLotInput>
  }

  export type ContractCreateNestedManyWithoutHomeownerInput = {
    create?: XOR<ContractCreateWithoutHomeownerInput, ContractUncheckedCreateWithoutHomeownerInput> | ContractCreateWithoutHomeownerInput[] | ContractUncheckedCreateWithoutHomeownerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutHomeownerInput | ContractCreateOrConnectWithoutHomeownerInput[]
    createMany?: ContractCreateManyHomeownerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutHomeownerInput = {
    create?: XOR<ContractCreateWithoutHomeownerInput, ContractUncheckedCreateWithoutHomeownerInput> | ContractCreateWithoutHomeownerInput[] | ContractUncheckedCreateWithoutHomeownerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutHomeownerInput | ContractCreateOrConnectWithoutHomeownerInput[]
    createMany?: ContractCreateManyHomeownerInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContractUpdateManyWithoutHomeownerNestedInput = {
    create?: XOR<ContractCreateWithoutHomeownerInput, ContractUncheckedCreateWithoutHomeownerInput> | ContractCreateWithoutHomeownerInput[] | ContractUncheckedCreateWithoutHomeownerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutHomeownerInput | ContractCreateOrConnectWithoutHomeownerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutHomeownerInput | ContractUpsertWithWhereUniqueWithoutHomeownerInput[]
    createMany?: ContractCreateManyHomeownerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutHomeownerInput | ContractUpdateWithWhereUniqueWithoutHomeownerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutHomeownerInput | ContractUpdateManyWithWhereWithoutHomeownerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutHomeownerNestedInput = {
    create?: XOR<ContractCreateWithoutHomeownerInput, ContractUncheckedCreateWithoutHomeownerInput> | ContractCreateWithoutHomeownerInput[] | ContractUncheckedCreateWithoutHomeownerInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutHomeownerInput | ContractCreateOrConnectWithoutHomeownerInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutHomeownerInput | ContractUpsertWithWhereUniqueWithoutHomeownerInput[]
    createMany?: ContractCreateManyHomeownerInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutHomeownerInput | ContractUpdateWithWhereUniqueWithoutHomeownerInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutHomeownerInput | ContractUpdateManyWithWhereWithoutHomeownerInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractCreateNestedManyWithoutTermInput = {
    create?: XOR<ContractCreateWithoutTermInput, ContractUncheckedCreateWithoutTermInput> | ContractCreateWithoutTermInput[] | ContractUncheckedCreateWithoutTermInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutTermInput | ContractCreateOrConnectWithoutTermInput[]
    createMany?: ContractCreateManyTermInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutTermInput = {
    create?: XOR<ContractCreateWithoutTermInput, ContractUncheckedCreateWithoutTermInput> | ContractCreateWithoutTermInput[] | ContractUncheckedCreateWithoutTermInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutTermInput | ContractCreateOrConnectWithoutTermInput[]
    createMany?: ContractCreateManyTermInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUpdateManyWithoutTermNestedInput = {
    create?: XOR<ContractCreateWithoutTermInput, ContractUncheckedCreateWithoutTermInput> | ContractCreateWithoutTermInput[] | ContractUncheckedCreateWithoutTermInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutTermInput | ContractCreateOrConnectWithoutTermInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutTermInput | ContractUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: ContractCreateManyTermInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutTermInput | ContractUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutTermInput | ContractUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutTermNestedInput = {
    create?: XOR<ContractCreateWithoutTermInput, ContractUncheckedCreateWithoutTermInput> | ContractCreateWithoutTermInput[] | ContractUncheckedCreateWithoutTermInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutTermInput | ContractCreateOrConnectWithoutTermInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutTermInput | ContractUpsertWithWhereUniqueWithoutTermInput[]
    createMany?: ContractCreateManyTermInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutTermInput | ContractUpdateWithWhereUniqueWithoutTermInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutTermInput | ContractUpdateManyWithWhereWithoutTermInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type LotCreateNestedOneWithoutContractInput = {
    create?: XOR<LotCreateWithoutContractInput, LotUncheckedCreateWithoutContractInput>
    connectOrCreate?: LotCreateOrConnectWithoutContractInput
    connect?: LotWhereUniqueInput
  }

  export type HomeownerCreateNestedOneWithoutContractsInput = {
    create?: XOR<HomeownerCreateWithoutContractsInput, HomeownerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: HomeownerCreateOrConnectWithoutContractsInput
    connect?: HomeownerWhereUniqueInput
  }

  export type PaymentTermCreateNestedOneWithoutContractsInput = {
    create?: XOR<PaymentTermCreateWithoutContractsInput, PaymentTermUncheckedCreateWithoutContractsInput>
    connectOrCreate?: PaymentTermCreateOrConnectWithoutContractsInput
    connect?: PaymentTermWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutContractInput = {
    create?: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput> | PaymentCreateWithoutContractInput[] | PaymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutContractInput | PaymentCreateOrConnectWithoutContractInput[]
    createMany?: PaymentCreateManyContractInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput> | PaymentCreateWithoutContractInput[] | PaymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutContractInput | PaymentCreateOrConnectWithoutContractInput[]
    createMany?: PaymentCreateManyContractInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type LotUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<LotCreateWithoutContractInput, LotUncheckedCreateWithoutContractInput>
    connectOrCreate?: LotCreateOrConnectWithoutContractInput
    upsert?: LotUpsertWithoutContractInput
    connect?: LotWhereUniqueInput
    update?: XOR<XOR<LotUpdateToOneWithWhereWithoutContractInput, LotUpdateWithoutContractInput>, LotUncheckedUpdateWithoutContractInput>
  }

  export type HomeownerUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<HomeownerCreateWithoutContractsInput, HomeownerUncheckedCreateWithoutContractsInput>
    connectOrCreate?: HomeownerCreateOrConnectWithoutContractsInput
    upsert?: HomeownerUpsertWithoutContractsInput
    connect?: HomeownerWhereUniqueInput
    update?: XOR<XOR<HomeownerUpdateToOneWithWhereWithoutContractsInput, HomeownerUpdateWithoutContractsInput>, HomeownerUncheckedUpdateWithoutContractsInput>
  }

  export type PaymentTermUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<PaymentTermCreateWithoutContractsInput, PaymentTermUncheckedCreateWithoutContractsInput>
    connectOrCreate?: PaymentTermCreateOrConnectWithoutContractsInput
    upsert?: PaymentTermUpsertWithoutContractsInput
    connect?: PaymentTermWhereUniqueInput
    update?: XOR<XOR<PaymentTermUpdateToOneWithWhereWithoutContractsInput, PaymentTermUpdateWithoutContractsInput>, PaymentTermUncheckedUpdateWithoutContractsInput>
  }

  export type PaymentUpdateManyWithoutContractNestedInput = {
    create?: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput> | PaymentCreateWithoutContractInput[] | PaymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutContractInput | PaymentCreateOrConnectWithoutContractInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutContractInput | PaymentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: PaymentCreateManyContractInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutContractInput | PaymentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutContractInput | PaymentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput> | PaymentCreateWithoutContractInput[] | PaymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutContractInput | PaymentCreateOrConnectWithoutContractInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutContractInput | PaymentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: PaymentCreateManyContractInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutContractInput | PaymentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutContractInput | PaymentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPaymentsInput
    connect?: ContractWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type ContractUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPaymentsInput
    upsert?: ContractUpsertWithoutPaymentsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutPaymentsInput, ContractUpdateWithoutPaymentsInput>, ContractUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentCreateNestedManyWithoutRecorderInput = {
    create?: XOR<PaymentCreateWithoutRecorderInput, PaymentUncheckedCreateWithoutRecorderInput> | PaymentCreateWithoutRecorderInput[] | PaymentUncheckedCreateWithoutRecorderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRecorderInput | PaymentCreateOrConnectWithoutRecorderInput[]
    createMany?: PaymentCreateManyRecorderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutRecorderInput = {
    create?: XOR<PaymentCreateWithoutRecorderInput, PaymentUncheckedCreateWithoutRecorderInput> | PaymentCreateWithoutRecorderInput[] | PaymentUncheckedCreateWithoutRecorderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRecorderInput | PaymentCreateOrConnectWithoutRecorderInput[]
    createMany?: PaymentCreateManyRecorderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type PaymentUpdateManyWithoutRecorderNestedInput = {
    create?: XOR<PaymentCreateWithoutRecorderInput, PaymentUncheckedCreateWithoutRecorderInput> | PaymentCreateWithoutRecorderInput[] | PaymentUncheckedCreateWithoutRecorderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRecorderInput | PaymentCreateOrConnectWithoutRecorderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutRecorderInput | PaymentUpsertWithWhereUniqueWithoutRecorderInput[]
    createMany?: PaymentCreateManyRecorderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutRecorderInput | PaymentUpdateWithWhereUniqueWithoutRecorderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutRecorderInput | PaymentUpdateManyWithWhereWithoutRecorderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutRecorderNestedInput = {
    create?: XOR<PaymentCreateWithoutRecorderInput, PaymentUncheckedCreateWithoutRecorderInput> | PaymentCreateWithoutRecorderInput[] | PaymentUncheckedCreateWithoutRecorderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRecorderInput | PaymentCreateOrConnectWithoutRecorderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutRecorderInput | PaymentUpsertWithWhereUniqueWithoutRecorderInput[]
    createMany?: PaymentCreateManyRecorderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutRecorderInput | PaymentUpdateWithWhereUniqueWithoutRecorderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutRecorderInput | PaymentUpdateManyWithWhereWithoutRecorderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumLotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LotStatus | EnumLotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LotStatus[] | ListEnumLotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LotStatus[] | ListEnumLotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLotStatusFilter<$PrismaModel> | $Enums.LotStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumLotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LotStatus | EnumLotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LotStatus[] | ListEnumLotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LotStatus[] | ListEnumLotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLotStatusWithAggregatesFilter<$PrismaModel> | $Enums.LotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLotStatusFilter<$PrismaModel>
    _max?: NestedEnumLotStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type LotCreateWithoutBlockInput = {
    id?: string
    lotNo: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    lotType: LotTypeCreateNestedOneWithoutLotsInput
    contract?: ContractCreateNestedOneWithoutLotInput
  }

  export type LotUncheckedCreateWithoutBlockInput = {
    id?: string
    lotNo: number
    lotTypeId: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedOneWithoutLotInput
  }

  export type LotCreateOrConnectWithoutBlockInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutBlockInput, LotUncheckedCreateWithoutBlockInput>
  }

  export type LotCreateManyBlockInputEnvelope = {
    data: LotCreateManyBlockInput | LotCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type LotUpsertWithWhereUniqueWithoutBlockInput = {
    where: LotWhereUniqueInput
    update: XOR<LotUpdateWithoutBlockInput, LotUncheckedUpdateWithoutBlockInput>
    create: XOR<LotCreateWithoutBlockInput, LotUncheckedCreateWithoutBlockInput>
  }

  export type LotUpdateWithWhereUniqueWithoutBlockInput = {
    where: LotWhereUniqueInput
    data: XOR<LotUpdateWithoutBlockInput, LotUncheckedUpdateWithoutBlockInput>
  }

  export type LotUpdateManyWithWhereWithoutBlockInput = {
    where: LotScalarWhereInput
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyWithoutBlockInput>
  }

  export type LotScalarWhereInput = {
    AND?: LotScalarWhereInput | LotScalarWhereInput[]
    OR?: LotScalarWhereInput[]
    NOT?: LotScalarWhereInput | LotScalarWhereInput[]
    id?: UuidFilter<"Lot"> | string
    blockId?: IntFilter<"Lot"> | number
    lotNo?: IntFilter<"Lot"> | number
    lotTypeId?: IntFilter<"Lot"> | number
    sqm?: DecimalFilter<"Lot"> | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFilter<"Lot"> | $Enums.LotStatus
    createdAt?: DateTimeFilter<"Lot"> | Date | string
    updatedAt?: DateTimeFilter<"Lot"> | Date | string
  }

  export type LotCreateWithoutLotTypeInput = {
    id?: string
    lotNo: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    block: BlockCreateNestedOneWithoutLotsInput
    contract?: ContractCreateNestedOneWithoutLotInput
  }

  export type LotUncheckedCreateWithoutLotTypeInput = {
    id?: string
    blockId: number
    lotNo: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    contract?: ContractUncheckedCreateNestedOneWithoutLotInput
  }

  export type LotCreateOrConnectWithoutLotTypeInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutLotTypeInput, LotUncheckedCreateWithoutLotTypeInput>
  }

  export type LotCreateManyLotTypeInputEnvelope = {
    data: LotCreateManyLotTypeInput | LotCreateManyLotTypeInput[]
    skipDuplicates?: boolean
  }

  export type LotUpsertWithWhereUniqueWithoutLotTypeInput = {
    where: LotWhereUniqueInput
    update: XOR<LotUpdateWithoutLotTypeInput, LotUncheckedUpdateWithoutLotTypeInput>
    create: XOR<LotCreateWithoutLotTypeInput, LotUncheckedCreateWithoutLotTypeInput>
  }

  export type LotUpdateWithWhereUniqueWithoutLotTypeInput = {
    where: LotWhereUniqueInput
    data: XOR<LotUpdateWithoutLotTypeInput, LotUncheckedUpdateWithoutLotTypeInput>
  }

  export type LotUpdateManyWithWhereWithoutLotTypeInput = {
    where: LotScalarWhereInput
    data: XOR<LotUpdateManyMutationInput, LotUncheckedUpdateManyWithoutLotTypeInput>
  }

  export type BlockCreateWithoutLotsInput = {
    blockNo: number
  }

  export type BlockUncheckedCreateWithoutLotsInput = {
    id?: number
    blockNo: number
  }

  export type BlockCreateOrConnectWithoutLotsInput = {
    where: BlockWhereUniqueInput
    create: XOR<BlockCreateWithoutLotsInput, BlockUncheckedCreateWithoutLotsInput>
  }

  export type LotTypeCreateWithoutLotsInput = {
    name: string
    pricePerSqm: Decimal | DecimalJsLike | number | string
  }

  export type LotTypeUncheckedCreateWithoutLotsInput = {
    id?: number
    name: string
    pricePerSqm: Decimal | DecimalJsLike | number | string
  }

  export type LotTypeCreateOrConnectWithoutLotsInput = {
    where: LotTypeWhereUniqueInput
    create: XOR<LotTypeCreateWithoutLotsInput, LotTypeUncheckedCreateWithoutLotsInput>
  }

  export type ContractCreateWithoutLotInput = {
    id?: string
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    homeowner: HomeownerCreateNestedOneWithoutContractsInput
    term: PaymentTermCreateNestedOneWithoutContractsInput
    payments?: PaymentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutLotInput = {
    id?: string
    homeownerId: string
    termMonths: number
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutLotInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutLotInput, ContractUncheckedCreateWithoutLotInput>
  }

  export type BlockUpsertWithoutLotsInput = {
    update: XOR<BlockUpdateWithoutLotsInput, BlockUncheckedUpdateWithoutLotsInput>
    create: XOR<BlockCreateWithoutLotsInput, BlockUncheckedCreateWithoutLotsInput>
    where?: BlockWhereInput
  }

  export type BlockUpdateToOneWithWhereWithoutLotsInput = {
    where?: BlockWhereInput
    data: XOR<BlockUpdateWithoutLotsInput, BlockUncheckedUpdateWithoutLotsInput>
  }

  export type BlockUpdateWithoutLotsInput = {
    blockNo?: IntFieldUpdateOperationsInput | number
  }

  export type BlockUncheckedUpdateWithoutLotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockNo?: IntFieldUpdateOperationsInput | number
  }

  export type LotTypeUpsertWithoutLotsInput = {
    update: XOR<LotTypeUpdateWithoutLotsInput, LotTypeUncheckedUpdateWithoutLotsInput>
    create: XOR<LotTypeCreateWithoutLotsInput, LotTypeUncheckedCreateWithoutLotsInput>
    where?: LotTypeWhereInput
  }

  export type LotTypeUpdateToOneWithWhereWithoutLotsInput = {
    where?: LotTypeWhereInput
    data: XOR<LotTypeUpdateWithoutLotsInput, LotTypeUncheckedUpdateWithoutLotsInput>
  }

  export type LotTypeUpdateWithoutLotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    pricePerSqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LotTypeUncheckedUpdateWithoutLotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pricePerSqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ContractUpsertWithoutLotInput = {
    update: XOR<ContractUpdateWithoutLotInput, ContractUncheckedUpdateWithoutLotInput>
    create: XOR<ContractCreateWithoutLotInput, ContractUncheckedCreateWithoutLotInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutLotInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutLotInput, ContractUncheckedUpdateWithoutLotInput>
  }

  export type ContractUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeowner?: HomeownerUpdateOneRequiredWithoutContractsNestedInput
    term?: PaymentTermUpdateOneRequiredWithoutContractsNestedInput
    payments?: PaymentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeownerId?: StringFieldUpdateOperationsInput | string
    termMonths?: IntFieldUpdateOperationsInput | number
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateWithoutHomeownerInput = {
    id?: string
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lot: LotCreateNestedOneWithoutContractInput
    term: PaymentTermCreateNestedOneWithoutContractsInput
    payments?: PaymentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutHomeownerInput = {
    id?: string
    lotId: string
    termMonths: number
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutHomeownerInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutHomeownerInput, ContractUncheckedCreateWithoutHomeownerInput>
  }

  export type ContractCreateManyHomeownerInputEnvelope = {
    data: ContractCreateManyHomeownerInput | ContractCreateManyHomeownerInput[]
    skipDuplicates?: boolean
  }

  export type ContractUpsertWithWhereUniqueWithoutHomeownerInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutHomeownerInput, ContractUncheckedUpdateWithoutHomeownerInput>
    create: XOR<ContractCreateWithoutHomeownerInput, ContractUncheckedCreateWithoutHomeownerInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutHomeownerInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutHomeownerInput, ContractUncheckedUpdateWithoutHomeownerInput>
  }

  export type ContractUpdateManyWithWhereWithoutHomeownerInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutHomeownerInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: UuidFilter<"Contract"> | string
    lotId?: UuidFilter<"Contract"> | string
    homeownerId?: UuidFilter<"Contract"> | string
    termMonths?: IntFilter<"Contract"> | number
    reservationFee?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Contract"> | Date | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type ContractCreateWithoutTermInput = {
    id?: string
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lot: LotCreateNestedOneWithoutContractInput
    homeowner: HomeownerCreateNestedOneWithoutContractsInput
    payments?: PaymentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutTermInput = {
    id?: string
    lotId: string
    homeownerId: string
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutTermInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutTermInput, ContractUncheckedCreateWithoutTermInput>
  }

  export type ContractCreateManyTermInputEnvelope = {
    data: ContractCreateManyTermInput | ContractCreateManyTermInput[]
    skipDuplicates?: boolean
  }

  export type ContractUpsertWithWhereUniqueWithoutTermInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutTermInput, ContractUncheckedUpdateWithoutTermInput>
    create: XOR<ContractCreateWithoutTermInput, ContractUncheckedCreateWithoutTermInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutTermInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutTermInput, ContractUncheckedUpdateWithoutTermInput>
  }

  export type ContractUpdateManyWithWhereWithoutTermInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutTermInput>
  }

  export type LotCreateWithoutContractInput = {
    id?: string
    lotNo: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    block: BlockCreateNestedOneWithoutLotsInput
    lotType: LotTypeCreateNestedOneWithoutLotsInput
  }

  export type LotUncheckedCreateWithoutContractInput = {
    id?: string
    blockId: number
    lotNo: number
    lotTypeId: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LotCreateOrConnectWithoutContractInput = {
    where: LotWhereUniqueInput
    create: XOR<LotCreateWithoutContractInput, LotUncheckedCreateWithoutContractInput>
  }

  export type HomeownerCreateWithoutContractsInput = {
    id?: string
    fullName: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeownerUncheckedCreateWithoutContractsInput = {
    id?: string
    fullName: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeownerCreateOrConnectWithoutContractsInput = {
    where: HomeownerWhereUniqueInput
    create: XOR<HomeownerCreateWithoutContractsInput, HomeownerUncheckedCreateWithoutContractsInput>
  }

  export type PaymentTermCreateWithoutContractsInput = {
    termMonths: number
    interestRate: Decimal | DecimalJsLike | number | string
  }

  export type PaymentTermUncheckedCreateWithoutContractsInput = {
    termMonths: number
    interestRate: Decimal | DecimalJsLike | number | string
  }

  export type PaymentTermCreateOrConnectWithoutContractsInput = {
    where: PaymentTermWhereUniqueInput
    create: XOR<PaymentTermCreateWithoutContractsInput, PaymentTermUncheckedCreateWithoutContractsInput>
  }

  export type PaymentCreateWithoutContractInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
    recorder: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutContractInput = {
    id?: string
    recordedBy: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutContractInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput>
  }

  export type PaymentCreateManyContractInputEnvelope = {
    data: PaymentCreateManyContractInput | PaymentCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type LotUpsertWithoutContractInput = {
    update: XOR<LotUpdateWithoutContractInput, LotUncheckedUpdateWithoutContractInput>
    create: XOR<LotCreateWithoutContractInput, LotUncheckedCreateWithoutContractInput>
    where?: LotWhereInput
  }

  export type LotUpdateToOneWithWhereWithoutContractInput = {
    where?: LotWhereInput
    data: XOR<LotUpdateWithoutContractInput, LotUncheckedUpdateWithoutContractInput>
  }

  export type LotUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNo?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BlockUpdateOneRequiredWithoutLotsNestedInput
    lotType?: LotTypeUpdateOneRequiredWithoutLotsNestedInput
  }

  export type LotUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
    lotNo?: IntFieldUpdateOperationsInput | number
    lotTypeId?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeownerUpsertWithoutContractsInput = {
    update: XOR<HomeownerUpdateWithoutContractsInput, HomeownerUncheckedUpdateWithoutContractsInput>
    create: XOR<HomeownerCreateWithoutContractsInput, HomeownerUncheckedCreateWithoutContractsInput>
    where?: HomeownerWhereInput
  }

  export type HomeownerUpdateToOneWithWhereWithoutContractsInput = {
    where?: HomeownerWhereInput
    data: XOR<HomeownerUpdateWithoutContractsInput, HomeownerUncheckedUpdateWithoutContractsInput>
  }

  export type HomeownerUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeownerUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTermUpsertWithoutContractsInput = {
    update: XOR<PaymentTermUpdateWithoutContractsInput, PaymentTermUncheckedUpdateWithoutContractsInput>
    create: XOR<PaymentTermCreateWithoutContractsInput, PaymentTermUncheckedCreateWithoutContractsInput>
    where?: PaymentTermWhereInput
  }

  export type PaymentTermUpdateToOneWithWhereWithoutContractsInput = {
    where?: PaymentTermWhereInput
    data: XOR<PaymentTermUpdateWithoutContractsInput, PaymentTermUncheckedUpdateWithoutContractsInput>
  }

  export type PaymentTermUpdateWithoutContractsInput = {
    termMonths?: IntFieldUpdateOperationsInput | number
    interestRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentTermUncheckedUpdateWithoutContractsInput = {
    termMonths?: IntFieldUpdateOperationsInput | number
    interestRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutContractInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutContractInput, PaymentUncheckedUpdateWithoutContractInput>
    create: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutContractInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutContractInput, PaymentUncheckedUpdateWithoutContractInput>
  }

  export type PaymentUpdateManyWithWhereWithoutContractInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutContractInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: UuidFilter<"Payment"> | string
    contractId?: UuidFilter<"Payment"> | string
    recordedBy?: UuidFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFilter<"Payment"> | Date | string
    paymentType?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type ContractCreateWithoutPaymentsInput = {
    id?: string
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    lot: LotCreateNestedOneWithoutContractInput
    homeowner: HomeownerCreateNestedOneWithoutContractsInput
    term: PaymentTermCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateWithoutPaymentsInput = {
    id?: string
    lotId: string
    homeownerId: string
    termMonths: number
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractCreateOrConnectWithoutPaymentsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type ContractUpsertWithoutPaymentsInput = {
    update: XOR<ContractUpdateWithoutPaymentsInput, ContractUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutPaymentsInput, ContractUncheckedUpdateWithoutPaymentsInput>
  }

  export type ContractUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: LotUpdateOneRequiredWithoutContractNestedInput
    homeowner?: HomeownerUpdateOneRequiredWithoutContractsNestedInput
    term?: PaymentTermUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    homeownerId?: StringFieldUpdateOperationsInput | string
    termMonths?: IntFieldUpdateOperationsInput | number
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateWithoutRecorderInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
    contract: ContractCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutRecorderInput = {
    id?: string
    contractId: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutRecorderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRecorderInput, PaymentUncheckedCreateWithoutRecorderInput>
  }

  export type PaymentCreateManyRecorderInputEnvelope = {
    data: PaymentCreateManyRecorderInput | PaymentCreateManyRecorderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutRecorderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutRecorderInput, PaymentUncheckedUpdateWithoutRecorderInput>
    create: XOR<PaymentCreateWithoutRecorderInput, PaymentUncheckedCreateWithoutRecorderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutRecorderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutRecorderInput, PaymentUncheckedUpdateWithoutRecorderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutRecorderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutRecorderInput>
  }

  export type LotCreateManyBlockInput = {
    id?: string
    lotNo: number
    lotTypeId: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LotUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNo?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lotType?: LotTypeUpdateOneRequiredWithoutLotsNestedInput
    contract?: ContractUpdateOneWithoutLotNestedInput
  }

  export type LotUncheckedUpdateWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNo?: IntFieldUpdateOperationsInput | number
    lotTypeId?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateOneWithoutLotNestedInput
  }

  export type LotUncheckedUpdateManyWithoutBlockInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNo?: IntFieldUpdateOperationsInput | number
    lotTypeId?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotCreateManyLotTypeInput = {
    id?: string
    blockId: number
    lotNo: number
    sqm: Decimal | DecimalJsLike | number | string
    status?: $Enums.LotStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LotUpdateWithoutLotTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotNo?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    block?: BlockUpdateOneRequiredWithoutLotsNestedInput
    contract?: ContractUpdateOneWithoutLotNestedInput
  }

  export type LotUncheckedUpdateWithoutLotTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
    lotNo?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUncheckedUpdateOneWithoutLotNestedInput
  }

  export type LotUncheckedUpdateManyWithoutLotTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
    lotNo?: IntFieldUpdateOperationsInput | number
    sqm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumLotStatusFieldUpdateOperationsInput | $Enums.LotStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyHomeownerInput = {
    id?: string
    lotId: string
    termMonths: number
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutHomeownerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: LotUpdateOneRequiredWithoutContractNestedInput
    term?: PaymentTermUpdateOneRequiredWithoutContractsNestedInput
    payments?: PaymentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutHomeownerInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    termMonths?: IntFieldUpdateOperationsInput | number
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutHomeownerInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    termMonths?: IntFieldUpdateOperationsInput | number
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateManyTermInput = {
    id?: string
    lotId: string
    homeownerId: string
    reservationFee: Decimal | DecimalJsLike | number | string
    origTcp: Decimal | DecimalJsLike | number | string
    dpAmount: Decimal | DecimalJsLike | number | string
    dpMonthly: Decimal | DecimalJsLike | number | string
    balanceAmount: Decimal | DecimalJsLike | number | string
    monthlyAmort: Decimal | DecimalJsLike | number | string
    totalTcp: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateWithoutTermInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lot?: LotUpdateOneRequiredWithoutContractNestedInput
    homeowner?: HomeownerUpdateOneRequiredWithoutContractsNestedInput
    payments?: PaymentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutTermInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    homeownerId?: StringFieldUpdateOperationsInput | string
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutTermInput = {
    id?: StringFieldUpdateOperationsInput | string
    lotId?: StringFieldUpdateOperationsInput | string
    homeownerId?: StringFieldUpdateOperationsInput | string
    reservationFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    origTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dpMonthly?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    balanceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyAmort?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTcp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyContractInput = {
    id?: string
    recordedBy: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recorder?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    recordedBy?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyRecorderInput = {
    id?: string
    contractId: string
    amount: Decimal | DecimalJsLike | number | string
    paidOn: Date | string
    paymentType: $Enums.PaymentType
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutRecorderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRecorderInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutRecorderInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paidOn?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}