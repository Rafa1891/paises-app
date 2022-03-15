export interface Capitals {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages:    { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag?:        string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  cioc?:        string;
  borders?:     string[];
  gini?:        { [key: string]: number };
  fifa?:        string;
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
  XPF?: Aed;
  EUR?: Aed;
  PYG?: Aed;
  SBD?: Aed;
  GMD?: Aed;
  USD?: Aed;
  AFN?: Aed;
  RSD?: Aed;
  TJS?: Aed;
  TOP?: Aed;
  AUD?: Aed;
  KID?: Aed;
  ERN?: Aed;
  XOF?: Aed;
  HTG?: Aed;
  VUV?: Aed;
  BAM?: BAM;
  NOK?: Aed;
  WST?: Aed;
  MGA?: Aed;
  STN?: Aed;
  BZD?: Aed;
  BHD?: Aed;
  SAR?: Aed;
  PEN?: Aed;
  BRL?: Aed;
  UGX?: Aed;
  QAR?: Aed;
  SRD?: Aed;
  MNT?: Aed;
  CLP?: Aed;
  THB?: Aed;
  TVD?: Aed;
  LRD?: Aed;
  KPW?: Aed;
  YER?: Aed;
  AMD?: Aed;
  TWD?: Aed;
  PKR?: Aed;
  NZD?: Aed;
  ARS?: Aed;
  PHP?: Aed;
  DKK?: Aed;
  FOK?: Aed;
  CZK?: Aed;
  MMK?: Aed;
  MAD?: Aed;
  XCD?: Aed;
  RON?: Aed;
  DOP?: Aed;
  XAF?: Aed;
  MRU?: Aed;
  GHS?: Aed;
  TRY?: Aed;
  EGP?: Aed;
  MZN?: Aed;
  LSL?: Aed;
  ZAR?: Aed;
  CDF?: Aed;
  HUF?: Aed;
  AED?: Aed;
  BDT?: Aed;
  ALL?: Aed;
  FJD?: Aed;
  ANG?: Aed;
  GTQ?: Aed;
  MDL?: Aed;
  ILS?: Aed;
  HRK?: Aed;
  ISK?: Aed;
  LKR?: Aed;
  BMD?: Aed;
  NIO?: Aed;
  SOS?: Aed;
  GIP?: Aed;
  JOD?: Aed;
  OMR?: Aed;
  KWD?: Aed;
  TMT?: Aed;
  CRC?: Aed;
  VND?: Aed;
  SZL?: Aed;
  ZMW?: Aed;
  HNL?: Aed;
  SHP?: Aed;
  CHF?: Aed;
  UZS?: Aed;
  AWG?: Aed;
  IRR?: Aed;
  PAB?: Aed;
  CKD?: Aed;
  CVE?: Aed;
  BIF?: Aed;
  TTD?: Aed;
  HKD?: Aed;
  BGN?: Aed;
  LAK?: Aed;
  NGN?: Aed;
  PLN?: Aed;
  ETB?: Aed;
  ZWL?: Aed;
  AZN?: Aed;
  MVR?: Aed;
  SGD?: Aed;
  NPR?: Aed;
  AOA?: Aed;
  MYR?: Aed;
  GBP?: Aed;
  JEP?: Aed;
  SSP?: Aed;
  GNF?: Aed;
  IQD?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  IDR?: Aed;
  SCR?: Aed;
  BND?: Aed;
  BSD?: Aed;
  KES?: Aed;
  COP?: Aed;
  FKP?: Aed;
  RWF?: Aed;
  SYP?: Aed;
  CAD?: Aed;
  DZD?: Aed;
  IMP?: Aed;
  BWP?: Aed;
  KZT?: Aed;
  VES?: Aed;
  TZS?: Aed;
  SDG?: BAM;
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
  root:     string;
  suffixes: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
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
  UserAssigned = "user-assigned",
}
