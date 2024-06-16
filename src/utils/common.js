import moment from "moment";
import vi from "moment/locale/vi";
import { unwrapResult } from "@reduxjs/toolkit";

// Convert To Number
const convertToNumber = (number) => {
  return number || 0;
};

// Number formatting
const formatNumber = (num) => {
  const regex = /(\d)(?=(\d{3})+(?!\d))/g;

  const number = convertToNumber(num);

  return number.toString().replace(regex, "$1,");
};

const formatTypeNumber = (number) => {
  return number ? (number % 1 === 0 ? number : number.toFixed(2)) : 0;
};

// Convert Currency
const convertCurrency = (currency) => {
  const currencyUnit = "Đ";

  return `${formatNumber(currency)} ${currencyUnit}`;
};

// Format Number Less Than 10
const formatNumberLessThanTen = (number) => {
  return number ? (number < 10 ? "0" + number : number) : 0;
};

// Convert Date
const convertDate = (date) => {
  const time = date.toLocaleString().split(",")[0].split("/");
  const day = time[1];
  const month = time[0];
  const year = time[2];
  return (
    formatNumberLessThanTen(day) +
    "/" +
    formatNumberLessThanTen(month) +
    "/" +
    year
  );
};

// Convert Time
const convertTime = (time) => {
  const currentTime = moment(time)
    .locale("vi", vi)
    .format("DD/MM/YYYY hh:mm A");

  return currentTime;
};

// Get timestamps
const getTimestamps = (date) => {
  const timestamps = new Date(date).getTime();

  return timestamps;
};

//Get Current Time
const getCurrentTime = () => {
  const currentTime = new Date();

  return currentTime;
};

const getCurrentDate = () => {
  return getCurrentTime().getDate();
};

const getCurrentMonth = () => {
  return getCurrentTime().getMonth() + 1;
};

const getCurrentYear = () => {
  return getCurrentTime().getFullYear();
};

// Sort List By Date
const sortListByDate = (list, setList) => {
  const sortedList = [...list].sort(
    (a, b) => getTimestamps(b.date) - getTimestamps(a.date)
  );

  setList(sortedList);
};

// Sort List By Index
const sortListByIndex = (list, setList) => {
  const newList = [...list].map((item, index) => ({
    ...item,
    index,
  }));

  const sortedList = newList.sort((a, b) => b.index - a.index);

  setList(sortedList);
};

// Fetch API
const fetchApi = async (api, dispatch) => {
  try {
    const action = api;
    const actionResult = await dispatch(action);
    const result = unwrapResult(actionResult);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

// Upload file
const handleFile = (value, setValue, setImgFiles) => {
  const files = value.target.files;
  setImgFiles(files);

  const currentFiles = [...files].map(
    (file) => (file.fileOpened = URL.createObjectURL(file))
  );

  setValue(currentFiles);
};

// White Space
const hasWhiteSpace = (s) => {
  return /\s/g.test(s);
};

// Get Id From Path Name
const getIdFromPathName = () => {
  const pathNameArray = window.location.pathname.split("/");
  const id = pathNameArray[pathNameArray.length - 1];
  return id;
};

// Check Null Or Undefined Field Of Table
const isNullField = (value) => {
  return value ? value : "-";
};

// Get Local Admin
const getLocalAdmin = () => {
  const localAdmin = JSON.parse(sessionStorage.getItem("admin"));

  return localAdmin;
};

// Format Options For Selection Component
const formatOptionSelection = (list) => {
  return list.map((item, index) => ({ ...item, label: item.name, index }));
};

// Set Document Title
const setDocumentTitle = (title) => {
  return (document.title = `${title} | Asisell`);
};

export {
  convertToNumber,
  formatNumber,
  formatTypeNumber,
  convertCurrency,
  convertDate,
  convertTime,
  getTimestamps,
  getCurrentTime,
  getCurrentDate,
  getCurrentMonth,
  getCurrentYear,
  sortListByDate,
  sortListByIndex,
  fetchApi,
  handleFile,
  hasWhiteSpace,
  getIdFromPathName,
  isNullField,
  formatNumberLessThanTen,
  getLocalAdmin,
  formatOptionSelection,
  setDocumentTitle,
};
