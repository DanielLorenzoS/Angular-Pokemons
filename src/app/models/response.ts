export interface Response {
  count:    number;
  next:     string;
  previous: null;
  results:  ReqUser[];
}

export interface ReqUser {
  name: string;
  url:  string;
}
