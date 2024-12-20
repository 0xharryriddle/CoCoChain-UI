/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type AgriculturalProduct = {
  __typename?: 'AgriculturalProduct';
  cocoChain: CoCoChainProduct;
  event?: Maybe<Array<Event>>;
  eventCount: Scalars['BigInt']['output'];
  farmer: Farmer;
  harvest?: Maybe<Array<HarvestEvent>>;
  harvestCount: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
};


export type AgriculturalProductEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Event_Filter>;
};


export type AgriculturalProductHarvestArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HarvestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HarvestEvent_Filter>;
};

export type AgriculturalProduct_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AgriculturalProduct_Filter>>>;
  cocoChain?: InputMaybe<Scalars['String']['input']>;
  cocoChain_?: InputMaybe<CoCoChainProduct_Filter>;
  cocoChain_contains?: InputMaybe<Scalars['String']['input']>;
  cocoChain_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cocoChain_ends_with?: InputMaybe<Scalars['String']['input']>;
  cocoChain_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cocoChain_gt?: InputMaybe<Scalars['String']['input']>;
  cocoChain_gte?: InputMaybe<Scalars['String']['input']>;
  cocoChain_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cocoChain_lt?: InputMaybe<Scalars['String']['input']>;
  cocoChain_lte?: InputMaybe<Scalars['String']['input']>;
  cocoChain_not?: InputMaybe<Scalars['String']['input']>;
  cocoChain_not_contains?: InputMaybe<Scalars['String']['input']>;
  cocoChain_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  cocoChain_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cocoChain_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cocoChain_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  cocoChain_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cocoChain_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  cocoChain_starts_with?: InputMaybe<Scalars['String']['input']>;
  cocoChain_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventCount?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  eventCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  event_?: InputMaybe<Event_Filter>;
  farmer?: InputMaybe<Scalars['String']['input']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']['input']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_ends_with?: InputMaybe<Scalars['String']['input']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_gt?: InputMaybe<Scalars['String']['input']>;
  farmer_gte?: InputMaybe<Scalars['String']['input']>;
  farmer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  farmer_lt?: InputMaybe<Scalars['String']['input']>;
  farmer_lte?: InputMaybe<Scalars['String']['input']>;
  farmer_not?: InputMaybe<Scalars['String']['input']>;
  farmer_not_contains?: InputMaybe<Scalars['String']['input']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_starts_with?: InputMaybe<Scalars['String']['input']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  harvestCount?: InputMaybe<Scalars['BigInt']['input']>;
  harvestCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  harvestCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  harvestCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  harvestCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  harvestCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  harvestCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  harvestCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  harvest_?: InputMaybe<HarvestEvent_Filter>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AgriculturalProduct_Filter>>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AgriculturalProduct_OrderBy {
  CocoChain = 'cocoChain',
  CocoChainActive = 'cocoChain__active',
  CocoChainCocoChainId = 'cocoChain__cocoChainId',
  CocoChainId = 'cocoChain__id',
  CocoChainMetadata = 'cocoChain__metadata',
  Event = 'event',
  EventCount = 'eventCount',
  Farmer = 'farmer',
  FarmerActive = 'farmer__active',
  FarmerId = 'farmer__id',
  FarmerMetadata = 'farmer__metadata',
  FarmerWalletAddress = 'farmer__walletAddress',
  Harvest = 'harvest',
  HarvestCount = 'harvestCount',
  Id = 'id',
  TokenId = 'tokenId'
}

export type AnalysisDaily = {
  __typename?: 'AnalysisDaily';
  date: Scalars['BigInt']['output'];
  event: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
};

export type AnalysisDaily_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AnalysisDaily_Filter>>>;
  date?: InputMaybe<Scalars['BigInt']['input']>;
  date_gt?: InputMaybe<Scalars['BigInt']['input']>;
  date_gte?: InputMaybe<Scalars['BigInt']['input']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  date_lt?: InputMaybe<Scalars['BigInt']['input']>;
  date_lte?: InputMaybe<Scalars['BigInt']['input']>;
  date_not?: InputMaybe<Scalars['BigInt']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  event?: InputMaybe<Scalars['BigInt']['input']>;
  event_gt?: InputMaybe<Scalars['BigInt']['input']>;
  event_gte?: InputMaybe<Scalars['BigInt']['input']>;
  event_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  event_lt?: InputMaybe<Scalars['BigInt']['input']>;
  event_lte?: InputMaybe<Scalars['BigInt']['input']>;
  event_not?: InputMaybe<Scalars['BigInt']['input']>;
  event_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AnalysisDaily_Filter>>>;
};

