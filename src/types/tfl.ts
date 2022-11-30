export type TAdditionalProperty = {
  key: string;
  value: string;
};

export type TLine = {
  name: string;
};

export type TLineGroup = {
  lineIdentifier: string[];
  naptanIdReference: string;
};

export type TPredictionRaw = {
  destinationName: string;
  expectedArrival: string;
  lineId: string;
  lineName: string;
  towards: string;
  vehicleId: string;
};

export type TStopPointPairChild = {
  additionalProperties: TAdditionalProperty[];
  children: TStopPointPairChild[];
  commonName: string;
  id: string;
  lines: TLine[];
  modes: string[];
  stopLetter: string;
};

export type TStopPointPair = {
  children: TStopPointPairChild[];
  commonName: string;
  httpStatusCode?: number;
  id: string;
  lineGroup: TLineGroup[];
  smsCode: string;
  stopType: string;
};
