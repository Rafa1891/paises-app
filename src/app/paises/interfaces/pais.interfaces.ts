export interface Countries {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag?:        string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  UYU?: Aed;
  PYG?: Aed;
  GMD?: Aed;
  DJF?: Aed;
  GEL?: Aed;
  USD?: Aed;
  MUR?: Aed;
  LBP?: Aed;
  SAR?: Aed;
  BRL?: Aed;
  UGX?: Aed;
  QAR?: Aed;
  CLP?: Aed;
  LRD?: Aed;
  AUD?: Aed;
  TWD?: Aed;
  EUR?: Aed;
  ARS?: Aed;
  XOF?: Aed;
  DKK?: Aed;
  FOK?: Aed;
  MAD?: Aed;
  XCD?: Aed;
  MRU?: Aed;
  UAH?: Aed;
  CNY?: Aed;
  LSL?: Aed;
  ZAR?: Aed;
  CDF?: Aed;
  RUB?: Aed;
  BDT?: Aed;
  ANG?: Aed;
  ILS?: Aed;
  GYD?: Aed;
  HRK?: Aed;
  ISK?: Aed;
  NAD?: Aed;
  OMR?: Aed;
  KWD?: Aed;
  GBP?: Aed;
  HNL?: Aed;
  SHP?: Aed;
  KHR?: Aed;
  MKD?: Aed;
  IRR?: Aed;
  PAB?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  BIF?: Aed;
  TTD?: Aed;
  KMF?: Aed;
  NGN?: Aed;
  PLN?: Aed;
  ETB?: Aed;
  AZN?: Aed;
  NPR?: Aed;
  JEP?: Aed;
  INR?: Aed;
  KGS?: Aed;
  IQD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  BTN?: Aed;
  BSD?: Aed;
  NOK?: Aed;
  KES?: Aed;
  SEK?: Aed;
  XAF?: Aed;
  MOP?: Aed;
  GGP?: Aed;
  RWF?: Aed;
  SYP?: Aed;
  CAD?: Aed;
  DZD?: Aed;
  IMP?: Aed;
  BWP?: Aed;
  KZT?: Aed;
  VES?: Aed;
  XPF?: Aed;
  SDG?: BAM;
  AFN?: Aed;
  RSD?: Aed;
  TJS?: Aed;
  KID?: Aed;
  ERN?: Aed;
  HTG?: Aed;
  VUV?: Aed;
  BAM?: BAM;
  WST?: Aed;
  BOB?: Aed;
  MGA?: Aed;
  STN?: Aed;
  BHD?: Aed;
  PEN?: Aed;
  SRD?: Aed;
  THB?: Aed;
  KPW?: Aed;
  YER?: Aed;
  AMD?: Aed;
  PKR?: Aed;
  MWK?: Aed;
  PHP?: Aed;
  CZK?: Aed;
  MMK?: Aed;
  RON?: Aed;
  EGP?: Aed;
  MZN?: Aed;
  AED?: Aed;
  ALL?: Aed;
  FJD?: Aed;
  MDL?: Aed;
  BYN?: Aed;
  LKR?: Aed;
  BMD?: Aed;
  NIO?: Aed;
  SOS?: Aed;
  JOD?: Aed;
  CRC?: Aed;
  VND?: Aed;
  SZL?: Aed;
  ZMW?: Aed;
  CHF?: Aed;
  UZS?: Aed;
  AWG?: Aed;
  CVE?: Aed;
  BGN?: Aed;
  LAK?: Aed;
  KRW?: Aed;
  TND?: Aed;
  ZWL?: Aed;
  MVR?: Aed;
  SGD?: Aed;
  AOA?: Aed;
  GNF?: Aed;
  LYD?: Aed;
  IDR?: Aed;
  BND?: Aed;
  MXN?: Aed;
  SLL?: Aed;
  COP?: Aed;
  PGK?: Aed;
  FKP?: Aed;
  TZS?: Aed;
}

export interface Aed {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
