// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccountCreated extends ethereum.Event {
  get params(): AccountCreated__Params {
    return new AccountCreated__Params(this);
  }
}

export class AccountCreated__Params {
  _event: AccountCreated;

  constructor(event: AccountCreated) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get implementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get chainId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get tokenContract(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get salt(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class ReceivedData extends ethereum.Event {
  get params(): ReceivedData__Params {
    return new ReceivedData__Params(this);
  }
}

export class ReceivedData__Params {
  _event: ReceivedData;

  constructor(event: ReceivedData) {
    this._event = event;
  }

  get requestAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ERC6551RegistryAndReadCall__nftsResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getChainId(): BigInt {
    return this.value0;
  }

  getTokenId(): BigInt {
    return this.value1;
  }
}

export class ERC6551RegistryAndReadCall extends ethereum.SmartContract {
  static bind(address: Address): ERC6551RegistryAndReadCall {
    return new ERC6551RegistryAndReadCall(
      "ERC6551RegistryAndReadCall",
      address
    );
  }

  abiPacketAccount(
    implementation: Address,
    chainId: BigInt,
    tokenContract: Address,
    tokenId: BigInt,
    salt: BigInt,
    initData: Bytes
  ): Bytes {
    let result = super.call(
      "abiPacketAccount",
      "abiPacketAccount(address,uint256,address,uint256,uint256,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(implementation),
        ethereum.Value.fromUnsignedBigInt(chainId),
        ethereum.Value.fromAddress(tokenContract),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salt),
        ethereum.Value.fromBytes(initData)
      ]
    );

    return result[0].toBytes();
  }

  try_abiPacketAccount(
    implementation: Address,
    chainId: BigInt,
    tokenContract: Address,
    tokenId: BigInt,
    salt: BigInt,
    initData: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "abiPacketAccount",
      "abiPacketAccount(address,uint256,address,uint256,uint256,bytes):(bytes)",
      [
        ethereum.Value.fromAddress(implementation),
        ethereum.Value.fromUnsignedBigInt(chainId),
        ethereum.Value.fromAddress(tokenContract),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salt),
        ethereum.Value.fromBytes(initData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  account(
    implementation: Address,
    chainId: BigInt,
    tokenContract: Address,
    tokenId: BigInt,
    salt: BigInt
  ): Address {
    let result = super.call(
      "account",
      "account(address,uint256,address,uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(implementation),
        ethereum.Value.fromUnsignedBigInt(chainId),
        ethereum.Value.fromAddress(tokenContract),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salt)
      ]
    );

    return result[0].toAddress();
  }

  try_account(
    implementation: Address,
    chainId: BigInt,
    tokenContract: Address,
    tokenId: BigInt,
    salt: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "account",
      "account(address,uint256,address,uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(implementation),
        ethereum.Value.fromUnsignedBigInt(chainId),
        ethereum.Value.fromAddress(tokenContract),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createAccount(
    implementation: Address,
    chainId: BigInt,
    tokenContract: Address,
    tokenId: BigInt,
    salt: BigInt,
    initData: Bytes
  ): Address {
    let result = super.call(
      "createAccount",
      "createAccount(address,uint256,address,uint256,uint256,bytes):(address)",
      [
        ethereum.Value.fromAddress(implementation),
        ethereum.Value.fromUnsignedBigInt(chainId),
        ethereum.Value.fromAddress(tokenContract),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salt),
        ethereum.Value.fromBytes(initData)
      ]
    );

    return result[0].toAddress();
  }

  try_createAccount(
    implementation: Address,
    chainId: BigInt,
    tokenContract: Address,
    tokenId: BigInt,
    salt: BigInt,
    initData: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createAccount",
      "createAccount(address,uint256,address,uint256,uint256,bytes):(address)",
      [
        ethereum.Value.fromAddress(implementation),
        ethereum.Value.fromUnsignedBigInt(chainId),
        ethereum.Value.fromAddress(tokenContract),
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salt),
        ethereum.Value.fromBytes(initData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gatewayContract(): Address {
    let result = super.call(
      "gatewayContract",
      "gatewayContract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_gatewayContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "gatewayContract",
      "gatewayContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRequestMetadata(
    destGasLimit: BigInt,
    destGasPrice: BigInt,
    ackGasLimit: BigInt,
    ackGasPrice: BigInt,
    relayerFees: BigInt,
    ackType: i32,
    isReadCall: boolean,
    asmAddress: Bytes
  ): Bytes {
    let result = super.call(
      "getRequestMetadata",
      "getRequestMetadata(uint64,uint64,uint64,uint64,uint128,uint8,bool,bytes):(bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(destGasLimit),
        ethereum.Value.fromUnsignedBigInt(destGasPrice),
        ethereum.Value.fromUnsignedBigInt(ackGasLimit),
        ethereum.Value.fromUnsignedBigInt(ackGasPrice),
        ethereum.Value.fromUnsignedBigInt(relayerFees),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ackType)),
        ethereum.Value.fromBoolean(isReadCall),
        ethereum.Value.fromBytes(asmAddress)
      ]
    );

    return result[0].toBytes();
  }

  try_getRequestMetadata(
    destGasLimit: BigInt,
    destGasPrice: BigInt,
    ackGasLimit: BigInt,
    ackGasPrice: BigInt,
    relayerFees: BigInt,
    ackType: i32,
    isReadCall: boolean,
    asmAddress: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRequestMetadata",
      "getRequestMetadata(uint64,uint64,uint64,uint64,uint128,uint8,bool,bytes):(bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(destGasLimit),
        ethereum.Value.fromUnsignedBigInt(destGasPrice),
        ethereum.Value.fromUnsignedBigInt(ackGasLimit),
        ethereum.Value.fromUnsignedBigInt(ackGasPrice),
        ethereum.Value.fromUnsignedBigInt(relayerFees),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(ackType)),
        ethereum.Value.fromBoolean(isReadCall),
        ethereum.Value.fromBytes(asmAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getTbas(nftContract: Address, nftId: BigInt): Array<Address> {
    let result = super.call("getTbas", "getTbas(address,uint256):(address[])", [
      ethereum.Value.fromAddress(nftContract),
      ethereum.Value.fromUnsignedBigInt(nftId)
    ]);

    return result[0].toAddressArray();
  }

  try_getTbas(
    nftContract: Address,
    nftId: BigInt
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getTbas",
      "getTbas(address,uint256):(address[])",
      [
        ethereum.Value.fromAddress(nftContract),
        ethereum.Value.fromUnsignedBigInt(nftId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  nfts(
    param0: Address,
    param1: BigInt
  ): ERC6551RegistryAndReadCall__nftsResult {
    let result = super.call("nfts", "nfts(address,uint256):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return new ERC6551RegistryAndReadCall__nftsResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_nfts(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<ERC6551RegistryAndReadCall__nftsResult> {
    let result = super.tryCall(
      "nfts",
      "nfts(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ERC6551RegistryAndReadCall__nftsResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  requestAddress(): Address {
    let result = super.call("requestAddress", "requestAddress():(address)", []);

    return result[0].toAddress();
  }

  try_requestAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "requestAddress",
      "requestAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get gatewayAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get feePayerAddress(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddTbaAddressCall extends ethereum.Call {
  get inputs(): AddTbaAddressCall__Inputs {
    return new AddTbaAddressCall__Inputs(this);
  }

  get outputs(): AddTbaAddressCall__Outputs {
    return new AddTbaAddressCall__Outputs(this);
  }
}

export class AddTbaAddressCall__Inputs {
  _call: AddTbaAddressCall;

  constructor(call: AddTbaAddressCall) {
    this._call = call;
  }

  get nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nftId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get chain_id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get tba(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class AddTbaAddressCall__Outputs {
  _call: AddTbaAddressCall;

  constructor(call: AddTbaAddressCall) {
    this._call = call;
  }
}

export class CreateAccountCall extends ethereum.Call {
  get inputs(): CreateAccountCall__Inputs {
    return new CreateAccountCall__Inputs(this);
  }

  get outputs(): CreateAccountCall__Outputs {
    return new CreateAccountCall__Outputs(this);
  }
}

export class CreateAccountCall__Inputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }

  get implementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get chainId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get tokenContract(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get salt(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get initData(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class CreateAccountCall__Outputs {
  _call: CreateAccountCall;

  constructor(call: CreateAccountCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class IAckCall extends ethereum.Call {
  get inputs(): IAckCall__Inputs {
    return new IAckCall__Inputs(this);
  }

  get outputs(): IAckCall__Outputs {
    return new IAckCall__Outputs(this);
  }
}

export class IAckCall__Inputs {
  _call: IAckCall;

  constructor(call: IAckCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get value1(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get execData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class IAckCall__Outputs {
  _call: IAckCall;

  constructor(call: IAckCall) {
    this._call = call;
  }
}

export class SendReadRequestCall extends ethereum.Call {
  get inputs(): SendReadRequestCall__Inputs {
    return new SendReadRequestCall__Inputs(this);
  }

  get outputs(): SendReadRequestCall__Outputs {
    return new SendReadRequestCall__Outputs(this);
  }
}

export class SendReadRequestCall__Inputs {
  _call: SendReadRequestCall;

  constructor(call: SendReadRequestCall) {
    this._call = call;
  }

  get destChainId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get destinationContractAddress(): string {
    return this._call.inputValues[1].value.toString();
  }

  get requestMetadata(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get packet(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SendReadRequestCall__Outputs {
  _call: SendReadRequestCall;

  constructor(call: SendReadRequestCall) {
    this._call = call;
  }
}

export class SetDappMetadataCall extends ethereum.Call {
  get inputs(): SetDappMetadataCall__Inputs {
    return new SetDappMetadataCall__Inputs(this);
  }

  get outputs(): SetDappMetadataCall__Outputs {
    return new SetDappMetadataCall__Outputs(this);
  }
}

export class SetDappMetadataCall__Inputs {
  _call: SetDappMetadataCall;

  constructor(call: SetDappMetadataCall) {
    this._call = call;
  }

  get feePayerAddress(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetDappMetadataCall__Outputs {
  _call: SetDappMetadataCall;

  constructor(call: SetDappMetadataCall) {
    this._call = call;
  }
}

export class SetGatewayCall extends ethereum.Call {
  get inputs(): SetGatewayCall__Inputs {
    return new SetGatewayCall__Inputs(this);
  }

  get outputs(): SetGatewayCall__Outputs {
    return new SetGatewayCall__Outputs(this);
  }
}

export class SetGatewayCall__Inputs {
  _call: SetGatewayCall;

  constructor(call: SetGatewayCall) {
    this._call = call;
  }

  get gateway(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGatewayCall__Outputs {
  _call: SetGatewayCall;

  constructor(call: SetGatewayCall) {
    this._call = call;
  }
}
