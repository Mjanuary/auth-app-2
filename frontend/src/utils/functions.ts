export const search = (objList: any, text: string, keys: any = null) => {
  if (undefined === text || text === "") return objList;
  return objList.filter((product: any) => {
    let flag;
    let dataKeys = keys === null ? product : keys;
    for (let prop in dataKeys) {
      flag = false;
      if (product[prop] === null || product[prop] === undefined) continue;
      flag =
        product[prop].toString().toLowerCase().indexOf(text.toLowerCase()) > -1;
      if (flag) break;
    }
    return flag;
  });
};

export const DATE = (
  data: string | Date | null,
  format: "DD/MM/YYYY" | "YYYY/MM/DD" | "MM/DD/YYYY" = "DD/MM/YYYY"
): string => {
  if (data === null) return "";
  const date = new Date(data);
  if (format === "YYYY/MM/DD") {
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      date.getDate()
    );
  } else if (format === "MM/DD/YYYY") {
    return (
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear()
    );
  } else {
    return (
      date.getDate() +
      "/" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear()
    );
  }
};

export const isFileImage = (file: string): boolean => {
  const imageExtensions: string[] = [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "tiff",
    "bmp",
    "gif",
  ];
  return imageExtensions.includes(file.toLowerCase());
};

export const isToday = (someDate: string) => {
  const today = new Date();
  const someDateFormated = new Date(someDate);
  return (
    someDateFormated.getDate() === today.getDate() &&
    someDateFormated.getMonth() === today.getMonth() &&
    someDateFormated.getFullYear() === today.getFullYear()
  );
};

export const validateTwoTime = (start_time: string, end_time: string) => {
  let res: boolean = false;
  let startTime: string[] = start_time.split(":");
  let endTime: string[] = end_time.split(":");
  if (startTime.length === 2 && endTime.length === 2) {
    if (parseInt(startTime[0]) < parseInt(endTime[0])) {
      res = true;
    } else if (parseInt(startTime[0]) === parseInt(endTime[0])) {
      if (parseInt(startTime[1]) < parseInt(endTime[1])) {
        res = true;
      }
    }
  }
  return res;
};

export function shortString(text: string, length: number = 20) {
  if (text?.length > length) {
    return text.substring(0, length - 2) + "...";
  } else {
    return text;
  }
}

export function arrayNumSum(numberList: number[]): number {
  return numberList.reduce((howMuchSoFar, currentElementOfTheArray) => {
    howMuchSoFar = howMuchSoFar + currentElementOfTheArray;
    return howMuchSoFar;
  });
}

export const MONTHS_LIST = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// pnayituriki
export const capitalizeFirstLetter = (value: string): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const sortCompare = (property: string, sortOrder: 1 | -1) => {
  return function (a: any, b: any) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

export const sortThisArray = (
  TYPE: boolean,
  data: any[],
  property: string,
  sortOrder: "ASC" | "DESC" = "ASC"
): any[] => {
  if (TYPE && property.length > 0) {
    let _sortOrder: 1 | -1 = sortOrder === "ASC" ? 1 : -1;
    return data.sort(sortCompare(property, _sortOrder));
  }
  return data;
};

export const isEmptyOrSpaces = (str: string): boolean => {
  return str === null || str.match(/^ *$/) !== null;
};

export const toAnyDigit = (
  value: string | number,
  padding: number = 3
): string => {
  var zeroes = new Array(padding + 1).join("0");
  return (zeroes + value).slice(-padding);
};
