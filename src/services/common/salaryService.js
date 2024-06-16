import httpRequest from "~/utils/httpRequest";

const pathName = "employee-salaries/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalSalaries = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-salaries`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalBonus = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-bonuses`, {});
    return res.data;
  } catch (err) {}
};

export const getYearlySalaries = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/yearly-salaries/`, {
      params: {
        year: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getDetailYearlyEmployeeSalaries = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/employee-monthly-salary/`, {
      params: {
        employee_id: params.id,
        year: params.year,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addSalary = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p/`, data.body, {
      params: {
        employee_id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};
