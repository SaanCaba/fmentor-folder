export interface SuccessShortened {
  ok: boolean;
  result: Result;
}

export interface Result {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  short_link3: string;
  full_short_link3: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export interface ErrorTypes {
    ok: boolean
    error_code: number
    error: string
  }