export enum AnalysisDaily_OrderBy {
  Date = 'date',
  Event = 'event',
  Id = 'id'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type CoCoChainProduct = {
  __typename?: 'CoCoChainProduct';
  active: Scalars['Boolean']['output'];
  cocoChainId: Scalars['BigInt']['output'];
  farmers: Array<Farmer>;
  id: Scalars['Bytes']['output'];
  metadata: Scalars['String']['output'];
};


export type CoCoChainProductFarmersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Farmer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Farmer_Filter>;
};

export type CoCoChainProduct_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CoCoChainProduct_Filter>>>;
  cocoChainId?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cocoChainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  farmers?: InputMaybe<Array<Scalars['String']['input']>>;
  farmers_?: InputMaybe<Farmer_Filter>;
  farmers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  farmers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  farmers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  farmers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  farmers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<CoCoChainProduct_Filter>>>;
};

export enum CoCoChainProduct_OrderBy {
  Active = 'active',
  CocoChainId = 'cocoChainId',
  Farmers = 'farmers',
  Id = 'id',
  Metadata = 'metadata'
}

export type Count = {
  __typename?: 'Count';
  farmerAmount: Scalars['BigInt']['output'];
  harvestTotal: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
};

export type Count_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Count_Filter>>>;
  farmerAmount?: InputMaybe<Scalars['BigInt']['input']>;
  farmerAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  farmerAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  farmerAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  farmerAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  farmerAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  farmerAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  farmerAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  harvestTotal?: InputMaybe<Scalars['BigInt']['input']>;
  harvestTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  harvestTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  harvestTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  harvestTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  harvestTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  harvestTotal_not?: InputMaybe<Scalars['BigInt']['input']>;
  harvestTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Count_Filter>>>;
};

export enum Count_OrderBy {
  FarmerAmount = 'farmerAmount',
  HarvestTotal = 'harvestTotal',
  Id = 'id'
}

export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['BigInt']['output'];
  eventType: EventType;
  id: Scalars['Bytes']['output'];
  metadata: Scalars['String']['output'];
  performer: Scalars['Bytes']['output'];
  product: AgriculturalProduct;
};

export enum EventType {
  Delivery = 'DELIVERY',
  Fertilizer = 'FERTILIZER',
  Harvest = 'HARVEST',
  Plant = 'PLANT',
  Spray = 'SPRAY',
  Water = 'WATER'
}

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventType?: InputMaybe<EventType>;
  eventType_in?: InputMaybe<Array<EventType>>;
  eventType_not?: InputMaybe<EventType>;
  eventType_not_in?: InputMaybe<Array<EventType>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  performer?: InputMaybe<Scalars['Bytes']['input']>;
  performer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  performer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  performer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  performer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  performer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  performer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  product?: InputMaybe<Scalars['String']['input']>;
  product_?: InputMaybe<AgriculturalProduct_Filter>;
  product_contains?: InputMaybe<Scalars['String']['input']>;
  product_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  product_ends_with?: InputMaybe<Scalars['String']['input']>;
  product_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_gt?: InputMaybe<Scalars['String']['input']>;
  product_gte?: InputMaybe<Scalars['String']['input']>;
  product_in?: InputMaybe<Array<Scalars['String']['input']>>;
  product_lt?: InputMaybe<Scalars['String']['input']>;
  product_lte?: InputMaybe<Scalars['String']['input']>;
  product_not?: InputMaybe<Scalars['String']['input']>;
  product_not_contains?: InputMaybe<Scalars['String']['input']>;
  product_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  product_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  product_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  product_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  product_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_starts_with?: InputMaybe<Scalars['String']['input']>;
  product_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Event_OrderBy {
  CreatedAt = 'createdAt',
  EventType = 'eventType',
  Id = 'id',
  Metadata = 'metadata',
  Performer = 'performer',
  Product = 'product',
  ProductEventCount = 'product__eventCount',
  ProductHarvestCount = 'product__harvestCount',
  ProductId = 'product__id',
  ProductTokenId = 'product__tokenId'
}

