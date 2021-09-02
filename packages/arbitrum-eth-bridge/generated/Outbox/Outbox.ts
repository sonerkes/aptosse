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

export class OutBoxTransactionExecuted extends ethereum.Event {
  get params(): OutBoxTransactionExecuted__Params {
    return new OutBoxTransactionExecuted__Params(this);
  }
}

export class OutBoxTransactionExecuted__Params {
  _event: OutBoxTransactionExecuted;

  constructor(event: OutBoxTransactionExecuted) {
    this._event = event;
  }

  get destAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get l2Sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get outboxEntryIndex(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get transactionIndex(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OutboxEntryCreated extends ethereum.Event {
  get params(): OutboxEntryCreated__Params {
    return new OutboxEntryCreated__Params(this);
  }
}

export class OutboxEntryCreated__Params {
  _event: OutboxEntryCreated;

  constructor(event: OutboxEntryCreated) {
    this._event = event;
  }

  get batchNum(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get outboxEntryIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get outputRoot(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get numInBatch(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Outbox extends ethereum.SmartContract {
  static bind(address: Address): Outbox {
    return new Outbox("Outbox", address);
  }

  OUTBOX_VERSION(): BigInt {
    let result = super.call("OUTBOX_VERSION", "OUTBOX_VERSION():(uint128)", []);

    return result[0].toBigInt();
  }

  try_OUTBOX_VERSION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "OUTBOX_VERSION",
      "OUTBOX_VERSION():(uint128)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bridge(): Address {
    let result = super.call("bridge", "bridge():(address)", []);

    return result[0].toAddress();
  }

  try_bridge(): ethereum.CallResult<Address> {
    let result = super.tryCall("bridge", "bridge():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  calculateItemHash(
    l2Sender: Address,
    destAddr: Address,
    l2Block: BigInt,
    l1Block: BigInt,
    l2Timestamp: BigInt,
    amount: BigInt,
    calldataForL1: Bytes
  ): Bytes {
    let result = super.call(
      "calculateItemHash",
      "calculateItemHash(address,address,uint256,uint256,uint256,uint256,bytes):(bytes32)",
      [
        ethereum.Value.fromAddress(l2Sender),
        ethereum.Value.fromAddress(destAddr),
        ethereum.Value.fromUnsignedBigInt(l2Block),
        ethereum.Value.fromUnsignedBigInt(l1Block),
        ethereum.Value.fromUnsignedBigInt(l2Timestamp),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromBytes(calldataForL1)
      ]
    );

    return result[0].toBytes();
  }

  try_calculateItemHash(
    l2Sender: Address,
    destAddr: Address,
    l2Block: BigInt,
    l1Block: BigInt,
    l2Timestamp: BigInt,
    amount: BigInt,
    calldataForL1: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "calculateItemHash",
      "calculateItemHash(address,address,uint256,uint256,uint256,uint256,bytes):(bytes32)",
      [
        ethereum.Value.fromAddress(l2Sender),
        ethereum.Value.fromAddress(destAddr),
        ethereum.Value.fromUnsignedBigInt(l2Block),
        ethereum.Value.fromUnsignedBigInt(l1Block),
        ethereum.Value.fromUnsignedBigInt(l2Timestamp),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromBytes(calldataForL1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  calculateMerkleRoot(proof: Array<Bytes>, path: BigInt, item: Bytes): Bytes {
    let result = super.call(
      "calculateMerkleRoot",
      "calculateMerkleRoot(bytes32[],uint256,bytes32):(bytes32)",
      [
        ethereum.Value.fromFixedBytesArray(proof),
        ethereum.Value.fromUnsignedBigInt(path),
        ethereum.Value.fromFixedBytes(item)
      ]
    );

    return result[0].toBytes();
  }

  try_calculateMerkleRoot(
    proof: Array<Bytes>,
    path: BigInt,
    item: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "calculateMerkleRoot",
      "calculateMerkleRoot(bytes32[],uint256,bytes32):(bytes32)",
      [
        ethereum.Value.fromFixedBytesArray(proof),
        ethereum.Value.fromUnsignedBigInt(path),
        ethereum.Value.fromFixedBytes(item)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isMaster(): boolean {
    let result = super.call("isMaster", "isMaster():(bool)", []);

    return result[0].toBoolean();
  }

  try_isMaster(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMaster", "isMaster():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  l2ToL1BatchNum(): BigInt {
    let result = super.call("l2ToL1BatchNum", "l2ToL1BatchNum():(uint256)", []);

    return result[0].toBigInt();
  }

  try_l2ToL1BatchNum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "l2ToL1BatchNum",
      "l2ToL1BatchNum():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  l2ToL1Block(): BigInt {
    let result = super.call("l2ToL1Block", "l2ToL1Block():(uint256)", []);

    return result[0].toBigInt();
  }

  try_l2ToL1Block(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("l2ToL1Block", "l2ToL1Block():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  l2ToL1EthBlock(): BigInt {
    let result = super.call("l2ToL1EthBlock", "l2ToL1EthBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_l2ToL1EthBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "l2ToL1EthBlock",
      "l2ToL1EthBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  l2ToL1OutputId(): Bytes {
    let result = super.call("l2ToL1OutputId", "l2ToL1OutputId():(bytes32)", []);

    return result[0].toBytes();
  }

  try_l2ToL1OutputId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "l2ToL1OutputId",
      "l2ToL1OutputId():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  l2ToL1Sender(): Address {
    let result = super.call("l2ToL1Sender", "l2ToL1Sender():(address)", []);

    return result[0].toAddress();
  }

  try_l2ToL1Sender(): ethereum.CallResult<Address> {
    let result = super.tryCall("l2ToL1Sender", "l2ToL1Sender():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  l2ToL1Timestamp(): BigInt {
    let result = super.call(
      "l2ToL1Timestamp",
      "l2ToL1Timestamp():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_l2ToL1Timestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "l2ToL1Timestamp",
      "l2ToL1Timestamp():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  outboxEntries(param0: BigInt): Bytes {
    let result = super.call(
      "outboxEntries",
      "outboxEntries(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBytes();
  }

  try_outboxEntries(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "outboxEntries",
      "outboxEntries(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  outboxEntryExists(batchNum: BigInt): boolean {
    let result = super.call(
      "outboxEntryExists",
      "outboxEntryExists(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(batchNum)]
    );

    return result[0].toBoolean();
  }

  try_outboxEntryExists(batchNum: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "outboxEntryExists",
      "outboxEntryExists(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(batchNum)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  rollup(): Address {
    let result = super.call("rollup", "rollup():(address)", []);

    return result[0].toAddress();
  }

  try_rollup(): ethereum.CallResult<Address> {
    let result = super.tryCall("rollup", "rollup():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ExecuteTransactionCall extends ethereum.Call {
  get inputs(): ExecuteTransactionCall__Inputs {
    return new ExecuteTransactionCall__Inputs(this);
  }

  get outputs(): ExecuteTransactionCall__Outputs {
    return new ExecuteTransactionCall__Outputs(this);
  }
}

export class ExecuteTransactionCall__Inputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }

  get batchNum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get proof(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get index(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get l2Sender(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get destAddr(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get l2Block(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get l1Block(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get l2Timestamp(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get calldataForL1(): Bytes {
    return this._call.inputValues[9].value.toBytes();
  }
}

export class ExecuteTransactionCall__Outputs {
  _call: ExecuteTransactionCall;

  constructor(call: ExecuteTransactionCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _rollup(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bridge(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ProcessOutgoingMessagesCall extends ethereum.Call {
  get inputs(): ProcessOutgoingMessagesCall__Inputs {
    return new ProcessOutgoingMessagesCall__Inputs(this);
  }

  get outputs(): ProcessOutgoingMessagesCall__Outputs {
    return new ProcessOutgoingMessagesCall__Outputs(this);
  }
}

export class ProcessOutgoingMessagesCall__Inputs {
  _call: ProcessOutgoingMessagesCall;

  constructor(call: ProcessOutgoingMessagesCall) {
    this._call = call;
  }

  get sendsData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get sendLengths(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ProcessOutgoingMessagesCall__Outputs {
  _call: ProcessOutgoingMessagesCall;

  constructor(call: ProcessOutgoingMessagesCall) {
    this._call = call;
  }
}