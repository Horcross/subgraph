import {
  AccountCreated as AccountCreatedEvent,
  ReceivedData as ReceivedDataEvent
} from "../generated/ERC6551RegistryAndReadCall/ERC6551RegistryAndReadCall"
import { AccountCreated, ReceivedData } from "../generated/schema"

export function handleAccountCreated(event: AccountCreatedEvent): void {
  let entity = new AccountCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.implementation = event.params.implementation
  entity.chainId = event.params.chainId
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.salt = event.params.salt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReceivedData(event: ReceivedDataEvent): void {
  let entity = new ReceivedData(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestAddress = event.params.requestAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