export type Farmer = {
  __typename?: 'Farmer';
  active: Scalars['Boolean']['output'];
  id: Scalars['Bytes']['output'];
  metadata: Scalars['String']['output'];
  product: CoCoChainProduct;
  walletAddress: Scalars['Bytes']['output'];
};

export type Farmer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Farmer_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Farmer_Filter>>>;
  product?: InputMaybe<Scalars['String']['input']>;
  product_?: InputMaybe<CoCoChainProduct_Filter>;
  product_contains?: InputMaybe<Scalars['String']['input']>;
  product_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  product_ends_with?: InputMaybe<Scalars['String']['input']>;
  product_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_gt?: InputMaybe<Scalars['String']['input']>;
  product_gte?: InputMaybe<Scalars['String']['input']>;
  product_in?: InputMaybe<Array<Scalars['String']['input']>>;
  product_lt?: InputMaybe<Scalars['String']['input']>;
  product_lte?: InputMaybe<Scalars['String']['input']>;
  product_not?: InputMaybe<Scalars['String']['input']>;
  product_not_contains?: InputMaybe<Scalars['String']['input']>;
  product_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  product_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  product_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  product_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  product_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_starts_with?: InputMaybe<Scalars['String']['input']>;
  product_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  walletAddress?: InputMaybe<Scalars['Bytes']['input']>;
  walletAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  walletAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  walletAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  walletAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  walletAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  walletAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  walletAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  walletAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  walletAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Farmer_OrderBy {
  Active = 'active',
  Id = 'id',
  Metadata = 'metadata',
  Product = 'product',
  ProductActive = 'product__active',
  ProductCocoChainId = 'product__cocoChainId',
  ProductId = 'product__id',
  ProductMetadata = 'product__metadata',
  WalletAddress = 'walletAddress'
}

export type HarvestEvent = {
  __typename?: 'HarvestEvent';
  createdAt: Scalars['BigInt']['output'];
  delivered: Scalars['Boolean']['output'];
  eventType: EventType;
  id: Scalars['Bytes']['output'];
  metadata: Scalars['String']['output'];
  performer: Scalars['Bytes']['output'];
  product: AgriculturalProduct;
};

export type HarvestEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HarvestEvent_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delivered?: InputMaybe<Scalars['Boolean']['input']>;
  delivered_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  delivered_not?: InputMaybe<Scalars['Boolean']['input']>;
  delivered_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eventType?: InputMaybe<EventType>;
  eventType_in?: InputMaybe<Array<EventType>>;
  eventType_not?: InputMaybe<EventType>;
  eventType_not_in?: InputMaybe<Array<EventType>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<HarvestEvent_Filter>>>;
  performer?: InputMaybe<Scalars['Bytes']['input']>;
  performer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  performer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  performer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  performer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  performer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  performer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  performer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  product?: InputMaybe<Scalars['String']['input']>;
  product_?: InputMaybe<AgriculturalProduct_Filter>;
  product_contains?: InputMaybe<Scalars['String']['input']>;
  product_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  product_ends_with?: InputMaybe<Scalars['String']['input']>;
  product_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_gt?: InputMaybe<Scalars['String']['input']>;
  product_gte?: InputMaybe<Scalars['String']['input']>;
  product_in?: InputMaybe<Array<Scalars['String']['input']>>;
  product_lt?: InputMaybe<Scalars['String']['input']>;
  product_lte?: InputMaybe<Scalars['String']['input']>;
  product_not?: InputMaybe<Scalars['String']['input']>;
  product_not_contains?: InputMaybe<Scalars['String']['input']>;
  product_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  product_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  product_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  product_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  product_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  product_starts_with?: InputMaybe<Scalars['String']['input']>;
  product_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum HarvestEvent_OrderBy {
  CreatedAt = 'createdAt',
  Delivered = 'delivered',
  EventType = 'eventType',
  Id = 'id',
  Metadata = 'metadata',
  Performer = 'performer',
  Product = 'product',
  ProductEventCount = 'product__eventCount',
  ProductHarvestCount = 'product__harvestCount',
  ProductId = 'product__id',
  ProductTokenId = 'product__tokenId'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  agriculturalProduct?: Maybe<AgriculturalProduct>;
  agriculturalProducts: Array<AgriculturalProduct>;
  analysisDailies: Array<AnalysisDaily>;
  analysisDaily?: Maybe<AnalysisDaily>;
  coCoChainProduct?: Maybe<CoCoChainProduct>;
  coCoChainProducts: Array<CoCoChainProduct>;
  count?: Maybe<Count>;
  counts: Array<Count>;
  event?: Maybe<Event>;
  events: Array<Event>;
  farmer?: Maybe<Farmer>;
  farmers: Array<Farmer>;
  harvestEvent?: Maybe<HarvestEvent>;
  harvestEvents: Array<HarvestEvent>;
  request?: Maybe<Request>;
  requests: Array<Request>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAgriculturalProductArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAgriculturalProductsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgriculturalProduct_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgriculturalProduct_Filter>;
};


