export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const user_logo =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const profile = "https://avatars.githubusercontent.com/u/83492386?v=4";
export const LOGINBG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg";

export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const YOUTUBE_URL = "https://www.youtube.com/watch?v=";

export const IMG_CDN = "https://image.tmdb.org/t/p/w200";

export const SLANG = [
  { identifier: "en", name: "Eng" },
  { identifier: "zh", name: "Chi" },
  { identifier: "hi", name: "Hin" },
  { identifier: "es", name: "Spa" },
  { identifier: "fr", name: "Fr" },
  { identifier: "ar", name: "Arab" },
  { identifier: "bn", name: "Beng" },
  { identifier: "ru", name: "Rus" },
  { identifier: "pt", name: "Por" },
  { identifier: "ur", name: "Urdu" },
  { identifier: "ja", name: "Jap" },
  { identifier: "de", name: "Ger" },
  { identifier: "ko", name: "Kor" },
  { identifier: "vi", name: "Viet" },
  { identifier: "it", name: "Ita" },
  { identifier: "ta", name: "Ta" },
  { identifier: "te", name: "Te" },
  { identifier: "tr", name: "Tur" },
  { identifier: "fa", name: "Per" },
  { identifier: "pl", name: "Po" },
  { identifier: "nl", name: "Du" },
];

export const OPENAPI_KEY = process.env.REACT_APP_OPENAPI_KEY