export type QueryAnalysisDailiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AnalysisDaily_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AnalysisDaily_Filter>;
};


export type QueryAnalysisDailyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCoCoChainProductArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCoCoChainProductsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CoCoChainProduct_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CoCoChainProduct_Filter>;
};


export type QueryCountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Count_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Count_Filter>;
};


export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type QueryFarmerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFarmersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Farmer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Farmer_Filter>;
};


export type QueryHarvestEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryHarvestEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HarvestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HarvestEvent_Filter>;
};


export type QueryRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Request_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Request_Filter>;
};

export type Request = {
  __typename?: 'Request';
  accepted: Scalars['Boolean']['output'];
  cocoChainId: Scalars['BigInt']['output'];
  farmer: Farmer;
  id: Scalars['Bytes']['output'];
};

export type Request_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  accepted_not?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Request_Filter>>>;
  cocoChainId?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cocoChainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  cocoChainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  farmer?: InputMaybe<Scalars['String']['input']>;
  farmer_?: InputMaybe<Farmer_Filter>;
  farmer_contains?: InputMaybe<Scalars['String']['input']>;
  farmer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_ends_with?: InputMaybe<Scalars['String']['input']>;
  farmer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_gt?: InputMaybe<Scalars['String']['input']>;
  farmer_gte?: InputMaybe<Scalars['String']['input']>;
  farmer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  farmer_lt?: InputMaybe<Scalars['String']['input']>;
  farmer_lte?: InputMaybe<Scalars['String']['input']>;
  farmer_not?: InputMaybe<Scalars['String']['input']>;
  farmer_not_contains?: InputMaybe<Scalars['String']['input']>;
  farmer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  farmer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  farmer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  farmer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  farmer_starts_with?: InputMaybe<Scalars['String']['input']>;
  farmer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Request_Filter>>>;
};

export enum Request_OrderBy {
  Accepted = 'accepted',
  CocoChainId = 'cocoChainId',
  Farmer = 'farmer',
  FarmerActive = 'farmer__active',
  FarmerId = 'farmer__id',
  FarmerMetadata = 'farmer__metadata',
  FarmerWalletAddress = 'farmer__walletAddress',
  Id = 'id'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  agriculturalProduct?: Maybe<AgriculturalProduct>;
  agriculturalProducts: Array<AgriculturalProduct>;
  analysisDailies: Array<AnalysisDaily>;
  analysisDaily?: Maybe<AnalysisDaily>;
  coCoChainProduct?: Maybe<CoCoChainProduct>;
  coCoChainProducts: Array<CoCoChainProduct>;
  count?: Maybe<Count>;
  counts: Array<Count>;
  event?: Maybe<Event>;
  events: Array<Event>;
  farmer?: Maybe<Farmer>;
  farmers: Array<Farmer>;
  harvestEvent?: Maybe<HarvestEvent>;
  harvestEvents: Array<HarvestEvent>;
  request?: Maybe<Request>;
  requests: Array<Request>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAgriculturalProductArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAgriculturalProductsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AgriculturalProduct_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AgriculturalProduct_Filter>;
};


export type SubscriptionAnalysisDailiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AnalysisDaily_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AnalysisDaily_Filter>;
};


export type SubscriptionAnalysisDailyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCoCoChainProductArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCoCoChainProductsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CoCoChainProduct_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CoCoChainProduct_Filter>;
};


export type SubscriptionCountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Count_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Count_Filter>;
};


export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type SubscriptionFarmerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFarmersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Farmer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Farmer_Filter>;
};


export type SubscriptionHarvestEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionHarvestEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HarvestEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HarvestEvent_Filter>;
};


export type SubscriptionRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Request_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Request_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
